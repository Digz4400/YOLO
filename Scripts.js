function openTab(evt, tabId) {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));
    contents.forEach(c => c.classList.remove('active'));
    evt.currentTarget.classList.add('active');
    document.getElementById(tabId).classList.add('active');
  }

  window.addEventListener('message', function(event) {
    if (event.origin === 'http://twoja-domena.com') { // Sprawdź, czy wiadomość pochodzi z właściwej domeny
      const iframe = document.getElementById('mojeIframe');
      iframe.style.height = event.data + 'px'; // Ustawiamy wysokość iframe na wartość z wiadomości
    }
  });