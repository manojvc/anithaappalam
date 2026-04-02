(() => {
  const BUSINESS = {
    name: 'Anitha Appalam',
    area: 'Jaihindpuram',
    city: 'Madurai',
    region: 'Tamil Nadu',
    country: 'India',
    postalCode: '625011',
    phoneDisplay: '+91 98947 00331',
    phoneTel: '+919894700331',
    email: 'visalakshitraders@gmail.com',
    addressLine: '89/4 Angayarkanni 2nd Street, Jeeva Nagar, Jaihindpuram, Madurai – 625011, Tamil Nadu, India',
    whatsappNumber: '919894700331'
  };

  const PRODUCTS = {
    'classic-appalam': {
      id: 'classic-appalam',
      name: 'Classic Appalam',
      category: 'appalams',
      short: 'Everyday crispy appalam with a traditional taste.',
      full: 'Our Classic Appalam is made with a focus on hygiene, consistent thickness, and crisp texture. It pairs well with sambar, rasam, curd rice, and festive meals.',
      highlights: ['Traditional taste', 'Hygienic preparation', 'Careful packing'],
      images: [
        { src: 'images/appalampacket.jpeg', alt: 'Classic appalam packet' },
        { src: 'images/AnithaAppalamValam.jpeg', alt: 'Classic appalam (valam) close-up' },
        { src: 'images/Anitha_HeadLabel.jpeg', alt: 'Brand label' }
      ]
    },
    'pepper-appalam': {
      id: 'pepper-appalam',
      name: 'Pepper Appalam',
      category: 'appalams',
      short: 'Pepper-forward flavour with a bold crunch.',
      full: 'Pepper Appalam adds a warm, aromatic kick to your meal. Great as a side for rice dishes or as a quick snack when roasted or fried.',
      highlights: ['Pepper aroma', 'Crisp texture', 'Fresh batches'],
      images: [
        { src: 'images/pepperappalamwide.jpeg', alt: 'Pepper appalam wide product photo' },
        { src: 'images/PepperAppalam.jpeg', alt: 'Pepper appalam packet' },
        { src: 'images/pepperAppalam1.jpeg', alt: 'Pepper appalam close-up' }
      ]
    },
    'green-appalam': {
      id: 'green-appalam',
      name: 'Green Appalam',
      category: 'appalams',
      short: 'A vibrant variant with a distinctive taste.',
      full: 'Green Appalam is a colourful variation that’s popular for functions and special meals. Ask us for current availability and packing options.',
      highlights: ['Distinctive look', 'Function-friendly', 'Careful packing'],
      images: [
        { src: 'images/GreenAppalamAll.jpeg', alt: 'Green appalam assortment' },
        { src: 'images/Greenboxes.jpeg', alt: 'Green appalam boxes' },
        { src: 'images/greenspacket.jpeg', alt: 'Green appalam packet' }
      ]
    },
    'leaf-appalam': {
      id: 'leaf-appalam',
      name: 'Leaf Appalam',
      category: 'appalams',
      short: 'Leaf-style appalam for special occasions.',
      full: 'Leaf Appalam is a popular choice for celebrations and events. It’s made with attention to shape, dryness, and crispness.',
      highlights: ['Special-occasion style', 'Crisp finish', 'Packed with care'],
      images: [
        { src: 'images/LeafAppalam.jpeg', alt: 'Leaf appalam product photo' },
        { src: 'images/LeafAppalam1.jpeg', alt: 'Leaf appalam close-up' }
      ]
    },
    'poo-appalam': {
      id: 'poo-appalam',
      name: 'Poo Appalam',
      category: 'appalams',
      short: 'A decorative appalam style for events.',
      full: 'Poo Appalam is an event-style variation made for presentation and crunch. Contact us to confirm sizes and packaging for your order.',
      highlights: ['Decorative style', 'Event orders', 'Bulk quantities'],
      images: [{ src: 'images/pooAppalam.jpeg', alt: 'Poo appalam product photo' }]
    },
    'marriage-appalam': {
      id: 'marriage-appalam',
      name: 'Marriage Appalam',
      category: 'appalams',
      short: 'Made for functions and larger orders.',
      full: 'Marriage Appalam is prepared for function-style requirements where consistent quality and packing matter. Share your date and quantity to plan production.',
      highlights: ['Function-ready', 'Consistent packing', 'Bulk orders'],
      images: [{ src: 'images/marrageAppalam.jpeg', alt: 'Marriage appalam product photo' }]
    },
    'sovi-appalam': {
      id: 'sovi-appalam',
      name: 'Sovi Appalam',
      category: 'appalams',
      short: 'A regional-style appalam variety.',
      full: 'Sovi Appalam is a regional variation. Ask for availability, sizes, and minimum order quantity.',
      highlights: ['Regional variety', 'Fresh batches', 'Careful drying'],
      images: [{ src: 'images/soviappalam.jpg', alt: 'Sovi appalam product photo' }]
    },
    'kalyana-appalam': {
      id: 'kalyana-appalam',
      name: 'Kalyana Appalam',
      category: 'appalams',
      short: 'Made for weddings and large celebrations.',
      full: 'Kalyana Appalam is prepared specifically for function-style requirements where consistent quality and bulk packing matter. Contact us for your wedding or event date and quantity.',
      highlights: ['Function-ready', 'Bulk orders', 'Consistent packing'],
      images: [{ src: 'images/kalyanaAppalam.jpg', alt: 'Kalyana appalam product photo' }]
    },
    'greens-appalam': {
      id: 'greens-appalam',
      name: 'Greens Appalam',
      category: 'appalams',
      short: 'A vibrant green variety popular for special meals.',
      full: 'Greens Appalam is a colourful and distinctive variety popular for functions and special occasions. Ask us for current availability and packing options.',
      highlights: ['Distinctive look', 'Function-friendly', 'Careful packing'],
      images: [{ src: 'images/GreensAppalampacket.jpeg', alt: 'Greens appalam packet' }]
    },
    'ajantha-appalam': {
      id: 'ajantha-appalam',
      name: 'Ajantha Appalam',
      category: 'appalams',
      short: 'Classic Ajantha-brand appalam — crisp and fresh.',
      full: 'Ajantha Appalam is our classic brand variety, made with traditional methods for consistent taste and crunch. Available in multiple pack sizes.',
      highlights: ['Traditional recipe', 'Fresh batches', 'Multiple pack sizes'],
      images: [{ src: 'images/Ajanthappalampacket.jpeg', alt: 'Ajantha appalam packet' }]
    }
  };

  const NAV = [
    { href: 'index.html', label: 'Home' },
    { href: 'about.html', label: 'About' },
    { href: 'products.html', label: 'Products' },
    { href: 'contact.html', label: 'Contact' }
  ];

  function escapeHtml(value) {
    return String(value)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#39;');
  }

  function currentPath() {
    const path = (location.pathname || '').split('/').pop() || 'index.html';
    return path.toLowerCase();
  }

  function isCurrentHref(href) {
    const hrefPath = String(href).split('#')[0].split('?')[0];
    return currentPath() === hrefPath;
  }

  function navLink(href, label) {
    const isCurrent = isCurrentHref(href);
    return `
      <li class="nav-item">
        <a class="nav-link${isCurrent ? ' active' : ''}" href="${escapeHtml(href)}" ${isCurrent ? 'aria-current="page"' : ''}>
          <span>${escapeHtml(label)}</span>
        </a>
      </li>
    `;
  }

  function renderHeader() {
    return `
      <a class="skip-link" href="#main">Skip to content</a>
      <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav" role="navigation" aria-label="Primary">
        <div class="container-fluid">
          <a class="navbar-brand" href="index.html" aria-label="${escapeHtml(BUSINESS.name)} home">
            <img class="img-fluid" src="images/logo.jpg" alt="${escapeHtml(BUSINESS.name)} logo" />
            <span class="brand-title">${escapeHtml(BUSINESS.name)}</span>
          </a>

          <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i class="fa fa-bars"></i>
          </button>

          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              ${NAV.map((item) => navLink(item.href, item.label)).join('')}
            </ul>
          </div>
        </div>
      </nav>
    `;
  }

  function renderFooter() {
    return `
      <footer class="main-footer" role="contentinfo">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="mb-3 img-logo">
                <a href="index.html" aria-label="${escapeHtml(BUSINESS.name)} home">
                  <img src="images/logo.jpg" alt="${escapeHtml(BUSINESS.name)}" />
                </a>
                <p>Homemade, traditional & hygienic preparation. Based in ${escapeHtml(BUSINESS.city)} (${escapeHtml(BUSINESS.area)}). Bulk orders available.</p>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 col-sm-12">
              <h4 class="mb-4 ph-fonts-style foot-title">Quick Links</h4>
              <ul class="ph-links-column">
                <li><a href="index.html" class="text-black">Home</a></li>
                <li><a href="about.html" class="text-black">About</a></li>
                <li><a href="products.html" class="text-black">Products</a></li>
                <li><a href="contact.html" class="text-black">Contact</a></li>
              </ul>
            </div>

            <div class="col-lg-4 col-md-6 col-sm-12">
              <h4 class="mb-4 ph-fonts-style foot-title">Contact</h4>
              <div class="cont-box-footer">
                <div class="cont-line">
                  <div class="icon-b"><i class="fa fa-map-signs" aria-hidden="true"></i></div>
                  <div class="cont-dit"><p>${escapeHtml(BUSINESS.addressLine)}</p></div>
                </div>
                <div class="cont-line">
                  <div class="icon-b"><i class="fa fa-volume-control-phone" aria-hidden="true"></i></div>
                  <div class="cont-dit"><p><a href="tel:${escapeHtml(BUSINESS.phoneTel)}">${escapeHtml(BUSINESS.phoneDisplay)}</a></p></div>
                </div>
                <div class="cont-line">
                  <div class="icon-b"><i class="fa fa-envelope-o" aria-hidden="true"></i></div>
                  <div class="cont-dit"><p><a href="mailto:${escapeHtml(BUSINESS.email)}">${escapeHtml(BUSINESS.email)}</a></p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div class="copyrights">
        <div class="container-fluid">
          <div class="footer-distributed">
            <div class="footer-left">
              <p class="footer-company-name">© <span id="year"></span> <a href="index.html">${escapeHtml(BUSINESS.name)}</a>. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function setupNavToggle() {
    // Navbar collapsing is handled by Bootstrap (green-special-master/js/all.js).
  }

  function setupYear() {
    const year = document.getElementById('year');
    if (year) year.textContent = String(new Date().getFullYear());
  }

  function getProductIdFromUrl() {
    const url = new URL(location.href);
    return (url.searchParams.get('id') || '').toLowerCase();
  }

  function renderProductDetails() {
    const root = document.getElementById('productDetails');
    if (!root) return;

    const id = getProductIdFromUrl();
    const product = PRODUCTS[id] || PRODUCTS['classic-appalam'];

    document.title = `${product.name} | ${BUSINESS.name}`;

    const imagesHtml = product.images
      .map((img) => `
        <div class="card">
          <img src="${escapeHtml(img.src)}" alt="${escapeHtml(img.alt)}" width="800" height="520" loading="lazy" />
        </div>
      `)
      .join('');

    const highlightsHtml = product.highlights
      .map((h) => `<li>${escapeHtml(h)}</li>`)
      .join('');

    root.innerHTML = `
      <div class="details">
        <div>
          <div class="kicker">Product</div>
          <h1>${escapeHtml(product.name)}</h1>
          <p class="meta">Homemade • Traditional • Hygienic preparation • Made in ${escapeHtml(BUSINESS.city)}</p>

          <div class="hero-badges" aria-label="Product highlights">
            <span class="badge">Small-batch</span>
            <span class="badge">Quality ingredients</span>
            <span class="badge">Careful packing</span>
          </div>

          <div class="section" style="padding:1rem 0 0">
            <h2 style="margin:0 0 .5rem">Description</h2>
            <p class="prose">${escapeHtml(product.full)}</p>
          </div>

          <div class="section" style="padding:1rem 0 0">
            <h2 style="margin:0 0 .5rem">Why choose this?</h2>
            <ul class="prose" style="margin:.25rem 0 0; padding-left:1.15rem; color:var(--muted)">${highlightsHtml}</ul>
          </div>

          <div class="section" style="padding:1rem 0 0">
            <a class="btn btn-primary" href="contact.html">Enquire / Order</a>
            <a class="btn" href="products.html" style="margin-left:.5rem">Back to Products</a>
          </div>
        </div>

        <div class="grid" aria-label="Product images">
          ${imagesHtml}
        </div>
      </div>
    `;
  }

  function setupHeroSlider() {
    const slider = document.querySelector('[data-hero-slider]');
    if (!slider) return;

    const slides = Array.from(slider.querySelectorAll('.hero-slide'));
    const dots = Array.from(slider.querySelectorAll('[data-hero-dot]'));
    if (slides.length <= 1) return;

    let index = 0;
    let timer = null;

    const setIndex = (next) => {
      index = (next + slides.length) % slides.length;
      slides.forEach((s, i) => s.setAttribute('aria-hidden', i === index ? 'false' : 'true'));
      dots.forEach((d, i) => d.setAttribute('aria-current', i === index ? 'true' : 'false'));
    };

    const start = () => {
      stop();
      timer = window.setInterval(() => setIndex(index + 1), 5200);
    };

    const stop = () => {
      if (timer) window.clearInterval(timer);
      timer = null;
    };

    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        setIndex(i);
        start();
      });
    });

    slider.addEventListener('mouseenter', stop);
    slider.addEventListener('mouseleave', start);

    setIndex(0);
    start();
  }

  function mountLayout() {
    const headerMount = document.getElementById('siteHeader');
    const footerMount = document.getElementById('siteFooter');
    if (headerMount) headerMount.innerHTML = renderHeader();
    if (footerMount) footerMount.innerHTML = renderFooter();
  }

  document.addEventListener('DOMContentLoaded', () => {
    mountLayout();
    setupNavToggle();
    setupYear();
    renderProductDetails();
    setupHeroSlider();

    const header = document.querySelector('.site-header');
    if (header) {
      const onScroll = () => {
        header.classList.toggle('is-scrolled', window.scrollY > 8);
      };
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
    }
  });
})();
