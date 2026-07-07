/* ============================================
   VISIONNAIRE Clone — scroll.js
   GSAP ScrollTrigger 리빌 + 워드마크 패럴랙스
   (GSAP 로드 실패 시 IntersectionObserver 폴백)
   ============================================ */

(function () {
  if (new URLSearchParams(location.search).has('still')) { var st=document.createElement('style'); st.textContent='.reveal,[data-stagger]>*{opacity:1!important;transform:none!important}'; document.head.appendChild(st); return; }
  const hasGsap = typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined';

  if (hasGsap) {
    gsap.registerPlugin(ScrollTrigger);

    /* 섹션 리빌 */
    document.querySelectorAll('.reveal').forEach(el => {
      gsap.fromTo(el,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 1.1, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 85%' }
        });
    });

    /* 히어로 워드마크 패럴랙스 */
    const wm = document.querySelector('.hero__wordmark');
    if (wm) {
      gsap.to(wm, {
        yPercent: 18, ease: 'none',
        scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true }
      });
    }

    /* 풋터 거대 워드마크 슬라이드 업 */
    const fw = document.querySelector('.footer__wordmark');
    if (fw) {
      gsap.fromTo(fw, { yPercent: 30 }, {
        yPercent: 0, ease: 'power2.out',
        scrollTrigger: { trigger: fw, start: 'top 95%', end: 'top 60%', scrub: true }
      });
    }

    /* 카탈로그/그리드 카드 stagger */
    document.querySelectorAll('[data-stagger]').forEach(grid => {
      gsap.fromTo(grid.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', stagger: 0.08,
          scrollTrigger: { trigger: grid, start: 'top 82%' }
        });
    });
  } else {
    /* 폴백: IntersectionObserver */
    const io = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
    document.querySelectorAll('[data-stagger] > *').forEach(el => {
      el.classList.add('reveal'); io.observe(el);
    });
  }
})();
