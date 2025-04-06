// DOM Elements
const heading = document.getElementById('main-heading');
const dynamicText = document.getElementById('dynamic-text');
const itemList = document.getElementById('item-list');
const outputDisplay = document.getElementById('output-display');
const userForm = document.getElementById('user-form');
const userInput = document.getElementById('user-input');

// Buttons
const changeTextBtn = document.getElementById('change-text-btn');
const changeColorBtn = document.getElementById('change-color-btn');
const addElementBtn = document.getElementById('add-element-btn');
const removeElementBtn = document.getElementById('remove-element-btn');

// Counter for new items
let itemCounter = 3;

// 1. Change Text Content
changeTextBtn.addEventListener('click', () => {
    dynamicText.textContent = 'The text has been changed by JavaScript!';
    heading.textContent = 'DOM Updated Successfully!';
});

// 2. Modify CSS Styles
changeColorBtn.addEventListener('click', () => {
    document.body.classList.toggle('alternate-bg');
    
    // Change button text based on current state
    if (document.body.classList.contains('alternate-bg')) {
        changeColorBtn.textContent = 'Restore Original Color';
    } else {
        changeColorBtn.textContent = 'Toggle Background Color';
    }
});

// 3. Add New Element
addElementBtn.addEventListener('click', () => {
    const newItem = document.createElement('li');
    newItem.textContent = `New item ${itemCounter++}`;
    itemList.appendChild(newItem);
});

// 4. Remove Element
removeElementBtn.addEventListener('click', () => {
    const items = itemList.getElementsByTagName('li');
    if (items.length > 0) {
        itemList.removeChild(items[items.length - 1]);
        itemCounter = Math.max(2, itemCounter - 1); // Don't go below initial items
    } else {
        alert('No more items to remove!');
    }
});

// 5. Handle Form Submission
userForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent page reload
    
    if (userInput.value.trim() !== '') {
        outputDisplay.textContent = `You entered: ${userInput.value}`;
        userInput.value = ''; // Clear input field
    } else {
        outputDisplay.textContent = 'Please enter some text first!';
    }
});

// 6. Additional Interactive Feature - Change list item color on click
itemList.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        // Toggle highlight class on clicked item
        e.target.classList.toggle('highlighted');
    }
});