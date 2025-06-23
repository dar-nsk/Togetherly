# Togetherly

# Togetherly 🧑‍🤝‍🧑🌐

Togetherly is a secure, real-time community platform that connects users based on shared interests and locations. Users can join or create communities, earn verified badges (like Student or Professional), and participate in discussions or file-sharing—depending on admin-controlled permissions. All profiles are public for discovery, but messaging is invite-only to ensure privacy and prevent spam.

---

## 🔑 Key Features

- 🔒 **JWT Authentication** for secure login/register
- 📍 **Interest + Location-Based Communities**
- 🛡️ **Verified Badges** (Student, Professional) using email domain verification
- 📢 **Admin-Controlled Messaging Permissions** – toggle chat/file-sharing
- 🔐 **Invite-Only Messaging** and public user profiles
- 💬 **Real-time Chat** using Spring WebSocket
- ☁️ **Firebase Storage** for media uploads

---

## 🛠️ Tech Stack

**Frontend:** React.js, Tailwind CSS  
**Backend:** Java Spring Boot, Spring Security  
**Database:** PostgreSQL  
**Auth:** JWT  
**Storage:** Firebase  
**Realtime:** WebSocket

---

## 🧪 How to Run Locally

### 🖥 Backend (Spring Boot)

```bash
# Inside /backend
1. Set DB credentials in src/main/resources/application.properties
2. Run: ./mvnw spring-boot:run

# Inside /frontend
1. Install deps: npm install
2. Start dev server: npm run dev
