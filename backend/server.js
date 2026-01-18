import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// 🔹 Chart data
let activityData = [
  { time: "10:00", online: 20, alerts: 2 },
  { time: "11:00", online: 21, alerts: 3 },
  { time: "12:00", online: 22, alerts: 1 }
];

// 🔹 Summary card data
let summary = {
  totalDevices: 24,
  online: 21,
  offline: 3,
  alerts: 5,
  temperature: 24.5,
  waterQuality: "Good",
  powerUsage: 2.4,
  systemHealth: 98
};

// ✅ 1️⃣ Chart API
app.get("/api/activity", (req, res) => {
  res.json(activityData);
});

// ✅ 2️⃣ Summary API  ⬅️ YAHI BANAO
app.get("/api/summary", (req, res) => {
  res.json(summary);
});

// ✅ 3️⃣ Update API
app.post("/api/update", (req, res) => {
  const { status } = req.body;

  console.log("📩 Data received from device:", req.body);

  // chart update
  const last = activityData[activityData.length - 1];
  let online = last.online;
  let alerts = last.alerts;

  if (status === "DIRTY") alerts += 1;
  if (status === "CLEAR") online += 1;

  const time = new Date().toLocaleTimeString().slice(0, 5);
  activityData.push({ time, online, alerts });
  if (activityData.length > 10) activityData.shift();

  // summary update
  if (status === "DIRTY") {
    summary.alerts += 1;
    summary.offline += 1;
    summary.online = Math.max(0, summary.online - 1);
    summary.waterQuality = "Poor";
    summary.systemHealth = Math.max(70, summary.systemHealth - 1);
  }

  if (status === "CLEAR") {
    summary.online += 1;
    summary.offline = Math.max(0, summary.offline - 1);
    summary.waterQuality = "Good";
    summary.systemHealth = Math.min(100, summary.systemHealth + 1);
  }

  summary.temperature = +(24 + Math.random()).toFixed(1);
  summary.powerUsage = +(2 + Math.random()).toFixed(2);

  res.json({ success: true });
});

// 🚀 SERVER START (LAST LINE)
app.listen(5000, () => {
  console.log("✅ Backend running on http://localhost:5000");
});
