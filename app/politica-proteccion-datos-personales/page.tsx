import Link from "next/link";
import { LegalText, LegalViewer } from "../components/LegalViewer";

type PolicySection = {
  title: string;
  subtitle?: string;
  paragraphs?: string[];
  items?: string[];
  afterListText?: string;
  afterListItems?: string[];
  itemsWithParagraphs?: {
    title: string;
    paragraph: string;
    contactDetails?: string[];
  }[];
};

const policySections: PolicySection[] = [
  {
    title: "I. IDENTIFICACIÓN DE LAS PARTES",
    paragraphs: [
      "Ambas partes, en conjunto, se denominarán LAS PARTES.",
      "La siguiente Política de Protección de Datos Personales debe leerse íntegra y cuidadosamente por los titulares y, al momento en que el titular acepta la presente política, se rige jurídicamente por las presentes condiciones.",
    ],
    itemsWithParagraphs: [
      {
        title: "1. RESPONSABLE DEL TRATAMIENTO DE DATOS PERSONALES.",
        paragraph: "PAY&PLAY SOCIEDAD POR ACCIONES SIMPLIFICADAS, con RUC Nro. 1793204652001, en su calidad de Responsable del Tratamiento de Datos Personales, tiene como datos de contacto el correo electrónico administracion@payplay-ec.com, teléfono 0961141882 y domicilio en Avenida Amazonas y Naciones Unidas, Edificio Unicornio Empresarial II, piso 15avo, Quito, Ecuador. Para efectos del presente instrumento se denominará PAY&PLAY o LA EMPRESA.",
      },
      {
        title: "2. TITULAR DEL TRATAMIENTO DE DATOS PERSONALES.",
        paragraph: "EL CLIENTE se considerará titular del tratamiento de datos personales cuando sea la persona natural a la que correspondan los datos objeto de recolección, uso o cualquier otra forma de tratamiento.",
      },
      {
        title: "3. DELEGADO DE PROTECCIÓN DE DATOS PERSONALES.",
        paragraph: "PAY&PLAY S.A.S. ha designado un Delegado de Protección de Datos Personales, cuya información de contacto es la siguiente:",
        contactDetails: [
          "Nombre: Dennis Ariel Chugchilan Chicaiza.",
          "Dirección: Avenida Amazonas y Naciones Unidas, Edificio Unicornio Empresarial II, piso 15avo, Quito, Ecuador.",
          "Correo: dchugchilan@payplay-ec.com.",
        ],
      },
    ],
  },
  {
    title: "II. OBJETO",
    paragraphs: [
      "La presente Política de Protección de Datos Personales tiene por objeto establecer los principios, lineamientos, responsabilidades y mecanismos adoptados por PAY&PLAY S.A.S. para garantizar el tratamiento lícito, leal, transparente y seguro de los datos personales, en cumplimiento de la Ley Orgánica de Protección de Datos Personales y demás normativa aplicable en el Ecuador.",
      "Esta Política tiene como finalidad asegurar la protección de los derechos y libertades de los titulares, especialmente en lo relacionado con el tratamiento de datos identificativos, financieros y crediticios derivados de los servicios tecnológicos y de evaluación de riesgo crediticio que realiza la Compañía.",
    ],
  },
  {
    title: "III. NORMATIVA APLICABLE",
    paragraphs: ["La normativa aplicable al presente instrumento es la siguiente:"],
    items: [
      "Ley Orgánica de Protección de Datos Personales (LOPDP).",
      "Reglamento General de Protección de Datos Personales (RGLOPDP).",
      "Ley de Comercio Electrónico, Firmas y Mensajes de Datos.",
      "Demás normativa aplicable en la materia.",
    ],
  },
  {
    title: "IV. PROTECCIÓN DE DATOS PERSONALES",
    subtitle: "TITULAR DE PROTECCIÓN DE DATOS:",
    paragraphs: [
      "En cumplimiento de la Ley Orgánica de Protección de Datos Personales, publicada en el Registro Oficial Suplemento 459 de fecha 26 de mayo de 2021, y su respectivo Reglamento, PAY&PLAY informa a sus usuarios los términos y condiciones bajo los cuales realiza el tratamiento de los datos personales recopilados a través de sus canales habilitados para atención al cliente.",
      "El tratamiento tiene como finalidad ofrecer, comercializar y promover productos y servicios propios y de aliados estratégicos. Comprende información obtenida de fuentes de acceso público o autorizadas, así como aquella recolectada mediante canales electrónicos, plataformas tecnológicas propias o administradas por redes y terceros vinculados, en cumplimiento de la normativa vigente.",
      "Se entenderá como titular de protección de datos a la persona natural a quien corresponden los datos personales objeto de recopilación y tratamiento.",
      "El tratamiento se realizará únicamente respecto de datos para los cuales se haya obtenido consentimiento previo, libre, específico, informado e inequívoco, salvo las excepciones u otras bases previstas en la LOPDP.",
    ],
  },
  {
    title: "V. DATOS PERSONALES QUE SE TRATARÁN",
    paragraphs: [
      "En base a la normativa aplicable, no solo se debe realizar el tratamiento de datos personales de EL CLIENTE, sino también de personas en calidad de PROVEEDORES. En este sentido:",
      "Conforme al artículo 12 de la LOPDP, se informa al CLIENTE que PAY&PLAY trata:",
    ],
    items: [
      "Datos de identidad: cédula, nombres y otros datos que requieren consentimiento explícito del titular conforme al artículo 26 de la LOPDP.",
      "Datos de contacto: teléfono, dirección y referencias.",
      "Datos crediticios: pagos e historial contractual, conforme a los artículos 28 y 29 de la LOPDP.",
    ],
    afterListText: "Se informa a los PROVEEDORES sea persona natural o jurídica, que, para efectos de una correcta relación comercial, proporcionara información concerniente a la compañía y/o giro de su negocio, tales como:",
    afterListItems: [
      "Si fuese persona natural: nombres, apellidos y cédula.",
      "Si fuese persona jurídica: nombre de la compañía, RUC, dirección domiciliaria y otros datos relacionados directamente con el contexto comercial.",
    ],
  },
  {
    title: "VI. OBTENCIÓN DE DATOS PERSONALES",
    paragraphs: ["Los datos personales de los titulares se obtendrán de las siguientes formas:"],
    items: [
      "Directamente de los titulares, para solicitar o dar seguimiento a un servicio o derecho, por medios físicos, telefónicos o digitales.",
      "Cuando sean generados como consecuencia de una solicitud, mediante operaciones técnicas realizadas sobre datos personales.",
      "De bases de datos de acceso público.",
      "De instituciones públicas nacionales cuando exista una obligación legal.",
      "De plataformas web o redes sociales.",
      "De tiendas afiliadas.",
    ],
  },
  {
    title: "VII. FINES DEL TRATAMIENTO DE DATOS PERSONALES",
    paragraphs: [
      "PAY&PLAY informa que los datos personales recopilados a través de sus canales y tiendas afiliadas se tratarán con legitimidad y conforme a la LOPDP. Los datos aportados por los titulares se utilizarán exclusivamente para la evaluación y análisis de solicitudes de crédito y para la gestión administrativa derivada de dichos procesos.",
      "La finalidad general del tratamiento de los datos personales comprende:",
    ],
    items: [
      "Cumplir obligaciones legales y regulatorias aplicables al sector financiero y crediticio.",
      "Atender requerimientos realizados por autoridades competentes.",
      "Ejecutar procesos precontractuales y contractuales relacionados con la solicitud y otorgamiento de crédito.",
      "Proteger intereses vitales del titular en el marco de la relación crediticia.",
      "Satisfacer intereses legítimos de PAY&PLAY vinculados a la gestión, mejora, prestación y seguimiento de sus servicios financieros.",
    ],
  },
  {
    title: "VIII. DURACIÓN",
    paragraphs: [
      "Los datos personales proporcionados por el titular serán conservados durante el tiempo estrictamente necesario para cumplir las finalidades para las cuales fueron recopilados y tratados, o mientras el titular no revoque el consentimiento otorgado.",
      "Los datos de clientes serán conservados mientras dure la relación contractual o comercial y por un periodo máximo de cinco años para cumplir obligaciones legales y fiscales, así como para atender o defender eventuales reclamaciones. Los datos relacionados con obligaciones fiscales se conservarán por siete años conforme a la normativa tributaria.",
      "Los datos de proveedores serán conservados mientras dure la relación contractual o comercial y por un periodo máximo de siete años para cumplir disposiciones legales o fiscales y atender eventuales reclamaciones.",
      "Los datos tratados con fines de marketing y publicidad serán conservados hasta que el titular revoque su consentimiento, ejerza su derecho de oposición o se cumpla lo establecido en el artículo 10, literal i, lo que ocurra primero.",
      "Salvo que exista una obligación legal o regulatoria que disponga su conservación, el titular podrá solicitar en cualquier momento la supresión o eliminación de sus datos personales. Si la solicitud resulta procedente, PAY&PLAY eliminará la información o facilitará, cuando corresponda, el ejercicio del derecho a la portabilidad.",
    ],
  },
  {
    title: "IX. ANONIMIZACIÓN DE DATOS",
    paragraphs: ["Concluidos los periodos de conservación establecidos, los datos personales serán sometidos a procesos de supresión o transformación mediante técnicas de anonimización que impidan identificar al titular. Estos procedimientos se ejecutarán bajo estándares adecuados de seguridad y observando los principios de minimización y limitación del plazo de almacenamiento."],
  },
  {
    title: "X. ALCANCE Y APLICABILIDAD",
    paragraphs: [
      "La presente Política de Protección de Datos Personales es de cumplimiento obligatorio y aplicación integral para todas las áreas, unidades y dependencias actuales y futuras de PAY&PLAY.",
      "Sus disposiciones serán aplicables a directivos, administradores, socios, empleados, contratistas y a toda persona natural o jurídica que preste servicios profesionales para la compañía, directa o indirectamente.",
      "Asimismo, esta política se extiende a proveedores, clientes y cualquier tercero que, en virtud de una relación contractual, comercial o de colaboración con PAY&PLAY, tenga acceso a datos personales, participe en su tratamiento o tenga la calidad de titular de dichos datos.",
    ],
  },
  {
    title: "XI. REPOSITORIO DE DATOS PERSONALES",
    paragraphs: ["Los datos personales proporcionados serán almacenados, organizados y protegidos dentro de las bases de datos administradas por PAY&PLAY, las cuales contarán con las medidas técnicas, organizativas y legales necesarias para garantizar su confidencialidad, integridad, disponibilidad y seguridad, conforme a la normativa vigente."],
  },
  {
    title: "XII. TRANSFERENCIA Y COMUNICACIÓN DE DATOS PERSONALES",
    paragraphs: [
      "Los datos personales podrán ser compartidos con terceros, tales como proveedores de servicios, entidades públicas o socios comerciales, para fines relacionados con la relación contractual con PAY&PLAY y en cumplimiento de la normativa aplicable.",
      "Dichos terceros podrán ser aliados estratégicos que proveen productos o servicios y con quienes PAY&PLAY mantiene convenios para fines comerciales, analíticos, logísticos, administrativos y financieros.",
      "PAY&PLAY podrá comunicar datos personales a terceros mediante los canales de atención habilitados para interactuar con el titular, observando las disposiciones vigentes sobre protección de datos personales.",
      "Las solicitudes relacionadas con el ejercicio de derechos del titular serán tramitadas conforme a la legislación aplicable, salvo las limitaciones o excepciones previstas en el artículo 36 de la LOPDP.",
    ],
  },
  {
    title: "XIII. SEGURIDAD",
    paragraphs: [
      "PAY&PLAY implementa medidas técnicas, organizativas y físicas para garantizar la protección de los datos del titular y evitar eventualidades que puedan perjudicarlo, cumpliendo la LOPDP y su Reglamento.",
      "PAY&PLAY se abstendrá de divulgar, transferir, comercializar, ceder o arrendar a terceros la información personal recopilada para fines promocionales sin contar previamente con el consentimiento expreso del titular. En caso de vulneración de la seguridad de datos personales, se procederá conforme a la normativa aplicable.",
      "En procesos de reorganización corporativa, integración empresarial, cesión de activos, transferencia de operaciones, adquisición, disolución o liquidación, los datos personales podrán incluirse entre los activos involucrados. La organización que asuma la operación deberá respetar las condiciones de tratamiento establecidas en esta política.",
      "PAY&PLAY aplica controles de acceso y gestión de identidades, protección de redes y sistemas, actualización frente a vulnerabilidades, copias de seguridad, procedimientos de recuperación, políticas internas, capacitación del personal, evaluación de proveedores, acuerdos contractuales de protección de datos, gestión de riesgos y controles para el almacenamiento y destrucción segura de documentos físicos.",
    ],
  },
  {
    title: "XIV. DIVULGACIÓN Y TRATAMIENTOS POSTERIORES DE DATOS",
    paragraphs: [
      "PAY&PLAY garantiza que los datos personales proporcionados por el titular no serán divulgados, cedidos o comunicados a terceros sin consentimiento válido, libre, informado y expreso, salvo cuando la ley permita o exija el tratamiento.",
      "De manera excepcional, los datos podrán comunicarse sin autorización previa en los siguientes supuestos:",
    ],
    items: [
      "Cuando exista un requerimiento formal de autoridades administrativas, judiciales o de control dentro de sus competencias legales.",
      "Cuando la información sea solicitada para fines históricos, estadísticos o científicos por autoridades competentes y los datos estén disociados o anonimizados.",
      "Cuando la entrega sea exigida por disposiciones legales, regulatorias o mandatos normativos vigentes.",
    ],
  },
  {
    title: "XV. REVOCATORIA DEL CONSENTIMIENTO",
    paragraphs: [
      "El titular podrá retirar en cualquier momento la autorización otorgada para el tratamiento de sus datos personales, conforme al artículo 8 de la LOPDP, sin necesidad de justificar su decisión. PAY&PLAY pone a disposición mecanismos accesibles, gratuitos y eficientes para ejercer este derecho.",
      "Para solicitar la revocatoria, el titular podrá enviar una solicitud al correo administracion@payplay-ec.com o presentarla físicamente en los establecimientos o puntos de atención habilitados por la compañía.",
      "La solicitud deberá contener como mínimo la identificación del titular, nombre completo, correo u otro medio para notificaciones, documentación que permita verificar su identidad y una descripción clara de los datos y la petición concreta.",
      "PAY&PLAY podrá conservar determinada información cuando sea necesario para cumplir obligaciones legales o regulatorias, o para atender y defenderse ante eventuales reclamaciones. Si el titular considera que sus derechos no fueron atendidos adecuadamente, podrá presentar una reclamación ante la Autoridad Nacional de Protección de Datos Personales.",
    ],
  },
  {
    title: "XVI. ACTUALIZACIONES Y MODIFICACIONES DE LA POLÍTICA DE PROTECCIÓN DE DATOS PERSONALES",
    paragraphs: [
      "PAY&PLAY se reserva el derecho de revisar, actualizar o modificar esta Política cuando sea necesario para ajustarla a cambios normativos, criterios jurisprudenciales, mejoras operativas o nuevas prácticas en materia de tratamiento de datos personales.",
      "Las modificaciones entrarán en vigor a partir de su publicación en los canales oficiales de comunicación de la compañía, incluyendo su página web, medios digitales, redes sociales, comunicaciones electrónicas o cualquier otro mecanismo que PAY&PLAY determine.",
    ],
  },
  {
    title: "XVII. ACEPTACIÓN",
    paragraphs: [
      "El titular declara que ha sido informado sobre el tratamiento de sus datos personales y otorga su autorización de forma libre, específica, informada e inequívoca para que PAY&PLAY trate dicha información dentro de las finalidades y condiciones establecidas en este documento.",
      "El titular manifiesta haber recibido información clara sobre sus derechos, así como sobre el almacenamiento, uso y administración de sus datos dentro de las bases bajo responsabilidad de PAY&PLAY.",
      "Asimismo, reconoce que su información podrá ser compartida con terceros vinculados al desarrollo del objeto social y a la prestación de los servicios ofrecidos, dentro del marco legal aplicable, y autoriza expresamente el tratamiento de los datos personales proporcionados.",
      "La suscripción de cualquier contrato con PAY&PLAY S.A.S., la recepción del dispositivo o la realización de cualquier pago por parte del CLIENTE implicará la aceptación expresa, íntegra y sin reservas de la presente Política de Protección de Datos Personales.",
    ],
  },
];

export default function PoliticaProteccionDatosPersonalesPage() {
  return (
    <main className="min-h-screen bg-[rgb(18,18,18)] pt-28 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex flex-wrap items-center gap-3 text-sm text-zinc-400">
          <Link href="/" className="transition hover:text-white">Inicio</Link>
          <span>/</span>
          <span className="text-[rgb(217,61,47)]">Política de Protección de Datos Personales</span>
        </div>
      </div>

      <LegalViewer
        title="Política de Protección de Datos Personales"
        description="Conoce los principios, derechos, responsabilidades y medidas que PAY&PLAY aplica para proteger los datos personales."
        backHref="/"
        backLabel="Regresar"
      >
        <div className="space-y-8">
          {policySections.map((section) => (
            <section key={section.title} className="rounded-2xl border border-white/10 bg-white/3 p-5 sm:p-6">
              <h3 className="mb-4 text-lg font-black uppercase tracking-tight text-[rgb(217,61,47)] sm:text-xl">{section.title}</h3>
              <div className="space-y-4 text-sm leading-7 text-zinc-200 sm:text-base">
                {section.itemsWithParagraphs?.map((item) => (
                  <LegalText key={item.title} text={item.title} as="heading" className="space-y-2">
                    <p>{item.paragraph}</p>
                    {item.contactDetails && (
                      <ul className="ml-4 space-y-1 border-l border-white/10 pl-4 text-zinc-300 sm:ml-6 sm:pl-5">
                        {item.contactDetails.map((detail) => (
                          <li key={detail} className="list-disc">{detail}</li>
                        ))}
                      </ul>
                    )}
                  </LegalText>
                ))}

                {section.paragraphs?.map((paragraph, index) => (
                  <div key={paragraph}>
                    {section.subtitle && index === 2 && (
                      <h4 className="mb-2 font-bold text-[rgb(217,61,47)]">{section.subtitle}</h4>
                    )}
                    <LegalText text={paragraph} />
                  </div>
                ))}
                {section.items && (
                  <ul className="ml-4 space-y-3 border-l border-white/10 pl-4 sm:ml-6 sm:pl-5">
                    {section.items.map((item) => (
                      <li key={item} className="flex gap-3 leading-7">
                        <span className="mt-3 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[rgb(217,61,47)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {section.afterListText && <p>{section.afterListText}</p>}
                {section.afterListItems && (
                  <ul className="ml-4 space-y-3 border-l border-white/10 pl-4 sm:ml-6 sm:pl-5">
                    {section.afterListItems.map((item) => (
                      <li key={item} className="flex gap-3 leading-7">
                        <span className="mt-3 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[rgb(217,61,47)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          ))}
        </div>
      </LegalViewer>
    </main>
  );
}
