document.getElementById('wishButton').addEventListener('click', function() {
    const wish = document.getElementById('wish');
    const music = document.getElementById('holiMusic');

    wish.classList.toggle('visible');
    
    // Play or pause music based on wish visibility
    if (wish.classList.contains('visible')) {
        music.play();
        this.textContent = 'Hide Wish 🎈';
    } else {
        music.pause();
        this.textContent = 'Click for a Wish 🎉';
    }
});