// Force scroll to top on page load/refresh
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 800,
  once: false
});

window.addEventListener('scroll', () => {
  AOS.refresh();
});

// Translations
const translations = {
  pl: {
    subtitle: "AI-Powered Business Solution Developer",
    cta: "Umów rozmowę",
    parallax_title: "Tworzę nowoczesne i niezawodne rozwiązania",
    parallax_text: 'Twoja firma zasługuje na solidne narzędzia, które usprawnią procesy i przyspieszą rozwój. Skorzystaj z wiedzy technicznej i doświadczenia, które prowadzą do skutecznych efektów. Z przyjemnością zapraszam do <a href="#contact">kontaktu</a> poniżej.',
    services_title: "Co robię",
    service1_title: "Aplikacje",
    service1_desc: "Tworzenie aplikacji desktopowych, webowych i mobilnych. Budowa API, mikroserwisów, integracji.",
    service2_title: "Automatyzacja procesów",
    service2_desc: "Informatyzacja oraz automatyzacja procesów biznesowych, usługowych i produkcyjnych.",
    service3_title: "AI",
    service3_desc: "Wdrażanie AI w automatyzacji oraz jako asystenta. Implementacja oraz konsultacje.",
    service4_title: "Dokumentacje",
    service4_desc: "Kompletna dokumentacja techniczna i procesowa. Interfejsy Open API. Standaryzacje procesów.",
    whyme_title: "Czemu wybrać mnie?",
    whyme1: "Mam 11+ lat doświadczenia w rozwoju oprogramowania komercyjnego w środowisku międzynarodowym",
    whyme2: "Prezentuje podejście End-to-end - mam szeroką wiedzę o każdym etapie rozwoju oprogramowania",
    whyme3: "Rozumiem potrzeby biznesu i potrafię przełożyć je zarówno na język wymagań jak i język kodu",
    whyme4: "Znam wagę planowania, wiem, że lepiej 2 razy pomyśleć i 3 razy zapytać, aby potem zrobić za 1. razem",
    whyme5: "Zwinne metodyki zarządzania projektami mam we krwi, to oznacza pewność transparentności mojej pracy",
    tech_title: "Technologie i narzędzia",
    tech_note: "Powyższe logotypy reprezentują jedynie część moich umiejętności. Bardzo możliwe, że nie znajdziesz tutaj wszystkiego czego szukasz, ale nie znaczy to, że nie mogę Ci pomóc.",
    process_title: "Jak wygląda współpraca",
    timeline_contact: "KONTAKT",
    timeline_workshops: "WARSZTATY",
    timeline_implementation: "REALIZACJA",
    timeline_support: "WSPARCIE",
    process_desc: "Współpraca z moimi klientami rozpoczyna się od rozmowy na temat naszych oczekiwań, oraz podjęcia decyzji o tym, czy będziemy razem pracować. Następnie przechodzimy do omówienia szczegółów projektu w toku następujących spotkań oraz warsztatów analitycznych. Kiedy już dojdziemy do wspólnego zrozumienia, co ma być zrobione, przechodzimy do fazy implementacji. Cały proces zachodzi w metodykach zwinnych, takich jak Scrum, Kanban, lub innych, w zależności od Twoich preferencji. Znaczy to, że będziemy mieli regularne spotkania, w których będziemy dyskutować o postępach, problemach, oraz kolejnych etapach. Po zakończeniu projektu, przechodzimy do fazy wsparcia i utrzymania, bądź przekazania wiedzy i kodu do Twojej firmy, w zależności od umowy.",
    contact_title: "Skontaktuj się ze mną"
  },
  en: {
    subtitle: "AI-Powered Business Solution Developer",
    cta: "Schedule a call",
    parallax_title: "I create modern and reliable solutions",
    parallax_text: 'Your company deserves solid tools that streamline processes and accelerate growth. Benefit from technical knowledge and experience that lead to effective results. I invite you to <a href="#contact">contact me</a> below.',
    services_title: "What I do",
    service1_title: "Applications",
    service1_desc: "Development of desktop, web and mobile applications. Building APIs, microservices, integrations.",
    service2_title: "Process Automation",
    service2_desc: "Digitization and automation of business, service and production processes.",
    service3_title: "AI",
    service3_desc: "Implementing AI in automation and as an assistant. Implementation and consulting.",
    service4_title: "Documentation",
    service4_desc: "Complete technical and process documentation. Open API interfaces. Process standardization.",
    whyme_title: "Why choose me?",
    whyme1: "I have 11+ years of experience in commercial software development in an international environment",
    whyme2: "I present an End-to-end approach - I have extensive knowledge of every stage of software development",
    whyme3: "I understand business needs and can translate them into both requirements and code",
    whyme4: "I know the importance of planning - it's better to think twice and ask three times to get it right the first time",
    whyme5: "Agile project management methodologies are in my blood, which means transparency in my work is guaranteed",
    tech_title: "Technologies and tools",
    tech_note: "The logos above represent only a part of my skills. It's very possible that you won't find everything you're looking for here, but that doesn't mean I can't help you.",
    process_title: "How collaboration works",
    timeline_contact: "CONTACT",
    timeline_workshops: "WORKSHOPS",
    timeline_implementation: "IMPLEMENTATION",
    timeline_support: "SUPPORT",
    process_desc: "Collaboration with my clients starts with a conversation about our expectations and deciding whether we will work together. Then we move on to discussing the project details through subsequent meetings and analytical workshops. Once we reach a common understanding of what needs to be done, we move to the implementation phase. The entire process takes place using agile methodologies such as Scrum, Kanban, or others, depending on your preferences. This means we will have regular meetings where we discuss progress, problems, and next steps. After the project is completed, we move to the support and maintenance phase, or transfer knowledge and code to your company, depending on the agreement.",
    contact_title: "Contact me"
  }
};

// Language switching functionality
let currentLang = localStorage.getItem('cv-lang') || 'pl';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('cv-lang', lang);
  document.documentElement.lang = lang;
  
  // Update all translatable elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Update active button state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);
  
  // Add click handlers to language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setLanguage(btn.getAttribute('data-lang'));
    });
  });
});
