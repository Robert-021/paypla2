
$outDir = "c:\xampp\htdocs\payivanplay\out"

# Obtener todos los archivos HTML recursivamente
$htmlFiles = Get-ChildItem -Path $outDir -Filter *.html -Recurse

Write-Host "=== Corrigiendo rutas en archivos HTML (V4.2 - Final) ===" -ForegroundColor Cyan

foreach ($file in $htmlFiles) {
    # Calcular profundidad relativa
    $fullPath = $file.FullName
    $relPath = $fullPath.Substring($outDir.Length).TrimStart("\")
    $slashes = ($relPath.ToCharArray() | Where-Object { $_ -eq "\" }).Count
    
    $rel = ""
    if ($slashes -eq 0) {
        $rel = "./"
    } else {
        for ($i = 0; $i -lt $slashes; $i++) { $rel += "../" }
    }

    $content = [System.IO.File]::ReadAllText($fullPath, [System.Text.Encoding]::UTF8)

    # 1. Reemplazar rutas de activos (_next, image)
    $content = $content.Replace('href="/_next/', ('href="' + $rel + '_next/'))
    $content = $content.Replace('src="/_next/', ('src="' + $rel + '_next/'))
    $content = $content.Replace('src="/image/', ('src="' + $rel + 'image/'))
    $content = $content.Replace('href="/image/', ('href="' + $rel + 'image/'))
    
    # 2. Reemplazar links internos (Remover trailing slashes para URLs limpias)
    $content = $content.Replace('href="/"', ('href="' + $rel + '"'))
    
    # Reemplazo dinámico de links de página
    $content = [regex]::Replace($content, 'href="/([a-zA-Z0-9\-/]+)/?"', { 
        param($m) 
        $page = $m.Groups[1].Value.TrimEnd("/")
        return 'href="' + $rel + $page + '"'
    })

    [System.IO.File]::WriteAllText($fullPath, $content, [System.Text.Encoding]::UTF8)
    Write-Host "OK: $relPath [Depth: $slashes, Rel: $rel]" -ForegroundColor Green
}

Write-Host ""
Write-Host "=== Generando .htaccess ULTRA ROBUSTO (Final) ===" -ForegroundColor Yellow
$htaccessContent = @"
RewriteEngine On
RewriteBase /

# 1. SI SE ACCEDE CON SLASH FINAL (ej: /nosotros/ o /servicios/mdm/)
# Y la carpeta existe pero no tiene index.html real:
# REDIRIGIR a la versión sin slash para evitar el error 403 Forbidden
RewriteCond %{REQUEST_FILENAME} -d
RewriteCond %{REQUEST_FILENAME}/index.html !-f
RewriteRule ^(.*)/$ /`$1 [L,R=301]

# 2. REDIRIGIR de /pagina.html a /pagina (URLs limpias para el usuario)
RewriteCond %{THE_REQUEST} /([^.]+)\.html [NC]
RewriteRule ^ /%1 [L,R=301]

# 3. SI EL ARCHIVO .HTML EXISTE, SERVIRLO INTERNAMENTE
# Esto permite que /nosotros sirva nosotros.html
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME}.html -f
RewriteRule ^(.*)$ `$1.html [L]

# 4. Manejo de errores 404
ErrorDocument 404 /404.html
"@
[System.IO.File]::WriteAllText("$outDir\.htaccess", $htaccessContent, [System.Text.Encoding]::UTF8)

Write-Host "=== Creando ZIP Final 4: PAYPLAY_HOSTINGER_V4.zip ===" -ForegroundColor Cyan
$zipPath = "c:\xampp\htdocs\payivanplay\PAYPLAY_HOSTINGER_V4.zip"
if (Test-Path $zipPath) { Remove-Item $zipPath -Force }
Compress-Archive -Path "$outDir\*" -DestinationPath $zipPath -Force

Write-Host "¡TODO LISTO! La carpeta 'out' es ahora PERFECTA para Hostinger." -ForegroundColor Green
