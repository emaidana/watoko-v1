// --- Opening Screen removed — statement is now inline above hero ---

/* ============================================
   Agent Carousel
   ============================================ */
(function() {
    var carouselEl = document.getElementById('agentCarousel');
    if (!carouselEl) return;

    var CAROUSEL_ENGINES = {
        brain: {
            title: 'Field intelligence engine',
            sub: '16 autonomous agents running the full field-intelligence stack \u2014 soil, irrigation, canopy, harvest.',
            link: 'brain.html',
            gradients: ['g-brain-1', 'g-brain-2', 'g-brain-3'],
            agents: [
                { name: 'Soil Health',          desc: 'Monitors soil moisture, pH, NPK, and temperature continuously.' },
                { name: 'Irrigation',           desc: 'Combines soil moisture, weather, and crop water needs to trigger irrigation automatically.' },
                { name: 'Pest & Disease',       desc: 'Computer vision analyzes camera and drone imagery for threats.' },
                { name: 'Harvest Timing',       desc: 'Cross-references maturity, weather, and market prices for optimal harvest date.' },
                { name: 'Crop Planning',        desc: 'Recommends what to plant next season based on soil history and market demand.' },
                { name: 'Canopy Analysis',      desc: 'Satellite and drone data for continuous crop health scoring.' },
                { name: 'Weather Intelligence', desc: 'Hyperlocal forecasting fused with on-farm sensor data.' },
                { name: 'Input Procurement',    desc: 'Auto-calculates input needs, finds best prices, and places orders.' },
                { name: 'Voice',                desc: 'Farmers speak in their language via WhatsApp. AI responds in 2,000+ languages.' },
                { name: 'Labor Coordination',   desc: 'Matches seasonal labor demand with available workers.' },
                { name: 'Space Agriculture',    desc: 'Adapts field-tested crop protocols for controlled environment agriculture.' },
                { name: 'Water Management',     desc: 'Maps aquifer levels, optimizes irrigation, and designs rainwater harvesting.' },
                { name: 'Simulation',           desc: 'Runs thousands of simulated seasons to stress-test every recommendation.' },
                { name: 'Agronomist Expert',    desc: 'Trained on decades of agronomy research and Watoko field data.' },
                { name: 'Customer Success',     desc: 'Walks every new user through setup, training, and first-season operations.' },
                { name: 'Legal',                desc: 'Drafts cooperative bylaws, buyer contracts, and land-tenure documentation.' },
            ],
        },
        market: {
            title: 'Trade orchestration engine',
            sub: '13 autonomous agents orchestrating the full commercial lifecycle from farmer to buyer.',
            link: 'market.html',
            gradients: ['g-market-1', 'g-market-2', 'g-market-3'],
            agents: [
                { name: 'Price Intelligence',    desc: 'Ingests thousands of price feeds across regional and international markets.' },
                { name: 'Quality Verification',  desc: 'Grades lots using sensor and camera data at point of harvest.' },
                { name: 'Forward Contract',      desc: 'Structures future sales using satellite-verified yield predictions.' },
                { name: 'Order Book & Execution',desc: 'Runs the transparent order book. Matches lots to buyers on quality and volume.' },
                { name: 'EUDR Compliance',       desc: 'Automated geolocation mapping and forest monitoring for EU-ready compliance.' },
                { name: 'Data Passport',         desc: 'Compiles complete traceability: provenance, quality, and chain-of-custody.' },
                { name: 'Auction',               desc: 'Runs timed competitive bidding for specialty and premium lots.' },
                { name: 'Dispute Resolution',    desc: 'Automated mediation for quality, delivery, and payment disputes.' },
                { name: 'FX & Currency',         desc: 'Handles the currency layer of every cross-border trade.' },
                { name: 'Futures & Derivatives', desc: 'Connects cooperatives to commodity futures and options markets.' },
                { name: 'Trade Admin',           desc: 'Handles invoices, export permits, shipping documents, and tax filings.' },
                { name: 'Sustainability & Carbon',desc: 'Scope 3, water, biodiversity scoring per harvest.' },
                { name: 'Environmental Compliance',desc: 'Monitors environmental regulations across jurisdictions.' },
            ],
        },
        ecosystem: {
            title: 'Operations engine',
            sub: '13 autonomous agents delivering every operation a farm needs \u2014 payments, insurance, credit, logistics.',
            link: 'ecosystem.html',
            gradients: ['g-ecosystem-1', 'g-ecosystem-2', 'g-ecosystem-3'],
            agents: [
                { name: 'Payments',          desc: 'M-Pesa, MTN, Airtel, Orange, and bank transfers across 15+ currencies.' },
                { name: 'Insurance',         desc: 'Parametric coverage triggered by biological data and satellite imagery.' },
                { name: 'Credit Scoring',    desc: 'Builds creditworthiness from biological health indicators, not collateral.' },
                { name: 'Logistics',         desc: 'GPS-tracked transport with temperature and humidity monitoring.' },
                { name: 'Compliance',        desc: 'Auto-generates export permits, phytosanitary certificates, and KYC/AML docs.' },
                { name: 'Cooperative Finance',desc: 'Manages member accounts, dividend distribution, and group savings.' },
                { name: 'Warehouse',         desc: 'Tracks inventory, monitors storage conditions, and generates warehouse receipts.' },
                { name: 'Smart Contract',    desc: 'Generates and executes contracts with auto-enforcement.' },
                { name: 'Subsidy & Grant',   desc: 'Discovers and auto-applies for government subsidies and NGO grants.' },
                { name: 'Legal',             desc: 'Verifies land tenure, reviews contracts, and handles dispute arbitration.' },
                { name: 'Accounting',        desc: 'Every transaction flows into a proper double-entry ledger automatically.' },
                { name: 'HR & Payroll',      desc: 'Onboards staff, runs payroll to mobile money, and tracks hours worked.' },
                { name: 'Partner Quality',   desc: 'Monitors and scores partner service quality across the network.' },
            ],
        },
        labs: {
            title: 'Biological intelligence engine',
            sub: '21 discovery agents turning Earth\u2019s deepest biology into food, science, and intelligence.',
            link: 'labs.html',
            gradients: ['g-labs-1', 'g-labs-2', 'g-labs-3'],
            agents: [
                { name: 'Crop Optimization',       desc: 'Optimizes crop varieties and growing conditions across regions.' },
                { name: 'Bioactive Discovery',     desc: 'Mining biology for novel compounds at scale.' },
                { name: 'Climate Resilience',      desc: 'Models variety-by-variety resilience to climate change.' },
                { name: 'Risk Modeling',           desc: 'Quantifies agricultural and biological risks across scenarios.' },
                { name: 'Carbon MRV',              desc: 'Measurement, reporting, and verification for carbon credits.' },
                { name: 'Food-Health',             desc: 'Maps nutritional and bioactive profiles of crops to health outcomes.' },
                { name: 'Soil Microbiome',         desc: 'Maps soil biology across thousands of farms for regenerative agriculture.' },
                { name: 'Product Innovation',      desc: 'Translates biological discoveries into commercial products.' },
                { name: 'Plant Genomics',          desc: 'Trait discovery across cultivars and conditions.' },
                { name: 'Longevity & Healthspan',  desc: 'Plant longevity and stress-response programs.' },
                { name: 'Simulation & Prediction', desc: 'High-fidelity simulations of plots and biomes.' },
                { name: 'Astrobiology',            desc: 'Adapts terrestrial biology for extraterrestrial environments.' },
                { name: 'Planetary Habitat',       desc: 'Sealed-environment crop systems for orbit and Mars.' },
                { name: 'Synthetic Biology',       desc: 'Engineers biological systems for new capabilities.' },
                { name: 'Biodiversity Intelligence',desc: 'Maps and monitors biodiversity across ecosystems.' },
                { name: 'Environmental Remediation',desc: 'Uses biological systems to restore degraded environments.' },
                { name: 'Human Microbiome',        desc: 'Studies the intersection of food, gut biology, and health.' },
                { name: 'Water Systems',           desc: 'Models water cycles and their interaction with biological systems.' },
                { name: 'Climate Adaptation',      desc: 'Develops climate adaptation strategies for agriculture.' },
                { name: 'Crop Resilience',         desc: 'Stress-test screens across 10k+ stress vectors.' },
                { name: 'Microbiome Resilience',   desc: 'Studies microbial community stability under stress.' },
            ],
        },
    };

    var cCurrentEngine = 'brain';
    var cCenterIndex = 2;

    var cTrack = document.getElementById('carouselTrack');
    var cCaptions = document.getElementById('carouselCaptions');
    var cEngineMeta = document.getElementById('carouselEngineMeta');
    var cTabs = document.querySelectorAll('.carousel-tab');

    function cBuildEngine(engineKey) {
        cCurrentEngine = engineKey;
        var e = CAROUSEL_ENGINES[engineKey];
        cCenterIndex = Math.min(cCenterIndex, e.agents.length - 1);

        // Engine meta
        cEngineMeta.innerHTML =
            '<div class="em-title">' + e.title + '</div>' +
            '<div class="em-sub">' + e.sub + '</div>';

        // Orbs
        cTrack.innerHTML = '';
        e.agents.forEach(function(agent, i) {
            var orb = document.createElement('div');
            orb.className = 'carousel-orb';
            orb.dataset.idx = i;
            var gradClass = e.gradients[i % e.gradients.length];
            orb.innerHTML = '<div class="carousel-orb-inner"><div class="carousel-orb-gradient ' + gradClass + '"></div></div>';
            orb.addEventListener('click', function() {
                var idx = parseInt(orb.dataset.idx, 10);
                if (idx === cCenterIndex) {
                    // Navigate to the engine page
                    window.location.href = CAROUSEL_ENGINES[cCurrentEngine].link;
                } else {
                    cCenterIndex = idx;
                    cUpdatePositions();
                }
            });
            cTrack.appendChild(orb);
        });

        // Captions — remove only caption divs, keep arrow buttons
        cCaptions.querySelectorAll('.carousel-cap').forEach(function(el) { el.remove(); });
        e.agents.forEach(function(agent, i) {
            var cap = document.createElement('div');
            cap.className = 'carousel-cap';
            cap.dataset.idx = i;
            cap.innerHTML =
                '<div class="carousel-cap-name"><span class="cap-name-text">' + agent.name + '</span> <span class="cap-link-arrow">&#8599;</span></div>' +
                '<div class="carousel-cap-desc">' + agent.desc + '</div>';
            cap.addEventListener('click', function() {
                var idx = parseInt(cap.dataset.idx, 10);
                if (idx === cCenterIndex) {
                    window.location.href = CAROUSEL_ENGINES[cCurrentEngine].link;
                }
            });
            cCaptions.appendChild(cap);
        });

        cUpdatePositions();
    }

    function cUpdatePositions() {
        var e = CAROUSEL_ENGINES[cCurrentEngine];

        cTrack.querySelectorAll('.carousel-orb').forEach(function(orb) {
            var i = parseInt(orb.dataset.idx, 10);
            var diff = i - cCenterIndex;
            if (diff > 3) diff = 3;
            if (diff < -3) diff = -3;
            orb.dataset.pos = diff;
        });

        cCaptions.querySelectorAll('.carousel-cap').forEach(function(cap) {
            var i = parseInt(cap.dataset.idx, 10);
            var diff = i - cCenterIndex;
            if (diff > 2) diff = 2;
            if (diff < -2) diff = -2;
            cap.dataset.pos = diff;
        });

        // Arrow disabled state at ends
        document.getElementById('carouselPrev').disabled = (cCenterIndex === 0);
        document.getElementById('carouselNext').disabled = (cCenterIndex === e.agents.length - 1);
    }

    // Tabs
    cTabs.forEach(function(tab) {
        tab.addEventListener('click', function() {
            cTabs.forEach(function(t) { t.classList.remove('active'); });
            tab.classList.add('active');
            cCenterIndex = 2;
            cBuildEngine(tab.dataset.engine);
        });
    });

    // Arrows
    document.getElementById('carouselPrev').addEventListener('click', function() {
        cCenterIndex = Math.max(0, cCenterIndex - 1);
        cUpdatePositions();
    });
    document.getElementById('carouselNext').addEventListener('click', function() {
        var max = CAROUSEL_ENGINES[cCurrentEngine].agents.length - 1;
        cCenterIndex = Math.min(max, cCenterIndex + 1);
        cUpdatePositions();
    });

    // Keyboard — scoped to carousel container
    carouselEl.addEventListener('keydown', function(ev) {
        if (ev.key === 'ArrowLeft') { document.getElementById('carouselPrev').click(); ev.preventDefault(); }
        if (ev.key === 'ArrowRight') { document.getElementById('carouselNext').click(); ev.preventDefault(); }
    });

    // Init
    cBuildEngine('brain');
})();

// Nav scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 10);
});

// Mobile menu toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    if (!navLinks.classList.contains('open')) {
        closeAllDropdowns();
    }
});

// Multiple dropdowns support
const isMobile = () => window.innerWidth <= 768;
const allDropdowns = document.querySelectorAll('.nav-dropdown');

function closeAllDropdowns() {
    allDropdowns.forEach(dd => dd.classList.remove('open'));
}

allDropdowns.forEach(dropdown => {
    const trigger = dropdown.querySelector('.nav-dropdown-trigger');
    let closeTimeout = null;

    function openThis() {
        clearTimeout(closeTimeout);
        // Close other dropdowns
        allDropdowns.forEach(dd => {
            if (dd !== dropdown) dd.classList.remove('open');
        });
        dropdown.classList.add('open');
    }

    function closeThis() {
        dropdown.classList.remove('open');
    }

    function scheduleClose() {
        clearTimeout(closeTimeout);
        closeTimeout = setTimeout(closeThis, 250);
    }

    // Click to toggle
    trigger.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (dropdown.classList.contains('open')) {
            closeThis();
        } else {
            openThis();
        }
    });

    // Desktop: hover to open and stay open
    dropdown.addEventListener('mouseenter', () => {
        if (!isMobile()) openThis();
    });

    dropdown.addEventListener('mouseleave', () => {
        if (!isMobile()) scheduleClose();
    });

    // Keep open when hovering the mega-menu
    const megaMenu = dropdown.querySelector('.mega-menu');
    if (megaMenu) {
        megaMenu.addEventListener('mouseenter', () => {
            clearTimeout(closeTimeout);
        });
        megaMenu.addEventListener('mouseleave', () => {
            if (!isMobile()) scheduleClose();
        });
    }
});

// Close when clicking outside
document.addEventListener('click', (e) => {
    allDropdowns.forEach(dd => {
        if (!dd.contains(e.target)) {
            dd.classList.remove('open');
        }
    });
});

// Close mobile menu on nav link click
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        closeAllDropdowns();
    });
});

// Email capture (hero) — opens modal with email pre-filled
const emailCapture = document.getElementById('emailCapture');
if (emailCapture) {
    emailCapture.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = emailCapture.querySelector('input');
        const email = input.value;
        openDemoModal();
        const demoEmail = document.getElementById('demoEmail');
        if (demoEmail && email) demoEmail.value = email;
        input.value = '';
    });
}

// Demo modal
const demoModal = document.getElementById('demoModal');
const demoForm = document.getElementById('demoForm');

function openDemoModal() {
    if (!demoModal) return;
    demoModal.classList.add('active');
    document.body.classList.add('modal-open');
}

function closeDemoModal() {
    if (!demoModal) return;
    demoModal.classList.remove('active');
    document.body.classList.remove('modal-open');
    // Reset form and success state after transition
    setTimeout(() => {
        if (demoForm) demoForm.reset();
        const grid = demoModal.querySelector('.demo-modal-grid');
        const success = demoModal.querySelector('.demo-modal-success');
        if (grid) grid.style.display = '';
        if (success) success.classList.remove('show');
    }, 300);
}

// Open modal on any .demo-trigger click
document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.demo-trigger');
    if (trigger) {
        e.preventDefault();
        // Close mobile nav if open
        if (navLinks.classList.contains('open')) {
            navLinks.classList.remove('open');
            closeAllDropdowns();
        }
        openDemoModal();
    }
});

// Close modal
if (demoModal) {
    // Close button
    const closeBtn = demoModal.querySelector('.demo-modal-close');
    if (closeBtn) closeBtn.addEventListener('click', closeDemoModal);

    // Overlay click
    const overlay = demoModal.querySelector('.demo-modal-overlay');
    if (overlay) overlay.addEventListener('click', closeDemoModal);

    // Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && demoModal.classList.contains('active')) {
            closeDemoModal();
        }
    });
}

// Demo form submit
if (demoForm) {
    demoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const grid = demoModal.querySelector('.demo-modal-grid');
        const success = demoModal.querySelector('.demo-modal-success');
        if (grid) grid.style.display = 'none';
        if (success) success.classList.add('show');
        // Auto-close after delay
        setTimeout(closeDemoModal, 3000);
    });
}

// Announcement bar dismiss
const announcementBar = document.getElementById('announcementBar');
const announcementClose = document.getElementById('announcementClose');
if (announcementBar && announcementClose) {
    if (sessionStorage.getItem('announcement-dismissed')) {
        announcementBar.classList.add('hidden');
    }
    announcementClose.addEventListener('click', () => {
        announcementBar.classList.add('hidden');
        sessionStorage.setItem('announcement-dismissed', '1');
    });
}

// Pioneers interest list form
const pioneersForm = document.getElementById('pioneersForm');
if (pioneersForm) {
    pioneersForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = pioneersForm.querySelector('button[type="submit"]');
        btn.textContent = 'You\'re on the list!';
        btn.style.background = 'linear-gradient(135deg, #66BB6A, #4CAF50)';
        btn.disabled = true;
        pioneersForm.querySelectorAll('input, select').forEach(el => el.disabled = true);
    });
}

// Scroll-triggered reveal animations
const observerOptions = {
    threshold: 0.05,
    rootMargin: '0px 0px -10% 0px'
};

const observer = new IntersectionObserver((entries) => {
    // Local stagger only — never apply a global cumulative delay (was causing 2.5s+ delays).
    var intersecting = entries.filter(function(e) { return e.isIntersecting; });
    intersecting.forEach(function(entry, idx) {
        var el = entry.target;
        var localDelay = Math.min(idx * 0.04, 0.2);
        el.style.transition = 'opacity 0.45s ease ' + localDelay + 's, transform 0.45s ease ' + localDelay + 's';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
        el.addEventListener('transitionend', function handler(e) {
            if (e.propertyName === 'opacity' || e.propertyName === 'transform') {
                el.style.transform = '';
                el.style.transition = '';
                el.style.opacity = '';
                el.removeEventListener('transitionend', handler);
            }
        });
        observer.unobserve(el);
    });
}, observerOptions);

// Observe animatable elements
const animateSelectors = [
    '.product-card',
    '.feature-card',
    '.scale-card',
    '.stats-bar-item',
    '.compound-card',
    '.pricing-engine-card',
    '.pricing-tier-card',
    '.pricing-compound-card',
    '.stat',
    '.problem-card',
    '.page-capabilities-list li',
    '.page-highlight-box',
    '.agent-card',
    '.workflow-step',
    '.interface-card',
    '.datasource-card',
    '.connection-card',
    '.onboarding-step',
    '.page-hero-stat',
    '.page-hero-user',
    '.security-card',
    '.integration-category',
    '.grants-step',
    '.grants-coverage-card',
    '.inline-testimonial',
    '.partner-card',
    '.api-card',
    '.team-card',
    '.values-card',
    '.offline-card',
    '.vision-card',
    '.customers-story-card',
    '.pioneers-value-card',
    '.pioneers-archetype-card',
    '.pioneers-region-card',
    '.pioneers-journey-step',
    '.pioneers-criteria-item',
    '.fellows-role-card',
    '.fellows-kampala-stat',
    '.fellows-kampala-block',
    '.pricing-blog-item',
    '.system-stats-pill',
    '.four-product-block',
    '.why-now-card',
    '.network-card',
    '.frontier-body',
    '.company-stat-card',
    '.company-principle',
    '.timeline-item',
    '.company-hero-stat',
    '.company-final-statement'
];

document.querySelectorAll(animateSelectors.join(', ')).forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = 'opacity 0.45s ease, transform 0.45s ease';
    observer.observe(el);
});

// Reusable scroll-triggered chat animation
function createChatAnimation(container, animateSelector, typingSelector, opts) {
    if (!container) return;

    var msgs = container.querySelectorAll(animateSelector);
    var typing = container.querySelector(typingSelector);
    var timers = [];
    var running = false;

    function reset() {
        timers.forEach(function(t) { clearTimeout(t); });
        timers = [];
        running = false;
        msgs.forEach(function(msg) {
            msg.classList.remove('visible', 'fade-out');
        });
    }

    function play() {
        if (running) return;
        running = true;
        var delay = opts.startDelay || 300;
        var typingIndex = typing ? Array.from(msgs).indexOf(typing) : -1;

        msgs.forEach(function(msg, i) {
            var isTyping = msg === typing;
            var isAfterTyping = i === typingIndex + 1;

            if (isTyping) {
                timers.push(setTimeout(function() { msg.classList.add('visible'); }, delay));
                delay += 1100;
                timers.push(setTimeout(function() {
                    msg.classList.remove('visible');
                    msg.classList.add('fade-out');
                }, delay));
                delay += 350;
            } else if (isAfterTyping) {
                timers.push(setTimeout(function() { msg.classList.add('visible'); }, delay));
                delay += 500;
            } else if (msg.classList.contains('incoming') || msg.classList.contains(opts.actionClass || '')) {
                timers.push(setTimeout(function() { msg.classList.add('visible'); }, delay));
                delay += 600;
            } else {
                timers.push(setTimeout(function() { msg.classList.add('visible'); }, delay));
                delay += 400;
            }
        });
    }

    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                play();
            } else {
                reset();
            }
        });
    }, { threshold: opts.threshold || 0.3 });

    observer.observe(container);
}

// Hero chat
createChatAnimation(
    document.querySelector('.hero-phone'),
    '.hero-chat-animate',
    '.hero-chat-typing',
    { startDelay: 300, threshold: 0.3, actionClass: 'hero-chat-action' }
);

// Scale chat (also used in network section)
createChatAnimation(
    document.querySelector('.scale-card-featured') || document.querySelector('.network-card-featured'),
    '.scale-chat-animate',
    '.scale-chat-typing',
    { startDelay: 400, threshold: 0.3, actionClass: 'scale-chat-action' }
);

// Feature notifications — scroll-triggered entrance + breathing
(function() {
    var notifs = document.querySelectorAll('.feature-notif-enter');
    if (!notifs.length) return;

    notifs.forEach(function(notif) {
        var dash = notif.closest('.feature-dash');
        if (!dash) return;

        var notifObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    // Entrance: slide up + fade in, then start breathing
                    setTimeout(function() {
                        notif.classList.add('visible');
                        // Start breathing after entrance completes
                        setTimeout(function() {
                            notif.classList.add('breathing');
                        }, 700);
                    }, 800);
                } else {
                    // Reset when scrolled away
                    notif.classList.remove('visible', 'breathing');
                }
            });
        }, { threshold: 0.4 });

        notifObserver.observe(dash);
    });
})();

// Product cards — 3D tilt on hover
(function() {
    var cards = document.querySelectorAll('.product-card');
    if (!cards.length) return;

    var maxTilt = 4; // degrees

    cards.forEach(function(card) {
        card.addEventListener('mouseenter', function() {
            card.classList.add('tilting');
        });

        card.addEventListener('mousemove', function(e) {
            var rect = card.getBoundingClientRect();
            var x = (e.clientX - rect.left) / rect.width;
            var y = (e.clientY - rect.top) / rect.height;
            var tiltX = (0.5 - y) * maxTilt;
            var tiltY = (x - 0.5) * maxTilt;
            card.style.transform = 'perspective(800px) rotateX(' + tiltX + 'deg) rotateY(' + tiltY + 'deg) translateY(-4px)';
        });

        card.addEventListener('mouseleave', function() {
            card.classList.remove('tilting');
            card.style.transform = '';
        });
    });
})();

/* ============================================
   FAQ Accordion (works on pricing + product pages)
   ============================================ */
document.querySelectorAll('.pricing-faq-question').forEach(function(btn) {
    btn.addEventListener('click', function() {
        var item = btn.parentElement;
        var isOpen = item.classList.contains('open');
        var container = item.closest('.pricing-faq-list');

        // Close all other items within the same FAQ list
        if (container) {
            container.querySelectorAll('.pricing-faq-item.open').forEach(function(openItem) {
                if (openItem !== item) openItem.classList.remove('open');
            });
        }

        if (isOpen) {
            item.classList.remove('open');
        } else {
            item.classList.add('open');
        }
    });
});

/* ============================================
   Agent Card Expand/Collapse (accordion)
   ============================================ */
document.querySelectorAll('.agent-card').forEach(function(card) {
    card.addEventListener('click', function() {
        var isOpen = card.classList.contains('open');
        var grid = card.closest('.agent-grid');

        // Close all other cards in the same grid
        if (grid) {
            grid.querySelectorAll('.agent-card.open').forEach(function(openCard) {
                if (openCard !== card) openCard.classList.remove('open');
            });
        }

        if (isOpen) {
            card.classList.remove('open');
        } else {
            card.classList.add('open');
        }
    });
});

/* ============================================
   Agent Cards — 3D Tilt on Hover
   ============================================ */
(function() {
    var agentCards = document.querySelectorAll('.agent-card');
    if (!agentCards.length) return;

    var maxTilt = 3;

    agentCards.forEach(function(card) {
        card.addEventListener('mousemove', function(e) {
            var rect = card.getBoundingClientRect();
            var x = (e.clientX - rect.left) / rect.width;
            var y = (e.clientY - rect.top) / rect.height;
            var tiltX = (0.5 - y) * maxTilt;
            var tiltY = (x - 0.5) * maxTilt;
            card.style.transform = 'perspective(800px) rotateX(' + tiltX + 'deg) rotateY(' + tiltY + 'deg) translateY(-3px)';
        });

        card.addEventListener('mouseleave', function() {
            card.style.transform = '';
        });
    });
})();

/* ============================================
   Grid-Aware Staggered Entrance for Agent Grids
   ============================================ */
(function() {
    var grids = document.querySelectorAll('.agent-grid');
    if (!grids.length) return;

    var gridObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                var grid = entry.target;
                var cards = grid.querySelectorAll('.agent-card');
                var cols = 3;
                if (window.innerWidth <= 768) cols = 1;
                else if (window.innerWidth <= 1024) cols = 2;

                cards.forEach(function(card, i) {
                    var row = Math.floor(i / cols);
                    var col = i % cols;
                    var delay = row * 0.12 + col * 0.06;
                    card.style.transition = 'opacity 0.5s ease ' + delay + 's, transform 0.5s ease ' + delay + 's';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                });

                gridObserver.unobserve(grid);
            }
        });
    }, { threshold: 0.1 });

    grids.forEach(function(grid) {
        gridObserver.observe(grid);
    });
})();

/* ============================================
   Careers Role Accordion
   ============================================ */
document.querySelectorAll('.careers-role-row').forEach(function(row) {
    var header = row.querySelector('.careers-role-row-header');
    if (!header) return;
    header.addEventListener('click', function() {
        var wasOpen = row.classList.contains('open');
        var category = row.closest('.careers-role-category');
        if (category) {
            category.querySelectorAll('.careers-role-row.open').forEach(function(r) {
                r.classList.remove('open');
            });
        }
        if (!wasOpen) row.classList.add('open');
    });
});

/* ============================================
   Careers Filter (search + dept + location + type)
   ============================================ */
(function() {
    var search = document.getElementById('careersSearch');
    var deptFilter = document.getElementById('careersDept');
    var locFilter = document.getElementById('careersLocation');
    var typeFilter = document.getElementById('careersType');
    var emptyState = document.getElementById('careersEmpty');
    var resetBtn = document.getElementById('careersReset');
    if (!search || !deptFilter || !locFilter || !typeFilter) return;

    var rows = document.querySelectorAll('.careers-role-row');
    var categories = document.querySelectorAll('.careers-role-category');

    function applyFilter() {
        var q = (search.value || '').trim().toLowerCase();
        var dept = deptFilter.value;
        var loc = locFilter.value;
        var type = typeFilter.value;
        var anyVisible = false;

        rows.forEach(function(row) {
            var titleEl = row.querySelector('.careers-role-row-title');
            var deptEl = row.querySelector('.careers-role-row-dept');
            var badgeEl = row.querySelector('.careers-role-row-badge');
            var bodyEl = row.querySelector('.careers-role-row-body');
            var category = row.closest('.careers-role-category');

            var title = titleEl ? titleEl.textContent.toLowerCase() : '';
            var bodyText = bodyEl ? bodyEl.textContent.toLowerCase() : '';
            var rowDept = deptEl ? deptEl.textContent.trim() : '';
            var rowLoc = badgeEl ? badgeEl.textContent.trim() : '';
            var rowType = category ? category.getAttribute('data-category') : '';

            var matchQ = !q || title.indexOf(q) !== -1 || bodyText.indexOf(q) !== -1 || rowDept.toLowerCase().indexOf(q) !== -1;
            var matchDept = !dept || rowDept === dept;
            var matchLoc = !loc || rowLoc === loc;
            var matchType = !type || rowType === type;

            var matches = matchQ && matchDept && matchLoc && matchType;
            row.classList.toggle('is-hidden', !matches);
            if (matches) anyVisible = true;
        });

        // Hide empty categories
        categories.forEach(function(cat) {
            var visible = cat.querySelectorAll('.careers-role-row:not(.is-hidden)').length;
            cat.classList.toggle('is-hidden', visible === 0);
        });

        if (emptyState) {
            emptyState.classList.toggle('is-visible', !anyVisible);
        }
    }

    function resetFilters() {
        search.value = '';
        deptFilter.value = '';
        locFilter.value = '';
        typeFilter.value = '';
        applyFilter();
    }

    search.addEventListener('input', applyFilter);
    deptFilter.addEventListener('change', applyFilter);
    locFilter.addEventListener('change', applyFilter);
    typeFilter.addEventListener('change', applyFilter);
    if (resetBtn) resetBtn.addEventListener('click', resetFilters);
})();

/* ============================================
   Flashlight Border Effect (Developers Page)
   ============================================ */
(function() {
    var flashGrid = document.querySelector('.api-grid-flashlight');
    if (!flashGrid) return;

    flashGrid.addEventListener('mousemove', function(e) {
        var rect = flashGrid.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        flashGrid.style.setProperty('--mouse-x', x + 'px');
        flashGrid.style.setProperty('--mouse-y', y + 'px');
    });
})();

/* ============================================
   Section Headline Entrance Observer
   Toggles .is-visible on .section-headline-enter elements
   Optional data-stagger="150" for delayed entrance (ms)
   ============================================ */
(function() {
    var headlines = document.querySelectorAll('.section-headline-enter');
    if (!headlines.length || !('IntersectionObserver' in window)) {
        headlines.forEach(function(el) { el.classList.add('is-visible'); });
        return;
    }

    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (!entry.isIntersecting) return;
            var el = entry.target;
            var delay = parseInt(el.getAttribute('data-stagger') || '0', 10);
            if (delay > 0) {
                setTimeout(function() { el.classList.add('is-visible'); }, delay);
            } else {
                el.classList.add('is-visible');
            }
            observer.unobserve(el);
        });
    }, { threshold: 0.2, rootMargin: '0px 0px -40px 0px' });

    headlines.forEach(function(el) { observer.observe(el); });
})();

/* ============================================
   Panel Entrance Observer
   Toggles .is-visible on .panel-enter elements
   ============================================ */
(function() {
    var panels = document.querySelectorAll('.panel-enter');
    if (!panels.length || !('IntersectionObserver' in window)) {
        panels.forEach(function(el) { el.classList.add('is-visible'); });
        return;
    }

    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    panels.forEach(function(el) { observer.observe(el); });
})();

/* ============================================
   Count-Up Animation
   Parses numeric portion of .count-up elements,
   counts up over 1400ms with easeOutExpo. Fires once.
   Supports prefixes/suffixes like $, %, +, K, M
   ============================================ */
(function() {
    var els = document.querySelectorAll('.count-up');
    if (!els.length || !('IntersectionObserver' in window)) return;

    function parseTarget(text) {
        // Match optional prefix, number (with commas/decimals), optional suffix
        var match = text.match(/^([^\d\-\.]*)(-?[\d,]*\.?\d+)(.*)$/);
        if (!match) return null;
        var prefix = match[1] || '';
        var numStr = match[2].replace(/,/g, '');
        var suffix = match[3] || '';
        var num = parseFloat(numStr);
        if (isNaN(num)) return null;
        var hasComma = match[2].indexOf(',') !== -1;
        var decimals = (numStr.split('.')[1] || '').length;
        return { prefix: prefix, num: num, suffix: suffix, hasComma: hasComma, decimals: decimals };
    }

    function formatNumber(value, parsed) {
        var fixed = value.toFixed(parsed.decimals);
        if (parsed.hasComma) {
            var parts = fixed.split('.');
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            fixed = parts.join('.');
        }
        return parsed.prefix + fixed + parsed.suffix;
    }

    function easeOutExpo(t) {
        return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    }

    function animate(el, parsed) {
        var duration = 1400;
        var start = null;
        function step(ts) {
            if (start === null) start = ts;
            var elapsed = ts - start;
            var t = Math.min(elapsed / duration, 1);
            var eased = easeOutExpo(t);
            var current = parsed.num * eased;
            el.textContent = formatNumber(current, parsed);
            if (t < 1) {
                requestAnimationFrame(step);
            } else {
                el.textContent = formatNumber(parsed.num, parsed);
            }
        }
        requestAnimationFrame(step);
    }

    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (!entry.isIntersecting) return;
            var el = entry.target;
            var parsed = parseTarget(el.textContent.trim());
            if (parsed) {
                el.textContent = formatNumber(0, parsed);
                animate(el, parsed);
            }
            observer.unobserve(el);
        });
    }, { threshold: 0.3 });

    els.forEach(function(el) { observer.observe(el); });
})();
