document.addEventListener('DOMContentLoaded', () => {
    // Inject Header
    const headerEl = document.getElementById('global-header');
    if (headerEl) {
        // Add padding to body to compensate for fixed header
        document.body.style.paddingTop = '5rem';
        document.body.style.overflowX = 'hidden';
        document.body.style.maxWidth = '100vw';
        document.documentElement.style.overflowX = 'hidden';

        // Mobile padding reduction - global
        const mobileStyle = document.createElement('style');
        mobileStyle.textContent = `
            @media (max-width: 767px) {
                .px-6 { padding-left: 1rem !important; padding-right: 1rem !important; }
                .py-24 { padding-top: 3rem !important; padding-bottom: 3rem !important; }
                .py-32 { padding-top: 3.5rem !important; padding-bottom: 3.5rem !important; }
                .py-16 { padding-top: 2rem !important; padding-bottom: 2rem !important; }
                .pt-20 { padding-top: 2.5rem !important; }
                .pb-10 { padding-bottom: 1.5rem !important; }
                .mb-16 { margin-bottom: 2rem !important; }
                .mb-12 { margin-bottom: 1.5rem !important; }
                .gap-20 { gap: 2rem !important; }
                .gap-16 { gap: 2rem !important; }
                .gap-12 { gap: 1.5rem !important; }
                .space-y-12 > * + * { margin-top: 1.5rem !important; }
                .text-5xl { font-size: 2rem !important; }
                .text-4xl { font-size: 1.75rem !important; }
                .min-h-\\[870px\\] { min-height: 550px !important; }
            }
        `;
        document.head.appendChild(mobileStyle);
        
        headerEl.innerHTML = `
<nav id="main-nav" class="bg-white/70 backdrop-blur-xl border-b border-white/10 fixed top-0 left-0 right-0 z-[100] transition-all duration-300 h-20">
    <div id="nav-container" class="max-w-7xl mx-auto px-6 h-full flex items-center justify-between gap-8 transition-all duration-300">
        <!-- Logo -->
        <a href="index.html" class="flex-shrink-0 group flex items-center gap-3">
            <img id="header-logo" src="CottonCraft_Logo_Blue%20Outline.png" alt="Cotton Craft Logo" class="h-16 w-auto object-contain group-hover:scale-105 transition-all duration-300">
        </a>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center gap-1">
            <a href="index.html" class="px-3 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.15em] text-slate-700 hover:text-primary transition-all duration-200">Home</a>
            
            <!-- Industries Dropdown -->
            <div class="relative group">
                <button class="px-3 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.15em] text-slate-700 hover:text-primary transition-all duration-200 flex items-center gap-1">
                    Industries <span class="material-symbols-outlined text-[14px]">expand_more</span>
                </button>
                <div class="absolute top-full left-0 w-64 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 ease-out z-[110]">
                    <div class="bg-white/95 backdrop-blur-xl border border-slate-100 shadow-2xl rounded-2xl p-3 overflow-hidden">
                        <a href="sporting-goods.html" class="flex items-center p-3 rounded-xl hover:bg-slate-50 transition-colors group/item">
                            <span class="p-2 bg-blue-50 text-primary rounded-lg mr-3 group-hover/item:bg-primary group-hover/item:text-white transition-colors"><span class="material-symbols-outlined text-[18px]">sports_soccer</span></span>
                            <span class="text-[11px] font-bold uppercase tracking-wider text-slate-700">Sporting Goods</span>
                        </a>
                        <a href="medical.html" class="flex items-center p-3 rounded-xl hover:bg-slate-50 transition-colors group/item">
                            <span class="p-2 bg-emerald-50 text-emerald-600 rounded-lg mr-3 group-hover/item:bg-emerald-600 group-hover/item:text-white transition-colors"><span class="material-symbols-outlined text-[18px]">medical_services</span></span>
                            <span class="text-[11px] font-bold uppercase tracking-wider text-slate-700">Medical</span>
                        </a>
                        <a href="military-defense.html" class="flex items-center p-3 rounded-xl hover:bg-slate-50 transition-colors group/item">
                            <span class="p-2 bg-slate-100 text-slate-600 rounded-lg mr-3 group-hover/item:bg-slate-800 group-hover/item:text-white transition-colors"><span class="material-symbols-outlined text-[18px]">military_tech</span></span>
                            <span class="text-[11px] font-bold uppercase tracking-wider text-slate-700">Military</span>
                        </a>
                        <a href="premium-luggage.html" class="flex items-center p-3 rounded-xl hover:bg-slate-50 transition-colors group/item">
                            <span class="p-2 bg-amber-50 text-amber-600 rounded-lg mr-3 group-hover/item:bg-amber-600 group-hover/item:text-white transition-colors"><span class="material-symbols-outlined text-[18px]">luggage</span></span>
                            <span class="text-[11px] font-bold uppercase tracking-wider text-slate-700">Luggage</span>
                        </a>
                    </div>
                </div>
            </div>

            <!-- Process Dropdown -->
            <div class="relative group">
                <button class="px-3 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.15em] text-slate-700 hover:text-primary transition-all duration-200 flex items-center gap-1">
                    Process <span class="material-symbols-outlined text-[14px]">expand_more</span>
                </button>
                <div class="absolute top-full left-0 w-64 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 ease-out z-[110]">
                    <div class="bg-white/95 backdrop-blur-xl border border-slate-100 shadow-2xl rounded-2xl p-3 overflow-hidden">
                        <a href="our-process.html" class="flex items-center p-3 rounded-xl hover:bg-slate-50 transition-colors">
                            <span class="text-[11px] font-bold uppercase tracking-wider text-slate-700">Our Process</span>
                        </a>
                        <a href="contract-sewing.html" class="flex items-center p-3 rounded-xl hover:bg-slate-50 transition-colors">
                            <span class="text-[11px] font-bold uppercase tracking-wider text-slate-700">Contract Sewing</span>
                        </a>
                        <a href="lean-manufacturing.html" class="flex items-center p-3 rounded-xl hover:bg-slate-50 transition-colors">
                            <span class="text-[11px] font-bold uppercase tracking-wider text-slate-700">LEAN Manufacturing</span>
                        </a>
                        <a href="capabilities.html" class="flex items-center p-3 rounded-xl hover:bg-slate-50 transition-colors">
                            <span class="text-[11px] font-bold uppercase tracking-wider text-slate-700">Capabilities</span>
                        </a>
                        <a href="materials.html" class="flex items-center p-3 rounded-xl hover:bg-slate-50 transition-colors">
                            <span class="text-[11px] font-bold uppercase tracking-wider text-slate-700">Materials</span>
                        </a>
                        <a href="quality-assurance.html" class="flex items-center p-3 rounded-xl hover:bg-slate-50 transition-colors">
                            <span class="text-[11px] font-bold uppercase tracking-wider text-slate-700">Quality Assurance</span>
                        </a>
                    </div>
                </div>
            </div>

            <!-- About Dropdown -->
            <div class="relative group">
                <button class="px-3 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.15em] text-slate-700 hover:text-primary transition-all duration-200 flex items-center gap-1">
                    About <span class="material-symbols-outlined text-[14px]">expand_more</span>
                </button>
                <div class="absolute top-full left-0 w-64 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 ease-out z-[110]">
                    <div class="bg-white/95 backdrop-blur-xl border border-slate-100 shadow-2xl rounded-2xl p-3 overflow-hidden">
                        <a href="story.html" class="flex items-center p-3 rounded-xl hover:bg-slate-50 transition-colors">
                            <span class="text-[11px] font-bold uppercase tracking-wider text-slate-700">Our Story</span>
                        </a>
                        <a href="partners.html" class="flex items-center p-3 rounded-xl hover:bg-slate-50 transition-colors">
                            <span class="text-[11px] font-bold uppercase tracking-wider text-slate-700">Proud Partners</span>
                        </a>
                        <a href="sewing-contractors.html" class="flex items-center p-3 rounded-xl hover:bg-slate-50 transition-colors">
                            <span class="text-[11px] font-bold uppercase tracking-wider text-slate-700">Industrial Sewing Contractors</span>
                        </a>
                        <a href="events-news.html" class="flex items-center p-3 rounded-xl hover:bg-slate-50 transition-colors">
                            <span class="text-[11px] font-bold uppercase tracking-wider text-slate-700">Events</span>
                        </a>
                        <a href="faq.html" class="flex items-center p-3 rounded-xl hover:bg-slate-50 transition-colors">
                            <span class="text-[11px] font-bold uppercase tracking-wider text-slate-700">FAQ</span>
                        </a>
                    </div>
                </div>
            </div>

            <a href="contact.html" class="px-3 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.15em] text-slate-700 hover:text-primary transition-all duration-200">Contact Us</a>
        </div>

        <!-- Action & Mobile Toggle -->
        <div class="flex items-center gap-4">
            <div class="hidden lg:block">
                <button onclick="location.href='contact.html'" class="relative overflow-hidden bg-primary group px-6 py-2 rounded-full transition-all hover:shadow-[0_8px_30px_rgb(0,96,150,0.3)] active:scale-95">
                    <span class="relative z-10 font-label text-[10px] font-light uppercase tracking-[0.2em] text-white">Request a Quote</span>
                    <div class="absolute inset-0 bg-slate-900 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </button>
            </div>
            
            <button id="mobileMenuBtn" class="lg:hidden p-2 text-slate-900 hover:bg-slate-100 rounded-lg transition-colors w-10 h-10 flex flex-col items-center justify-center gap-[5px]">
                <span class="ham-line block w-5 h-[2px] bg-slate-800 transition-all duration-300 origin-center"></span>
                <span class="ham-line block w-5 h-[2px] bg-slate-800 transition-all duration-300 origin-center"></span>
                <span class="ham-line block w-3.5 h-[2px] bg-slate-800 transition-all duration-300 origin-center ml-0"></span>
            </button>
        </div>
    </div>

    <!-- Mobile Menu -->
    <div id="mobileMenu" class="hidden lg:hidden border-t border-slate-100 bg-white/95 backdrop-blur-xl transition-all duration-300 max-h-[80vh] overflow-y-auto">
        <div class="p-4 flex flex-col gap-2">
            <a href="index.html" class="p-3 text-[10px] font-bold uppercase tracking-widest text-slate-900">Home</a>
            
            <div class="mob-accordion border-t border-slate-100 mt-2">
                <div class="p-3 text-[10px] font-bold uppercase tracking-widest text-primary flex items-center justify-between cursor-pointer" onclick="this.nextElementSibling.classList.toggle('hidden');this.querySelector('.acc-icon').textContent=this.nextElementSibling.classList.contains('hidden')?'expand_more':'expand_less'">Industries <span class="material-symbols-outlined acc-icon text-[14px]">expand_more</span></div>
                <div class="grid grid-cols-1 gap-1 pl-4 hidden">
                    <a href="sporting-goods.html" class="p-2 text-[10px] text-slate-600 uppercase font-medium">Sporting Goods</a>
                    <a href="medical.html" class="p-2 text-[10px] text-slate-600 uppercase font-medium">Medical</a>
                    <a href="military-defense.html" class="p-2 text-[10px] text-slate-600 uppercase font-medium">Military</a>
                    <a href="premium-luggage.html" class="p-2 text-[10px] text-slate-600 uppercase font-medium">Luggage</a>
                </div>
            </div>

            <div class="mob-accordion border-t border-slate-100 mt-2">
                <div class="p-3 text-[10px] font-bold uppercase tracking-widest text-primary flex items-center justify-between cursor-pointer" onclick="this.nextElementSibling.classList.toggle('hidden');this.querySelector('.acc-icon').textContent=this.nextElementSibling.classList.contains('hidden')?'expand_more':'expand_less'">Process <span class="material-symbols-outlined acc-icon text-[14px]">expand_more</span></div>
                <div class="grid grid-cols-1 gap-1 pl-4 hidden">
                    <a href="our-process.html" class="p-2 text-[10px] text-slate-600 uppercase font-medium">Our Process</a>
                    <a href="contract-sewing.html" class="p-2 text-[10px] text-slate-600 uppercase font-medium">Contract Sewing</a>
                    <a href="lean-manufacturing.html" class="p-2 text-[10px] text-slate-600 uppercase font-medium">LEAN Manufacturing</a>
                    <a href="capabilities.html" class="p-2 text-[10px] text-slate-600 uppercase font-medium">Capabilities</a>
                    <a href="materials.html" class="p-2 text-[10px] text-slate-600 uppercase font-medium">Materials</a>
                    <a href="quality-assurance.html" class="p-2 text-[10px] text-slate-600 uppercase font-medium">Quality Assurance</a>
                </div>
            </div>

            <div class="mob-accordion border-t border-slate-100 mt-2">
                <div class="p-3 text-[10px] font-bold uppercase tracking-widest text-primary flex items-center justify-between cursor-pointer" onclick="this.nextElementSibling.classList.toggle('hidden');this.querySelector('.acc-icon').textContent=this.nextElementSibling.classList.contains('hidden')?'expand_more':'expand_less'">About <span class="material-symbols-outlined acc-icon text-[14px]">expand_more</span></div>
                <div class="grid grid-cols-1 gap-1 pl-4 hidden">
                    <a href="story.html" class="p-2 text-[10px] text-slate-600 uppercase font-medium">Our Story</a>
                    <a href="partners.html" class="p-2 text-[10px] text-slate-600 uppercase font-medium">Proud Partners</a>
                    <a href="sewing-contractors.html" class="p-2 text-[10px] text-slate-600 uppercase font-medium">Industrial Sewing Contractors</a>
                    <a href="events-news.html" class="p-2 text-[10px] text-slate-600 uppercase font-medium">Events</a>
                    <a href="faq.html" class="p-2 text-[10px] text-slate-600 uppercase font-medium">FAQ</a>
                </div>
            </div>

            <a href="contact.html" class="p-3 text-[10px] font-bold uppercase tracking-widest text-slate-900 border-t border-slate-100 mt-2">Contact Us</a>
            <button onclick="location.href='contact.html'" class="mt-4 w-full bg-primary text-white p-4 rounded-xl text-[10px] font-bold uppercase tracking-[0.2em]">Request a Quote</button>
        </div>
    </div>
</nav>
        `;
        
        // Scroll Effect & Sticky Logic
        const nav = document.getElementById('main-nav');
        const logo = document.getElementById('header-logo');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                nav.classList.add('bg-white/95', 'shadow-lg', 'h-16');
                nav.classList.remove('bg-white/70', 'h-20');
                if (logo) logo.classList.replace('h-16', 'h-12');
            } else {
                nav.classList.remove('bg-white/95', 'shadow-lg', 'h-16');
                nav.classList.add('bg-white/70', 'h-20');
                if (logo) logo.classList.replace('h-12', 'h-16');
            }
        });

        // Mobile Menu Logic
        const btn = document.getElementById('mobileMenuBtn');
        const menu = document.getElementById('mobileMenu');
        if (btn && menu) {
            btn.addEventListener('click', () => {
                menu.classList.toggle('hidden');
                const lines = btn.querySelectorAll('.ham-line');
                const isOpen = !menu.classList.contains('hidden');
                if (lines.length === 3) {
                    lines[0].style.transform = isOpen ? 'rotate(45deg) translateY(7px)' : '';
                    lines[1].style.opacity = isOpen ? '0' : '1';
                    lines[2].style.transform = isOpen ? 'rotate(-45deg) translateY(-7px)' : '';
                    lines[2].style.width = isOpen ? '1.25rem' : '0.875rem';
                }
            });
        }
    }

    // Inject Footer
    const footerEl = document.getElementById('global-footer');
    if (footerEl) {
        footerEl.innerHTML = `
<footer class="bg-slate-950 text-slate-100 full-width pt-20 pb-10 border-t border-slate-800">
    <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <!-- Brand Section -->
        <div class="space-y-6">
            <img src="CottonCraft_Logo_Blue%20Outline.png" alt="Cotton Craft Logo" class="h-16 w-auto">
            <p class="text-slate-400 font-body text-sm leading-relaxed max-w-xs">
                Premium manufacturing partners for technical textiles and high-performance fabrics. Crafting excellence for global markets since 2004.
            </p>
            <div class="flex gap-5">
                <a href="#" class="group">
                    <span class="material-symbols-outlined text-slate-400 group-hover:text-primary transition-all duration-300">public</span>
                </a>
                <a href="#" class="group">
                    <span class="material-symbols-outlined text-slate-400 group-hover:text-primary transition-all duration-300">share</span>
                </a>
                <a href="#" class="group">
                    <span class="material-symbols-outlined text-slate-400 group-hover:text-primary transition-all duration-300">alternate_email</span>
                </a>
            </div>
        </div>

        <!-- Practical Links -->
        <div>
            <h5 class="font-label text-xs uppercase font-bold text-primary mb-8 tracking-widest">Industries</h5>
            <ul class="space-y-4">
                <li><a href="industries.html" class="text-slate-400 hover:text-white hover:pl-2 transition-all duration-300 font-label text-sm flex items-center gap-2 italic">Sporting Goods</a></li>
                <li><a href="industries.html" class="text-slate-400 hover:text-white hover:pl-2 transition-all duration-300 font-label text-sm flex items-center gap-2 italic">Medical & Healthcare</a></li>
                <li><a href="industries.html" class="text-slate-400 hover:text-white hover:pl-2 transition-all duration-300 font-label text-sm flex items-center gap-2 italic">Military & Defense</a></li>
                <li><a href="industries.html" class="text-slate-400 hover:text-white hover:pl-2 transition-all duration-300 font-label text-sm flex items-center gap-2 italic">Premium Luggage</a></li>
            </ul>
        </div>

        <!-- Resources -->
        <div>
            <h5 class="font-label text-xs uppercase font-bold text-primary mb-8 tracking-widest">Company</h5>
            <ul class="space-y-4">
                <li><a href="about.html" class="text-slate-400 hover:text-white hover:pl-2 transition-all duration-300 font-label text-sm flex items-center gap-2 italic">Our Story</a></li>
                <li><a href="process.html" class="text-slate-400 hover:text-white hover:pl-2 transition-all duration-300 font-label text-sm flex items-center gap-2 italic">Manufacturing Process</a></li>
                <li><a href="quality-assurance.html" class="text-slate-400 hover:text-white hover:pl-2 transition-all duration-300 font-label text-sm flex items-center gap-2 italic">Quality Assurance</a></li>
                <li><a href="contact.html" class="text-slate-400 hover:text-white hover:pl-2 transition-all duration-300 font-label text-sm flex items-center gap-2 italic">Contact Us</a></li>
            </ul>
        </div>

        <!-- Newsletter -->
        <div class="space-y-8">
            <h5 class="font-label text-xs uppercase font-bold text-primary mb-6 tracking-widest">Newsletter</h5>
            <p class="text-slate-400 text-sm leading-relaxed">Stay updated with the latest in textile technology and global company news.</p>
            <div class="relative group">
                <input type="email" placeholder="Enter your email" class="w-full bg-slate-900 border border-slate-800 rounded-xl px-5 py-4 text-sm focus:outline-none focus:ring-1 focus:ring-primary transition-all text-white placeholder:text-slate-600">
                <button class="absolute right-2 top-2 bottom-2 bg-primary text-white px-6 rounded-lg font-label text-xs font-bold uppercase hover:bg-white hover:text-primary active:scale-95 transition-all">Join</button>
            </div>
        </div>
    </div>

    <!-- Triple Bottom Bar -->
    <div class="max-w-7xl mx-auto px-6 pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
        <div class="text-slate-500 text-xs font-label">
            &copy; ${new Date().getFullYear()} <span class="text-slate-300 font-bold">Cotton Craft</span>. All Rights Reserved.
        </div>
        <div class="flex gap-8 items-center">
            <a href="faq.html" class="text-slate-500 hover:text-white text-[10px] uppercase font-bold tracking-tighter transition-colors">Privacy Policy</a>
            <a href="faq.html" class="text-slate-500 hover:text-white text-[10px] uppercase font-bold tracking-tighter transition-colors">Terms of Service</a>
        </div>
        <div class="text-slate-500 text-xs font-label italic">
            Powered by <span class="text-primary font-bold not-italic">PixelPulse WP</span>
        </div>
    </div>
</footer>
        `;
    }

    // ========== SCROLL ANIMATIONS ==========
    // Inject animation CSS
    const animStyle = document.createElement('style');
    animStyle.textContent = `
        .scroll-reveal {
            opacity: 0;
            transform: translateY(40px);
            transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .scroll-reveal.revealed {
            opacity: 1;
            transform: translateY(0);
        }
        .scroll-reveal-left {
            opacity: 0;
            transform: translateX(-40px);
            transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .scroll-reveal-left.revealed {
            opacity: 1;
            transform: translateX(0);
        }
        .scroll-reveal-right {
            opacity: 0;
            transform: translateX(40px);
            transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .scroll-reveal-right.revealed {
            opacity: 1;
            transform: translateX(0);
        }
        .scroll-reveal-scale {
            opacity: 0;
            transform: scale(0.92);
            transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .scroll-reveal-scale.revealed {
            opacity: 1;
            transform: scale(1);
        }
    `;
    document.head.appendChild(animStyle);

    // Target elements for animation
    const selectors = [
        { sel: 'section', cls: 'scroll-reveal', delay: 0 },
        { sel: 'section h2', cls: 'scroll-reveal', delay: 100 },
        { sel: 'section h3', cls: 'scroll-reveal', delay: 150 },
        { sel: 'section p', cls: 'scroll-reveal', delay: 200 },
        { sel: 'section img:not(nav img)', cls: 'scroll-reveal-scale', delay: 100 },
        { sel: 'section .grid > div', cls: 'scroll-reveal', delay: 0 },
        { sel: 'section ul li', cls: 'scroll-reveal', delay: 0 },
        { sel: 'section a.inline-flex', cls: 'scroll-reveal', delay: 250 },
        { sel: 'section button', cls: 'scroll-reveal', delay: 200 },
        { sel: 'footer .grid > div', cls: 'scroll-reveal', delay: 0 },
    ];

    selectors.forEach(({ sel, cls }) => {
        document.querySelectorAll(sel).forEach((el, i) => {
            if (!el.closest('nav') && !el.closest('#main-nav') && !el.classList.contains('scroll-reveal') && !el.classList.contains('scroll-reveal-left') && !el.classList.contains('scroll-reveal-right') && !el.classList.contains('scroll-reveal-scale')) {
                el.classList.add(cls);
                el.style.transitionDelay = `${Math.min(i % 6, 4) * 80}ms`;
            }
        });
    });

    // Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px'
    });

    document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale').forEach(el => {
        observer.observe(el);
    });
});
