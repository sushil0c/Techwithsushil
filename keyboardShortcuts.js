// Function to speak text
function speak(text) {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'en-US'; // Set language
    window.speechSynthesis.speak(speech);
}

// Event listeners for button clicks
document.getElementById('homeBtn').addEventListener('click', function() {
    window.location.href = 'index.html';
});
document.getElementById('blogBtn').addEventListener('click', function() {
    window.location.href = 'blog.html';
});
document.getElementById('toolsBtn').addEventListener('click', function() {
    window.location.href = 'tools.html';
});
document.getElementById('aboutBtn').addEventListener('click', function() {
    window.location.href = 'about.html';
});
document.getElementById('contactBtn').addEventListener('click', function() {
    window.location.href = 'contact.html';
});

// Add hover event listeners to the buttons
const buttons = document.querySelectorAll('.nav-buttons button');
buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        speak(button.textContent); // Speak the button text
    });
});
