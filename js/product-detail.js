/* ==========================================================================
   PRODUCT DETAIL PAGES — JS
   Shared nav, burger, language toggle, and reveal animations
   ========================================================================== */

(function () {
  'use strict';

  // ── i18n (shared keys + detail-specific) ───────────────────────────────
  var shared = {
    en: {
      'nav.about': 'About',
      'nav.products': 'Products',
      'nav.services': 'Services',
      'nav.contact': 'Contact',
      'nav.cta': 'Get in Touch',
      'product.back': '\u2190 All Products',
      'detail.cta': 'Request a Quote',
      'detail.call': 'Call: +90 (224) 441 23 79',
      'detail.related': 'Other Products',
      'detail.sidebar.specs': 'Specifications',
      'products.p1.title': 'Electric Motors',
      'products.p2.title': 'Gearboxes',
      'products.p3.title': 'Brake & Clutch Systems',
      'products.p4.title': 'Circulation Pumps',
      'products.p5.title': 'Vibration Motors',
      'products.p6.title': 'Transmission Accessories',
      'products.p7.title': 'Crowned Motors',
      'products.p8.title': 'Gearbox Selection Program',
      'products.learn': 'Learn more \u2192',
      'products.launch': 'Launch tool \u2192',
      'contact.phone': 'Phone',
      'footer.tagline': 'Power transmission solutions for industry.',
      'footer.products': 'Products',
      'footer.company': 'Company',
      'footer.rights': 'All rights reserved.',

      // Electric Motors detail
      'detail.p1.lead': 'At the heart of every industrial facility, our electric motors deliver reliable performance with wide power ranges, various speed options, and high efficiency across diverse sectors.',
      'detail.p1.h1': 'Comprehensive Motor Portfolio',
      'detail.p1.t1': 'From standard induction motors to specialized application motors, we offer a comprehensive product portfolio to provide solutions that best fit customer needs. Our electric motors are designed and manufactured to meet the highest industrial standards.',
      'detail.p1.h2': 'Key Features',
      'detail.p1.f1': 'Wide power range options for every application',
      'detail.p1.f2': 'Multiple speed configurations available',
      'detail.p1.f3': 'High energy efficiency ratings',
      'detail.p1.f4': 'Robust construction for harsh industrial environments',
      'detail.p1.f5': 'IE2 and IE3 efficiency class options',
      'detail.p1.f6': 'Various mounting and frame configurations',
      'detail.p1.h3': 'Applications',
      'detail.p1.t2': 'Our electric motors are used across a wide range of industries including manufacturing, food processing, mining, HVAC systems, water treatment, agriculture, and general industrial automation.',
      'detail.p1.s1l': 'Power Range', 'detail.p1.s1v': '0.06 kW - 315 kW',
      'detail.p1.s2l': 'Speed Options', 'detail.p1.s2v': '2, 4, 6, 8 pole',
      'detail.p1.s3l': 'Efficiency', 'detail.p1.s3v': 'IE2 / IE3',
      'detail.p1.s4l': 'Voltage', 'detail.p1.s4v': '230/400V, 400/690V',
      'detail.p1.s5l': 'Protection', 'detail.p1.s5v': 'IP55 / IP56',
      'detail.p1.s6l': 'Mounting', 'detail.p1.s6v': 'B3, B5, B14, B35',

      // Gearboxes detail
      'detail.p2.lead': 'Where torque is required, a reliable solution is essential. Our gearboxes stand out with compact designs, quiet operation, and long service life for every industrial need.',
      'detail.p2.h1': 'Gearbox Types', 'detail.p2.t1': 'We supply a full range of gearbox types to match any industrial requirement.',
      'detail.p2.type1': 'Helical Gearboxes', 'detail.p2.type1d': 'High efficiency and quiet operation. Ideal for conveyors, mixers, and general industrial machinery.',
      'detail.p2.type2': 'Worm Gearboxes', 'detail.p2.type2d': 'Self-locking capability with high reduction ratios. Perfect for lifting equipment.',
      'detail.p2.type3': 'Bevel Gearboxes', 'detail.p2.type3d': 'Right-angle power transmission with excellent torque capacity.',
      'detail.p2.type4': 'Planetary Gearboxes', 'detail.p2.type4d': 'Maximum torque density in a compact package.',
      'detail.p2.h2': 'Geared Motors', 'detail.p2.t2': 'Space saving, efficiency, and easy installation combined. Many models available from stock.',
      'detail.p2.h3': 'Industries Served', 'detail.p2.t3': 'Heavy industry, food processing, packaging, material handling, mining, and manufacturing.',
      'detail.p2.s1l': 'Types', 'detail.p2.s1v': 'Helical, Worm, Bevel, Planetary',
      'detail.p2.s2l': 'Torque Range', 'detail.p2.s2v': 'Up to 50,000 Nm',
      'detail.p2.s3l': 'Ratios', 'detail.p2.s3v': '1:1 to 1:30,000',
      'detail.p2.s4l': 'Mounting', 'detail.p2.s4v': 'Foot, flange, shaft-mount',
      'detail.p2.s5l': 'Stock', 'detail.p2.s5v': 'Many models available',
      'detail.p2.tool': 'Gearbox Selection Tool',

      // Brake & Clutch
      'detail.p3.lead': 'Our electromagnetic brake units engage rapidly in systems requiring precise stopping, significantly enhancing machine safety.',
      'detail.p3.h1': 'Electromagnetic Brakes', 'detail.p3.t1': 'Our electromagnetic brake units provide instant braking upon power loss, delivering maximum safety and control.',
      'detail.p3.h2': 'Key Features',
      'detail.p3.f1': 'Rapid engagement for precise stopping', 'detail.p3.f2': 'Fail-safe design \u2014 brakes on power loss',
      'detail.p3.f3': 'High durability for frequent start-stop operations', 'detail.p3.f4': 'Low maintenance requirements',
      'detail.p3.f5': 'Compatible with standard motor frames', 'detail.p3.f6': 'Available in DC and AC configurations',
      'detail.p3.h3': 'Applications', 'detail.p3.t2': 'Cranes, hoists, conveyors, packaging machinery, machine tools, and elevators.',
      'detail.p3.s1l': 'Type', 'detail.p3.s1v': 'Electromagnetic',
      'detail.p3.s2l': 'Operation', 'detail.p3.s2v': 'Spring-applied, electrically released',
      'detail.p3.s3l': 'Torque', 'detail.p3.s3v': '0.5 - 400 Nm',
      'detail.p3.s4l': 'Supply', 'detail.p3.s4v': 'DC 24V / 180V / 205V',
      'detail.p3.s5l': 'Response', 'detail.p3.s5v': '< 30ms engagement',

      // Circulation Pumps
      'detail.p4.lead': 'Industrial fans and pumps for ventilation, cooling, and fluid transfer. High efficiency, quiet operation, long service life.',
      'detail.p4.h1': 'Fan & Pump Systems', 'detail.p4.t1': 'Our range of industrial circulation pumps and fans handle demanding ventilation, cooling, and fluid transfer tasks.',
      'detail.p4.h2': 'Key Features',
      'detail.p4.f1': 'High flow rates with low energy consumption', 'detail.p4.f2': 'Quiet-running operation',
      'detail.p4.f3': 'Corrosion-resistant materials', 'detail.p4.f4': 'Long service intervals',
      'detail.p4.f5': 'Multiple size and capacity options',
      'detail.p4.h3': 'Applications', 'detail.p4.t2': 'HVAC, industrial cooling, water treatment, building ventilation, process cooling.',
      'detail.p4.s1l': 'Type', 'detail.p4.s1v': 'Centrifugal, Axial',
      'detail.p4.s2l': 'Performance', 'detail.p4.s2v': 'High efficiency',
      'detail.p4.s3l': 'Noise Level', 'detail.p4.s3v': 'Low (quiet operation)',
      'detail.p4.s4l': 'Material', 'detail.p4.s4v': 'Cast iron / Stainless steel',
      'detail.p4.s5l': 'Durability', 'detail.p4.s5v': 'Long service life',

      // Vibration Motors
      'detail.p5.lead': 'High-performance vibration motors for screening, feeding, conveying, and compaction. Built for harsh environments.',
      'detail.p5.h1': 'Industrial Vibration Solutions', 'detail.p5.t1': 'Our vibration motors deliver consistent and reliable performance in demanding applications.',
      'detail.p5.h2': 'Key Features',
      'detail.p5.f1': 'Powerful centrifugal force generation', 'detail.p5.f2': 'Sealed and dustproof (IP65+)',
      'detail.p5.f3': 'Heavy-duty bearings for extended life', 'detail.p5.f4': 'Adjustable centrifugal force',
      'detail.p5.f5': 'Suitable for hazardous environments',
      'detail.p5.h3': 'Applications', 'detail.p5.t2': 'Vibrating screens, feeders, conveyors, compaction tables, bin activators.',
      'detail.p5.s1l': 'Force Range', 'detail.p5.s1v': '1 kN - 100 kN',
      'detail.p5.s2l': 'Speed', 'detail.p5.s2v': '1000 - 3000 RPM',
      'detail.p5.s3l': 'Protection', 'detail.p5.s3v': 'IP65 / IP66',
      'detail.p5.s4l': 'Environment', 'detail.p5.s4v': 'Dust, moisture, extreme temps',
      'detail.p5.s5l': 'Adjustment', 'detail.p5.s5v': 'Variable eccentric weights',

      // Transmission Accessories
      'detail.p6.lead': 'Keys, pulleys, and auxiliary components for motor-gearbox connections. Compatible dimensions, high strength, fast delivery.',
      'detail.p6.h1': 'Keys & Power Transmission Components', 'detail.p6.t1': 'All auxiliary components needed to connect motors to gearboxes and driven equipment.',
      'detail.p6.h2': 'Product Range',
      'detail.p6.f1': 'Shaft keys in standard DIN dimensions', 'detail.p6.f2': 'V-belt and timing belt pulleys',
      'detail.p6.f3': 'Coupling elements and adapters', 'detail.p6.f4': 'Mounting flanges and brackets',
      'detail.p6.f5': 'Taper lock bushings', 'detail.p6.f6': 'All standard sizes from stock',
      'detail.p6.h3': 'Why Choose Us', 'detail.p6.t2': 'Compatible dimensions, high-strength materials, most items from stock for same-day dispatch.',
      'detail.p6.s1l': 'Products', 'detail.p6.s1v': 'Keys, Pulleys, Couplings',
      'detail.p6.s2l': 'Standards', 'detail.p6.s2v': 'DIN, ISO compliant',
      'detail.p6.s3l': 'Material', 'detail.p6.s3v': 'Carbon steel, alloy steel',
      'detail.p6.s4l': 'Availability', 'detail.p6.s4v': 'Most sizes in stock',

      // Crowned Motors
      'detail.p7.lead': 'CE Motors brand press brake motors. Domestically manufactured with durability, precise control, and special application designs.',
      'detail.p7.h1': 'CE Motors \u2014 In-House Manufacturing', 'detail.p7.t1': 'Produced entirely in-house, designed specifically for press brake machines.',
      'detail.p7.h2': 'Key Features',
      'detail.p7.f1': '100% domestically manufactured', 'detail.p7.f2': 'Optimized for press brake machines',
      'detail.p7.f3': 'High torque for metal bending', 'detail.p7.f4': 'Precise speed and position control',
      'detail.p7.f5': 'Robust construction for continuous duty', 'detail.p7.f6': 'Custom configurations available',
      'detail.p7.h3': 'Applications', 'detail.p7.t2': 'Press brake machines, metal forming, bending operations.',
      'detail.p7.s1l': 'Brand', 'detail.p7.s1v': 'CE Motors',
      'detail.p7.s2l': 'Manufacturing', 'detail.p7.s2v': '100% domestic',
      'detail.p7.s3l': 'Application', 'detail.p7.s3v': 'Press brake machines',
      'detail.p7.s4l': 'Control', 'detail.p7.s4v': 'Precise torque & speed',
      'detail.p7.s5l': 'Custom', 'detail.p7.s5v': 'Available on request',
    },
    tr: {
      'nav.about': 'Hakkımızda',
      'nav.products': 'Ürünler',
      'nav.services': 'Hizmetler',
      'nav.contact': 'İletişim',
      'nav.cta': 'Bize Ulaşın',
      'product.back': '\u2190 Tüm Ürünler',
      'detail.cta': 'Teklif İsteyin',
      'detail.call': 'Ara: +90 (224) 441 23 79',
      'detail.related': 'Diğer Ürünler',
      'detail.sidebar.specs': 'Teknik Özellikler',
      'products.p1.title': 'Elektrik Motorları',
      'products.p2.title': 'Redüktörler',
      'products.p3.title': 'Fren ve Kavrama Sistemleri',
      'products.p4.title': 'Sirkülasyon Pompaları',
      'products.p5.title': 'Vibrasyon Motorları',
      'products.p6.title': 'İletim Aksesuarları',
      'products.p7.title': 'Taç Motorları',
      'products.p8.title': 'Redüktör Seçim Programı',
      'products.learn': 'Detaylar \u2192',
      'products.launch': 'Aracı aç \u2192',
      'contact.phone': 'Telefon',
      'footer.tagline': 'Endüstri için güç aktarım çözümleri.',
      'footer.products': 'Ürünler',
      'footer.company': 'Şirket',
      'footer.rights': 'Tüm hakları saklıdır.',

      // Electric Motors
      'detail.p1.lead': 'Her endüstriyel tesisin kalbinde yer alan elektrik motorlarımız, geniş güç aralıkları, çeşitli hız seçenekleri ve yüksek verim ile güvenilir performans sunar.',
      'detail.p1.h1': 'Kapsamlı Motor Portföyü',
      'detail.p1.t1': 'Standart indüksiyon motorlarından özel uygulama motorlarına kadar, müşteri ihtiyaçlarına en uygun çözümleri sunmak için kapsamlı bir ürün portföyü sunuyoruz.',
      'detail.p1.h2': 'Temel Özellikler',
      'detail.p1.f1': 'Her uygulama için geniş güç aralığı', 'detail.p1.f2': 'Çoklu hız konfigürasyonları',
      'detail.p1.f3': 'Yüksek enerji verimliliği', 'detail.p1.f4': 'Zorlu endüstriyel ortamlar için sağlam yapı',
      'detail.p1.f5': 'IE2 ve IE3 verimlilik sınıfları', 'detail.p1.f6': 'Çeşitli montaj ve gövde konfigürasyonları',
      'detail.p1.h3': 'Uygulamalar',
      'detail.p1.t2': 'Elektrik motorlarımız imalat, gıda işleme, madencilik, HVAC, su arıtma, tarım ve genel endüstriyel otomasyonda kullanılır.',
      'detail.p1.s1l': 'Güç Aralığı', 'detail.p1.s1v': '0.06 kW - 315 kW',
      'detail.p1.s2l': 'Hız Seçenekleri', 'detail.p1.s2v': '2, 4, 6, 8 kutuplu',
      'detail.p1.s3l': 'Verimlilik', 'detail.p1.s3v': 'IE2 / IE3',
      'detail.p1.s4l': 'Gerilim', 'detail.p1.s4v': '230/400V, 400/690V',
      'detail.p1.s5l': 'Koruma', 'detail.p1.s5v': 'IP55 / IP56',
      'detail.p1.s6l': 'Montaj', 'detail.p1.s6v': 'B3, B5, B14, B35',

      // Gearboxes
      'detail.p2.lead': 'Tork gereken yerde güvenilir bir çözüm şarttır. Redüktörlerimiz kompakt tasarım, sessiz çalışma ve uzun ömür ile öne çıkar.',
      'detail.p2.h1': 'Redüktör Tipleri', 'detail.p2.t1': 'Her endüstriyel gereksinime uygun tam bir redüktör yelpazesi sunuyoruz.',
      'detail.p2.type1': 'Helisel Redüktörler', 'detail.p2.type1d': 'Yüksek verim ve sessiz çalışma. Konveyörler, mikserler için ideal.',
      'detail.p2.type2': 'Sonsuz Vida Redüktörler', 'detail.p2.type2d': 'Yüksek redüksiyon oranları. Kaldırma ekipmanları için mükemmel.',
      'detail.p2.type3': 'Konik Redüktörler', 'detail.p2.type3d': 'Dik açılı güç aktarımı, mükemmel tork kapasitesi.',
      'detail.p2.type4': 'Gezegen Redüktörler', 'detail.p2.type4d': 'Kompakt pakette maksimum tork yoğunluğu.',
      'detail.p2.h2': 'Dişli Motorlar', 'detail.p2.t2': 'Yerden tasarruf, verimlilik ve kolay kurulum bir arada. Stoktan hızlı teslimat.',
      'detail.p2.h3': 'Hizmet Verilen Sektörler', 'detail.p2.t3': 'Ağır sanayi, gıda, ambalaj, malzeme taşıma, madencilik ve imalat.',
      'detail.p2.s1l': 'Tipler', 'detail.p2.s1v': 'Helisel, Sonsuz Vida, Konik, Gezegen',
      'detail.p2.s2l': 'Tork Aralığı', 'detail.p2.s2v': '50.000 Nm\'ye kadar',
      'detail.p2.s3l': 'Oranlar', 'detail.p2.s3v': '1:1 - 1:30.000',
      'detail.p2.s4l': 'Montaj', 'detail.p2.s4v': 'Ayak, flanş, şaft montaj',
      'detail.p2.s5l': 'Stok', 'detail.p2.s5v': 'Birçok model mevcut',
      'detail.p2.tool': 'Redüktör Seçim Aracı',

      // Brake & Clutch
      'detail.p3.lead': 'Elektromanyetik fren ünitlerimiz hassas durma gerektiren sistemlerde hızla devreye girerek makine güvenliğini artırır.',
      'detail.p3.h1': 'Elektromanyetik Frenler', 'detail.p3.t1': 'Güç kesintisinde anlık frenleme sağlayarak maksimum güvenlik ve kontrol sunar.',
      'detail.p3.h2': 'Temel Özellikler',
      'detail.p3.f1': 'Hassas durma için hızlı kavrama', 'detail.p3.f2': 'Güvenli tasarım \u2014 güç kesildiğinde frenler',
      'detail.p3.f3': 'Sık start-stop için yüksek dayanıklılık', 'detail.p3.f4': 'Düşük bakım gereksinimi',
      'detail.p3.f5': 'Standart motor gövdeleriyle uyumlu', 'detail.p3.f6': 'DC ve AC konfigürasyonları',
      'detail.p3.h3': 'Uygulamalar', 'detail.p3.t2': 'Vinçler, konveyörler, ambalaj makineleri, takım tezgahları ve asansörler.',
      'detail.p3.s1l': 'Tip', 'detail.p3.s1v': 'Elektromanyetik',
      'detail.p3.s2l': 'Çalışma', 'detail.p3.s2v': 'Yay uygulamalı, elektrikle açılan',
      'detail.p3.s3l': 'Tork', 'detail.p3.s3v': '0.5 - 400 Nm',
      'detail.p3.s4l': 'Besleme', 'detail.p3.s4v': 'DC 24V / 180V / 205V',
      'detail.p3.s5l': 'Tepki', 'detail.p3.s5v': '< 30ms kavrama',

      // Circulation Pumps
      'detail.p4.lead': 'Havalandırma, soğutma ve sıvı transferi için endüstriyel fan ve pompalar. Yüksek verim, sessiz çalışma.',
      'detail.p4.h1': 'Fan ve Pompa Sistemleri', 'detail.p4.t1': 'Zorlu havalandırma, soğutma ve sıvı transferi görevleri için tasarlanmış endüstriyel pompalar.',
      'detail.p4.h2': 'Temel Özellikler',
      'detail.p4.f1': 'Düşük enerji tüketiminde yüksek debi', 'detail.p4.f2': 'Sessiz çalışma',
      'detail.p4.f3': 'Korozyona dayanıklı malzemeler', 'detail.p4.f4': 'Uzun bakım aralıkları',
      'detail.p4.f5': 'Çoklu boyut ve kapasite seçenekleri',
      'detail.p4.h3': 'Uygulamalar', 'detail.p4.t2': 'HVAC, endüstriyel soğutma, su arıtma, bina havalandırma.',
      'detail.p4.s1l': 'Tip', 'detail.p4.s1v': 'Santrifüj, Aksiyal',
      'detail.p4.s2l': 'Performans', 'detail.p4.s2v': 'Yüksek verim',
      'detail.p4.s3l': 'Gürültü', 'detail.p4.s3v': 'Düşük (sessiz çalışma)',
      'detail.p4.s4l': 'Malzeme', 'detail.p4.s4v': 'Döküm / Paslanmaz çelik',
      'detail.p4.s5l': 'Dayanıklılık', 'detail.p4.s5v': 'Uzun ömür',

      // Vibration Motors
      'detail.p5.lead': 'Eleme, besleme, taşıma ve sıkıştırma için yüksek performanslı vibrasyon motorları. Zorlu ortamlar için tasarlandı.',
      'detail.p5.h1': 'Endüstriyel Vibrasyon Çözümleri', 'detail.p5.t1': 'Zorlu uygulamalarda tutarlı ve güvenilir performans sunar.',
      'detail.p5.h2': 'Temel Özellikler',
      'detail.p5.f1': 'Güçlü santrifüj kuvvet üretimi', 'detail.p5.f2': 'Sızdırmaz ve toz geçirmez (IP65+)',
      'detail.p5.f3': 'Uzun ömürlü ağır hizmet rulmanları', 'detail.p5.f4': 'Ayarlanabilir santrifüj kuvvet',
      'detail.p5.f5': 'Tehlikeli ortamlara uygun',
      'detail.p5.h3': 'Uygulamalar', 'detail.p5.t2': 'Titreşimli elekler, besleyiciler, konveyörler, sıkıştırma masaları.',
      'detail.p5.s1l': 'Kuvvet Aralığı', 'detail.p5.s1v': '1 kN - 100 kN',
      'detail.p5.s2l': 'Hız', 'detail.p5.s2v': '1000 - 3000 RPM',
      'detail.p5.s3l': 'Koruma', 'detail.p5.s3v': 'IP65 / IP66',
      'detail.p5.s4l': 'Ortam', 'detail.p5.s4v': 'Toz, nem, aşırı sıcaklık',
      'detail.p5.s5l': 'Ayar', 'detail.p5.s5v': 'Değişken eksantrik ağırlıklar',

      // Transmission Accessories
      'detail.p6.lead': 'Motor-redüktör bağlantıları için kama, kasnak ve yardımcı bileşenler. Uyumlu boyutlar, yüksek dayanıklılık.',
      'detail.p6.h1': 'Kama ve Güç İletim Bileşenleri', 'detail.p6.t1': 'Motor ve redüktörleri bağlamak için gereken tüm yardımcı bileşenler.',
      'detail.p6.h2': 'Ürün Yelpazesi',
      'detail.p6.f1': 'Standart DIN boyutlarında şaft kamaları', 'detail.p6.f2': 'V-kayış ve zamanlama kayışı kasnakları',
      'detail.p6.f3': 'Kaplin elemanları ve adaptörler', 'detail.p6.f4': 'Montaj flanşları ve braketler',
      'detail.p6.f5': 'Konik kilit burçları', 'detail.p6.f6': 'Tüm standart boyutlar stokta',
      'detail.p6.h3': 'Neden Biz', 'detail.p6.t2': 'Uyumlu boyutlar, yüksek mukavemet, çoğu ürün stoktan aynı gün sevkiyat.',
      'detail.p6.s1l': 'Ürünler', 'detail.p6.s1v': 'Kama, Kasnak, Kaplin',
      'detail.p6.s2l': 'Standartlar', 'detail.p6.s2v': 'DIN, ISO uyumlu',
      'detail.p6.s3l': 'Malzeme', 'detail.p6.s3v': 'Karbon çelik, alaşımlı çelik',
      'detail.p6.s4l': 'Stok', 'detail.p6.s4v': 'Çoğu boyut mevcut',

      // Crowned Motors
      'detail.p7.lead': 'CE Motors markası abkant pres motorları. Yerli üretim, dayanıklılık, hassas kontrol ve özel uygulama tasarımları.',
      'detail.p7.h1': 'CE Motors \u2014 Yerli Üretim', 'detail.p7.t1': 'Tamamen kendi bünyemizde üretilen, abkant pres makineleri için tasarlanmış motorlar.',
      'detail.p7.h2': 'Temel Özellikler',
      'detail.p7.f1': '%100 yerli üretim', 'detail.p7.f2': 'Abkant pres makineleri için optimize',
      'detail.p7.f3': 'Metal bükme için yüksek tork', 'detail.p7.f4': 'Hassas hız ve pozisyon kontrolü',
      'detail.p7.f5': 'Sürekli çalışma için sağlam yapı', 'detail.p7.f6': 'Özel konfigürasyonlar mevcut',
      'detail.p7.h3': 'Uygulamalar', 'detail.p7.t2': 'Abkant pres makineleri, metal şekillendirme, bükme operasyonları.',
      'detail.p7.s1l': 'Marka', 'detail.p7.s1v': 'CE Motors',
      'detail.p7.s2l': 'Üretim', 'detail.p7.s2v': '%100 yerli',
      'detail.p7.s3l': 'Uygulama', 'detail.p7.s3v': 'Abkant pres makineleri',
      'detail.p7.s4l': 'Kontrol', 'detail.p7.s4v': 'Hassas tork ve hız',
      'detail.p7.s5l': 'Özel', 'detail.p7.s5v': 'Talep üzerine',
    }
  };

  var currentLang = localStorage.getItem('koc_lang') || 'en';
  var nav = document.getElementById('nav');
  var navBurger = document.getElementById('navBurger');
  var navLinks = document.getElementById('navLinks');
  var langToggle = document.getElementById('langToggle');

  // Nav scroll
  function handleNavScroll() {
    nav.classList.toggle('nav--scrolled', true); // always scrolled on detail pages
  }
  handleNavScroll();

  // Mobile menu
  navBurger.addEventListener('click', function () {
    navBurger.classList.toggle('active');
    navLinks.classList.toggle('mobile-open');
    document.body.style.overflow = navLinks.classList.contains('mobile-open') ? 'hidden' : '';
  });
  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navBurger.classList.remove('active');
      navLinks.classList.remove('mobile-open');
      document.body.style.overflow = '';
    });
  });

  // Language
  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('koc_lang', lang);
    var t = shared[lang];
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) el.innerHTML = t[key];
    });
    var active = langToggle.querySelector('.lang-toggle__active');
    var inactive = langToggle.querySelector('.lang-toggle__inactive');
    active.textContent = lang.toUpperCase();
    inactive.textContent = lang === 'en' ? 'TR' : 'EN';
    document.documentElement.lang = lang;
  }
  langToggle.addEventListener('click', function () {
    setLanguage(currentLang === 'en' ? 'tr' : 'en');
  });

  // Apply saved language on load
  if (currentLang !== 'en') {
    setLanguage(currentLang);
  }

  // Reveal
  var revealEls = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('revealed'); });
  }

})();
