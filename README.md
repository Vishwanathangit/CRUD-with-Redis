# CRUD with Redis (Node.js CLI App)

This is a simple **CLI-based CRUD application** built using **Node.js** and **Redis**. It allows users to Create, Read, Update, and Delete user records stored in a Redis database.

---

## 📁 Project Structure

```
crud-with-redis/
│
├── backend/
│   ├── Crud.js           # Main CLI logic with user interaction
│   └── redisClient.js    # Redis client setup and connection
```

---

## ⚙️ Features

- Create a new user (ID, name, age, email)
- Read user details using ID
- Update specific user fields
- Delete a user
- CLI-based menu system
- Redis as the primary datastore

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/YourUsername/crud-with-redis.git
cd crud-with-redis/backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Redis Server

Make sure you have Redis installed and running on your system. If not:

- Install Redis from: https://redis.io/download/
- Start the Redis server:  
  ```bash
  redis-server
  ```

### 4. Run the Application

```bash
node Crud.js
```

You will see a CLI menu:

```
Redis CRUD Menu
1. Create User
2. Read User
3. Update User
4. Delete User
5. Exit
```

Follow the prompts to interact with the Redis database.

---

## 🔧 Dependencies

- [Node.js](https://nodejs.org/)
- [Redis](https://redis.io/)
- `redis` npm package

---

## 📌 Notes

- This is a beginner-friendly project aimed at demonstrating Redis operations using Node.js.
- User data is stored using Redis Hashes with the key format `user:<id>`.

---

## 📜 License

MIT License. Free to use and modify.

---
