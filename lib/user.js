import crypto from "crypto";
import { v4 as uuidv4 } from "uuid";
import executeQuery from "./db";
import moment from "moment";

export async function createUser({ name, email, password }) {
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, "sha512")
    .toString("hex");
  const user = {
    id: uuidv4(),
    createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
    name,
    email,
    hash,
    salt,
  };

  try {
    const result = await executeQuery({
      query:
        "INSERT INTO users (id, createdAt, name, email, hash, salt) VALUES(?, ?, ?, ?, ?, ?)",
      values: [
        user.id,
        user.createdAt.toString(),
        user.name,
        user.email,
        user.hash,
        user.salt,
      ],
    });
    console.log(result);
  } catch (error) {
    console.log(error);
  }

  return user;
}

export async function findUser({ email }) {
  try {
    const result = await executeQuery({
      query: "SELECT * FROM users WHERE email = ?",
      values: [email],
    });
    return result[0];
  } catch (error) {
    console.log(error);
  }
}

export async function validatePassword(user, inputPassword) {
  const inputHash = crypto
    .pbkdf2Sync(inputPassword, user.salt, 1000, 64, "sha512")
    .toString("hex");
  const passwordsMatch = user.hash === inputHash;
  return passwordsMatch;
}