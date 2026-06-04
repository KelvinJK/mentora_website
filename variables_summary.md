# 🔑 Mentora Website Environment Variables

This document contains the verified and updated environment variables for **mentora-website-sbcl** (landing page website).

## 📊 Variables DataFrame

| Variable Name | Environment | Value | Description |
| :--- | :--- | :--- | :--- |
| **`NEXT_PUBLIC_FIREBASE_PROJECT_ID`** | Production, Preview | `mentora-tanzania` | The unique ID of the Firebase Project |
| **`NEXT_PUBLIC_FIREBASE_API_KEY`** | Production, Preview | `AIzaSyBmgc-m_6Nfeyb33m78KsDBA8RLIZvYaok` | Public API Key for client-side Firebase Auth/Firestore |
| **`NEXT_PUBLIC_FIREBASE_APP_ID`** | Production, Preview | `1:432223621193:web:3859239d6875934c73af98` | Firebase App identifier for the Web application |
| **`NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`** | Production, Preview | `mentora-tanzania.firebaseapp.com` | Authentication handler domain for sign-ins |
| **`NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`** | Production, Preview | `mentora-tanzania.firebasestorage.app` | Storage bucket for profile pictures/uploads |
| **`NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`** | Production, Preview | `432223621193` | Messaging Sender ID for Firebase Cloud Messaging |

---

## 💾 Copy-Paste `.env` Content

You can use the values below to populate any new `.env.local` or `.env.production` files. 

```env
# Firebase Credentials (mentora-tanzania)
NEXT_PUBLIC_FIREBASE_PROJECT_ID="mentora-tanzania"
NEXT_PUBLIC_FIREBASE_API_KEY="AIzaSyBmgc-m_6Nfeyb33m78KsDBA8RLIZvYaok"
NEXT_PUBLIC_FIREBASE_APP_ID="1:432223621193:web:3859239d6875934c73af98"
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="mentora-tanzania.firebaseapp.com"
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="mentora-tanzania.firebasestorage.app"
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="432223621193"
```
