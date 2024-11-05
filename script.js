const form = document.getElementById('userForm');
const tableBody = document.getElementById('userDataTable').getElementsByTagName('tbody')[0];

// Basic form validation (feel free to enhance based on your requirements)
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value.trim(); // Trim whitespace
    const email = document.getElementById('email').value.trim();
    const city = document.getElementById('city').value.trim();
    const phone = document.getElementById('phone').value.trim();

    if (!name || !email || !city || !phone) {
        alert('Please fill in all fields.');
        return;
    }

    // Create the new table row and cells
    const newRow = tableBody.insertRow();
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4); // Action cell

    // Populate cell content
    cell1.textContent = name;
    cell2.textContent = email;
    cell3.textContent = city;
    cell4.textContent = phone;

    // Create and append edit and delete buttons
    const actionCell = cell5;
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    actionCell.appendChild(editButton);
    actionCell.appendChild(deleteButton);

    // Clear the form
    form.reset();
});

// Handle edit and delete clicks on the table
tableBody.addEventListener('click', (event) => {
    if (event.target.tagName !== 'BUTTON') {
        return; // Only handle button clicks
    }

    const button = event.target;
    const row = button.parentNode.parentNode;
    const rowIndex = row.rowIndex;

    if (button.textContent === 'Edit') {
        // Populate the form fields for editing
        document.getElementById('name').value = row.cells[0].textContent;
        document.getElementById('email').value = row.cells[1].textContent;
        document.getElementById('city').value = row.cells[2].textContent;
        document.getElementById('phone').value = row.cells[3].textContent;

        // Optionally, mark the row as selected (consider UX enhancements)
        row.classList.add('selected'); // Example for visual feedback

        // Remove the 'selected' class after update (if used)
        row.classList.remove('selected');

    } else if (button.textContent === 'Delete') {
        if (confirm('Are you sure you want to delete this record?')) {
            tableBody.deleteRow(rowIndex);
        }
    }
});
