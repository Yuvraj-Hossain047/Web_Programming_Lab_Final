// Getting user info from local storage
const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("currentUser"));
};

// Fetch and show all contacts
const showContacts = async () => {
  const user = getCurrentUser();
  const res = await fetch(`http://localhost:5000/contacts/${user.userId}`);
  const contacts = await res.json();

  const container = document.getElementById('contacts-container');
  container.innerHTML = '';

  contacts.forEach(contact => {
    const contactDisplay = document.createElement('div');
    contactDisplay.classList.add('contact-card');
    contactDisplay.innerHTML = `
      <p>Name: ${contact.contactName}</p>
      <p>Phone: ${contact.contactPhone}</p>
      <div>
      <button onclick="editContact(${contact.contactId}, '${contact.contactName}', '${contact.contactPhone}')">Edit</button>
      <button onclick="deleteContact(${contact.contactId})">Delete</button>
      </div>
    `;
    container.appendChild(contactDisplay);
  });
};
// CALL>>>>>>>
showContacts();

// Add a contact
const addContact = async () => {
  const user = getCurrentUser();
  const nameInput = document.getElementById('contactName').value;
  const phoneInput = document.getElementById('contactPhone').value;

  if (!nameInput || !phoneInput){
    return alert("Fill both fields");
  }

  await fetch('http://localhost:5000/addContact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ownerUserId: user.userId,
      contactName: nameInput,
      contactPhone: phoneInput
    })
  });
  // CALL>>>>>>>
  showContacts();
  document.getElementById('contactName').value = '';
  document.getElementById('contactPhone').value = '';
};

// Edit a contact
const editContact = async (contactId, oldName, oldPhone) => {
  const newName = prompt("Edit Name:", oldName);
  const newPhone = prompt("Edit Phone:", oldPhone);

  if (!newName || !newPhone){
    return;
  };

  await fetch(`http://localhost:5000/editContact/${contactId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ contactName: newName, contactPhone: newPhone })
  });
  // CALL>>>>>>>
  showContacts();
};

// Delete a contact
const deleteContact = async (contactId) => {
  if (!confirm("Are you sure you want to delete this contact?")){
    return;
  }

  await fetch(`http://localhost:5000/deleteContact/${contactId}`,{
    method: 'DELETE'  
  });
  // CALL>>>>>>>
  showContacts();
};
// Show Name in the Welcome part
const showWelcomeName = () => {
  const user = getCurrentUser();
  document.getElementById("userName").innerText = user.userName;
};
// CALL>>>>>>>
showWelcomeName();

// LogOut
const logOut = () => {
  localStorage.removeItem('currentUser');
  window.location.href = '../index.html';
};


