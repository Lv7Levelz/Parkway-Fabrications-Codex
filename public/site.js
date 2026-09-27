const menu = document.querySelector('.menu');
const navigation = document.querySelector('#nav-wrap');
menu?.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') === 'true';
  menu.setAttribute('aria-expanded', String(!open));
  navigation.classList.toggle('open', !open);
});

const rfq = document.querySelector('[data-rfq]');
const fileInput = document.querySelector('[data-file]');
const drop = fileInput?.closest('.drop');
const fileLabel = document.querySelector('[data-file-label]');
const setFileLabel = file => {
  fileLabel.textContent = file ? `${file.name} · ${Math.ceil(file.size / 1024)}KB` : 'Choose or drop one engineering file';
};
fileInput?.addEventListener('change', () => setFileLabel(fileInput.files[0]));
for (const eventName of ['dragenter', 'dragover']) drop?.addEventListener(eventName, event => { event.preventDefault(); drop.classList.add('dragging'); });
for (const eventName of ['dragleave', 'drop']) drop?.addEventListener(eventName, event => { event.preventDefault(); drop.classList.remove('dragging'); });
drop?.addEventListener('drop', event => {
  if (!event.dataTransfer.files.length) return;
  const transfer = new DataTransfer();
  transfer.items.add(event.dataTransfer.files[0]);
  fileInput.files = transfer.files;
  setFileLabel(fileInput.files[0]);
});

rfq?.addEventListener('submit', async event => {
  event.preventDefault();
  const form = event.currentTarget;
  const status = form.querySelector('[data-status]');
  const button = form.querySelector('button[type=submit]');
  button.disabled = true;
  status.textContent = 'Securely sending your manufacturing enquiry…';
  try {
    const response = await fetch(form.action, { method:'POST', body:new FormData(form) });
    const data = await response.json();
    if (!response.ok) throw Error(data.error);
    status.textContent = `Thank you. Your enquiry reference is ${data.reference}. Keep this reference for your records.`;
    form.reset(); setFileLabel();
    window.dispatchEvent(new CustomEvent('parkway:analytics', { detail:{ event:'quote_submitted' } }));
  } catch (error) {
    status.textContent = error.message || 'Your enquiry could not be sent. Please call Parkway.';
  } finally { button.disabled = false; }
});

const search = document.querySelector('[data-admin-search]');
const filter = document.querySelector('[data-admin-filter]');
function filterEnquiries() {
  const term = (search?.value || '').toLowerCase();
  const status = filter?.value || '';
  document.querySelectorAll('[data-enquiry]').forEach(card => {
    card.hidden = !card.textContent.toLowerCase().includes(term) || Boolean(status && card.dataset.status !== status);
  });
}
search?.addEventListener('input', filterEnquiries);
filter?.addEventListener('change', filterEnquiries);

document.querySelectorAll('[data-carousel]').forEach(carousel => {
  const track = carousel.querySelector('[data-track]');
  const cards = [...carousel.querySelectorAll('.review-card')];
  const previous = carousel.querySelector('[data-previous]');
  const next = carousel.querySelector('[data-next]');
  const status = carousel.querySelector('.carousel-status');
  if (!track || !cards.length) { previous.disabled = true; next.disabled = true; return; }
  let index = 0, timer;
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const go = nextIndex => {
    index = (nextIndex + cards.length) % cards.length;
    cards[index].scrollIntoView({ behavior:reducedMotion ? 'auto' : 'smooth', inline:'start', block:'nearest' });
    status.textContent = `Showing review ${index + 1} of ${cards.length}`;
  };
  const stop = () => clearInterval(timer);
  const start = () => { if (!reducedMotion && cards.length > 1) timer = setInterval(() => go(index + 1), 6500); };
  previous.addEventListener('click', () => { stop(); go(index - 1); });
  next.addEventListener('click', () => { stop(); go(index + 1); });
  carousel.addEventListener('pointerenter', stop);
  carousel.addEventListener('focusin', stop);
  carousel.addEventListener('pointerleave', start);
  track.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft') { event.preventDefault(); stop(); go(index - 1); }
    if (event.key === 'ArrowRight') { event.preventDefault(); stop(); go(index + 1); }
  });
  start();
});

document.querySelectorAll('[data-event]').forEach(link => link.addEventListener('click', () => {
  window.dispatchEvent(new CustomEvent('parkway:analytics', { detail:{ event:link.dataset.event } }));
}));
