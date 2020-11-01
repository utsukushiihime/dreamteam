import { v4 as uuidv4 } from "uuid";
import executeQuery from "./db";
import moment from "moment";

export async function createSkill({ name, isValidated }) {
  const skill = {
    id: uuidv4(),
    createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
    name,
    isValidated,
  };

  try {
    const result = await executeQuery({
      query:
        "INSERT INTO skill (id,createdAt,name,isValidated) VALUES(?, ?, ?, ?)",
      values: [
        skill.id,
        skill.createdAt.toString(),
        skill.name,
        skill.isValidated,
      ],
    });
    console.log(result);
  } catch (error) {
    console.log(error);
  }

  return skill;
}
export async function findSkill({ id }) {
  try {
    const result = await executeQuery({
      query: "SELECT * FROM skill WHERE id = ?",
      values: [id],
    });
    return result[0];
  } catch (error) {
    console.log(error);
  }
}
