// Profil Dropdown
const profil_buton = document.getElementById('profil_buton');
const profil_menu = document.getElementById('profil_menu');

profil_buton?.addEventListener('click', (e) => {
    e.stopPropagation();
    profil_menu.classList.toggle('hidden');
});

// Profil menu dışına tıklayınca kapatılma işi
document.addEventListener('click', (e) => {
    if (!profil_buton?.contains(e.target) && !profil_menu?.contains(e.target)) {
        profil_menu?.classList.add('hidden');
    }
});

// Sidebar (Mobil)
const mobil_sidebar_buton = document.getElementById('mobil_sidebar_buton');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const closeSidebar = document.getElementById('closeSidebar');

function openSidebar() {
    sidebar.classList.remove('-translate-x-full');
    sidebarOverlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeSidebarFunc() {
    sidebar.classList.add('-translate-x-full');
    sidebarOverlay.classList.add('hidden');
    document.body.style.overflow = '';
}

mobil_sidebar_buton?.addEventListener('click', openSidebar);
closeSidebar?.addEventListener('click', closeSidebarFunc);
sidebarOverlay?.addEventListener('click', closeSidebarFunc);

// PCye geçince sidebar'ı kapatma işi
window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024) {
        closeSidebarFunc();
    }
});

 document.addEventListener('DOMContentLoaded', function () {
        const flagToggle = document.getElementById('flag-toggle');
        const flagIcon = document.getElementById('flag-icon');
        
        // ! Dil Değiştirme
        const initialLang = flagToggle ? flagToggle.getAttribute('lang') : 'en';
        let currentLang = initialLang;
        
        const langs = ['tr', 'en', 'de'];
        const flags = {
            'tr': 'circle-flags:tr',
            'en': 'circle-flags:gb',
            'de': 'circle-flags:de'
        };

        // Initialize i18next with backend
        i18next
            .use(i18nextHttpBackend)
            .init({
                lng: initialLang,
                backend: {
                    loadPath: '../assets/i18n/{{lng}}.json'
                }
            }, function(err, t) {
                updateTranslations();
            });

        function updateTranslations() {
            const elements = document.querySelectorAll('[data-i18n]');
            elements.forEach(el => {
                const key = el.getAttribute('data-i18n');
                el.textContent = i18next.t(key);
            });
            
            // Placeholder dili
            const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
            placeholderElements.forEach(el => {
                const key = el.getAttribute('data-i18n-placeholder');
                el.setAttribute('placeholder', i18next.t(key));
            });
        }

        if (flagToggle && flagIcon) {
            flagToggle.addEventListener('click', function () {
                const currentIndex = langs.indexOf(currentLang);
                const nextIndex = (currentIndex + 1) % langs.length;
                currentLang = langs[nextIndex];
                flagIcon.setAttribute('icon', flags[currentLang]);
                flagToggle.setAttribute('lang', currentLang);
                i18next.changeLanguage(currentLang, function(err, t) {
                    updateTranslations();
                });
            });
        }
    });