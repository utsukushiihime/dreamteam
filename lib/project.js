import { v4 as uuidv4 } from "uuid";
import executeQuery from "./db";
import moment from "moment";

export async function createProject({ name, description }) {
  const project = {
    id: uuidv4(),
    createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
    name,
    description,
  };

  try {
    const result = await executeQuery({
      query:
        "INSERT INTO project (id,createdAt,name,description) VALUES(?, ?, ?, ?)",
      values: [
        project.id,
        project.createdAt.toString(),
        project.name,
        project.description,
      ],
    });
    console.log(result);
  } catch (error) {
    console.log(error);
  }

  return project;
}
export async function findProject({ id }) {
  try {
    const result = await executeQuery({
      query: "SELECT * FROM project WHERE id = ?",
      values: [id],
    });
    return result[0];
  } catch (error) {
    console.log(error);
  }
}
