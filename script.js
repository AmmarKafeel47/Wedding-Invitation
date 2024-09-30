document.getElementById('showEventsBtn').addEventListener('click', function() {
    document.getElementById('events').style.display = 'block';
});

// Event listeners for each event
document.getElementById('mehndi').addEventListener('click', function() {
    showCard('mehndiCard');
});

document.getElementById('barat').addEventListener('click', function() {
    showCard('baratCard');
});

document.getElementById('walima').addEventListener('click', function() {
    showCard('walimaCard');
});

// Function to show a specific card
function showCard(cardId) {
    document.getElementById(cardId).style.display = 'block';
}

// Close card functionality
document.querySelectorAll('.closeCard').forEach(button => {
    button.addEventListener('click', function() {
        this.parentElement.style.display = 'none';
    });
});
