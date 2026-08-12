const links = document.querySelectorAll('.js-whatsapp');
links.forEach((link) => {
  link.addEventListener('click', () => {
    const params = new URLSearchParams(location.search);
    const payload = {
      event: 'whatsapp_click',
      page: location.pathname,
      source: params.get('utm_source') || document.referrer || 'direct',
      medium: params.get('utm_medium') || null,
      campaign: params.get('utm_campaign') || null,
      content: params.get('utm_content') || null
    };
    try {
      navigator.sendBeacon('/api/click', new Blob([JSON.stringify(payload)], {type:'application/json'}));
    } catch (_) {
      fetch('/api/click', {method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(payload),keepalive:true}).catch(()=>{});
    }
  });
});
document.getElementById('year').textContent = new Date().getFullYear();
