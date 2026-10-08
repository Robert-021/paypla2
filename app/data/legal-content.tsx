export type LegalSection = {
  title: string;
  paragraphs: string[];
  itemsWithParagraphs?: { title: string; paragraph: string }[];
  subitems?: string[];
  afterListText?: string;
};

export const termsSections: LegalSection[] = [
  {
    title: "I. Identificación de las partes",
    paragraphs: [
      "PAY&PLAY SOCIEDAD POR ACCIONES SIMPLIFICADAS, con RUC Nro. 1793204652001, domiciliada en la Avenida Amazonas y Naciones Unidas, Edificio Unicornio Empresarial II, piso 15, Quito, Ecuador, cuyos datos de contacto son el correo electrónico administracion@payplay-ec.com y el teléfono 0961141882, para efectos del presente instrumento se denominará PAY&PLAY o LA EMPRESA. PAY&PLAY administra y gestiona modalidades de pagos periódicos o financiamiento destinadas a facilitar la adquisición de productos comercializados por establecimientos o tiendas aliadas, y tendrá a su cargo, según corresponda, la recepción y gestión de solicitudes, evaluación crediticia, decisión de aprobación o rechazo del financiamiento, administración de las obligaciones de pago, cobranza, registro de pagos y gestión de los mecanismos tecnológicos asociados a la operación. Respecto de los tratamientos de datos personales que determine para dichas finalidades, PAY&PLAY actuará en calidad de Responsable del Tratamiento de Datos Personales, de conformidad con la Ley Orgánica de Protección de Datos Personales y demás normativa aplicable.",
      "Para efectos del presente instrumento, se entenderá por ESTABLECIMIENTO COMERCIAL o LA TIENDA a HOME PLAY o a cualquier establecimiento aliado que comercialice, facture y entregue el producto adquirido por EL CLIENTE. LA TIENDA será responsable de los tratamientos de datos personales que determine para sus propias finalidades comerciales, tales como venta, facturación, entrega, garantía y atención relacionada con el producto. Sin perjuicio de lo anterior, cuando LA TIENDA se limite a recopilar, registrar o transmitir a PAY&PLAY la información necesaria para gestionar una solicitud de financiamiento, siguiendo exclusivamente las instrucciones documentadas de PAY&PLAY y sin determinar finalidades propias respecto de dicho tratamiento, actuará en calidad de Encargado del Tratamiento respecto de esas actividades específicas.",
      "El tratamiento de datos personales se realizará sobre la base jurídica que corresponda a cada finalidad, de conformidad con la Ley Orgánica de Protección de Datos Personales. Cuando una determinada actividad de tratamiento requiera el consentimiento de EL CLIENTE, este será recabado de manera previa, libre, específica, informada e inequívoca. Cuando el tratamiento se sustente legítimamente en una base jurídica distinta del consentimiento, no será necesaria la obtención de una autorización adicional, sin perjuicio del deber de información y de las demás obligaciones aplicables a PAY&PLAY.",
      "Ambas partes, en conjunto, se denominarán LAS PARTES.",
      "EL CLIENTE, mediante la suscripción física o electrónica del contrato, formulario, solicitud o mecanismo habilitado por PAY&PLAY, declara haber leído, comprendido y aceptado los presentes Términos y Condiciones, los cuales formarán parte integrante de la relación contractual existente entre LAS PARTES.",
      "La aceptación de los presentes Términos y Condiciones no implicará, por sí sola, el otorgamiento de un consentimiento general o indiscriminado para el tratamiento de datos personales.",
      "PAY&PLAY, en su calidad de Responsable del Tratamiento, tratará únicamente aquellos datos personales que resulten adecuados, pertinentes y estrictamente necesarios para la gestión, celebración y ejecución de la relación contractual, administración de pagos, cumplimiento de obligaciones legales y, cuando corresponda, para la implementación y funcionamiento del sistema MDM, siempre que dicho tratamiento resulte necesario para el cumplimiento de las obligaciones contractuales asumidas por LAS PARTES, de conformidad con las bases de legitimación previstas en la Ley Orgánica de Protección de Datos Personales.",
      "Cuando una determinada actividad de tratamiento requiera del consentimiento de EL CLIENTE como base de legitimación, PAY&PLAY lo solicitará de manera previa, libre, específica, informada e inequívoca, mediante un mecanismo que permita acreditar la voluntad del titular, sin presumir dicho consentimiento por el simple hecho de realizar un pago, recibir el dispositivo, mantener vigente la relación contractual o utilizar el producto adquirido.",
      "El tratamiento de los datos personales será realizado exclusivamente para las finalidades previamente informadas a EL CLIENTE y conforme al Aviso o Política de Privacidad de PAY&PLAY, sin que los datos puedan ser utilizados para finalidades distintas o incompatibles, salvo que exista una base jurídica que lo permita o se obtenga, cuando corresponda, una nueva autorización del titular.",
      "Cuando el tratamiento se encuentre sustentado en una base de legitimación distinta al consentimiento, su ejecución no dependerá de la autorización del titular, sin perjuicio de que PAY&PLAY deberá cumplir con los principios, derechos y obligaciones establecidos en la Ley Orgánica de Protección de Datos Personales y demás normativa aplicable."
    ]
  },
  {
    title: "II. Objeto",
    paragraphs: [
      "Los presentes Términos y Condiciones tienen por objeto regular las condiciones generales aplicables a la evaluación, aprobación, administración y gestión de las modalidades de pagos periódicos o financiamiento administradas por PAY&PLAY, mediante las cuales EL CLIENTE podrá adquirir productos comercializados por establecimientos o tiendas aliadas, así como establecer los derechos y obligaciones derivados de dicha relación y las condiciones aplicables a las herramientas tecnológicas de seguridad que, cuando corresponda, sean implementadas sobre determinados dispositivos.",
      "La comercialización, facturación, entrega del producto y las obligaciones que correspondan al vendedor respecto del bien estarán a cargo del ESTABLECIMIENTO COMERCIAL o LA TIENDA que intervenga en cada operación, sin perjuicio de las obligaciones propias asumidas por PAY&PLAY respecto de la evaluación, aprobación, administración y gestión de la modalidad de pago o financiamiento.",
      "Los elementos particulares de cada operación, entre ellos la identificación del establecimiento comercial, el producto adquirido, el valor de la operación, cuota inicial, monto sujeto a pagos periódicos o financiamiento, número y valor de cuotas, periodicidad, fechas de vencimiento y demás condiciones económicas aplicables, constarán en el respectivo instrumento contractual individual celebrado con EL CLIENTE.",
      "Los presentes Términos y Condiciones no atribuyen por sí solos a PAY&PLAY la propiedad del producto comercializado por LA TIENDA. Cualquier garantía, derecho, limitación o mecanismo jurídico relacionado con el bien deberá encontrarse expresamente establecido en el instrumento contractual correspondiente y contar con fundamento jurídico válido."
    ]
  },
  {
    title: "III. Evaluación crediticia",
    paragraphs: [
      "Cuando EL CLIENTE solicite adquirir productos mediante una modalidad de pagos periódicos, PAY&PLAY podrá realizar, como parte del proceso precontractual, una evaluación de riesgo crediticio, solvencia y capacidad de pago, con la finalidad de determinar la viabilidad de la operación solicitada.",
      "Cuando EL CLIENTE solicite acceder a una modalidad de pagos periódicos o financiamiento administrada por PAY&PLAY, LA EMPRESA realizará, como parte del proceso precontractual, la correspondiente evaluación de riesgo crediticio, solvencia, capacidad de pago y demás criterios previamente definidos para la evaluación de la solicitud. PAY&PLAY será quien adopte la decisión final respecto de la aprobación o rechazo del financiamiento solicitado, sin que la recepción de la solicitud, el ingreso de información al sistema o la intervención de LA TIENDA implique por sí sola la aprobación de la operación.",
      "La solicitud podrá ser receptada directamente por PAY&PLAY o a través de vendedores o personal autorizado de LA TIENDA. Cuando estos últimos recopilen e ingresen al sistema de PAY&PLAY los datos requeridos para la evaluación del financiamiento, deberán hacerlo exclusivamente conforme a las instrucciones, procedimientos y finalidades determinadas por PAY&PLAY, sin que puedan utilizar dicha información para finalidades propias incompatibles con aquellas que correspondan a su relación comercial con EL CLIENTE.",
      "La autorización para la consulta de información crediticia será recabada mediante un mecanismo separado de la aceptación de los presentes Términos y Condiciones, que permita acreditar la manifestación de voluntad de EL CLIENTE.",
      "Asimismo, cuando corresponda conforme a la naturaleza de la operación y a la normativa aplicable, PAY&PLAY podrá reportar, actualizar o comunicar información relacionada con la obligación crediticia y su comportamiento de pago a los prestadores de servicios de referencias crediticias legalmente autorizados, incluyendo información relativa al cumplimiento, incumplimiento, estado y evolución de las obligaciones asumidas por EL CLIENTE.",
      "Cuando dicho reporte requiera autorización expresa del Titular, esta deberá constar en el correspondiente instrumento de autorización de consulta y reporte de información crediticia, de manera previa y verificable.",
      "PAY&PLAY deberá procurar que la información crediticia que reporte sea veraz, exacta, completa, actualizada, pertinente y limitada a lo necesario, y adoptará los mecanismos correspondientes para gestionar solicitudes de rectificación o actualización cuando EL CLIENTE considere que la información reportada contiene errores o inexactitudes.",
      "La información crediticia obtenida o generada será tratada exclusivamente para las finalidades legítimas relacionadas con la evaluación de riesgo, decisión sobre la solicitud de financiamiento, administración y seguimiento de la obligación y demás finalidades permitidas por la normativa aplicable.",
      "La autorización para la consulta y reporte de información crediticia será independiente de la autorización destinada al envío de publicidad, promociones, ofertas o comunicaciones comerciales, por tratarse de finalidades distintas.",
      "El tratamiento de datos personales efectuado durante la evaluación crediticia se realizará de conformidad con la Ley Orgánica de Protección de Datos Personales, la normativa especializada aplicable y la Política de Protección y Tratamiento de Datos Personales de PAY&PLAY S.A.S."
    ]
  },
  {
    title: "IV. Implementación del sistema MDM",
    paragraphs: [
      "En aquellos dispositivos tecnológicamente compatibles que sean adquiridos mediante una modalidad de pagos periódicos o financiamiento administrada por PAY&PLAY, podrá implementarse un sistema de administración de dispositivos denominado MDM (Mobile Device Management), como mecanismo tecnológico destinado a la seguridad del dispositivo, prevención de fraude, administración de determinadas restricciones técnicas y gestión del cumplimiento de las obligaciones contractuales vinculadas al financiamiento.",
      "La existencia, finalidad y funcionamiento general del sistema MDM serán informados a EL CLIENTE de manera previa a la formalización de la operación, cuando dicho sistema resulte aplicable al dispositivo y modalidad de financiamiento seleccionados.",
      "La utilización del MDM formará parte de las condiciones particulares de la modalidad de financiamiento correspondiente y deberá constar expresamente en el instrumento contractual aplicable.",
      "El sistema MDM podrá ser administrado directamente por PAY&PLAY o mediante proveedores tecnológicos contratados para dicha finalidad. Cuando dichos proveedores tengan acceso o realicen tratamiento de datos personales por cuenta de PAY&PLAY, actuarán en calidad de Encargados del Tratamiento, conforme a las instrucciones documentadas de PAY&PLAY y a las obligaciones establecidas en la normativa de protección de datos personales.",
      "PAY&PLAY, en calidad de Responsable del Tratamiento, adoptará las medidas técnicas y organizativas necesarias para que la configuración y funcionamiento del MDM respeten los principios de legalidad, transparencia, finalidad, pertinencia, minimización, proporcionalidad, seguridad, confidencialidad y protección de datos personales desde el diseño y por defecto.",
      "La implementación del MDM no otorgará a PAY&PLAY una autorización general para acceder al contenido privado almacenado o generado por EL CLIENTE en el dispositivo. Cualquier dato personal tratado mediante esta herramienta deberá guardar relación directa con las finalidades previamente determinadas e informadas y encontrarse limitado a aquello que resulte necesario y proporcional para su cumplimiento."
    ]
  },
  {
    title: "V. Funciones del MDM",
    paragraphs: [
      "Dentro de las finalidades previamente informadas a EL CLIENTE y únicamente cuando resulten necesarias, adecuadas y proporcionales para la ejecución de la relación contractual, el sistema MDM podrá ser utilizado para las siguientes funcionalidades:",
      "1. Gestionar las restricciones técnicas o el bloqueo temporal del dispositivo cuando se configure alguna de las causales expresamente establecidas en el contrato.",
      "2. Gestionar el desbloqueo o retiro de las restricciones cuando desaparezca la causa que justificó su aplicación.",
      "3. Remitir o gestionar avisos y notificaciones relacionados con vencimientos, obligaciones de pago, mora, bloqueo, desbloqueo o demás circunstancias directamente vinculadas con la ejecución del financiamiento.",
      "4. Detectar técnicamente modificaciones, alteraciones, deshabilitación o intentos deliberados de manipulación del sistema MDM instalado en el dispositivo.",
      "5. Identificar eventos o modificaciones técnicas directamente relacionadas con la seguridad del dispositivo, el funcionamiento del MDM o la prevención de fraude asociado a la operación financiada.",
      "6. Generar alertas técnicas ante posibles eventos de fraude, manipulación, eliminación, deshabilitación o utilización irregular de los mecanismos tecnológicos implementados para la ejecución de la relación contractual.",
      "Las funcionalidades del MDM deberán limitarse a aquellas expresamente informadas y configuradas para las finalidades determinadas por PAY&PLAY, quedando prohibida su utilización para finalidades distintas o incompatibles, salvo que exista una base jurídica que legitime un nuevo tratamiento y se cumplan previamente las obligaciones de información que correspondan.",
      "El sistema MDM no será utilizado como mecanismo de vigilancia general de EL CLIENTE ni habilitará, por su sola instalación, el acceso indiscriminado a información privada contenida en el dispositivo."
    ]
  },
  {
    title: "VI. Instalación, permanencia y funcionamiento del MDM",
    paragraphs: [
      "Cuando la utilización del MDM forme parte de la modalidad de financiamiento aplicable, EL CLIENTE deberá haber sido informado previamente sobre su existencia, finalidad, funcionalidades esenciales y condiciones de permanencia antes de formalizar la operación.",
      "Mientras subsistan las obligaciones contractuales que legítimamente justifiquen la permanencia del MDM, EL CLIENTE se obliga a no eliminar, desinstalar, alterar, manipular, deshabilitar, eludir, modificar o interferir deliberadamente con sus mecanismos de funcionamiento.",
      "El MDM podrá ejecutar procesos técnicos en segundo plano exclusivamente cuando estos resulten necesarios para las funcionalidades y finalidades previamente informadas, aplicando criterios de minimización y proporcionalidad en el tratamiento de datos personales.",
      "La ejecución de procesos técnicos en segundo plano no constituirá autorización para la recopilación oculta, indiscriminada o excesiva de información del dispositivo ni para el acceso a información que no resulte necesaria para las finalidades legítimas del sistema.",
      "Cuando PAY&PLAY detecte técnicamente una posible manipulación, alteración o intento de deshabilitación del MDM, podrá adoptar las medidas contractuales y tecnológicas previamente establecidas que resulten razonables y proporcionales al evento detectado.",
      "EL CLIENTE tendrá derecho a solicitar información y revisión respecto de una medida tecnológica aplicada cuando considere que esta se produjo como consecuencia de un error, información inexacta o una circunstancia que ya hubiera sido subsanada.",
      "Una vez desaparecida la finalidad que justifique la permanencia de las restricciones administradas mediante el MDM, PAY&PLAY procederá con su desactivación, desvinculación o retiro conforme a las condiciones técnicas aplicables."
    ]
  },
  {
    title: "VII. Tratamiento de datos personales vinculado al MDM y a la relación contractual",
    paragraphs: [
      "PAY&PLAY, en calidad de Responsable del Tratamiento, podrá tratar mediante el sistema MDM únicamente aquellos datos técnicos y personales que resulten adecuados, pertinentes y estrictamente necesarios para las finalidades previamente determinadas e informadas a EL CLIENTE.",
      "Dichas finalidades podrán comprender, según las características técnicas del sistema implementado:",
      "a) administración del funcionamiento del MDM;",
      "b) aplicación y retiro de restricciones técnicas contractualmente previstas;",
      "c) detección de alteraciones o intentos de manipulación del sistema;",
      "d) prevención y detección de eventos de fraude relacionados directamente con la operación financiada;",
      "e) gestión de avisos técnicos relacionados con el estado del dispositivo y las obligaciones contractuales; y,",
      "f) seguridad y continuidad de las funcionalidades tecnológicas vinculadas a la operación.",
      "Las categorías específicas de datos personales y datos técnicos tratados mediante el MDM, los proveedores tecnológicos que intervengan, las finalidades correspondientes, bases de legitimación, períodos de conservación y demás condiciones del tratamiento estarán identificados en la Política de Privacidad.",
      "Cuando el tratamiento resulte objetivamente necesario para la ejecución de la relación contractual o para la aplicación de medidas precontractuales solicitadas por EL CLIENTE, PAY&PLAY podrá fundamentarlo en la base de legitimación correspondiente prevista en la Ley Orgánica de Protección de Datos Personales.",
      "Cuando una determinada actividad del MDM requiera consentimiento conforme a la normativa aplicable, dicho consentimiento será solicitado de manera previa, libre, específica, informada e inequívoca y deberá poder ser acreditado por PAY&PLAY.",
      "La celebración del contrato, recepción del dispositivo, realización de pagos o utilización ordinaria del producto no constituirán por sí mismos una autorización general para acceder o tratar cualquier información existente en el dispositivo.",
      "PAY&PLAY adoptará medidas técnicas y organizativas destinadas a garantizar que, por defecto, únicamente sean tratados los datos personales necesarios para cada finalidad específica y que el acceso a dichos datos se encuentre limitado al personal y proveedores que deban intervenir legítimamente en el tratamiento."
    ]
  },
  {
    title: "VIII. Comunicaciones comerciales y publicidad",
    paragraphs: [
      "La aceptación de los presentes Términos y Condiciones no implicará autorización automática para recibir publicidad, promociones, ofertas o comunicaciones comerciales.",
      "Cuando PAY&PLAY requiera tratar datos personales para dichas finalidades sobre la base del consentimiento, solicitará a EL CLIENTE una autorización específica, independiente, libre, informada e inequívoca, mediante un mecanismo que permita acreditar su otorgamiento.",
      "La negativa o posterior retiro de dicha autorización no afectará la solicitud, aprobación, administración o ejecución del financiamiento contratado."
    ]
  },
  {
    title: "IX. Condiciones económicas y de pago",
    paragraphs: [
      "Las condiciones particulares de cada financiamiento, incluyendo monto financiado, cuota inicial cuando corresponda, número y valor de cuotas, periodicidad, fechas de vencimiento y demás condiciones económicas, constarán en el instrumento contractual individual correspondiente.",
      "El precio y las condiciones propias de comercialización del producto serán determinados por LA TIENDA que realice la venta, sin perjuicio de que dichos valores puedan constar como antecedente de la operación financiada por PAY&PLAY.",
      "Los pagos correspondientes al financiamiento deberán efectuarse únicamente mediante los canales o mecanismos oficialmente autorizados por PAY&PLAY.",
      "El incumplimiento de las obligaciones de pago podrá generar, cuando corresponda y se encuentre previamente establecido en el contrato:"
    ],
    subitems: [
      "a) gestión de cobranza;",
      "b) intereses o cargos legalmente procedentes;",
      "c) aplicación de medidas tecnológicas previamente pactadas; y,",
      "d) ejercicio de las acciones extrajudiciales o judiciales permitidas por la ley."
    ]
  },
  {
    title: "X. Obligaciones de EL CLIENTE",
    paragraphs: ["EL CLIENTE se obliga a:"],
    subitems: [
      "a) proporcionar información verdadera, exacta y actualizada;",
      "b) cumplir oportunamente las obligaciones económicas asumidas;",
      "c) mantener actualizados sus datos de contacto cuando resulte necesario para la ejecución del contrato;",
      "d) utilizar adecuadamente el dispositivo;",
      "e) no eliminar, alterar, deshabilitar, manipular o interferir deliberadamente con el sistema MDM mientras exista una causa contractual que justifique su permanencia;",
      "f) no realizar actos fraudulentos destinados a evadir las obligaciones derivadas del financiamiento;",
      "g) informar oportunamente cualquier error relacionado con pagos, bloqueos o información registrada; y,",
      "h) cumplir las demás obligaciones expresamente establecidas en el contrato individual."
    ]
  },
  {
    title: "XI. Obligaciones de PAY&PLAY",
    paragraphs: ["PAY&PLAY se obliga a:"],
    subitems: [
      "a) informar previamente las condiciones esenciales del financiamiento;",
      "b) evaluar la solicitud y comunicar su aprobación o rechazo;",
      "c) administrar correctamente las obligaciones y pagos correspondientes al financiamiento;",
      "d) mantener mecanismos que permitan verificar los pagos realizados por EL CLIENTE;",
      "e) informar sobre la existencia y funcionamiento del MDM cuando resulte aplicable;",
      "f) utilizar las funcionalidades del MDM exclusivamente para las finalidades previamente determinadas;",
      "g) adoptar medidas de seguridad para la protección de los datos personales;",
      "h) mantener mecanismos para el ejercicio de los derechos de los titulares;",
      "i) atender solicitudes relacionadas con pagos, cobranza, bloqueos y medidas tecnológicas; y,",
      "j) retirar o desactivar las restricciones asociadas al MDM cuando desaparezca la causa que justificó su aplicación."
    ]
  },
  {
    title: "XII. Bloqueo temporal del dispositivo",
    paragraphs: [
      "Cuando el uso del MDM y la posibilidad de bloqueo hayan sido expresamente establecidos en el contrato individual, PAY&PLAY podrá aplicar un bloqueo temporal del dispositivo en los siguientes casos:",
      "1. Mora o incumplimiento de las obligaciones de pago, conforme a las condiciones previamente pactadas;",
      "2. Manipulación, alteración, eliminación o intento deliberado de deshabilitación del MDM;",
      "3. Detección objetiva de actuaciones relacionadas con fraude en la operación financiada; y,",
      "4. Utilización de información falsa o adulterada que haya sido determinante para la aprobación o ejecución del financiamiento.",
      "La causal deberá ser verificable y la medida aplicada deberá guardar proporcionalidad con la circunstancia que la origine.",
      "Cuando el bloqueo se produzca exclusivamente por mora, PAY&PLAY informará previamente a EL CLIENTE sobre la obligación pendiente mediante los canales disponibles.",
      "El bloqueo no autorizará a PAY&PLAY a acceder a información personal distinta de aquella necesaria para la ejecución de la medida tecnológica."
    ]
  },
  {
    title: "XIII. Desbloqueo y finalización de las restricciones",
    paragraphs: [
      "Cuando EL CLIENTE regularice la obligación o desaparezca la causa que originó el bloqueo, PAY&PLAY procederá al correspondiente desbloqueo dentro del plazo técnicamente necesario para verificar dicha circunstancia.",
      "Una vez cumplidas íntegramente las obligaciones derivadas del financiamiento, PAY&PLAY procederá a desactivar, desvincular o retirar las restricciones administradas mediante el MDM, salvo que exista una causa jurídica que justifique su permanencia.",
      "El tratamiento posterior de los datos personales se sujetará a los períodos de conservación establecidos en la Política de Protección y Tratamiento de Datos Personales de PAY&PLAY S.A.S. y en la normativa aplicable."
    ]
  },
  {
    title: "XIV. Limitación de responsabilidad",
    paragraphs: [
      "PAY&PLAY no será responsable por daños físicos, defectos de fabricación, garantías comerciales o problemas propios del producto vendido por LA TIENDA, salvo que el daño sea directamente atribuible a una actuación de PAY&PLAY.",
      "Tampoco será responsable por daños derivados de golpes, exposición a líquidos, utilización contraria a las instrucciones del fabricante, modificaciones no autorizadas, software malicioso o intervenciones realizadas por EL CLIENTE o terceros.",
      "La presente limitación no será aplicable cuando el daño o afectación sea atribuible al incumplimiento de obligaciones legales o contractuales de PAY&PLAY, incluyendo aquellas relacionadas con protección de datos personales y funcionamiento de los mecanismos tecnológicos administrados por LA EMPRESA."
    ]
  },
  {
    title: "XV. Acciones legales",
    paragraphs: [
      "El sistema MDM constituye un mecanismo tecnológico asociado al financiamiento y no sustituye ni limita las acciones legales disponibles para LAS PARTES.",
      "Ante el incumplimiento de las obligaciones asumidas por EL CLIENTE, PAY&PLAY podrá realizar las gestiones de cobranza y ejercer las acciones extrajudiciales o judiciales que correspondan conforme al contrato y a la legislación aplicable.",
      "Cuando PAY&PLAY mantenga legítimamente una garantía, derecho o mecanismo contractual respecto del dispositivo, podrá ejercer únicamente las acciones expresamente permitidas por la ley y por el instrumento contractual correspondiente.",
      "En ningún caso esta cláusula podrá interpretarse como autorización para adoptar medidas extrajudiciales contrarias al ordenamiento jurídico."
    ]
  },
  {
    title: "XVI. Protección de datos personales",
    paragraphs: [
      "PAY&PLAY, en calidad de Responsable del Tratamiento, tratará los datos personales de EL CLIENTE de conformidad con la Ley Orgánica de Protección de Datos Personales, su Reglamento y demás normativa aplicable.",
      "PAY&PLAY pondrá a disposición de EL CLIENTE, antes o al momento de recopilar sus datos personales, la Política de Protección y Tratamiento de Datos Personales de PAY&PLAY S.A.S., en la cual se informará, entre otros aspectos:",
      "a) identidad y datos de contacto del Responsable;",
      "b) categorías de datos tratados;",
      "c) finalidades del tratamiento;",
      "d) bases de legitimación;",
      "e) períodos de conservación;",
      "f) transferencias o comunicaciones de datos;",
      "g) intervención de encargados o proveedores;",
      "h) derechos de los titulares y mecanismos para ejercerlos;",
      "i) datos de contacto del Delegado de Protección de Datos Personales, cuando corresponda; y,",
      "j) información sobre valoraciones o decisiones automatizadas, cuando estas sean utilizadas.",
      "La aceptación de los presentes Términos y Condiciones será independiente de aquellas autorizaciones que legalmente requieran consentimiento específico."
    ]
  },
  {
    title: "XVII. Aceptación",
    paragraphs: [
      "EL CLIENTE declara haber tenido acceso a los presentes Términos y Condiciones con anterioridad a la formalización del financiamiento.",
      "Su aceptación podrá efectuarse mediante firma manuscrita, firma electrónica, aceptación digital, marcación de una casilla o cualquier otro mecanismo jurídicamente válido que permita acreditar la manifestación de voluntad de EL CLIENTE.",
      "Cuando la aceptación sea electrónica, PAY&PLAY procurará conservar evidencia suficiente que permita identificar, según corresponda: fecha y hora de aceptación, identidad del cliente, versión del documento aceptado y demás elementos técnicos necesarios para acreditar la aceptación.",
      "La aceptación de los presentes Términos y Condiciones no constituirá autorización general para tratamientos de datos personales que requieran consentimiento específico.",
      "Las autorizaciones relativas a consulta y reporte de información crediticia, así como aquellas destinadas a publicidad, promociones y comunicaciones comerciales, serán gestionadas mediante mecanismos independientes cuando corresponda."
    ]
  }
];

export const privacySections: LegalSection[] = [
  {
    title: "1. Información que recopilamos",
    paragraphs: [
      "PAY&PLAY puede recopilar información personal y empresarial necesaria para operar, gestionar servicios, evaluar riesgos, validar identidades y mejorar la experiencia del usuario, como nombres, datos de contacto, documento de identificación, información comercial y datos relacionados con la operativa del servicio.",
      "También se pueden almacenar datos técnicos y de uso, tales como dirección IP, tipo de dispositivo, navegador, historial de navegación dentro de la plataforma y registros asociados a la seguridad del sistema."
    ]
  },
  {
    title: "2. Finalidades del tratamiento",
    paragraphs: [
      "Los datos se utilizan para prestar y mejorar los servicios, gestionar procesos internos, verificar identidad, evaluar riesgos, prevenir fraude, mantener seguridad y cumplir con obligaciones legales y regulatorias.",
      "Además, la información puede ser utilizada con fines de atención al cliente, soporte técnico, análisis operativo y mejora continua de la experiencia del usuario."
    ]
  },
  {
    title: "3. Protección y almacenamiento",
    paragraphs: [
      "PAY&PLAY implementa medidas razonables de seguridad para proteger la información personal frente al acceso no autorizado, uso indebido, pérdida o alteración. Sin embargo, ningún sistema es infalible y la empresa no puede garantizar una seguridad absoluta en todos los escenarios.",
      "La información se conserva durante el tiempo necesario para cumplir con la finalidad para la cual fue recopilada, así como con obligaciones legales, contables, regulatorias y de soporte al cliente."
    ]
  },
  {
    title: "4. Compartición de información",
    paragraphs: [
      "La información podrá ser compartida únicamente con proveedores, socios o terceros que colaboren en la prestación de servicios, siempre bajo condiciones de confidencialidad y con finalidad estrictamente relacionada con la operación de PAY&PLAY.",
      "En caso de que exista una obligación legal, judicial o regulatoria, PAY&PLAY podrá entregar información cuando sea requerido por autoridad competente o cuando sea necesario para proteger derechos, seguridad o cumplimiento de la ley."
    ]
  },
  {
    title: "5. Derechos del usuario",
    paragraphs: [
      "El usuario tiene derecho a conocer, actualizar, corregir, limitar o solicitar la eliminación de sus datos personales, de conformidad con la normativa aplicable y las condiciones internas de tratamiento de la empresa.",
      "También puede solicitar información sobre las finalidades del tratamiento, categorías de datos, destinatarios y plazo de conservación. Para ello, puede comunicarse con PAY&PLAY por los canales de contacto habilitados."
    ]
  },
  {
    title: "6. Cookies y tecnologías",
    paragraphs: [
      "La plataforma puede utilizar cookies, etiquetas o tecnologías similares para mejorar la experiencia del usuario, analizar tráfico, personalizar contenido y mantener la seguridad del sitio.",
      "El usuario puede configurar su navegador para aceptar, rechazar o gestionar el uso de cookies, aunque algunos servicios pueden verse limitados si se desactivan determinadas funciones."
    ]
  },
  {
    title: "7. Cambios en la política",
    paragraphs: [
      "PAY&PLAY podrá modificar esta Política de Privacidad para reflejar cambios en la normativa, servicios o prácticas de tratamiento de datos. Las actualizaciones se publicarán en la plataforma y entrarán en vigor a partir de su publicación.",
      "El uso continuado de los servicios después de esos cambios implica la aceptación de la versión vigente."
    ]
  }
];
