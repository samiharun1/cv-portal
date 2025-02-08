// Första påskägget - Byt bakgrund
function changeBackground() {
    document.body.style.backgroundColor = "yellow"; // Ändrar bakgrundsfärgen
}

// Andra påskägget - Tangentbords-kombination
let keySequence = '';  
const secretCode = '1337'; // Den hemliga koden

// Lyssnar på tangenter
document.addEventListener('keydown', (event) => {
    keySequence += event.key;
    
   
    if (keySequence.includes(secretCode)) {
        openModal();
        keySequence = ''; // Reset sekvensen
    }

    // Begränsa sekvensens längd för att förhindra att den växer för lång
    if (keySequence.length > secretCode.length) {
        keySequence = keySequence.slice(1);
    }
});


function openModal() {
    document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}
