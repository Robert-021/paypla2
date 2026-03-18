
$outDir = "c:\xampp\htdocs\payivanplay\out"

$files = @(
    @{ Path = "$outDir\index.html"; Depth = 0 },
    @{ Path = "$outDir\nosotros.html"; Depth = 0 },
    @{ Path = "$outDir\servicios.html"; Depth = 0 },
    @{ Path = "$outDir\404.html"; Depth = 0 },
    @{ Path = "$outDir\_not-found.html"; Depth = 0 },
    @{ Path = "$outDir\servicios\kyc.html"; Depth = 1 },
    @{ Path = "$outDir\servicios\mdm.html"; Depth = 1 },
    @{ Path = "$outDir\servicios\plataformas.html"; Depth = 1 },
    @{ Path = "$outDir\servicios\riesgo.html"; Depth = 1 }
)

Write-Host "=== Corrigiendo rutas en archivos HTML ===" -ForegroundColor Cyan

foreach ($file in $files) {
    $filePath = $file.Path
    $depth = $file.Depth

    if (-not (Test-Path $filePath)) {
        Write-Host "OMITIDO: $filePath" -ForegroundColor Yellow
        continue
    }

    if ($depth -eq 0) {
        $rel = "./"
        $homeRel = "./"
    } else {
        $rel = "../"
        $homeRel = "../"
    }

    $content = [System.IO.File]::ReadAllText($filePath, [System.Text.Encoding]::UTF8)

    # Reemplazar con slash final primero (assets: _next, image, etc)
    $content = $content.Replace("/payplay2/payplay/", $rel)

    # Reemplazar el link al home (sin slash final) en href="..."
    $content = $content.Replace('href="/payplay2/payplay"', ('href="' + $homeRel + '"'))

    # Reemplazar en JSON embebido (con escape de slash)
    $content = $content.Replace("\/payplay2\/payplay\/", $rel)
    $content = $content.Replace("\/payplay2\/payplay`"", ($homeRel + '"'))

    [System.IO.File]::WriteAllText($filePath, $content, [System.Text.Encoding]::UTF8)

    Write-Host "OK: $($filePath.Replace($outDir, '')) [rel='$rel']" -ForegroundColor Green
}

Write-Host ""
Write-Host "=== Verificacion ===" -ForegroundColor Yellow

foreach ($file in $files) {
    if (Test-Path $file.Path) {
        $c = [System.IO.File]::ReadAllText($file.Path, [System.Text.Encoding]::UTF8)
        $count = ($c.Split("/payplay2").Length - 1)
        $color = if ($count -eq 0) { "Green" } else { "Red" }
        Write-Host "$($file.Path.Replace($outDir,'')) - rutas antiguas restantes: $count" -ForegroundColor $color
    }
}

Write-Host ""
Write-Host "=== Creando ZIP para Hostinger ===" -ForegroundColor Cyan

$zipPath = "c:\xampp\htdocs\payivanplay\HOSTINGER_LISTO.zip"
if (Test-Path $zipPath) { Remove-Item $zipPath -Force }

Compress-Archive -Path "$outDir\*" -DestinationPath $zipPath -Force

$sizeMB = [math]::Round((Get-Item $zipPath).Length / 1MB, 2)
Write-Host "ZIP creado: $zipPath ($sizeMB MB)" -ForegroundColor Green
Write-Host "Listo! Sube HOSTINGER_LISTO.zip y descomprime en public_html/" -ForegroundColor Cyan
