//slide when onclick
document.querySelectorAll('.nav-item').forEach(function(item) {
    item.addEventListener('click', function() {
      var target = this.getAttribute('data-target');
      document.querySelectorAll('.article').forEach(function(content) {
        content.classList.toggle('hidden', article.id !== target);
      });
    });
  });

//toggle expand/collapse content
var toggleSubtitle = document.querySelectorAll('#toggleSubtitle');
toggleSubtitle.forEach(function(button) {
    button.addEventListener('click', function() {
        var targetId = this.getAttribute('data-target');
        var content = document.getElementById(targetId);
        
        content.classList.toggle('show');
        //rotate effect
        this.classList.toggle('rotate');
        this.classList.add('clicked');
      });
});

//get tbody data with looping
window.onload = function() {
    var noLoan = data.filter(function(item) {
        return item.status != "loan";
    });

    var tableBody = document.getElementById('players').getElementsByTagName('tbody')[0];
    
    noLoan.forEach(function(item) {
      var row = tableBody.insertRow();
      
      var number = row.insertCell(0);
      var position = row.insertCell(1);
      var player = row.insertCell(2);
      var nation = row.insertCell(3);
  
      number.textContent = item.number;
      position.textContent = item.position;
      nation.textContent = item.nation;
      player.textContent = item.name;
    });

    var filterLoan = data.filter(function(item) {
        return item.status == "loan";
    });

    var tableLoan = document.getElementById('players-on-loan').getElementsByTagName('tbody')[0];

    filterLoan.forEach(function(item) {
        var row = tableLoan.insertRow();

        var number = row.insertCell(0);
        var position = row.insertCell(1);
        var player = row.insertCell(2);
        var nation = row.insertCell(3);
    
        number.textContent = item.number;
        position.textContent = item.position;
        nation.textContent = item.nation;
        player.textContent = item.name;
    });
  }

var data = [
    { number: "1", name: "Altay Bayındır", position: "Goalkeeper", nation: "Turkiye" },
    { number: "22", name: "Tom Heaton", position: "Goalkeeper", nation: "England" },
    { number: "24", name: "André Onana", position: "Goalkeeper", nation: "Cameroon" },
    { number: "2", name: "Victor Lindelöf", position: "Defender", nation: "Sweden" },
    { number: "5", name: "Harry Maguire", position: "Defender", nation: "England" },
    { number: "6", name: "Lisandro Martínez", position: "Defender", nation: "Argentina" },
    { number: "12", name: "Tyrell Malacia", position: "Defender", nation: "Netherlands" },
    { number: "19", name: "Raphaël Varane", position: "Defender", nation: "France" },
    { number: "20", name: "Diogo Dalot", position: "Defender", nation: "Portugal" },
    { number: "23", name: "Luke Shaw", position: "Defender", nation: "England" },
    { number: "29", name: "Aaron Wan-Bissaka", position: "Defender", nation: "England" },
    { number: "35", name: "Jonny Evans", position: "Defender", nation: "Northern Ireland" },
    { number: "53", name: "Willy Kambwala", position: "Defender", nation: "France" },
    { number: "4", name: "Sofyan Amrabat (on loan from Fiorentina)", position: "Midfielder", nation: "Marocco" },
    { number: "7", name: "Mason Mount", position: "Midfielder", nation: "England" },
    { number: "8", name: "Bruno Fernandes", position: "Midfielder", nation: "Portugal" },
    { number: "14", name: "Christian Eriksen", position: "Midfielder", nation: "Denmark" },
    { number: "16", name: "Amad Diallo", position: "Midfielder", nation: "Ivory Coast" },
    { number: "18", name: "Casemiro", position: "Midfielder", nation: "Brazil" },
    { number: "37", name: "Kobbie Mainoo", position: "Midfielder", nation: "England" },
    { number: "39", name: "Scott Mc Tominay", position: "Midfielder", nation: "Scotland" },
    { number: "62", name: "Omari Forson", position: "Midfielder", nation: "England" },
    { number: "9", name: "Anthony Martial", position: "Forward", nation: "France" },
    { number: "10", name: "Marcus Rashford", position: "Forward", nation: "England" },
    { number: "11", name: "Rasmus Højlund", position: "Forward", nation: "Denmark" },
    { number: "17", name: "Alejandro Garnacho", position: "Forward", nation: "Argentina" },
    { number: "21", name: "Antony", position: "Forward", nation: "Brazil" },
    { number: "47", name: "Shola Shoretire", position: "Forward", nation: "England" },
    { number: "25", name: "Jadon Sancho (at Borussia Dortmund)", position: "Forward", nation: "England", status: "loan" },
    { number: "28", name: "Facundo Pellistri (at Granada)", position: "Forward", nation: "Uruguay", status: "loan" },
    { number: "33", name: "Brandon Williams (at Ipswich Town)", position: "Defender", nation: "England", status: "loan" },
    { number: "34", name: "Donny van de Beek (at Eintracht Frankfurt)", position: "Midfielder", nation: "Netherlands", status: "loan" },
    { number: "42", name: "Álvaro Carreras (at Benfica)", position: "Defender", nation: "Spain", status: "loan" },
    { number: "44", name: "Dan Gore (at Port Vale)", position: "Midfielder", nation: "England", status: "loan" },
    { number: "46", name: "Hannibal Mejbri (at Sevilla)", position: "Midfielder", nation: "Tunisia", status: "loan" },
    { number: "-", name: "Mason Greenwood (at Getafe)", position: "Forward", nation: "England", status: "loan" },
  ];