document.addEventListener('DOMContentLoaded', (event) => {
    console.log('Página cargada');
    alert('¡Bienvenido a nuestra historia feliz 6 meses juntos!');
});

function openModal(src) {
    document.getElementById('modal').style.display = "block";
    document.getElementById('modalImage').src = src;
}

function closeModal() {
    document.getElementById('modal').style.display = "none";
}

function toggleMusic() {
    let audio = document.getElementById('backgroundMusic');
    if (audio.paused) {
        audio.play().catch(error => {
            console.log('El navegador bloqueó la reproducción automática');
        });
    } else {
        audio.pause();
    }
}
