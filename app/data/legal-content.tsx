export type LegalSection = {
  title: string;
  paragraphs: string[];
  subitems?: string[];
  afterListText?: string;
};

export const termsSections: LegalSection[] = [
  {
    title: "I. Identificación de las partes",
    paragraphs: [
      "PAY&PLAY SOCIEDAD POR ACCIONES SIMPLIFICADAS., con RUC Nro. 1793204652001, en su calidad de Responsable del Tratamiento de Datos Personales, cuyos datos de contacto son el correo electrónico: administracion@payplay-ec.com, teléfono 0961141882 domiciliada en: Avenida Amazonas y Naciones Unidas, Edificio Unicornio Empresarial II, piso 15avo, Quito, Ecuador. Que, para efectos del presente instrumento, se denominará como PAY&PLAY o LA EMPRESA. Establece los presentes Términos y Condiciones, los cuales regulan la relación contractual con los clientes que adquieren dispositivos (teléfonos, televisores, electrodomésticos u otros equipos) mediante pagos periódicos.",
      "Dicho tratamiento se efectuará únicamente cuando medie autorización previa del Titular, salvo en los supuestos en que la normativa vigente, particularmente la Ley Orgánica de Protección de Datos Personales, permita su realización bajo otras bases jurídicas de legitimación.",
      "Ambas partes, en conjunto, se denominarán LAS PARTES.",
      "Al firmar físicamente o electrónicamente, cancelar una cuota o recibir el dispositivo, el CLIENTE declara su aceptación íntegra de los términos, condiciones y de tratamiento de datos personales."
    ],
  },
  {
    title: "II. Objeto",
    paragraphs: [
      "PAY&PLAY comercializa teléfonos, televisores y electrodomésticos mediante pagos periódicos y pagos de contado. En los casos de financiamiento, el dispositivo se entrega al CLIENTE mientras PAY&PLAY conserva la titularidad hasta el cumplimiento total de las obligaciones contractuales.",
      "Para garantizar el cumplimiento contractual de pagos periódicos, PAY&PLAY implementa tecnologías de seguridad que incluyen un sistema MDM, instalado de forma obligatoria y aceptada por EL CLIENTE en dispositivos compatibles."
    ],
  },
  {
    title: "III. Naturaleza del MDM de PAY&PLAY",
    paragraphs: [
      "El MDM es un software de administración de dispositivos que PAY&PLAY tiene a su disposición, no es un servicio de uso, interacción o acceso del cliente final.",
      "El CLIENTE no opera, controla ni ejecuta funciones del MDM. Este sistema se utiliza como mecanismo de seguridad y cumplimiento de obligaciones contractuales, conforme al artículo 7 numeral 5 de la Ley Orgánica de Protección de Datos Personales (LOPDP).",
      "El CLIENTE acepta su existencia y funcionamiento como condición necesaria para recibir el dispositivo bajo pagos periódicos. De lo contrario, no aplica este mecanismo.",
      "El MDM permite a PAY&PLAY: bloquear el dispositivo en caso de falta de pago, enviar recordatorios, verificar cambios de SIM, IMEI o manipulación y activar alertas antifraude.",],
    subitems: [
        "1. Bloqueo del dispositivo en caso de falta de pago.",
        "2. Envío de notificaciones de recordatorio.",
        "3. Verificación de cambios de SIM, IMEI o manipulación.",
        "4. Activación de alertas antifraude."
    ],
  },
  {
    title: "IV. Descripción del producto y servicio",
    paragraphs: [
      "LA EMPRESA entrega al CLIENTE:",],
      subitems: [
      "Un producto electrónico (teléfono, televisor, equipos electrónicos o electrodoméstico).",
      "La posibilidad de adquirirlo mediante pagos periódicos.",
      "Un producto protegido mediante MDM, instalado obligatoriamente en los equipos compatibles, cuando la compra consista en pagos periódicos.",
      "En tal virtud, en caso de que el producto adquirido no corresponda a un dispositivo celular, sino a un bien distinto, el CLIENTE acepta y autoriza expresamente la aplicación del sistema MDM en su dispositivo, con la finalidad de garantizar el cumplimiento de las obligaciones contractuales asumidas."
    ],
    afterListText: "El MDM no es un servicio para el CLIENTE, sino un mecanismo tecnológico de garantía y gestión de propiedad mientras exista deuda."
  },
  {
    title: "V. Autorización de instalación y funcionamiento del MDM",
    paragraphs: [
      "El CLIENTE declara que entiende y acepta que:",],
      subitems: [
      "El MDM es obligatorio para recibir el dispositivo, cuando deba pagar cuotas periódicas por el dispositivo adquirido.",
      "Intentar eliminarlo, desinstalar o cualquier acción que intente deslindarse del software implementado en el dispositivo, constituye incumplimiento contractual.",
      "El MDM puede operar en modo silencioso o con funciones visibles, que no afecta el funcionamiento del dispositivo.",
      "Cualquier intento de manipulación habilita bloqueo inmediato."
    ],
  },
  {
    title: "VI. Tarifas, costos y condiciones de pago",
    paragraphs: [
      "El precio total, valor de cuotas, periodicidad y fechas de pago constan en el instrumento legal individual firmado entre LAS PARTES.",
      "Los pagos deberán realizarse únicamente en las cuentas oficiales de LA EMPRESA o a través de los medios autorizados.",
      "El atraso en pagos genera:",
    ],
      subitems: [
      "Bloqueo inmediato del dispositivo mediante MDM.",
      "Aplicación de intereses por mora y cargos de gestión de cobranza.",
      "La falta de pago habilita procesos de bloqueo permanente, temporal o acciones legales."
        ],
  },
  {
    title: "VII. Obligaciones del cliente",
    paragraphs: [
      "El CLIENTE se obliga a:"],
      subitems: [
    "Pagar puntualmente sus cuotas.",
    "Cuidar el dispositivo entregado.",
    "No manipular, eliminar, resetear, desbloquear o interferir con el MDM.",
    "No vender, empeñar o transferir el dispositivo mientras no sea de su propiedad.",
    "No suministrar información falsa o inexacta.",
    "Permitir la verificación del dispositivo cuando sea requerido.",
    "Mantener actualizados sus datos de contacto.",
    "Realizar actos fraudulentos.",
    "Utilizar el dispositivo para actividades ilícitas."
    ],
  },
  {
    title: "VIII. Obligaciones de PAY&PLAY",
    paragraphs: [
      "LA EMPRESA se obliga a:"],
      subitems: [
        "Entregar un dispositivo en buen estado y acorde a las características acordadas.",
        "Informar al CLIENTE sobre plan, precio y condiciones de pago.",
        "Proteger los datos personales del CLIENTE conforme a la LOPDP.",
        "Respetar y hacer respetar los principios que se establezca en la LOPDP.",
        "Ejecutar funciones del MDM únicamente para fines contractuales y antifraude.",
        "Mantener canales de contacto para atención al CLIENTE.",
        "Facilitar los mecanismos de ejercicio de derechos de acceso, rectificación,actualización, eliminación, entre otros.",
        "Mejora continua tanto en políticas y procedimientos de seguridad para adaptarse nuevas amenazas y cambios en la normativa."
    ],
  },
  {
    title: "IX. Limitación de responsabilidad",
    paragraphs: [
      "LA EMPRESA no asumirá responsabilidad por la pérdida de información almacenada en el dispositivo, ni por daños ocasionados como consecuencia de uso inadecuado, golpes, exposición a líquidos o manipulación técnica no autorizada. Asimismo, no responderá por fallas derivadas de intentos de desinstalación, alteración o eliminación del sistema MDM, ni por daños indirectos, lucro cesante o perjuicios que pudieran generarse a partir de bloqueos del dispositivo por mora en el cumplimiento de las obligaciones del CLIENTE. De igual manera, LA EMPRESA no será responsable por la instalación o utilización de software no autorizado realizada por el CLIENTE.Daños indirectos, lucro cesante o perjuicios derivados de bloqueos por mora"
    ],
  },
  {
    title: "X. Bloqueo del dispositivo",
    paragraphs: [
      "PAY&PLAY podrá bloquear el dispositivo en los siguientes casos:"
    ],
    subitems: [
      "1. Mora en el pago de cuotas.",
      "2. Alteración del MDM.",
      "3. Ocultamiento del dispositivo.",
      "4. Información falsa o fraude."
    ],
    afterListText: "El bloqueo es una medida de ejecución contractual permitida por el artículo 7 numeral 5 de la LOPDP."
  },
  {
    title: "XI. Acciones legales",
    paragraphs: [
      "El CLIENTE reconoce y acepta que el dispositivo objeto del acuerdo es de propiedad exclusiva de LA EMPRESA hasta que se haya efectuado el pago total del mismo. En este sentido, el sistema MDM constituye únicamente un mecanismo tecnológico de garantía que no limita ni sustituye los derechos legales que asisten a LA EMPRESA.",
      "En caso de incumplimiento por parte del CLIENTE, LA EMPRESA se reserva el derecho de iniciar las acciones legales que correspondan, así como de recuperar el dispositivo por las vías judiciales o extrajudiciales que resulten aplicables conforme a la normativa vigente."
    ],
  },
];

export const privacySections: LegalSection[] = [
  {
    title: "1. Información que recopilamos",
    paragraphs: [
      "PAY&PLAY puede recopilar información personal y empresarial necesaria para operar, gestionar servicios, evaluar riesgos, validar identidades y mejorar la experiencia del usuario, como nombres, datos de contacto, documento de identificación, información comercial y datos relacionados con la operativa del servicio.",
      "También se pueden almacenar datos técnicos y de uso, tales como dirección IP, tipo de dispositivo, navegador, historial de navegación dentro de la plataforma y registros asociados a la seguridad del sistema.",
    ],
  },
  {
    title: "2. Finalidades del tratamiento",
    paragraphs: [
      "Los datos se utilizan para prestar y mejorar los servicios, gestionar procesos internos, verificar identidad, evaluar riesgos, prevenir fraude, mantener seguridad y cumplir con obligaciones legales y regulatorias.",
      "Además, la información puede ser utilizada con fines de atención al cliente, soporte técnico, análisis operativo y mejora continua de la experiencia del usuario.",
    ],
  },
  {
    title: "3. Protección y almacenamiento",
    paragraphs: [
      "PAY&PLAY implementa medidas razonables de seguridad para proteger la información personal frente al acceso no autorizado, uso indebido, pérdida o alteración. Sin embargo, ningún sistema es infalible y la empresa no puede garantizar una seguridad absoluta en todos los escenarios.",
      "La información se conserva durante el tiempo necesario para cumplir con la finalidad para la cual fue recopilada, así como con obligaciones legales, contables, regulatorias y de soporte al cliente.",
    ],
  },
  {
    title: "4. Compartición de información",
    paragraphs: [
      "La información podrá ser compartida únicamente con proveedores, socios o terceros que colaboren en la prestación de servicios, siempre bajo condiciones de confidencialidad y con finalidad estrictamente relacionada con la operación de PAY&PLAY.",
      "En caso de que exista una obligación legal, judicial o regulatoria, PAY&PLAY podrá entregar información cuando sea requerido por autoridad competente o cuando sea necesario para proteger derechos, seguridad o cumplimiento de la ley.",
    ],
  },
  {
    title: "5. Derechos del usuario",
    paragraphs: [
      "El usuario tiene derecho a conocer, actualizar, corregir, limitar o solicitar la eliminación de sus datos personales, de conformidad con la normativa aplicable y las condiciones internas de tratamiento de la empresa.",
      "También puede solicitar información sobre las finalidades del tratamiento, categorías de datos, destinatarios y plazo de conservación. Para ello, puede comunicarse con PAY&PLAY por los canales de contacto habilitados.",
    ],
  },
  {
    title: "6. Cookies y tecnologías",
    paragraphs: [
      "La plataforma puede utilizar cookies, etiquetas o tecnologías similares para mejorar la experiencia del usuario, analizar tráfico, personalizar contenido y mantener la seguridad del sitio.",
      "El usuario puede configurar su navegador para aceptar, rechazar o gestionar el uso de cookies, aunque algunos servicios pueden verse limitados si se desactivan determinadas funciones.",
    ],
  },
  {
    title: "7. Cambios en la política",
    paragraphs: [
      "PAY&PLAY podrá modificar esta Política de Privacidad para reflejar cambios en la normativa, servicios o prácticas de tratamiento de datos. Las actualizaciones se publicarán en la plataforma y entrarán en vigor a partir de su publicación.",
      "El uso continuado de los servicios después de esos cambios implica la aceptación de la versión vigente.",
    ],
  },
];
