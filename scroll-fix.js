// ========================================
// NAPRAWA PROBLEMÓW ZE SCROLLOWANIEM - JAVASCRIPT
// ========================================

(function() {
    'use strict';
    
    console.log('🔧 Scroll fix script loaded');
    
    // 1. NAPRAWA: Emergency scroll fix dla mobile
    function emergencyScrollFix() {
        if (window.innerWidth <= 768) {
            const html = document.documentElement;
            const body = document.body;
            
            // Wymuszenie scrollowania
            html.style.setProperty('overflow-x', 'auto', 'important');
            html.style.setProperty('overflow-y', 'auto', 'important');
            body.style.setProperty('overflow-x', 'auto', 'important');
            body.style.setProperty('overflow-y', 'auto', 'important');
            
            // Touch scrolling
            html.style.setProperty('-webkit-overflow-scrolling', 'touch', 'important');
            body.style.setProperty('-webkit-overflow-scrolling', 'touch', 'important');
            
            // Usuń smooth scroll
            html.style.setProperty('scroll-behavior', 'auto', 'important');
            body.style.setProperty('scroll-behavior', 'auto', 'important');
            
            // Napraw viewport
            html.style.setProperty('width', '100%', 'important');
            html.style.setProperty('height', 'auto', 'important');
            body.style.setProperty('width', '100%', 'important');
            body.style.setProperty('height', 'auto', 'important');
            
            // Usuń fixed positioning
            html.style.setProperty('position', 'static', 'important');
            body.style.setProperty('position', 'static', 'important');
            
            console.log('🔧 Emergency scroll fix applied');
        }
    }
    
    // 2. NAPRAWA: Usuń problematyczne event listeners
    function removeProblematicEventListeners() {
        if (window.innerWidth <= 768) {
            // Override preventDefault dla scroll events
            const originalPreventDefault = Event.prototype.preventDefault;
            Event.prototype.preventDefault = function() {
                // Nie blokuj scroll events
                if (this.type === 'scroll' || this.type === 'touchmove' || this.type === 'wheel') {
                    console.log('🔧 Prevented scroll blocking');
                    return;
                }
                return originalPreventDefault.call(this);
            };
            
            // Override stopPropagation dla scroll events
            const originalStopPropagation = Event.prototype.stopPropagation;
            Event.prototype.stopPropagation = function() {
                // Nie blokuj scroll events
                if (this.type === 'scroll' || this.type === 'touchmove' || this.type === 'wheel') {
                    console.log('🔧 Prevented scroll propagation blocking');
                    return;
                }
                return originalStopPropagation.call(this);
            };
            
            console.log('🔧 Problematic event listeners removed');
        }
    }
    
    // 3. NAPRAWA: Usuń particles background na mobile
    function removeParticlesOnMobile() {
        if (window.innerWidth <= 768) {
            const particles = document.querySelector('.particles-background');
            if (particles) {
                particles.style.display = 'none';
                particles.style.position = 'absolute';
                particles.style.zIndex = '-999';
                console.log('🔧 Particles background removed on mobile');
            }
        }
    }
    
    // 4. NAPRAWA: Napraw touch events
    function fixTouchEvents() {
        if (window.innerWidth <= 768) {
            // Usuń touch-action: none z elementów
            const elementsWithTouchNone = document.querySelectorAll('[style*="touch-action: none"]');
            elementsWithTouchNone.forEach(el => {
                el.style.setProperty('touch-action', 'manipulation', 'important');
            });
            
            // Napraw pointer events
            const elementsWithPointerNone = document.querySelectorAll('[style*="pointer-events: none"]');
            elementsWithPointerNone.forEach(el => {
                if (!el.classList.contains('particles-background')) {
                    el.style.setProperty('pointer-events', 'auto', 'important');
                }
            });
            
            console.log('🔧 Touch events fixed');
        }
    }
    
    // 5. NAPRAWA: Usuń transformy które mogą blokować scroll
    function removeProblematicTransforms() {
        if (window.innerWidth <= 768) {
            const elementsWithTransform = document.querySelectorAll('[style*="transform"]');
            elementsWithTransform.forEach(el => {
                // Usuń tylko problematyczne transformy
                const transform = getComputedStyle(el).transform;
                if (transform !== 'none' && !transform.includes('translate3d')) {
                    el.style.setProperty('transform', 'none', 'important');
                }
            });
            
            console.log('🔧 Problematic transforms removed');
        }
    }
    
    // 6. NAPRAWA: Napraw z-index stacking context
    function fixZIndexStacking() {
        if (window.innerWidth <= 768) {
            // Upewnij się że particles background ma najniższy z-index
            const particles = document.querySelector('.particles-background');
            if (particles) {
                particles.style.setProperty('z-index', '-999', 'important');
            }
            
            // Upewnij się że header ma odpowiedni z-index
            const header = document.querySelector('.header');
            if (header) {
                header.style.setProperty('z-index', '1000', 'important');
            }
            
            console.log('🔧 Z-index stacking fixed');
        }
    }
    
    // 7. NAPRAWA: Usuń overflow hidden z problematycznych elementów
    function removeOverflowHidden() {
        if (window.innerWidth <= 768) {
            const problematicSelectors = [
                '.container', '.section', '.hero', '.calculator-section', 
                '.stats-section', '.featured-services', '.faq-section', 
                '.header', '.footer', '.service-card', '.faq-item', 
                '.calculator-container', '.result-card'
            ];
            
            problematicSelectors.forEach(selector => {
                const elements = document.querySelectorAll(selector);
                elements.forEach(el => {
                    const style = getComputedStyle(el);
                    if (style.overflow === 'hidden') {
                        el.style.setProperty('overflow', 'visible', 'important');
                    }
                });
            });
            
            console.log('🔧 Overflow hidden removed from problematic elements');
        }
    }
    
    // 8. NAPRAWA: Wymuszenie scrollowania co 3 sekundy
    function forceScrollEnabled() {
        if (window.innerWidth <= 768) {
            const html = document.documentElement;
            const body = document.body;
            
            // Wymuszenie scrollowania
            html.style.setProperty('overflow-x', 'auto', 'important');
            html.style.setProperty('overflow-y', 'auto', 'important');
            body.style.setProperty('overflow-x', 'auto', 'important');
            body.style.setProperty('overflow-y', 'auto', 'important');
            
            // Touch scrolling
            html.style.setProperty('-webkit-overflow-scrolling', 'touch', 'important');
            body.style.setProperty('-webkit-overflow-scrolling', 'touch', 'important');
            
            // Usuń smooth scroll
            html.style.setProperty('scroll-behavior', 'auto', 'important');
            body.style.setProperty('scroll-behavior', 'auto', 'important');
        }
    }
    
    // 9. NAPRAWA: Monitorowanie i naprawianie scrollowania
    function monitorAndFixScroll() {
        if (window.innerWidth <= 768) {
            let lastScrollY = window.scrollY;
            let scrollStuckCount = 0;
            
            const checkScroll = () => {
                const currentScrollY = window.scrollY;
                
                // Sprawdź czy scroll jest zablokowany
                if (currentScrollY === lastScrollY && currentScrollY > 0) {
                    scrollStuckCount++;
                    if (scrollStuckCount > 3) {
                        console.log('🚨 Scroll stuck detected, applying emergency fix');
                        emergencyScrollFix();
                        scrollStuckCount = 0;
                    }
                } else {
                    scrollStuckCount = 0;
                }
                
                lastScrollY = currentScrollY;
            };
            
            // Sprawdzaj co 2 sekundy
            setInterval(checkScroll, 2000);
        }
    }
    
    // 10. NAPRAWA: Inicjalizacja wszystkich napraw
    function initializeScrollFixes() {
        console.log('🔧 Initializing scroll fixes...');
        
        // Natychmiastowe naprawy
        emergencyScrollFix();
        removeParticlesOnMobile();
        fixTouchEvents();
        removeProblematicTransforms();
        fixZIndexStacking();
        removeOverflowHidden();
        removeProblematicEventListeners();
        
        // Naprawy z opóźnieniem
        setTimeout(() => {
            emergencyScrollFix();
            forceScrollEnabled();
        }, 100);
        
        setTimeout(() => {
            emergencyScrollFix();
            forceScrollEnabled();
        }, 500);
        
        setTimeout(() => {
            emergencyScrollFix();
            forceScrollEnabled();
        }, 1000);
        
        // Ciągłe monitorowanie
        monitorAndFixScroll();
        
        // Wymuszenie scrollowania co 3 sekundy
        setInterval(forceScrollEnabled, 3000);
        
        console.log('🔧 All scroll fixes initialized');
    }
    
    // Uruchom naprawy gdy DOM jest gotowy
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeScrollFixes);
    } else {
        initializeScrollFixes();
    }
    
    // Uruchom naprawy przy zmianie rozmiaru okna
    window.addEventListener('resize', () => {
        setTimeout(initializeScrollFixes, 100);
    });
    
    // Uruchom naprawy przy orientacji urządzenia
    window.addEventListener('orientationchange', () => {
        setTimeout(initializeScrollFixes, 500);
    });
    
    // Emergency fix przy każdym scroll event
    window.addEventListener('scroll', () => {
        if (window.innerWidth <= 768) {
            // Sprawdź czy scroll działa
            const currentScrollY = window.scrollY;
            if (currentScrollY > 0) {
                // Scroll działa, resetuj licznik
                window.scrollFixCounter = 0;
            }
        }
    });
    
    // Globalna funkcja do ręcznego uruchomienia napraw
    window.scrollFix = {
        emergency: emergencyScrollFix,
        force: forceScrollEnabled,
        removeParticles: removeParticlesOnMobile,
        fixTouch: fixTouchEvents,
        removeTransforms: removeProblematicTransforms,
        fixZIndex: fixZIndexStacking,
        removeOverflow: removeOverflowHidden,
        init: initializeScrollFixes
    };
    
    console.log('🔧 Scroll fix script ready - use window.scrollFix.init() to reinitialize');
    
})();
