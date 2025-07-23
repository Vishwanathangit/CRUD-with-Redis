import readline from "readline";
import client from "./redisClient.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const ask = (question) =>
  new Promise((resolve) => rl.question(question, resolve));

const createUser = async () => {
  const id = await ask("Enter user ID: ");
  const name = await ask("Enter name: ");
  const age = await ask("Enter age: ");
  const email = await ask("Enter email: ");

  try {
    await client.hSet(`user:${id}`, { name, age, email });
    console.log("User created.");
  } catch (err) {
    console.error("Error creating user:", err);
  }
};

const readUser = async () => {
  const id = await ask("Enter user ID to read: ");
  try {
    const user = await client.hGetAll(`user:${id}`);
    if (Object.keys(user).length === 0) {
      console.log("User not found.");
    } else {
      console.log("User Details:", user);
    }
  } catch (err) {
    console.error("Error reading user:", err);
  }
};

const updateUser = async () => {
  const id = await ask("Enter user ID to update: ");
  const field = await ask("Enter field to update (name, age, email): ");
  const value = await ask(`Enter new value for ${field}: `);

  try {
    await client.hSet(`user:${id}`, field, value);
    console.log("User updated.");
  } catch (err) {
    console.error("Error updating user:", err);
  }
};

const deleteUser = async () => {
  const id = await ask("Enter user ID to delete: ");
  try {
    const deleted = await client.del(`user:${id}`);
    if (deleted) {
      console.log("User deleted.");
    } else {
      console.log("User not found.");
    }
  } catch (err) {
    console.error("Error deleting user:", err);
  }
};

const showMenu = async () => {
  console.log("\n Redis CRUD Menu");
  console.log("1. Create User");
  console.log("2. Read User");
  console.log("3. Update User");
  console.log("4. Delete User");
  console.log("5. Exit\n");

  const choice = await ask("Choose an option: ");

  switch (choice) {
    case "1":
      await createUser();
      break;
    case "2":
      await readUser();
      break;
    case "3":
      await updateUser();
      break;
    case "4":
      await deleteUser();
      break;
    case "5":
      console.log("Exiting...");
      await client.quit();
      rl.close();
      return;
    default:
      console.log("Invalid choice");
  }

  showMenu();
};

showMenu();