function updateCountdown() {
    const targetDate = new Date("Juni 17, 2024").getTime();
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;
  
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
    const countdownElement = document.getElementById("countdown");
    countdownElement.innerHTML = `${days} hari ${hours} jam ${minutes} menit ${seconds} detik`;
  }
  
  setInterval(updateCountdown, 1000);
  updateCountdown();
  
  function togglePhotoSize(event) {
    const photo = event.target.closest(".photo");
    if (photo) {
      const modal = document.getElementById("modal");
      const modalImg = document.getElementById("modal-img");
      const loveEffect = photo.querySelector(".love-effect");
  
      modal.style.display = "flex";
      modalImg.src = photo.querySelector("img").dataset.src;
  
      // Show love effect
      loveEffect.style.opacity = 1;
      setTimeout(() => {
        loveEffect.style.opacity = 0;
      }, 5000);
  
      modal.addEventListener("click", function () {
        modal.style.display = "none";
      });
    }
  }
  
  document.getElementById("modal").addEventListener("click", function () {
    this.style.display = "none";
  });
  
  function openInstagramApp() {
    const instagramUsername = "selvijunitaa";
    window.location.href = `instagram://user?username=${instagramUsername}`;
  }
  
  function delayAudioPlay() {
    const audio = document.getElementById("myAudio");
    setTimeout(() => {
      audio.play();
    }, 1000);
  }
  setTimeout(delayAudioPlay, 1000);
  
  