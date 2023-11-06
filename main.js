var persons = [
    { name: "Yusif", surname: "Celilli" },
    { name: "Adil", surname: "Heybetov" },
    { name: "Sabir", surname: "Guliyev" },
    { name: "Xeyal", surname: "Zabratiski" }
];


var tableBody = document.querySelector("#personTable tbody");


for (var i = 0; i < persons.length; i++) {
    var person = persons[i];
    var row = tableBody.insertRow();
    var nameCell = row.insertCell(0);
    var surnameCell = row.insertCell(1);
    nameCell.textContent = person.name;
    surnameCell.textContent = person.surname;
}