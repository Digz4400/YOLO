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

 // Link do pobrania pliku CSV z OneDrive
 const csvUrl = 'https://1drv.ms/x/c/d67d13715dec6999/EWrzn5QegAZOmRnYfvo4XlwBRHiYDpblGaj_Hr74i3Q8lA?e=P0G0os';

 // Funkcja do ładowania i przetwarzania CSV
 function loadCSV() {
     fetch(csvUrl)
         .then(response => response.text())  // Pobieramy plik CSV jako tekst
         .then(csvText => {
             const rows = csvText.split('\n');  // Dzielimy plik na wiersze
             insertDataIntoTable(rows);  // Wstawiamy dane do tabeli
         })
         .catch(error => console.error('Błąd pobierania CSV:', error));
 }

 // Funkcja do wstawiania danych do tabeli
 function insertDataIntoTable(rows) {
     const tableBody = document.querySelector('#players-table tbody');
     tableBody.innerHTML = '';  // Czyścimy tabelę przed dodaniem nowych danych

     // Iteracja po wierszach CSV
     rows.forEach(row => {
         const columns = row.split(';');  // Zakładając, że CSV jest rozdzielane przecinkami
         if (columns.length === 2) {  // Jeśli linia zawiera dwie kolumny (gracz, wynik)
             const tr = document.createElement('tr');
             const tdPlayer = document.createElement('td');
             tdPlayer.textContent = columns[0];  // Imię gracza
             const tdScore = document.createElement('td');
             tdScore.textContent = columns[1];  // Wynik gracza

             tr.appendChild(tdPlayer);
             tr.appendChild(tdScore);
             tableBody.appendChild(tr);
         }
     });
 }

 // Załaduj dane po załadowaniu strony
 window.onload = loadCSV;

