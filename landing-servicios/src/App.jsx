import './App.css'

const servicios = [
  {
    titulo: 'Web de captación lista en días',
    descripcion: 'Landing clara, rápida y orientada a convertir visitas en contactos reales.',
    precio: 'Desde 290€',
    plazo: 'o 3 pagos de 99€',
    icono: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4" y="6" width="16" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8 10h8M8 14h5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    titulo: 'Bot de atención y ventas',
    descripcion: 'Respuestas automáticas en WhatsApp y web para atender sin perder oportunidades.',
    precio: 'Desde 390€',
    plazo: 'o 3 pagos de 135€',
    icono: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 12a7 7 0 1 1 2.1 5L5 19l2.1-2A6.9 6.9 0 0 1 5 12Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
        <path d="M9 12h6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    titulo: 'Automatización de procesos',
    descripcion: 'Conecta formularios, CRM y avisos para ahorrar tiempo y evitar tareas manuales.',
    precio: 'Desde 490€',
    plazo: 'o 4 pagos de 129€',
    icono: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8 8h8v8H8z" fill="none" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M12 4v3M12 17v3M4 12h3M17 12h3" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
]

const beneficios = [
  {
    titulo: 'Mejor primera impresión',
    texto: 'Tu negocio se ve profesional desde el primer segundo y transmite confianza.',
    icono: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 7.5A2.5 2.5 0 0 1 5.5 5h13A2.5 2.5 0 0 1 21 7.5v9A2.5 2.5 0 0 1 18.5 19h-13A2.5 2.5 0 0 1 3 16.5v-9Z" fill="none" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M7 10h10M7 14h6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    titulo: 'Más mensajes y reservas',
    texto: 'Texto y estructura pensados para que el cliente te escriba o te llame.',
    icono: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 12a8 8 0 1 1 2.34 5.66L4 20l2.34-2.34A7.97 7.97 0 0 1 4 12Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
        <path d="M8.5 12h7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    titulo: 'Menos trabajo repetitivo',
    texto: 'Automatizamos tareas para que dediques tiempo a vender y gestionar mejor.',
    icono: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3v4M12 17v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M3 12h4M17 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="12" cy="12" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.8"/>
      </svg>
    ),
  },
]

const faqs = [
  {
    q: '¿Cuánto tardáis en entregar?',
    a: 'Un proyecto estándar suele tardar entre 2 y 4 semanas. Si incluye integraciones, automatizaciones complejas o varias revisiones, puede alargarse más.',
  },
  {
    q: '¿Se puede pagar a plazos?',
    a: 'Sí. En la mayoría de proyectos puedes pagarlo en 2, 3 o 4 cuotas. Lo definimos en la propuesta según alcance y calendario.',
  },
  {
    q: '¿Incluye soporte inicial?',
    a: 'Sí. Tras la entrega incluimos un periodo de soporte para ajustes menores, dudas de uso y pequeños retoques. Cambios de alcance o nuevas funcionalidades se presupuestan aparte.',
  },
  {
    q: '¿Qué necesitáis para empezar?',
    a: 'Principalmente, una llamada de 20 min para entender tu negocio y su momento actual. Según lo que detectemos en esa llamada, te pediremos los detalles concretos necesarios para avanzar.',
  },
]

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="m5 12 4 4 10-10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

function App() {
  return (
    <>
      {/* ── TOPBAR ── */}
      <header className="topbar">
        <div className="topbarInner">
          <div className="brand">
            <span className="logoMark" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <rect x="4.5" y="4.5" width="15" height="15" stroke="currentColor" strokeWidth="1" opacity=".35" />
                <path d="M12 4v16M4 12h16" stroke="currentColor" strokeWidth=".9" opacity=".28" />
                <path d="M7 7v10M7 12l8-5M7 12l8 5" stroke="currentColor" strokeWidth="1.9" strokeLinecap="square" strokeLinejoin="miter" />
                <path d="M15 7v10" stroke="currentColor" strokeWidth=".9" opacity=".55" />
                <circle cx="7" cy="7" r="0.9" fill="currentColor" />
                <circle cx="15" cy="7" r="0.9" fill="currentColor" />
                <circle cx="15" cy="17" r="0.9" fill="currentColor" />
              </svg>
            </span>
            <div>
              <p className="brandName">Kopa Studio</p>
              <p className="brandSub">Webs · Bots · Automatizaciones</p>
            </div>
          </div>
          <a className="btn ghost" href="https://wa.me/34606657631" target="_blank" rel="noreferrer">
            Contactar
          </a>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="hero">
        <div className="heroInner">
          <div className="heroText">
            <p className="kicker">Soluciones digitales para negocios</p>
            <h1>
              <span className="heroLine">Menos tareas manuales,</span>
              <span className="heroLine">más clientes.</span>
            </h1>
            <p className="subtitle">
              Diseñamos páginas web, bots y automatizaciones con foco en resultados: más contactos, menos tareas manuales y una imagen profesional.
            </p>
            <div className="ctaRow">
              <a className="btn primary" href="https://wa.me/34606657631?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20web%2C%20bot%20o%20automatizaci%C3%B3n" target="_blank" rel="noreferrer">
                Calcular presupuesto
              </a>
              <a className="btn ghost" href="#precios">Ver precios</a>
            </div>
          </div>

          {/* Panel derecho — resumen de servicios */}
          <div className="heroVisual" aria-hidden="true">
            <p className="heroVisualHeader">// servicios disponibles</p>

            <div className="heroCard">
              <span className="heroCardIcon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="4" y="6" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.8"/><path d="M8 10h8M8 14h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
              </span>
              <div className="heroCardBody">
                <p className="heroCardLabel">Web</p>
                <p className="heroCardTitle">Landing de captación</p>
                <p className="heroCardDesc">Diseño profesional orientado a convertir visitas en contactos.</p>
                <span className="heroBadge">Entrega en 2–4 semanas</span>
              </div>
              <div className="heroCardRight">
                <p className="heroCardValue">290€</p>
                <p className="heroCardSub">o 3 × 99€</p>
              </div>
            </div>

            <div className="heroCard">
              <span className="heroCardIcon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12a7 7 0 1 1 2.1 5L5 19l2.1-2A6.9 6.9 0 0 1 5 12Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/><path d="M9 12h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
              </span>
              <div className="heroCardBody">
                <p className="heroCardLabel">Bot IA</p>
                <p className="heroCardTitle">Atención automática 24/7</p>
                <p className="heroCardDesc">Responde en WhatsApp y web sin intervención manual.</p>
              </div>
              <div className="heroCardRight">
                <p className="heroCardValue">390€</p>
                <p className="heroCardSub">o 3 × 135€</p>
              </div>
            </div>

            <div className="heroCard">
              <span className="heroCardIcon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M8 8h8v8H8z" stroke="currentColor" strokeWidth="1.8"/><path d="M12 4v3M12 17v3M4 12h3M17 12h3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
              </span>
              <div className="heroCardBody">
                <p className="heroCardLabel">Automatización</p>
                <p className="heroCardTitle">Procesos sin fricciones</p>
                <p className="heroCardDesc">Conecta formularios, CRM y avisos para ahorrar tiempo.</p>
              </div>
              <div className="heroCardRight">
                <p className="heroCardValue">490€</p>
                <p className="heroCardSub">o 4 × 129€</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page">

        {/* ── OFFER ── */}
        <article className="launchOffer" id="oferta">
          <div className="offerLeft">
            <span className="offerRibbon">★ PROMO NUEVOS CLIENTES</span>
            <h3>Obtén un 20% de descuento</h3>
            <p>Promoción de bienvenida para nuevos clientes en su primer proyecto.</p>
            <div className="offerPoints">
              <span><CheckIcon />Válido para nuevas altas</span>
              <span><CheckIcon />Aplicable a web, bot o automatización</span>
            </div>
          </div>
          <a className="btn offerCta" href="https://wa.me/34606657631?text=Hola%2C%20quiero%20activar%20la%20oferta%20de%20nuevos%20clientes" target="_blank" rel="noreferrer">
            Activar oferta →
          </a>
        </article>

        {/* ── BENEFICIOS ── */}
        <section className="block blockTight" id="beneficios">
          <h2>¿Qué ganas trabajando con nosotros?</h2>
          <div className="grid3">
            {beneficios.map((item) => (
              <article className="card" key={item.titulo}>
                <div className="cardHeadInline">
                  <span className="iconWrap">{item.icono}</span>
                  <h3>{item.titulo}</h3>
                </div>
                <p>{item.texto}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ── PARA QUIÉN ── */}
        <section className="block" id="para-quien">
          <h2 className="titleWithIcon">
            <span className="titleIcon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="8" r="4" fill="none" stroke="currentColor" strokeWidth="1.8"/>
                <path d="M4 20c1.8-3.2 4.5-4.8 8-4.8s6.2 1.6 8 4.8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            </span>
            ¿Para quién es esto?
          </h2>
          <div className="grid2">
            <article className="card cardTint goodFit">
              <h3 className="listTitle">
                <span className="miniIcon" aria-hidden="true"><CheckIcon /></span>
                Ideal si...
              </h3>
              <ul className="listClean listGood">
                <li>Quieres más contactos sin depender solo de recomendaciones.</li>
                <li>Tu equipo pierde tiempo en respuestas repetitivas.</li>
                <li>Necesitas una web que explique bien tu servicio y convierta.</li>
              </ul>
            </article>
            <article className="card cardTint badFit">
              <h3 className="listTitle">
                <span className="miniIcon" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6 6 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                </span>
                No es para ti si...
              </h3>
              <ul className="listClean listBad">
                <li>Buscas empezar sin definir objetivos, oferta o prioridad de negocio.</li>
                <li>No tienes disponibilidad para una llamada inicial de 20 minutos.</li>
                <li>Prefieres hacerlo todo manual aunque te quite tiempo cada día.</li>
              </ul>
            </article>
          </div>
        </section>

        {/* ── PRECIOS ── */}
        <section className="block" id="precios">
          <h2>Precios claros, sin letra pequeña</h2>
          <p className="muted">Elige pago único o fraccionado. Ajustamos el alcance a tu presupuesto.</p>
          <div className="grid3">
            {servicios.map((item) => (
              <article className="card pricing" key={item.titulo}>
                <div className="cardHeadInline">
                  <span className="iconWrap">{item.icono}</span>
                  <h3>{item.titulo}</h3>
                </div>
                <p>{item.descripcion}</p>
                <p className="price">{item.precio}</p>
                <p className="plan">{item.plazo}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ── PROCESO ── */}
        <section className="block" id="proceso">
          <h2 className="titleWithIcon">
            <span className="titleIcon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M5 12h14M13 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            Proceso simple y rápido
          </h2>
          <ol className="steps">
            <li><strong>Diagnóstico breve:</strong> revisamos tu negocio y objetivos en una llamada corta.</li>
            <li><strong>Propuesta cerrada:</strong> precio, alcance y tiempos definidos desde el inicio.</li>
            <li><strong>Implementación:</strong> lanzamos, ajustamos y te dejamos todo listo para usar.</li>
          </ol>
        </section>

        {/* ── GARANTÍA ── */}
        <section className="block" id="garantia">
          <article className="guarantee">
            <h2>Garantía de claridad y arranque</h2>
            <div className="guaranteeList">
              <p className="guaranteeItem">
                <span className="guaranteeIcon" aria-hidden="true"><CheckIcon /></span>
                Cerramos por escrito alcance, precio y plazos antes de iniciar.
              </p>
              <p className="guaranteeItem">
                <span className="guaranteeIcon" aria-hidden="true"><CheckIcon /></span>
                Si la primera propuesta no encaja, hacemos una revisión completa sin coste.
              </p>
              <p className="guaranteeItem">
                <span className="guaranteeIcon" aria-hidden="true"><CheckIcon /></span>
                Cambios fuera de alcance o ampliaciones se presupuestan aparte.
              </p>
            </div>
          </article>
        </section>

        {/* ── FAQ ── */}
        <section className="block" id="faq">
          <h2>Preguntas frecuentes</h2>
          <div className="faqList">
            {faqs.map((item) => (
              <details key={item.q} className="faqItem">
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ── CONTACTO ── */}
        <section className="block contact" id="contacto">
          <h2>¿Hablamos sobre tu proyecto?</h2>
          <p>Te respondemos en menos de 24h con una propuesta adaptada a tu negocio.</p>
          <a className="btn primary" href="https://wa.me/34606657631" target="_blank" rel="noreferrer">
            Contactar por WhatsApp
          </a>
        </section>

      </div>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="footerInner">
          <div className="footerBrand">
            <p className="footerTitle">Kopa Studio</p>
            <p className="footerText">Creamos webs, bots y automatizaciones para ayudarte a captar más clientes y ahorrar tiempo operativo.</p>
          </div>
          <div className="footerLinks">
            <a href="#beneficios">Servicios</a>
            <a href="#oferta">Oferta</a>
            <a href="#precios">Precios</a>
            <a href="#faq">FAQ</a>
            <a href="#contacto">Contacto</a>
            <a href="/aviso-legal.html" target="_blank" rel="noreferrer">Aviso legal</a>
            <a href="/politica-privacidad.html" target="_blank" rel="noreferrer">Privacidad</a>
            <a href="/politica-cookies.html" target="_blank" rel="noreferrer">Cookies</a>
          </div>
          <div className="footerMeta">
            <p>Lunes–Viernes</p>
            <p>09:00 – 18:00</p>
            <p style={{marginTop: '8px'}}>© {new Date().getFullYear()} Kopa Studio</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App