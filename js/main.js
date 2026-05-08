/* ==========================================================================
   DEGISIM MOTOR — Main JS
   ========================================================================== */

(function () {
  'use strict';

  // ── i18n translations ──────────────────────────────────────────────────
  const translations = {
    en: {
      'nav.about': 'About',
      'nav.products': 'Products',
      'nav.services': 'Services',
      'nav.contact': 'Contact',
      'nav.cta': 'Get in Touch',
      'hero.label': 'Power Transmission Solutions',
      'hero.title1': 'Engineering precision',
      'hero.title2': 'for industrial motion.',
      'hero.sub': 'We are the trusted partner for electric motors, gearboxes, and custom drive solutions across Turkey\u2019s industrial landscape.',
      'hero.cta1': 'Explore Products',
      'hero.cta2': 'Request a Quote',
      'hero.stat1': 'Years of Experience',
      'hero.stat2': 'Completed Projects',
      'hero.stat3': 'Happy Clients',
      'hero.scroll': 'Scroll to explore',
      'about.label': 'Our Story',
      'about.title': 'Built on precision,<br>driven by trust.',
      'about.lead': 'KOC Transmission supports industry with electric motors, gearboxes, and custom solutions. We don\u2019t just sell products \u2014 we provide the right selection through engineering analysis.',
      'about.text': 'Our stock-based operations enable same-day delivery across many product groups. From quotation to delivery, every department \u2014 sales, logistics, operations, and technical support \u2014 works as one integrated unit to give you a seamless, single-point experience.',
      'about.h1': 'Founded',
      'about.h2': 'Bursa, Turkey',
      'about.h2sub': 'Headquarters',
      'about.h3': 'CE Motors',
      'about.h3sub': 'In-house Brand',
      'products.label': 'Product Range',
      'products.title': 'Comprehensive power<br>transmission catalog.',
      'products.desc': 'Eight specialized product lines covering every aspect of industrial motion \u2014 from electric motors to precision brake systems.',
      'products.p1.title': 'Electric Motors',
      'products.p1.desc': 'Wide power ranges, various speed options, and high efficiency for diverse industrial applications. The heart of every facility.',
      'products.p2.title': 'Gearboxes',
      'products.p2.desc': 'Helical, worm, bevel, and planetary designs. Compact, silent, long-lasting geared motors with stock availability.',
      'products.p3.title': 'Brake & Clutch Systems',
      'products.p3.desc': 'Electromagnetic brakes for precise stopping. Rapid engagement in frequent start-stop operations, enhancing machine safety.',
      'products.p4.title': 'Circulation Pumps',
      'products.p4.desc': 'Industrial fans and pumps for ventilation, cooling, and fluid transfer. High-efficiency, quiet-running performance.',
      'products.p5.title': 'Vibration Motors',
      'products.p5.desc': 'Powerful vibration for screening, feeding, conveying, and compaction. Built to withstand dusty and harsh environments.',
      'products.p6.title': 'Transmission Accessories',
      'products.p6.desc': 'Shaft keys, pulleys, and auxiliary components. Compatible dimensions, high strength, and fast stock delivery.',
      'products.p7.title': 'Crowned Motors',
      'products.p7.desc': 'Domestically manufactured CE Motors brand press brake motors. Durability, precise control, and special application designs.',
      'products.p8.title': 'Gearbox Selection Program',
      'products.p8.desc': 'Interactive online tool to find the right gearbox for your application. Select specifications and get instant results.',
      'products.learn': 'Learn more \u2192',
      'products.launch': 'Launch tool \u2192',
      'services.label': 'What We Do',
      'services.title': 'End-to-end industrial<br>support.',
      'services.s1.title': 'Motor Supply & Distribution',
      'services.s1.desc': 'Extensive stock of electric motors from leading manufacturers, with same-day dispatch for standard models.',
      'services.s2.title': 'Gearbox Systems & Solutions',
      'services.s2.desc': 'Complete gearbox solutions from selection through installation, covering all industrial torque and speed requirements.',
      'services.s3.title': 'Spare Parts Supply',
      'services.s3.desc': 'Fast-track spare parts for motors, gearboxes, and brake systems. Minimizing your downtime is our priority.',
      'services.s4.title': 'After-Sales Technical Support',
      'services.s4.desc': 'Installation consultancy, fault tracking, and responsive technical support throughout the product lifecycle.',
      'services.s5.title': 'Engineering Consultancy',
      'services.s5.desc': 'Expert engineering analysis to ensure you select the right motor, gearbox, and drive configuration for your application.',
      'services.s6.title': 'Project-Based Custom Solutions',
      'services.s6.desc': 'Tailored power transmission systems designed for unique industrial requirements. From concept to commissioning.',
      'contact.label': 'Get in Touch',
      'contact.title': 'Let\u2019s find the right<br>solution together.',
      'contact.text': 'Reach out for product inquiries, technical consultancy, or custom project requests. Our team responds within one business day.',
      'contact.phone': 'Phone',
      'contact.email': 'Email',
      'contact.address': 'Address',
      'contact.hours': 'Working Hours',
      'contact.hoursDetail': 'Mon-Fri: 08:00-17:30 / Sat: 08:00-12:30',
      'contact.form.name': 'Full Name',
      'contact.form.email': 'Email Address',
      'contact.form.subject': 'Subject',
      'contact.form.message': 'Message',
      'contact.form.submit': 'Send Message',
      'partners.label': 'Our Partners',
      'partners.title': 'Trusted brands we work with.',
      'footer.tagline': 'Power transmission solutions for industry.',
      'footer.products': 'Products',
      'footer.company': 'Company',
      'footer.rights': 'All rights reserved.',
    },
    tr: {
      'nav.about': 'Hakkımızda',
      'nav.products': 'Ürünler',
      'nav.services': 'Hizmetler',
      'nav.contact': 'İletişim',
      'nav.cta': 'Bize Ulaşın',
      'hero.label': 'Güç Aktarım Çözümleri',
      'hero.title1': 'Mühendislik hassasiyeti,',
      'hero.title2': 'endüstriyel hareket için.',
      'hero.sub': 'Türkiye\'nin endüstriyel alanında elektrik motorları, redüktörler ve özel tahrik çözümlerinde güvenilir iş ortağınızız.',
      'hero.cta1': 'Ürünleri Keşfedin',
      'hero.cta2': 'Teklif İsteyin',
      'hero.stat1': 'Yıllık Deneyim',
      'hero.stat2': 'Tamamlanan Proje',
      'hero.stat3': 'Mutlu Müşteri',
      'hero.scroll': 'Keşfetmek için kaydır',
      'about.label': 'Hikayemiz',
      'about.title': 'Hassasiyet üzerine kuruldu,<br>güvenle yürür.',
      'about.lead': 'KOC Transmission, elektrik motorları, redüktörler ve özel çözümlerle endüstriye destek vermektedir. Sadece ürün satmıyoruz \u2014 mühendislik analizi ile doğru seçimi sağlıyoruz.',
      'about.text': 'Stok tabanlı operasyonlarımız, birçok ürün grubunda aynı gün teslimat imkânı sağlar. Tekliften teslimata kadar satış, lojistik, operasyon ve teknik destek tek bir bütünleşik birim olarak çalışır.',
      'about.h1': 'Kuruluş',
      'about.h2': 'Bursa, Türkiye',
      'about.h2sub': 'Merkez',
      'about.h3': 'CE Motors',
      'about.h3sub': 'Kendi Markamız',
      'products.label': 'Ürün Yelpazesi',
      'products.title': 'Kapsamlı güç<br>aktarım kataloğu.',
      'products.desc': 'Endüstriyel hareketin her yönünü kapsayan sekiz özelleştirilmiş ürün hattı \u2014 elektrik motorlarından hassas fren sistemlerine.',
      'products.p1.title': 'Elektrik Motorları',
      'products.p1.desc': 'Geniş güç aralıkları, çeşitli hız seçenekleri ve yüksek verim. Her tesisin kalbi.',
      'products.p2.title': 'Redüktörler',
      'products.p2.desc': 'Helisel, sonsuz vida, konik ve gezegen tasarımlar. Kompakt, sessiz, uzun ömürlü dişli motorlar.',
      'products.p3.title': 'Fren ve Kavrama Sistemleri',
      'products.p3.desc': 'Hassas durma için elektromanyetik frenler. Sık start-stop operasyonlarında hızlı kavrama.',
      'products.p4.title': 'Sirkülasyon Pompaları',
      'products.p4.desc': 'Havalandırma, soğutma ve sıvı transferi için endüstriyel fan ve pompalar. Yüksek verim, sessiz çalışma.',
      'products.p5.title': 'Vibrasyon Motorları',
      'products.p5.desc': 'Eleme, besleme, taşıma ve sıkıştırma için güçlü titreşim. Tozlu ve zorlu ortamlara dayanıklı.',
      'products.p6.title': 'İletim Aksesuarları',
      'products.p6.desc': 'Kama, kasnak ve yardımcı bileşenler. Uyumlu boyutlar, yüksek dayanıklılık, hızlı stok teslimat.',
      'products.p7.title': 'Taç Motorları',
      'products.p7.desc': 'CE Motors markası yerli üretim abkant pres motorları. Dayanıklılık, hassas kontrol, özel uygulama tasarımları.',
      'products.p8.title': 'Redüktör Seçim Programı',
      'products.p8.desc': 'Uygulamanız için doğru redüktörü bulmak için interaktif online araç. Spesifikasyonları seçin, anında sonuç alın.',
      'products.learn': 'Detaylar \u2192',
      'products.launch': 'Aracı aç \u2192',
      'services.label': 'Hizmetlerimiz',
      'services.title': 'Uçtan uca endüstriyel<br>destek.',
      'services.s1.title': 'Motor Tedarik ve Dağıtım',
      'services.s1.desc': 'Öncü üreticilerden geniş motor stoğu, standart modellerde aynı gün sevkiyat.',
      'services.s2.title': 'Redüktör Sistem ve Çözümleri',
      'services.s2.desc': 'Seçimden kuruluma kadar eksiksiz redüktör çözümleri. Tüm endüstriyel tork ve hız gereksinimleri.',
      'services.s3.title': 'Yedek Parça Temini',
      'services.s3.desc': 'Motor, redüktör ve fren sistemleri için hızlı yedek parça. Duruş sürelerinizi en aza indirmek önceliğimiz.',
      'services.s4.title': 'Satış Sonrası Teknik Destek',
      'services.s4.desc': 'Kurulum danışmanlığı, arıza takibi ve ürün yaşam döngüsü boyunca duyarlı teknik destek.',
      'services.s5.title': 'Mühendislik Danışmanlığı',
      'services.s5.desc': 'Uygulamanız için doğru motor, redüktör ve tahrik konfigürasyonunu seçmenizi sağlayan uzman analiz.',
      'services.s6.title': 'Proje Bazlı Özel Çözümler',
      'services.s6.desc': 'Özel endüstriyel gereksinimler için tasarlanmış güç aktarım sistemleri. Konseptten devreye almaya.',
      'contact.label': 'İletişim',
      'contact.title': 'Doğru çözümü<br>birlikte bulalım.',
      'contact.text': 'Ürün sorguları, teknik danışmanlık veya özel proje talepleri için bize ulaşın. Ekibimiz bir iş günü içinde yanıt verir.',
      'contact.phone': 'Telefon',
      'contact.email': 'E-posta',
      'contact.address': 'Adres',
      'contact.hours': 'Çalışma Saatleri',
      'contact.hoursDetail': 'Pzt-Cum: 08:00-17:30 / Cmt: 08:00-12:30',
      'contact.form.name': 'Ad Soyad',
      'contact.form.email': 'E-posta Adresi',
      'contact.form.subject': 'Konu',
      'contact.form.message': 'Mesaj',
      'contact.form.submit': 'Mesaj Gönder',
      'partners.label': 'İş Ortaklarımız',
      'partners.title': 'Güvendiğimiz markalar.',
      'footer.tagline': 'Endüstri için güç aktarım çözümleri.',
      'footer.products': 'Ürünler',
      'footer.company': 'Şirket',
      'footer.rights': 'Tüm hakları saklıdır.',
    }
  };

  let currentLang = localStorage.getItem('koc_lang') || 'en';

  // ── DOM refs ───────────────────────────────────────────────────────────
  const nav = document.getElementById('nav');
  const navBurger = document.getElementById('navBurger');
  const navLinks = document.getElementById('navLinks');
  const langToggle = document.getElementById('langToggle');
  const contactForm = document.getElementById('contactForm');

  // ── Nav scroll effect ──────────────────────────────────────────────────
  function handleNavScroll() {
    nav.classList.toggle('nav--scrolled', window.scrollY > 60);
  }
  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll();

  // ── Mobile menu ────────────────────────────────────────────────────────
  navBurger.addEventListener('click', function () {
    navBurger.classList.toggle('active');
    navLinks.classList.toggle('mobile-open');
    document.body.style.overflow = navLinks.classList.contains('mobile-open') ? 'hidden' : '';
  });

  // Close mobile menu on link click
  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navBurger.classList.remove('active');
      navLinks.classList.remove('mobile-open');
      document.body.style.overflow = '';
    });
  });

  // ── Language toggle ────────────────────────────────────────────────────
  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('koc_lang', lang);
    var t = translations[lang];
    var els = document.querySelectorAll('[data-i18n]');
    els.forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) {
        el.innerHTML = t[key];
      }
    });

    // Update toggle UI
    var active = langToggle.querySelector('.lang-toggle__active');
    var inactive = langToggle.querySelector('.lang-toggle__inactive');
    active.textContent = lang.toUpperCase();
    inactive.textContent = lang === 'en' ? 'TR' : 'EN';

    // Update html lang
    document.documentElement.lang = lang;
  }

  langToggle.addEventListener('click', function () {
    setLanguage(currentLang === 'en' ? 'tr' : 'en');
  });

  // Apply saved language on load
  if (currentLang !== 'en') {
    setLanguage(currentLang);
  }

  // ── Scroll reveal (IntersectionObserver) ───────────────────────────────
  var revealEls = document.querySelectorAll('[data-reveal]');

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    // Fallback: reveal all
    revealEls.forEach(function (el) { el.classList.add('revealed'); });
  }

  // ── Counter animation ──────────────────────────────────────────────────
  var counters = document.querySelectorAll('[data-count]');
  var counterObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var el = entry.target;
        var target = parseInt(el.getAttribute('data-count'), 10);
        animateCounter(el, target);
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(function (c) { counterObserver.observe(c); });

  function animateCounter(el, target) {
    var duration = 1500;
    var start = 0;
    var startTime = null;

    function step(ts) {
      if (!startTime) startTime = ts;
      var progress = Math.min((ts - startTime) / duration, 1);
      // Ease out cubic
      var eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * (target - start) + start);
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target;
      }
    }
    requestAnimationFrame(step);
  }

  // ── Product card hover color ───────────────────────────────────────────
  document.querySelectorAll('.product-card[data-color]').forEach(function (card) {
    card.style.setProperty('--card-color', card.getAttribute('data-color'));
  });

  // ── Contact form (prevent default, show feedback) ──────────────────────
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var btn = contactForm.querySelector('button[type="submit"]');
    var originalText = btn.textContent;
    btn.textContent = currentLang === 'en' ? 'Sent! We\'ll be in touch.' : 'Gönderildi! Sizinle iletişime geçeceğiz.';
    btn.disabled = true;
    btn.style.opacity = '0.7';

    setTimeout(function () {
      btn.textContent = originalText;
      btn.disabled = false;
      btn.style.opacity = '1';
      contactForm.reset();
    }, 3000);
  });

  // ── Smooth scroll for anchor links ─────────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        var offset = nav.offsetHeight + 16;
        var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

})();
