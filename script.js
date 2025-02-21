// Additional JavaScript can be added here for more interactivity
document.addEventListener('DOMContentLoaded', function() {
    const animatedText = document.getElementById('animated-text');
    animatedText.style.opacity = 0;

    setTimeout(() => {
        animatedText.style.transition = 'opacity 1.5s';
        animatedText.style.opacity = 1;
    }, 500);
});