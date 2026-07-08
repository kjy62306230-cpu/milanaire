/* ============================================
   MILANAIRE Clone — main.js
   오버레이 인젝션 + 인터랙션 (vanilla)
   ============================================ */

/* ---------- 1. 오버레이 마크업 인젝션 (모든 페이지 공통) ---------- */
const IMG = 'assets/img/';

const megaMenuHTML = `
<div class="overlay" id="megaMenu" aria-hidden="true">
  <div class="overlay__inner">
    <button class="overlay__close" data-close>&times;</button>
    <h2 class="overlay__title serif">Pro<em>ducts</em></h2>
    <nav class="mobile-nav">
      <a href="index.html">Rooms</a>
      <a href="catalog.html">Products</a>
      <a href="#">Projects</a>
      <a href="#">Magazine</a>
      <a href="catalog.html">Search</a>
      <a href="account.html">Account</a>
      <a href="account.html#wishlist">Favorites</a>
      <a href="checkout.html">Cart</a>
    </nav>
    <div class="mega">
      <ul class="mega__cats">
        <li><a href="catalog.html">All</a></li>
        <li><a href="catalog.html">Tables</a></li>
        <li><a href="catalog.html">Armchairs</a></li>
        <li><a href="catalog.html">Sofas</a></li>
        <li><a href="catalog.html">Kitchen</a></li>
        <li><a href="catalog.html">Cabinets</a></li>
        <li><a href="catalog.html">Wardrobes</a></li>
        <li><a href="catalog.html">Beds</a></li>
        <li><a href="catalog.html">Lighting</a></li>
        <li><a href="catalog.html">Accessories</a></li>
      </ul>
      <div class="mega__tiles">
        <a class="mega__tile" href="catalog.html">
          <figure class="slot" data-code="L5" data-note="mega menu — sofas">
            <img src="${IMG}L5.jpg?w=2" alt="" loading="lazy" onerror="this.remove()">
          </figure><span>Sofas</span>
        </a>
        <a class="mega__tile" href="catalog.html">
          <figure class="slot" data-code="L6" data-note="mega menu — armchairs">
            <img src="${IMG}L6.jpg?w=2" alt="" loading="lazy" onerror="this.remove()">
          </figure><span>Armchairs</span>
        </a>
        <a class="mega__tile" href="catalog.html">
          <figure class="slot" data-code="L1" data-note="mega menu — beds">
            <img src="${IMG}L1.jpg?w=2" alt="" loading="lazy" onerror="this.remove()">
          </figure><span>Beds</span>
        </a>
        <a class="mega__tile" href="catalog.html">
          <figure class="slot" data-code="L2" data-note="mega menu — tables">
            <img src="${IMG}L2.jpg?w=2" alt="" loading="lazy" onerror="this.remove()">
          </figure><span>Tables</span>
        </a>
      </div>
    </div>
  </div>
</div>`;

const searchCard = (code, name, designer, price) => `
<article class="pcard">
  <div class="pcard__media">
    <figure class="slot slot--product slot--contain" data-code="${code}" data-note="${name}">
      <img src="${IMG}${code}.jpg?w=2" alt="${name}" loading="lazy" onerror="this.remove()">
    </figure>
    <button class="pcard__wish" aria-label="wishlist">&#9825;</button>
  </div>
  <div class="pcard__info">
    <div>
      <div class="pcard__name">${name} <span class="pcard__designer">${designer}</span></div>
      <div class="pcard__price">$ ${price}</div>
    </div>
    <a class="link-underline pcard__cart" href="#" data-add-cart>Add to cart</a>
  </div>
</article>`;

const searchHTML = `
<div class="overlay" id="searchOverlay" aria-hidden="true">
  <div class="overlay__inner">
    <button class="overlay__close" data-close>&times;</button>
    <h2 class="overlay__title serif">Search for <em>specific products</em></h2>
    <form class="search__form" onsubmit="return false">
      <input type="text" value="sofa" aria-label="search">
      <button class="link-underline">search</button>
    </form>
    <p class="search__count">62 products found</p>
    <div class="grid-5">
      ${searchCard('P3', 'BORDONE', 'Bonetta Sofas', '1420')}
      ${searchCard('P9', 'BASTIONE', 'Coffee Tables', '1790')}
      ${searchCard('P10', 'BOLDO', 'Armchairs', '1660')}
      ${searchCard('P13', 'BABILA', 'Dining Chairs', '1320')}
      ${searchCard('P15', 'BALDO', 'Accessories', '1360')}
    </div>
    <div class="search__foot">
      <a class="link-arrow" href="catalog.html">VIEW ALL PRODUCTS</a>
    </div>
  </div>
</div>`;

const cartHTML = `
<aside class="drawer" id="cartDrawer" aria-hidden="true">
  <button class="overlay__close" data-close>&times;</button>
  <h2 class="overlay__title serif" style="margin-bottom:0">Your <em>order</em></h2>
  <div class="drawer__items">
    <div class="cart-item">
      <figure class="slot slot--product slot--contain" data-code="P6" data-note="Piuma">
        <img src="${IMG}P6.jpg?w=2" alt="Piuma" onerror="this.remove()">
      </figure>
      <div class="cart-item__body">
        <div class="cart-item__name">PIUMA</div>
        <div class="cart-item__meta">
          Color: beige<br>
          <span class="cart-item__qty">Quantity: <button>&minus;</button> 1 <button>+</button></span>
        </div>
        <div class="cart-item__price">$ 750</div>
      </div>
      <button class="link-underline" style="align-self:flex-start">Delete</button>
    </div>
    <div class="cart-item">
      <figure class="slot slot--product slot--contain" data-code="P5" data-note="Ludo console">
        <img src="${IMG}P5.jpg?w=2" alt="Ludo" onerror="this.remove()">
      </figure>
      <div class="cart-item__body">
        <div class="cart-item__name">LUDO</div>
        <div class="cart-item__meta">
          Color: white<br>
          <span class="cart-item__qty">Quantity: <button>&minus;</button> 1 <button>+</button></span>
        </div>
        <div class="cart-item__price">$ 870</div>
      </div>
      <button class="link-underline" style="align-self:flex-start">Delete</button>
    </div>
  </div>
  <div class="drawer__row"><span>Shipping</span><span>For free</span></div>
  <div class="drawer__total"><span>Total</span><span>$ 1620</span></div>
  <a class="btn btn--dark" href="checkout.html">CHECKOUT</a>
</aside>`;

document.body.insertAdjacentHTML('beforeend', megaMenuHTML + searchHTML + cartHTML);

/* ---------- 2. 오버레이 토글 ---------- */
const overlays = {
  menu: document.getElementById('megaMenu'),
  search: document.getElementById('searchOverlay'),
  cart: document.getElementById('cartDrawer'),
};
function closeAll() {
  Object.values(overlays).forEach(o => o && o.classList.remove('is-open'));
}
document.addEventListener('click', (e) => {
  const opener = e.target.closest('[data-overlay]');
  if (opener) {
    e.preventDefault();
    const key = opener.dataset.overlay;
    const target = overlays[key];
    const wasOpen = target.classList.contains('is-open');
    closeAll();
    if (!wasOpen) target.classList.add('is-open');
    return;
  }
  if (e.target.closest('[data-close]')) { closeAll(); return; }
  /* 바깥 클릭 닫기 */
  if (!e.target.closest('.overlay') && !e.target.closest('.drawer')) closeAll();
});
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeAll(); });

/* ---------- 3. 위시리스트 하트 토글 ---------- */
document.addEventListener('click', (e) => {
  const wish = e.target.closest('.pcard__wish, [data-wish]');
  if (!wish) return;
  e.preventDefault();
  const active = wish.classList.toggle('is-active');
  wish.innerHTML = active ? '&#9829;' : '&#9825;';
});

/* ---------- 4. Add to cart → 카운트 ---------- */
let cartCount = 0;
document.addEventListener('click', (e) => {
  const add = e.target.closest('[data-add-cart]');
  if (!add) return;
  e.preventDefault();
  cartCount++;
  document.querySelectorAll('[data-cart-count]').forEach(el => el.textContent = cartCount);
});

/* ---------- 5. 필터 칩 active ---------- */
document.querySelectorAll('.chips').forEach(group => {
  group.addEventListener('click', (e) => {
    const btn = e.target.closest('button');
    if (!btn) return;
    group.querySelectorAll('button').forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');
  });
});

/* ---------- 6. 핫스팟 팝오버 ---------- */
document.querySelectorAll('.hotspot').forEach(spot => {
  spot.addEventListener('click', (e) => {
    e.stopPropagation();
    const pop = document.getElementById(spot.dataset.pop);
    if (!pop) return;
    const isOpen = pop.classList.contains('is-open');
    document.querySelectorAll('.hotspot__pop').forEach(p => p.classList.remove('is-open'));
    if (!isOpen) pop.classList.add('is-open');
  });
});
document.addEventListener('click', () => {
  document.querySelectorAll('.hotspot__pop').forEach(p => p.classList.remove('is-open'));
});

/* ---------- 7. 미니 캐러셀 (Bedroom / Dining / PDP) ---------- */
document.querySelectorAll('[data-carousel]').forEach(root => {
  const track = root.querySelector('.carousel__track');
  const items = root.querySelectorAll('.carousel__item');
  let idx = 0;
  const go = (d) => {
    idx = (idx + d + items.length) % items.length;
    items.forEach(it => it.style.transform = `translateX(-${idx * 100}%)`);
  };
  root.querySelectorAll('.carousel__arrow--prev').forEach(b => b.addEventListener('click', () => go(-1)));
  root.querySelectorAll('.carousel__arrow--next').forEach(b => b.addEventListener('click', () => go(1)));
});

/* ---------- 8. PDP 썸네일 active ---------- */
document.querySelectorAll('.pdp__thumbs .slot').forEach(t => {
  t.addEventListener('click', () => {
    document.querySelectorAll('.pdp__thumbs .slot').forEach(s => s.classList.remove('is-active'));
    t.classList.add('is-active');
  });
});


/* auto-open overlay for portfolio capture (?open=menu|search|cart) */
try{const q=new URLSearchParams(location.search).get('open');if(q&&overlays[q])overlays[q].classList.add('is-open');}catch(e){}