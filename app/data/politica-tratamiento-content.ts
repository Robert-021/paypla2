export type PolicyItem = {
  text: string;
  children?: string[];
};

export type PolicyBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: PolicyItem[] };

export type PolicySection = {
  title: string;
  blocks: PolicyBlock[];
};

const paragraph = (text: string): PolicyBlock => ({ type: "paragraph", text });
const heading = (text: string): PolicyBlock => ({ type: "heading", text });
const list = (...items: (string | PolicyItem)[]): PolicyBlock => ({
  type: "list",
  items: items.map((item) => typeof item === "string" ? { text: item } : item),
});

export const treatmentPolicySections: PolicySection[] = [
  {
    title: "I. Identificación de las partes",
    blocks: [
      list(
        {
          text: "1. RESPONSABLE DEL TRATAMIENTO DE DATOS PERSONALES.",
          children: ["PAY&PLAY SOCIEDAD POR ACCIONES SIMPLIFICADAS, con RUC Nro. 1793204652001, en su calidad de Responsable del Tratamiento de Datos Personales, cuyos datos de contacto son el correo electrónico administracion@payplay-ec.com, teléfono 0961141882, domiciliada en Avenida Amazonas y Naciones Unidas, Edificio Unicornio Empresarial II, piso 15, Quito, Ecuador. Para efectos del presente instrumento, se denominará PAY&PLAY o LA EMPRESA. PAY&PLAY establece la presente Política de Tratamiento de Datos Personales."]
        },
        {
          text: "2. TITULAR DEL TRATAMIENTO DE DATOS PERSONALES.",
          children: ["En el marco del presente instrumento, EL CLIENTE se considerará “Titular del Tratamiento de Datos Personales” a toda persona natural a la que correspondan los datos personales que sean objeto de recolección, uso o cualquier otra forma de tratamiento."]
        },
        {
          text: "3. DELEGADO DE PROTECCIÓN DE DATOS PERSONALES.",
          children: ["En cumplimiento de lo dispuesto en la Ley Orgánica de Protección de Datos Personales y en atención a la naturaleza de las actividades desarrolladas por PAY&PLAY S.A.S., la Compañía ha procedido a designar un Delegado de Protección de Datos Personales, cuya información de contacto se detalla a continuación:", "Nombre: Dennis Ariel Chugchilan Chicaiza.", "Dirección: Avenida Amazonas y Naciones Unidas, Edificio Unicornio Empresarial II, piso 15, Quito, Ecuador.", "Correo: dchugchilan@payplay-ec.com."]
        }
      ),
      paragraph("Ambas partes, en conjunto, se denominarán LAS PARTES."),
      paragraph("La siguiente Política de Tratamiento de Datos Personales debe leerse íntegra y cuidadosamente por los titulares. Al momento en que el titular acepta la presente política, se rige jurídicamente por las presentes condiciones.")
    ]
  },
  {
    title: "II. Objeto",
    blocks: [
      paragraph("La presente Política de Tratamiento de Datos Personales tiene por objeto informar a los titulares sobre la forma en que PAY&PLAY S.A.S. recopila, utiliza, consulta, procesa, analiza, conserva y, en su caso, transfiere datos personales, incluyendo aquellos de carácter financiero y crediticio necesarios para la evaluación de riesgo y prestación de sus servicios tecnológicos."),
      paragraph("Esta Política describe:"),
      list("Las finalidades específicas del tratamiento.", "Las bases de legitimación aplicables.", "Los derechos de los titulares y el procedimiento para ejercerlos.", "Las medidas técnicas y organizativas implementadas para garantizar la seguridad de la información.", "Los supuestos de transferencia o comunicación a terceros."),
      paragraph("Su finalidad es garantizar la transparencia frente a los usuarios, clientes, proveedores y colaboradores de PAY&PLAY S.A.S., asegurando que el tratamiento de datos personales se realice conforme a los principios de legalidad, proporcionalidad, minimización, confidencialidad y responsabilidad establecidos en la normativa ecuatoriana.")
    ]
  },
  {
    title: "III. Datos personales que se tratarán",
    blocks: [
      paragraph("En base a la normativa aplicable, no solo se debe realizar el tratamiento de datos personales de EL CLIENTE, sino también de personas en calidad de PROVEEDORES. En este sentido:"),
      paragraph("Conforme al artículo 12 de la LOPDP, se informa al CLIENTE que PAY&PLAY trata:"),
      list("Datos de identidad: cédula, nombres, entre otros datos que requieren consentimiento explícito por parte del titular conforme lo establece el artículo 26 de la LOPDP.", "Datos de contacto: teléfono, dirección y referencias.", "Datos crediticios: pagos e historial contractual, conforme a lo establecido en los artículos 28 y 29 de la LOPDP."),
      paragraph("Todo ello con el fin de ejecutar la correcta facturación, registro de pago, gestión de cobranza, promoción comercial, servicio al cliente y administración de relaciones comerciales."),
      paragraph("Se informa a los PROVEEDORES, sean personas naturales o jurídicas, que, para efectos de una correcta relación comercial, proporcionarán información concerniente a la compañía y/o giro de su negocio, tales como:"),
      list("Si fuese persona natural: nombres, apellidos y cédula; si fuese persona jurídica: nombre de la compañía, RUC, dirección domiciliaria y otros datos relacionados directamente con el contexto comercial.")
    ]
  },
  {
    title: "IV. Consentimiento",
    blocks: [
      paragraph("Sin perjuicio de las excepciones previstas en la Ley Orgánica de Protección de Datos Personales, PAY&PLAY S.A.S. se compromete a tratar, almacenar, utilizar y, cuando corresponda, comunicar datos personales únicamente cuando cuente con una base de legitimación válida y, en los casos que así lo exija la normativa, con la manifestación expresa de la voluntad del titular.")
    ]
  },
  {
    title: "V. Base legal que sustenta el tratamiento de datos",
    blocks: [
      paragraph("Para efectos del tratamiento de datos personales, se basará en la siguiente normativa aplicable:"),
      list("Ley Orgánica de Protección de Datos Personales (LOPDP).", "Reglamento General de Protección de Datos Personales (RGLOPDP).", "Ley de Comercio Electrónico, Firmas y Mensajes de Datos.", "Demás normativa aplicable en la materia.")
    ]
  },
  {
    title: "VI. Finalidad del tratamiento de datos personales",
    blocks: [
      paragraph("PAY&PLAY informa que los datos personales recopilados a través de sus canales y tiendas afiliadas se tratarán únicamente con legitimidad y conforme a la Ley Orgánica de Protección de Datos Personales. Los datos aportados por los titulares se utilizarán, de manera exclusiva, para la evaluación y análisis de solicitudes de crédito, así como para la gestión administrativa derivada de dichos procesos."),
      paragraph("La finalidad general del tratamiento de los datos personales es:"),
      list("Cumplir con obligaciones legales y regulatorias de la normativa aplicable.", "Atender requerimientos realizados por autoridades competentes.", "Ejecutar procesos precontractuales y contractuales relacionados con la solicitud y otorgamiento de crédito.", "Proteger intereses vitales del titular en el marco de la relación crediticia.", "Satisfacer intereses legítimos de PAY&PLAY vinculados a la gestión, mejora, prestación y seguimiento de sus servicios."),
      paragraph("El tratamiento de los datos personales podrá incluir finalidades adicionales, siempre justificadas por el consentimiento explícito del titular o por la legitimación que confieren las leyes y disposiciones normativas aplicables, de acuerdo con los supuestos de licitud previstos en el artículo 7 de la LOPDP."),
      paragraph("Una vez cumplida la finalidad para la cual fueron recopilados, los datos personales serán conservados únicamente por el tiempo necesario para atender obligaciones legales o contractuales y posteriormente eliminados de manera segura, conforme a los protocolos internos de PAY&PLAY.")
    ]
  },
  {
    title: "VII. Duración",
    blocks: [
      paragraph("Los datos personales proporcionados por el Titular serán conservados durante el tiempo estrictamente necesario para cumplir con las finalidades para las cuales fueron recopilados y tratados, y/o mientras el Titular no revoque el consentimiento otorgado."),
      paragraph("Datos de Clientes: serán conservados mientras dure la relación contractual y/o comercial y por un periodo máximo de cinco años para cumplir con las obligaciones legales y fiscales, así como para la atención o defensa frente a eventuales reclamaciones. Los datos relacionados con obligaciones fiscales se conservarán por un periodo de siete años para cumplir con las disposiciones de la normativa tributaria."),
      paragraph("Datos de Proveedores: serán conservados mientras dure la relación contractual y/o comercial y por un periodo máximo de siete años para acatar las disposiciones legales o fiscales, así como para la atención o defensa frente a eventuales reclamaciones."),
      paragraph("Datos tratados con fines de Marketing y Publicidad: los datos personales recopilados para actividades de marketing, prospección comercial o publicidad serán tratados hasta que el Titular revoque su consentimiento, ejerza su derecho de oposición o se rija por lo establecido en el artículo 10, literal i, lo que ocurra primero."),
      paragraph("Salvo que exista una obligación legal o regulatoria que disponga su conservación, el Titular podrá solicitar en cualquier momento la supresión o eliminación de sus datos personales. En caso de presentarse dicha solicitud y de ser procedente conforme a la normativa aplicable, PAY&PLAY procederá con la eliminación de la información o, cuando corresponda, facilitará al Titular el ejercicio del derecho a la portabilidad de sus datos personales. La conservación de la información se mantendrá únicamente durante los plazos previamente establecidos, quedando la compañía exenta de responsabilidad judicial o extrajudicial cuando actúe conforme a la solicitud del Titular y al marco normativo vigente.")
    ]
  },
  {
    title: "VIII. Anonimización de datos",
    blocks: [
      paragraph("Concluidos los períodos de conservación establecidos, los datos personales serán sometidos a procesos de supresión o transformación mediante técnicas de anonimización que impidan la identificación del Titular. Dichos procedimientos se ejecutarán bajo estándares de seguridad adecuados y en observancia de los principios de minimización y limitación del plazo de almacenamiento previstos en la legislación vigente y su normativa complementaria.")
    ]
  },
  {
    title: "IX. Alcance y aplicabilidad",
    blocks: [
      paragraph("La presente Política es aplicable a todo tratamiento de datos personales realizado por PAY&PLAY S.A.S., en calidad de Responsable del Tratamiento, en el desarrollo de sus actividades comerciales, tecnológicas y de evaluación de riesgo crediticio, comprendiendo la recopilación, registro, organización, conservación, consulta, análisis, utilización, comunicación, transferencia y supresión de datos personales de clientes, usuarios, potenciales clientes, proveedores, empleados y terceros vinculados, incluyendo datos identificativos, de contacto, financieros y crediticios. Este tratamiento podrá efectuarse a través de medios físicos o digitales y plataformas tecnológicas propias, dentro del territorio ecuatoriano, siempre bajo los principios y disposiciones establecidos en la normativa vigente en materia de protección de datos personales.")
    ]
  },
  {
    title: "X. Derecho del titular",
    blocks: [
      paragraph("PAY&PLAY S.A.S. garantizará el ejercicio de:"),
      list(
        { text: "a) Acceso: el titular de los datos personales puede conocer, obtener y solicitar a PAY&PLAY la información que se está tratando." },
        { text: "b) Rectificación y actualización: el titular de los datos personales puede solicitar que modifiquen o actualicen sus datos personales." },
        { text: "c) Eliminación: el titular de los datos puede solicitar la eliminación de los datos personales que PAY&PLAY posea, siempre que ya no sean necesarios para las finalidades de uso." },
        { text: "d) Suspensión: el titular de los datos puede solicitar el cese temporal del tratamiento de sus datos personales en los siguientes casos:", children: ["Impugna la exactitud de sus datos personales, mientras el responsable del tratamiento verifica su exactitud.", "El tratamiento sea ilícito y el titular de datos se oponga a la supresión de los datos personales y solicite en su lugar la limitación de su uso.", "El responsable ya no necesite tratar los datos personales, pero el titular de datos los necesite para la formulación, el ejercicio o la defensa de reclamaciones."] },
        { text: "e) Oposición: el titular tiene derecho a oponerse o negarse al tratamiento de sus datos personales en los siguientes casos:", children: ["Cuando no se afecten derechos y libertades fundamentales de terceros, la ley lo permita y no se trate de información pública, de interés público o cuyo tratamiento esté ordenado por la ley.", "Cuando el tratamiento de datos personales tenga por objeto la mercadotecnia directa; el interesado tendrá derecho a oponerse en todo momento al tratamiento de los datos personales que le conciernan, incluida la elaboración de perfiles. En cuyo caso, los datos personales dejarán de ser tratados para dichos fines.", "Cuando no sea necesario su consentimiento para el tratamiento como consecuencia de la concurrencia de un interés legítimo, previsto en el artículo 7 de la LOPDP, y se justifique en una situación concreta personal del titular, siempre que una ley no disponga lo contrario."] },
        { text: "f) A no ser objeto de una decisión basada única o parcialmente en valoraciones automatizadas." }
      )
    ]
  },
  {
    title: "XI. Repositorio de datos personales",
    blocks: [
      paragraph("Los datos personales proporcionados serán almacenados, organizados y protegidos dentro de las bases de datos personales administradas por PAY&PLAY, las cuales contarán con las medidas técnicas, organizativas y legales necesarias para garantizar su confidencialidad, integridad, disponibilidad y seguridad, conforme a la normativa vigente en materia de protección de datos personales.")
    ]
  },
  {
    title: "XII. Transferencia y comunicación de datos personales",
    blocks: [
      paragraph("Se informa al Titular que sus datos personales podrán ser compartidos con terceros, tales como proveedores de servicios, entidades públicas o socios comerciales, para fines relacionados con la relación contractual con PAY&PLAY y en cumplimiento de la normativa aplicable."),
      paragraph("El Titular reconoce que dichos terceros podrán corresponder a aliados estratégicos que proveen productos y/o servicios, con quienes PAY&PLAY mantiene convenios establecidos para fines comerciales, analíticos, logísticos, administrativos y financieros."),
      paragraph("PAY&PLAY podrá comunicar datos personales a terceros mediante los distintos canales de atención habilitados para la interacción con el Titular. Dichas comunicaciones se efectuarán observando las disposiciones establecidas en la normativa vigente sobre protección de datos personales, las cuales el Titular declara conocer y aceptar."),
      paragraph("Las solicitudes relacionadas con el ejercicio de los derechos del Titular serán tramitadas conforme a la legislación aplicable, siempre que no se configure alguna de las limitaciones o excepciones previstas en el artículo 36 de la Ley Orgánica de Protección de Datos Personales.")
    ]
  },
  {
    title: "XIII. Seguridad",
    blocks: [
      paragraph("PAY&PLAY implementa medidas técnicas, organizativas y físicas para garantizar la protección de datos del titular, a fin de evitar eventualidades que lo perjudiquen, además de las establecidas en la normativa aplicable, cumpliendo con lo dispuesto en la LOPDP y su respectivo reglamento."),
      paragraph("De conformidad con lo establecido en la presente Política de Datos Personales, PAY&PLAY se abstendrá de divulgar, transferir, comercializar, ceder o arrendar a terceros la información personal recopilada para fines promocionales, sin contar previamente con el consentimiento expreso del Titular de los datos."),
      paragraph("En caso de vulneración a la seguridad de datos personales, se procederá conforme lo exprese la normativa aplicable."),
      paragraph("En el evento de que PAY&PLAY participe en procesos de reorganización corporativa, integración empresarial, cesión de activos, transferencia de operaciones, adquisición, disolución o liquidación, los datos personales recopilados podrán ser incluidos dentro de los activos involucrados en dichas operaciones. Esta información podrá comprender, entre otros, datos de identificación, contacto y cualquier otro dato proporcionado a través de canales digitales, presenciales o de atención al cliente."),
      paragraph("La organización que asuma la operación, continuidad del negocio o adquisición de activos deberá respetar las condiciones de tratamiento de datos personales establecidas en esta política, garantizando el cumplimiento de la legislación vigente y manteniendo las medidas de seguridad y confidencialidad correspondientes."),
      paragraph("Medidas de seguridad que se aplican para la protección del tratamiento de datos personales:"),
      heading("Controles de Acceso y Gestión de Identidades"),
      paragraph("Administración de accesos y privilegios: PAY&PLAY implementa mecanismos formales de control de acceso a la información mediante la asignación de permisos basados en funciones, perfiles y responsabilidades laborales. El acceso a datos personales se limita estrictamente bajo el principio de necesidad, garantizando que los usuarios únicamente accedan a la información requerida para el cumplimiento de sus funciones autorizadas."),
      heading("Seguridad de Sistemas y Protección de Infraestructura Tecnológica"),
      paragraph("Protección de la red y sistemas de información: se implementan mecanismos de seguridad orientados a proteger la infraestructura tecnológica frente a accesos no autorizados, intrusiones, alteraciones o pérdida de información, tales como firewalls y firmware."),
      paragraph("Gestión de actualizaciones y vulnerabilidades: PAY&PLAY mantiene procedimientos de actualización continua de sistemas operativos, aplicaciones, plataformas tecnológicas y herramientas informáticas, mediante la instalación oportuna de parches de seguridad y mejoras técnicas, con el propósito de mitigar vulnerabilidades, prevenir incidentes de seguridad y asegurar la integridad de los datos personales tratados."),
      heading("Gestión de Continuidad, Respaldo y Recuperación de Información"),
      paragraph("Respaldo de la información: se ejecutan procesos periódicos de copias de seguridad de la información que contenga datos personales, garantizando su almacenamiento en entornos seguros, tanto físicos como virtuales."),
      paragraph("Recuperación y disponibilidad: PAY&PLAY mantiene procedimientos destinados a asegurar la recuperación oportuna de la información ante incidentes tecnológicos, eventos de seguridad o interrupciones operativas, garantizando la disponibilidad, integridad y confidencialidad de los datos personales."),
      heading("Medidas Organizativas de Seguridad de la Información"),
      paragraph("Gobernanza, Políticas y Procedimientos de Protección de Datos: PAY&PLAY establece, documenta, implementa y comunica políticas internas destinadas a garantizar la protección de datos personales y la seguridad de la información. Estas políticas definen los lineamientos, responsabilidades y controles aplicables al tratamiento de datos personales, asegurando su cumplimiento conforme a la normativa vigente y a los principios de confidencialidad, integridad y disponibilidad de la información."),
      heading("Gestión del Talento Humano y Cultura de Seguridad"),
      paragraph("Capacitación y formación del personal: PAY&PLAY desarrolla programas periódicos de capacitación dirigidos a empleados, colaboradores y personal vinculado, enfocados en buenas prácticas de seguridad de la información, protección de datos personales y cumplimiento normativo."),
      paragraph("Concienciación sobre amenazas informáticas: se ejecutan campañas internas orientadas a fortalecer la cultura organizacional en materia de seguridad digital, incluyendo la prevención, detección y respuesta frente a ataques de phishing, ingeniería social y otras amenazas tecnológicas."),
      heading("Gestión y Control de Terceros y Proveedores"),
      paragraph("Evaluación de proveedores: PAY&PLAY aplica procesos de evaluación y verificación para asegurar que los proveedores, aliados estratégicos y terceros que tengan acceso a datos personales cumplan con estándares adecuados de seguridad de la información y protección de datos."),
      paragraph("Acuerdos contractuales de protección de datos: se formalizan instrumentos contractuales que incorporan obligaciones específicas relacionadas con confidencialidad, seguridad de la información, tratamiento de datos personales y cumplimiento de la normativa aplicable."),
      heading("Gestión de Riesgos y Cumplimiento Normativo"),
      paragraph("PAY&PLAY ejecuta evaluaciones periódicas de riesgos relacionadas con el tratamiento de datos personales, con el propósito de identificar vulnerabilidades, implementar medidas de mitigación y verificar el cumplimiento de las obligaciones legales y regulatorias en materia de protección de datos y seguridad de la información."),
      heading("Control y Protección de Información en Soportes Físicos"),
      paragraph("Almacenamiento seguro de documentación física: los documentos físicos que contengan datos personales son resguardados en espacios con controles de acceso restringido y mecanismos de seguridad adecuados para prevenir accesos no autorizados, pérdida o deterioro de la información."),
      paragraph("Eliminación y destrucción segura de información: PAY&PLAY aplica procedimientos controlados para la destrucción segura de documentos físicos que contengan datos personales cuando estos han cumplido su finalidad o han superado los plazos de conservación establecidos.")
    ]
  },
  {
    title: "XIV. Divulgación y tratamientos posteriores de datos",
    blocks: [
      paragraph("PAY&PLAY garantiza que los datos personales proporcionados por el Titular no serán divulgados, cedidos o comunicados a terceros sin contar previamente con un consentimiento válido, libre, informado y expreso, salvo en los casos en que la ley permita o exija dicho tratamiento."),
      paragraph("De manera excepcional, los datos personales podrán ser comunicados sin requerir autorización previa del Titular en los siguientes supuestos:"),
      list("1. Cuando exista un requerimiento formal por parte de autoridades administrativas, judiciales o de control, emitido dentro del ámbito de sus competencias legales y conforme a las disposiciones normativas aplicables.", "2. Cuando la información sea solicitada para fines históricos, estadísticos o científicos por autoridades competentes, siempre que los datos personales se encuentren previamente disociados, anonimizados o tratados de forma que no permitan la identificación del Titular.", "3. Cuando la entrega de información sea exigida por disposiciones legales, regulatorias o mandatos normativos vigentes."),
      paragraph("El consentimiento otorgado por el Titular podrá ser retirado en cualquier momento, sin necesidad de expresar causa, siempre que el tratamiento de los datos personales no se fundamente en disposiciones legales vigentes u otra base legítima que obligue a su conservación o tratamiento.")
    ]
  },
  {
    title: "XV. Revocatoria del consentimiento",
    blocks: [
      paragraph("El Titular podrá retirar en cualquier momento la autorización otorgada para el tratamiento de sus datos personales, conforme a lo establecido en el artículo 8 de la Ley Orgánica de Protección de Datos Personales, sin necesidad de justificar su decisión. Para ello, PAY&PLAY pone a disposición mecanismos accesibles, gratuitos y eficientes que permiten ejercer este derecho. Una vez presentada la solicitud de revocatoria, cesará el tratamiento de los datos personales, sin perjuicio de que las actividades realizadas con anterioridad al retiro del consentimiento se consideren válidas y lícitas conforme a la normativa vigente."),
      paragraph("Para solicitar la revocatoria del consentimiento, el Titular podrá remitir una solicitud a través del correo electrónico administracion@payplay-ec.com o presentarla de forma física en cualquiera de los establecimientos o puntos de atención habilitados por la compañía."),
      paragraph("La solicitud deberá contener, como mínimo, la identificación del Titular, incluyendo su nombre completo y dirección de correo electrónico u otro medio válido para recibir notificaciones."),
      paragraph("También deberá incluir documentación que permita verificar la identidad del solicitante y, de ser el caso, la acreditación de su representante legal o autorizado."),
      paragraph("Deberá contener una descripción clara y específica de los datos personales respecto de los cuales se solicita la revocatoria, así como la petición concreta."),
      paragraph("Con el fin de facilitar el ejercicio de este derecho, PAY&PLAY podrá poner a disposición de los Titulares formularios o formatos de solicitud a través de sus canales oficiales o en sus instalaciones físicas."),
      paragraph("Sin perjuicio de la revocatoria solicitada, PAY&PLAY podrá conservar determinada información del Titular cuando resulte necesario para el cumplimiento de obligaciones legales, regulatorias o para la atención y defensa ante eventuales reclamaciones, de conformidad con la legislación ecuatoriana aplicable."),
      paragraph("En caso de que el Titular considere que sus derechos no han sido atendidos adecuadamente, podrá presentar la correspondiente reclamación ante la Autoridad Nacional de Protección de Datos Personales.")
    ]
  },
  {
    title: "XVI. Actualizaciones y modificaciones de la Política de Tratamiento de Datos Personales",
    blocks: [
      paragraph("PAY&PLAY se reserva el derecho de revisar, actualizar o modificar la presente Política de Tratamiento de Datos Personales cuando lo considere necesario, con el fin de ajustarla a cambios normativos, criterios jurisprudenciales, mejoras operativas o nuevas prácticas en materia de tratamiento de datos personales."),
      paragraph("Las modificaciones entrarán en vigor a partir de su publicación a través de los canales oficiales de comunicación de la compañía, los cuales podrán incluir, entre otros, su página web institucional, medios digitales, redes sociales, comunicaciones electrónicas o cualquier otro mecanismo que PAY&PLAY determine para informar a los Titulares.")
    ]
  },
  {
    title: "XVII. Responsabilidad",
    blocks: [
      paragraph("PAY&PLAY S.A.S. será responsable únicamente del tratamiento y uso de los datos personales que haya obtenido de manera directa y legítima en el marco de sus actividades y conforme a las bases legales aplicables. En consecuencia, no asume responsabilidad respecto de la veracidad, exactitud o actualización de la información que provenga de terceros, ni del contenido, políticas o prácticas de privacidad de enlaces externos o sitios web ajenos a su administración.")
    ]
  },
  {
    title: "XVIII. Aceptación",
    blocks: [
      paragraph("El Titular declara que ha sido debidamente informado sobre el tratamiento de sus datos personales y, en consecuencia, otorga su autorización de forma libre, específica, informada e inequívoca, conforme a lo dispuesto en la Ley Orgánica de Protección de Datos Personales y su normativa complementaria, para que PAY&PLAY trate dicha información dentro de las finalidades y condiciones establecidas en el presente documento."),
      paragraph("Asimismo, el Titular manifiesta haber recibido información clara respecto de los derechos que le asisten en relación con sus datos personales, así como sobre su almacenamiento, uso y administración dentro de las bases de datos bajo responsabilidad de PAY&PLAY."),
      paragraph("De igual manera, reconoce que su información podrá ser compartida con terceros vinculados al desarrollo del objeto social y a la prestación de los servicios ofrecidos por PAY&PLAY, dentro del marco legal aplicable, por lo que autoriza expresamente el tratamiento de los datos personales que ha proporcionado."),
      paragraph("La suscripción de cualquier contrato con PAY&PLAY S.A.S., la recepción del dispositivo o la realización de cualquier pago por parte del CLIENTE implicará la aceptación expresa, íntegra y sin reservas de la presente Política de Tratamiento de Datos Personales.")
    ]
  }
];
