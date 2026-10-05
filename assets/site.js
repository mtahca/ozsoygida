'use strict';
document.documentElement.classList.add('js');
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('nav');
menuButton?.addEventListener('click', () => {
 const open = menuButton.getAttribute('aria-expanded') !== 'true';
 menuButton.setAttribute('aria-expanded', String(open));
 navigation.classList.toggle('open', open);
});
document.querySelectorAll('.nav-list > li').forEach((item, index) => {
 const submenu = item.querySelector('ul');
 if (!submenu) return;
 submenu.id = `submenu-${index}`;
 const button = document.createElement('button');
 button.className = 'submenu-toggle'; button.textContent = '+';
 button.setAttribute('aria-label', `${item.querySelector('a').textContent.trim()} alt menüsünü aç`);
 button.setAttribute('aria-expanded', 'false'); button.setAttribute('aria-controls', submenu.id);
 button.addEventListener('click', () => {
  const open = button.getAttribute('aria-expanded') !== 'true';
  button.setAttribute('aria-expanded', String(open));
  button.textContent = open ? '−' : '+'; item.classList.toggle('expanded', open);
 });
 item.insertBefore(button, submenu);
});
document.addEventListener('keydown', event => {
 if (event.key === 'Escape' && navigation?.classList.contains('open')) {
  navigation.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); menuButton.focus();
 }
});
const dialog = document.querySelector('.lightbox');
const photos = [...document.querySelectorAll('main a[data-gallery]')];
if (dialog && typeof dialog.showModal === 'function' && photos.length) {
 let index = 0; let opener = null;
 const image = dialog.querySelector('figure img');
 const caption = dialog.querySelector('figcaption');
 const show = value => {
  index = (value + photos.length) % photos.length;
  const link = photos[index]; image.src = link.href;
  image.alt = link.querySelector('img')?.alt || 'Özsoy Gıda fotoğrafı';
  caption.textContent = `${index + 1} / ${photos.length}`;
 };
 photos.forEach((link, i) => link.addEventListener('click', event => {
  event.preventDefault(); opener = link; show(i); dialog.showModal();
 }));
 dialog.querySelector('.close-lightbox').addEventListener('click', () => dialog.close());
 dialog.querySelector('.gallery-prev').addEventListener('click', () => show(index - 1));
 dialog.querySelector('.gallery-next').addEventListener('click', () => show(index + 1));
 dialog.addEventListener('keydown', event => {
  if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
   event.preventDefault(); show(index + (event.key === 'ArrowLeft' ? -1 : 1));
  }
 });
 dialog.addEventListener('click', event => {
  if (event.target === dialog) {
   const box = dialog.getBoundingClientRect();
   if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close();
  }
 });
 dialog.addEventListener('close', () => opener?.focus());
}
