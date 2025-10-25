
# KidCare Companion (Expo • Advanced Features)

A friendly **non-diagnostic** companion app to help parents track symptoms, keep notes, set medication reminders, play soothing sounds, and give kids simple, colorful activities while they recover.

> **Important Safety Notice**
> - This app does **not** diagnose illness or replace professional medical care.
> - **Finger temperature:** smartphones cannot measure core body temperature from a finger. Use a proper thermometer and enter the reading.
> - In emergencies, call your local emergency number.

## ✨ Features
- **Care Notes** — log what you tried (fluids, naps, etc.).
- **Colorful Characters** — kid picks an emoji buddy and background color.
- **Feelings Tracker** — quick mood check-ins with history.
- **Symptoms Helper** — enter free-text symptoms and get general comfort tips (non-diagnostic).
- **Temperature Tracker** — record thermometer readings over time.
- **Medication Alerts** — schedule local notifications at exact times (Expo Notifications).
- **Soothing Sounds** — quick links to white noise, lullabies, rain.
- **Mini Games** — simple coloring pad and "Jump the Sick Monster" tap-to-jump game.

## 🚀 Quick Start (Local)
```bash
npm install
# (Expo SDK installs the deps in package.json, but if needed manually run:)
# npm install @react-native-async-storage/async-storage expo-notifications expo-av
npx expo start
```
- Open the **Expo Go** app on your device and scan the QR.

## ☁️ Push to GitHub
```bash
git init
git add .
git commit -m "KidCare Companion initial commit"
git branch -M main
git remote add origin https://github.com/<your-username>/KidCare-Companion.git
git push -u origin main
```

## 🔔 Medication Reminders
- Enter an ISO time like `2025-09-07T20:00` (local time) and a medication name.
- The app requests notification permission and schedules a **local** alert.
- Ensure notifications are enabled in OS settings (Android 13+/iOS 12+).

## 🧪 Testing Tips
- Try entering common symptoms in **Symptoms & Info** to see comfort tips.
- Log a few moods/temps and verify they persist after closing the app (AsyncStorage).

## 🛠️ Next Steps (Optional Enhancements)
- Multi-kid profiles with separate logs.
- Offline audio (bundle MP3s instead of YouTube links).
- Bluetooth thermometer SDK integration.
- Export a PDF summary for clinicians.

## 📄 License & Disclaimer
Provided “as is”. Not a medical device; no diagnosis or dosing. Always consult a licensed clinician.

— Built 2025-09-09
