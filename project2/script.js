let messages = [
    "I care about you so much!",
    "You're the best thing in my life.",
    "I'm sorry for my mistakes.",
    "I promise to do better.",
    "Every moment without you feels incomplete."
];

let messageIndex = 0;

document.getElementById("next-message").addEventListener("click", function() {
    if (messageIndex < messages.length) {
        alert(messages[messageIndex]);
        messageIndex++;
        animateMessage();
    } else {
        // Show the response section after all messages
        document.getElementById("response-section").style.display = "block";
    }
    
});

document.getElementById("not-angry").addEventListener("click", function() {
    window.location.href = "thank_you.html"; // Redirects to thank you page
});

function animateMessage() {
    const apologyMessage = document.getElementById("apology-message");
    apologyMessage.classList.add("fade-in");
    setTimeout(() => {
        apologyMessage.classList.remove("fade-in");
    }, 500); // Duration of animation
}
