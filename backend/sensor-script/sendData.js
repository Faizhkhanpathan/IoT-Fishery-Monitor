import axios from "axios";

const NGROK_URL = "https://abcd-12-34.ngrok-free.app/api/update";

setInterval(() => {
  const statusList = ["CLEAR", "DIRTY", "MODERATE"];
  const status = statusList[Math.floor(Math.random() * statusList.length)];

  console.log("📡 Sending:", status);

  axios.post(NGROK_URL, {
    status: status
  }).catch(err => {
    console.error("❌ Error sending data");
  });

}, 3000);
