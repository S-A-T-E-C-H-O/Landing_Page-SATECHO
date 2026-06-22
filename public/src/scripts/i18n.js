/**
 * SATECHO - Internationalization (i18n) Module
 * Proporciona cambio de idioma y gestión de traducciones
 */

(function() {
  'use strict';

  var I18N_CONFIG = {
    defaultLanguage: 'es',
    supportedLanguages: ['es', 'en'],
    storageKey: 'language'
  };

  var I18N_TRANSLATIONS = {
    es: {
      'nav.logo': 'AGROSAFE',
      'nav.about': 'Sobre nosotros',
      'nav.features': 'Características',
      'nav.technology': 'Tecnología',
      'nav.pricing': 'Precios',
      'nav.testimonials': 'Testimonios',
      'nav.team': 'Equipo',
      'nav.contact': 'Contacto',
      'nav.login': 'Iniciar Sesión',
      'nav.signup': 'Registrarse',
      'hero.title': 'Monitoreo inteligente de suelo e irrigación para agricultores',
      'hero.subtitle': 'SATECHO es una startup de tecnología que utiliza IoT e IA para ayudarte a monitorear tus cultivos en tiempo real y tomar decisiones basadas en datos.',
      'hero.cta_download': 'Descargar App',
      'hero.cta_learn': 'Aprender Más',
      'about_product.title': 'Funcionamiento de la Solución',
      'about_product.subtitle': 'Mira nuestra tecnología IoT en acción y descubre cómo automatizamos el cuidado de tus campos en tiempo real.',
      'about_us.title': 'Sobre nosotros',
      'about_us.subtitle': 'Transformamos el esfuerzo agrícola en una gestión inteligente y de precisión.',
      'about_us.card1_title': 'Quiénes Somos',
      'about_us.card1_desc': 'Somos un equipo de ingenieros universitarios dedicados a resolver la vulnerabilidad del agricultor frente a climas impredecibles y la inseguridad de sus tierras mediante tecnología IoT accesible.',
      'about_us.card2_title': 'Propuesta de Valor',
      'about_us.card2_desc': 'Democratizamos la agricultura de precisión facilitando el monitoreo de suelo en tiempo real y la automatización del riego, permitiendo que cualquiera proteja su inversión y optimice recursos desde su móvil.',
      'about_us.card3_title': 'Misión y Visión',
      'about_us.card3_desc': 'Poner la tecnología al servicio de quienes trabajan la tierra con sistemas amigables, siendo aliados tecnológicos principales en zonas rurales.',
      'features.title': 'Características de la App',
      'features.subtitle': 'Monitorea, automatiza y protege tus cultivos con la plataforma agrícola inteligente de AGROSAFE.',
      'features.card1_title': 'Monitoreo de Suelo en Tiempo Real',
      'features.card1_desc': 'Captura datos físicos de humedad, pH, temperatura y conductividad eléctrica (CE) en tiempo real mediante nodos sensores ESP32.',
      'features.card2_title': 'Riego y Fertirrigación Automática',
      'features.card2_desc': 'Controla electroválvulas automáticamente para dosificar el agua y nutrientes que tus cultivos necesitan, evitando desperdicios.',
      'features.card3_title': 'Seguridad Perimetral del Campo',
      'features.card3_desc': 'Detecta y clasifica intrusos o anomalías perimetrales mediante sensores de movimiento y algoritmos de clasificación térmica.',
      'features.card4_title': 'App Móvil e Interfaz Web',
      'features.card4_desc': 'Monitorea desde una app móvil Android/iOS intuitiva en el campo, o analiza reportes avanzados desde la plataforma web.',
      'features.card5_title': 'Modelo de Toma de Decisiones',
      'features.card5_desc': 'Motor lógico e Inteligencia Artificial que evalúa umbrales agronómicos y etapas fenológicas para prevenir el estrés hídrico.',
      'features.card6_title': 'Modo Offline y Sincronización',
      'features.card6_desc': 'Tolerancia completa a desconexiones: almacena tus datos localmente en zonas rurales sin señal y sincronízalos automáticamente.',
      'technology.title': 'Tecnología Avanzada',
      'technology.subtitle': 'Dispositivo IoT de última generación para monitoreo agrícola',
      'technology.spec1_label': 'Batería Duradera',
      'technology.spec1_value': 'Hasta 2 años de funcionamiento',
      'technology.spec2_label': 'Conectividad LoRaWAN',
      'technology.spec2_value': 'Alcance de hasta 10 km',
      'technology.spec3_label': 'Sensores Precisos',
      'technology.spec3_value': 'Humedad, Temperatura, Presión',
      'usability.title': 'Facilidad de Uso',
      'usability.subtitle': 'Una interfaz diseñada pensando en los agricultores',
      'usability.feature1': 'Instalación en menos de 5 minutos',
      'usability.feature2': 'Gráficos y alertas en tiempo real',
      'usability.feature3': 'Reportes automáticos semanales',
      'usability.feature4': 'Soporte técnico 24/7',
      'pricing.title': 'Planes para cada etapa de tu crecimiento',
      'pricing.subtitle': 'Elige la solución que mejor se adapte a tus hectáreas y necesidades.',
      'pricing.basic': 'Basic',
      'pricing.pro': 'Pro',
      'pricing.enterprise': 'Enterprise',
      'pricing.monthly': '/mes',
      'pricing.popular': 'MÁS POPULAR',
      'pricing.select': 'Elegir plan',
      'pricing.basic.feat1': 'Hasta 2 hectáreas',
      'pricing.basic.feat2': 'Sensores estándar (2 nodos)',
      'pricing.basic.feat3': 'Reportes semanales PDF',
      'pricing.pro.feat1': 'Hasta 20 hectáreas',
      'pricing.pro.feat2': 'Automatización completa',
      'pricing.pro.feat3': 'Alertas SMS y Push en tiempo real',
      'pricing.pro.feat4': 'App Premium Multi-dispositivo',
      'pricing.enterprise.feat1': 'Hectáreas ilimitadas',
      'pricing.enterprise.feat2': 'API de integración personalizada',
      'pricing.enterprise.feat3': 'Soporte 24/7 con técnico asignado',
      'pricing.enterprise.feat4': 'Capacitación in-situ para equipos',
      'team.title': 'Nuestro Equipo',
      'team.subtitle': 'Ingenieros universitarios apasionados por la agricultura',
      'team.role_founder': 'Co-Fundador',
      'team.role_ux': 'Diseñadora UX/UI',
      'team.role_agronomy': 'Ingeniero Agrónomo',
      'team.role_business': 'Gerente de Negocio',
      'team.bio_abraham': 'Ingeniero de software con 5 años de experiencia',
      'team.bio_brenda': 'Especialista en experiencia del usuario',
      'team.bio_carlos': 'Experto en agricultura sostenible',
      'team.bio_jose': 'Especialista en desarrollo empresarial',
      'testimonials.title': 'Testimonios',
      'testimonials.subtitle': '¡Lo que dicen nuestros clientes!',
      'testimonials.card1_name': 'Elena Gómez',
      'testimonials.card1_role': 'Ingeniera Agrónoma / Consultora',
      'testimonials.card1_text': '“Gracias a las lecturas continuas de conductividad eléctrica y pH de SATECHO, he podido optimizar la fertirrigación de mis asesorados con datos científicos reales. Las alertas de estrés hídrico llegan directo a mi teléfono, lo que me ha evitado viajes innecesarios y garantizado que cada planta reciba la hidratación precisa. Es una herramienta indispensable para cualquier agrónomo profesional en la actualidad.”',
      'testimonials.card2_name': 'Carlos Ruiz',
      'testimonials.card2_role': 'Agricultor / Productor de Arándanos',
      'testimonials.card2_text': '“Como agricultor de arándanos, la variabilidad del clima era mi mayor dolor de cabeza y siempre temía perder mi inversión por heladas o sequías. Desde que instalé los nodos sensores de AGROSAFE, controlo las electroválvulas desde la app móvil y el agua se distribuye solo cuando el suelo lo requiere. La tranquilidad de saber que mis campos están vigilados y protegidos las 24 horas no tiene precio.”',
      'testimonials.card3_name': 'Marco Soto',
      'testimonials.card3_role': 'Consultor Técnico Agrícola',
      'testimonials.card3_text': '“La seguridad de los equipos en zonas rurales es un reto crítico, pero el módulo de seguridad perimetral térmica de AGROSAFE nos ha brindado una protección total. No solo monitoreamos la salud hídrica de los cultivos de palta Hass, sino que también recibimos alertas automáticas ante cualquier intrusión en el fundo. La app funciona de maravilla incluso en modo offline, sincronizando todo al volver a tener señal.”',
      'download.title': 'Descarga la App AGROSAFE',
      'download.subtitle': 'Disponible en iOS y Android',
      'download.available_on': 'Disponible en',
      'download.get_on': 'Obtén en',
      'download.play_store': 'Disponible en Play Store',
      'download.app_store': 'Disponible en App Store',
      'download.desc': 'Monitorea la humedad de tus cultivos, controla tus electroválvulas y recibe alertas críticas de IoT en tiempo real directamente en tu dispositivo móvil, sin importar dónde te encuentres.',
      'contact.title': 'Únete a la revolución agrícola',
      'contact.subtitle': '¡Ponte en contacto con nosotros!',
      'contact.name_label': 'Nombre completo (obligatorio)',
      'contact.name_placeholder': 'Escribe tu nombre completo',
      'contact.email_label': 'Email (obligatorio)',
      'contact.email_placeholder': 'correo@ejemplo.com',
      'contact.phone_label': 'Teléfono (opcional)',
      'contact.phone_placeholder': '+51 987 654 321',
      'contact.checkbox_prefix': 'He leído y acepto los ',
      'contact.terms_link': 'términos de servicio',
      'contact.checkbox_and': ' y las ',
      'contact.privacy_link': 'políticas de privacidad',
      'contact.submit': 'Enviar mensaje',
      'contact.cta': 'Comenzar Ahora',
      'contact.free_trial': 'Prueba gratuita por 30 días, sin requerir tarjeta de crédito',
      'contact.email_placeholder': 'correo@ejemplo.com',
      'footer.about': 'Acerca de',
      'footer.description': 'SATECHO es una startup tecnológica dedicada a empoderar a agricultores y agrónomos con herramientas inteligentes.',
      'footer.product': 'Producto',
      'footer.about': 'Sobre nosotros',
      'footer.features': 'Características',
      'footer.testimonials': 'Testimonios',
      'footer.pricing': 'Precios',
      'footer.contact': 'Contacto',
      'footer.address_val': 'Av. Universitaria 1801, Lima, Perú',
      'footer.legal': 'Legal',
      'footer.privacy': 'Política de Privacidad',
      'footer.terms': 'Términos de Servicio',
      'footer.support': 'Soporte',
      'footer.social': 'Síguenos',
      'footer.copyright': '© 2026 SATECHO. Todos los derechos reservados.',
      'nav.lang_toggle_aria': 'Cambiar idioma de la página',
      'nav.login_aria': 'Iniciar sesión en la plataforma SATECHO',
      'nav.signup_aria': 'Registrarse en la plataforma SATECHO',
      'hero.cta_download_aria': 'Descargar la aplicación móvil de SATECHO',
      'hero.cta_learn_aria': 'Aprender más sobre SATECHO',
      'pricing.select_basic_aria': 'Elegir plan Basic para monitoreo básico',
      'pricing.select_pro_aria': 'Elegir plan Pro para automatización completa',
      'pricing.select_enterprise_aria': 'Elegir plan Enterprise para soluciones ilimitadas a gran escala',
      'contact.submit_aria': 'Enviar mensaje de contacto',
      'nav.burger_aria': 'Abrir menú de navegación móvil',
      'nav.lang_es_aria': 'Cambiar idioma a Español',
      'nav.lang_en_aria': 'Cambiar idioma a Inglés',
      'testimonials.rating_aria': '5 estrellas de satisfacción',
      'download.play_store_aria': 'Descargar app de SATECHO desde Play Store',
      'download.app_store_aria': 'Descargar app de SATECHO desde App Store',
      'footer.aria_label': 'Pie de página de SATECHO',
      'footer.email_aria': 'Enviar correo a contacto@satecho.com',
      'footer.phone_aria': 'Llamar al teléfono +51987654321',
      'footer.address_aria': 'Dirección de la oficina: Av. Universitaria 1801, Lima, Perú',
      'about_team.video_title': 'Experiencias y aprendizaje del equipo SATECHO',
      'about_product.video_title': 'Muestra funcional del producto SATECHO',
      '404.title': '404 - Página no encontrada | SATECHO',
      '404.heading': 'Página no encontrada',
      '404.desc': 'Lo sentimos, la página que estás buscando no existe, ha sido movida o no está disponible en este momento.',
      '404.cta': 'Volver al inicio'
    },
    en: {
      'nav.logo': 'AGROSAFE',
      'nav.about': 'About us',
      'nav.features': 'Features',
      'nav.technology': 'Technology',
      'nav.pricing': 'Pricing',
      'nav.testimonials': 'Testimonials',
      'nav.team': 'Team',
      'nav.contact': 'Contact',
      'nav.login': 'Sign In',
      'nav.signup': 'Sign Up',
      'hero.title': 'Smart soil and irrigation monitoring for farmers',
      'hero.subtitle': 'SATECHO is a technology startup that uses IoT and AI to help you monitor your crops in real-time and make data-driven decisions.',
      'hero.cta_download': 'Download App',
      'hero.cta_learn': 'Learn More',
      'about_product.title': 'How It Works',
      'about_product.subtitle': 'Watch our IoT technology in action and discover how we automate the care of your fields in real-time.',
      'about_us.title': 'About Us',
      'about_us.subtitle': 'We transform agricultural effort into smart and precision management.',
      'about_us.card1_title': 'Who We Are',
      'about_us.card1_desc': 'We are a team of university engineers dedicated to resolving the farmer\'s vulnerability to unpredictable weather and the insecurity of their lands through accessible IoT technology.',
      'about_us.card2_title': 'Value Proposition',
      'about_us.card2_desc': 'We democratize precision agriculture by facilitating real-time soil monitoring and irrigation automation, allowing anyone to protect their investment and optimize resources from their mobile.',
      'about_us.card3_title': 'Mission & Vision',
      'about_us.card3_desc': 'To put technology at the service of those who work the land through user-friendly systems, serving as key technology partners in rural areas',
      'features.title': 'App Features',
      'features.subtitle': 'Monitor, automate, and protect your crops with AGROSAFE\'s smart agricultural platform.',
      'features.card1_title': 'Real-Time Soil Monitoring',
      'features.card1_desc': 'Capture physical data of moisture, pH, temperature, and electrical conductivity (EC) in real-time through ESP32 sensor nodes.',
      'features.card2_title': 'Automatic Irrigation & Fertigation',
      'features.card2_desc': 'Automatically control electrovalves to dose the water and nutrients your crops need, avoiding waste.',
      'features.card3_title': 'Perimeter Field Security',
      'features.card3_desc': 'Detect and classify intruders or perimeter anomalies through motion sensors and thermal classification algorithms.',
      'features.card4_title': 'Mobile App & Web Interface',
      'features.card4_desc': 'Monitor from an intuitive Android/iOS mobile app in the field, or analyze advanced reports from the web platform.',
      'features.card5_title': 'Decision-Making Model',
      'features.card5_desc': 'Logical engine and Artificial Intelligence that evaluates agronomic thresholds and phenological stages to prevent crop stress.',
      'features.card6_title': 'Offline Mode & Synchronization',
      'features.card6_desc': 'Full disconnection tolerance: store your data locally in rural areas without signal and synchronize them automatically.',
      'technology.title': 'Advanced Technology',
      'technology.subtitle': 'Next-generation IoT device for agricultural monitoring',
      'technology.spec1_label': 'Long-Lasting Battery',
      'technology.spec1_value': 'Up to 2 years of operation',
      'technology.spec2_label': 'LoRaWAN Connectivity',
      'technology.spec2_value': 'Coverage range up to 10 km',
      'technology.spec3_label': 'Precise Sensors',
      'technology.spec3_value': 'Humidity, Temperature, Pressure',
      'usability.title': 'Ease of Use',
      'usability.subtitle': 'An interface designed with farmers in mind',
      'usability.feature1': 'Installation in less than 5 minutes',
      'usability.feature2': 'Real-time graphs and alerts',
      'usability.feature3': 'Automatic weekly reports',
      'usability.feature4': '24/7 technical support',
      'pricing.title': 'Plans for every stage of your growth',
      'pricing.subtitle': 'Choose the solution that best fits your acreage and needs.',
      'pricing.basic': 'Basic',
      'pricing.pro': 'Pro',
      'pricing.enterprise': 'Enterprise',
      'pricing.monthly': '/mo',
      'pricing.popular': 'MOST POPULAR',
      'pricing.select': 'Choose plan',
      'pricing.basic.feat1': 'Up to 2 hectares',
      'pricing.basic.feat2': 'Standard sensors (2 nodes)',
      'pricing.basic.feat3': 'Weekly PDF reports',
      'pricing.pro.feat1': 'Up to 20 hectares',
      'pricing.pro.feat2': 'Complete automation',
      'pricing.pro.feat3': 'Real-time SMS & Push alerts',
      'pricing.pro.feat4': 'Premium Multi-device App',
      'pricing.enterprise.feat1': 'Unlimited hectares',
      'pricing.enterprise.feat2': 'Custom integration API',
      'pricing.enterprise.feat3': '24/7 support with assigned technician',
      'pricing.enterprise.feat4': 'On-site training for teams',
      'team.title': 'Our Team',
      'team.subtitle': 'University engineers passionate about agriculture',
      'team.role_founder': 'Co-Founder',
      'team.role_ux': 'UX/UI Designer',
      'team.role_agronomy': 'Agricultural Engineer',
      'team.role_business': 'Business Manager',
      'team.bio_abraham': 'Software engineer with 5 years of experience',
      'team.bio_brenda': 'User experience specialist',
      'team.bio_carlos': 'Sustainable agriculture expert',
      'team.bio_jose': 'Business development specialist',
      'testimonials.title': 'Testimonials',
      'testimonials.subtitle': 'What our clients say!',
      'testimonials.card1_name': 'Elena Gomez',
      'testimonials.card1_role': 'Agronomist Engineer / Consultant',
      'testimonials.card1_text': '“Thanks to AGROSAFE\'s continuous readings of electrical conductivity and pH, I have been able to optimize the fertigation of my advisees with real scientific data. Water stress alerts arrive directly on my phone, which has saved me unnecessary trips and guaranteed that each plant receives precise hydration. It is an indispensable tool for any professional agronomist today.”',
      'testimonials.card2_name': 'Carlos Ruiz',
      'testimonials.card2_role': 'Blueberry Producer',
      'testimonials.card2_text': '“As a blueberry farmer, weather variability was my biggest headache and I always feared losing my investment to frost or drought. Since I installed AGROSAFE\'s sensor nodes, I control the electrovalves from the mobile app and water is distributed only when the soil requires it. The peace of mind of knowing that my fields are watched 24/7 is priceless.”',
      'testimonials.card3_name': 'Marco Soto',
      'testimonials.card3_role': 'Agricultural Technical Consultant',
      'testimonials.card3_text': '“Equipment security in rural areas is a critical challenge, but AGROSAFE\'s thermal perimeter security module has given us total protection. We not only monitor the water health of our Hass avocado crops, but we also receive automatic alerts for any intrusion in the field. The app works wonderfully even in offline mode, syncing everything once back online.”',
      'download.title': 'Download the AGROSAFE App',
      'download.subtitle': 'Available on iOS and Android',
      'download.available_on': 'Available on',
      'download.get_on': 'Get it on',
      'download.play_store': 'Available on Play Store',
      'download.app_store': 'Available on App Store',
      'download.desc': 'Monitor crop soil moisture, control your electrovalves, and receive critical IoT alerts in real time directly on your mobile device, no matter where you are.',
      'contact.title': 'Join the agricultural revolution',
      'contact.subtitle': 'Get in touch with us!',
      'contact.name_label': 'Full name (required)',
      'contact.name_placeholder': 'Enter your full name',
      'contact.email_label': 'Email (required)',
      'contact.email_placeholder': 'email@example.com',
      'contact.phone_label': 'Phone (optional)',
      'contact.phone_placeholder': '+1 (555) 000-0000',
      'contact.checkbox_prefix': 'I have read and agree to the ',
      'contact.terms_link': 'terms of service',
      'contact.checkbox_and': ' and ',
      'contact.privacy_link': 'privacy policy',
      'contact.submit': 'Send message',
      'contact.cta': 'Get Started Now',
      'contact.free_trial': 'Free 30-day trial, no credit card required',
      'contact.email_placeholder': 'email@example.com',
      'footer.about': 'About',
      'footer.description': 'SATECHO is a technology startup dedicated to empowering farmers and agronomists with intelligent tools.',
      'footer.product': 'Product',
      'footer.about': 'About Us',
      'footer.features': 'Features',
      'footer.testimonials': 'Testimonials',
      'footer.pricing': 'Pricing',
      'footer.contact': 'Contact',
      'footer.address_val': '1801 Universitaria Ave, Lima, Peru',
      'footer.legal': 'Legal',
      'footer.privacy': 'Privacy Policy',
      'footer.terms': 'Terms of Service',
      'footer.support': 'Support',
      'footer.social': 'Follow Us',
      'footer.copyright': '© 2026 SATECHO. All rights reserved.',
      'nav.lang_toggle_aria': 'Change website language',
      'nav.login_aria': 'Log in to SATECHO platform',
      'nav.signup_aria': 'Register on SATECHO platform',
      'hero.cta_download_aria': 'Download SATECHO mobile app',
      'hero.cta_learn_aria': 'Learn more about SATECHO',
      'pricing.select_basic_aria': 'Choose Basic plan for standard monitoring',
      'pricing.select_pro_aria': 'Choose Pro plan for full automation',
      'pricing.select_enterprise_aria': 'Choose Enterprise plan for large-scale custom solutions',
      'contact.submit_aria': 'Submit contact message',
      'nav.burger_aria': 'Open mobile navigation menu',
      'nav.lang_es_aria': 'Change language to Spanish',
      'nav.lang_en_aria': 'Change language to English',
      'testimonials.rating_aria': '5 stars of satisfaction',
      'download.play_store_aria': 'Download SATECHO app from Play Store',
      'download.app_store_aria': 'Download SATECHO app from App Store',
      'footer.aria_label': 'SATECHO footer',
      'footer.email_aria': 'Send email to contacto@satecho.com',
      'footer.phone_aria': 'Call phone number +51987654321',
      'footer.address_aria': 'Office address: 1801 Universitaria Ave, Lima, Peru',
      'about_team.video_title': 'Experiences and learning of the SATECHO team',
      'about_product.video_title': 'Functional demo of the SATECHO product',
      '404.title': '404 - Page Not Found | SATECHO',
      '404.heading': 'Page Not Found',
      '404.desc': 'Sorry, the page you are looking for does not exist, has been moved, or is temporarily unavailable.',
      '404.cta': 'Back to Home'
    }
  };

  function getCurrentLanguage() {
    var stored = localStorage.getItem(I18N_CONFIG.storageKey);
    return stored && I18N_CONFIG.supportedLanguages.indexOf(stored) !== -1
      ? stored
      : I18N_CONFIG.defaultLanguage;
  }

  function setLanguage(lang) {
    if (I18N_CONFIG.supportedLanguages.indexOf(lang) !== -1) {
      localStorage.setItem(I18N_CONFIG.storageKey, lang);
      document.documentElement.lang = lang;
      return true;
    }
    return false;
  }

  function t(key, lang) {
    var targetLang = lang || getCurrentLanguage();
    if (I18N_TRANSLATIONS[targetLang] && I18N_TRANSLATIONS[targetLang][key]) {
      return I18N_TRANSLATIONS[targetLang][key];
    }
    return key;
  }

  function translatePage(lang) {
    var targetLang = lang || getCurrentLanguage();

    document.querySelectorAll('[data-i18n]').forEach(function(element) {
      var key = element.getAttribute('data-i18n');
      var translation = t(key, targetLang);
      if (translation !== key) {
        element.textContent = translation;
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function(element) {
      var key = element.getAttribute('data-i18n-placeholder');
      var translation = t(key, targetLang);
      if (translation !== key) {
        element.setAttribute('placeholder', translation);
      }
    });

    document.querySelectorAll('[data-i18n-aria-label]').forEach(function(element) {
      var key = element.getAttribute('data-i18n-aria-label');
      var translation = t(key, targetLang);
      if (translation !== key) {
        element.setAttribute('aria-label', translation);
      }
    });

    document.querySelectorAll('[data-i18n-title]').forEach(function(element) {
      var key = element.getAttribute('data-i18n-title');
      var translation = t(key, targetLang);
      if (translation !== key) {
        element.setAttribute('title', translation);
      }
    });

    setLanguage(targetLang);

    if (typeof window.dispatchEvent === 'function') {
      window.dispatchEvent(new CustomEvent('languageChanged', { 
        detail: { language: targetLang } 
      }));
    }
  }

  function getAvailableLanguages() {
    return I18N_CONFIG.supportedLanguages.slice();
  }

  function getLanguageName(lang) {
    var names = {
      es: 'Español',
      en: 'English'
    };
    return names[lang] || lang;
  }

  if (typeof window !== 'undefined') {
    window.I18N = {
      config: I18N_CONFIG,
      translations: I18N_TRANSLATIONS,
      getCurrentLanguage: getCurrentLanguage,
      setLanguage: setLanguage,
      t: t,
      translatePage: translatePage,
      getAvailableLanguages: getAvailableLanguages,
      getLanguageName: getLanguageName
    };

    if (typeof getCurrentLanguage === 'function') {
      var currentLang = getCurrentLanguage();
      translatePage(currentLang);
    }

    console.log('SATECHO i18n Module Loaded Successfully');
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      I18N_CONFIG: I18N_CONFIG,
      I18N_TRANSLATIONS: I18N_TRANSLATIONS,
      getCurrentLanguage: getCurrentLanguage,
      setLanguage: setLanguage,
      t: t,
      translatePage: translatePage,
      getAvailableLanguages: getAvailableLanguages,
      getLanguageName: getLanguageName
    };
  }
})();
