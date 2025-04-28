function showModal(button) {
    //document.getElementById('modalText').textContent = `Random Text`;
    //document.getElementById('myModal').style.display = 'flex';
  }
  
  function closeModal() {
    document.getElementById('myModal').style.display = 'none';
  }


  window.onload = function() {
    const height = document.body.scrollHeight;
    parent.postMessage(height, '*'); // Wysyłamy wysokość do strony nadrzędnej
  };