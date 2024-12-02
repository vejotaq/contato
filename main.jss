
const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');
const contactsTableBody = document.querySelector('#contactsTable tbody');


function addContactToTable(name, phone) {
    const row = document.createElement('tr');
    
    const nameCell = document.createElement('td');
    nameCell.textContent = name;
    
    const phoneCell = document.createElement('td');
    phoneCell.textContent = phone;
    
    row.appendChild(nameCell);
    row.appendChild(phoneCell);
    

    contactsTableBody.appendChild(row);
}


contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();


    if (name && phone) {
        addContactToTable(name, phone);
        
    
        nameInput.value = '';
        phoneInput.value = '';
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});

