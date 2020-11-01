import { v4 as uuidv4 } from "uuid";
import executeQuery from "./db";
import moment from "moment";

export async function createProfile({
  image,
  email,
  firstName,
  lastName,
  title,
  address1,
  address2,
  city,
  state,
  zip,
  country,
  bio,
  skills,
  twitter,
  facebook,
  linkedin,
  github,
  youtube,
}) {
  const profile = {
    id: uuidv4(),
    image,
    email,
    firstName,
    lastName,
    title,
    address1,
    address2,
    city,
    state,
    zip,
    country,
    bio,
    skills,
    twitter,
    facebook,
    linkedin,
    github,
    youtube,
    createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
  };

  try {
    const result = await executeQuery({
      query:
        "INSERT INTO profile (id,image,email,firstName,lastName,title,address1,address2,city,state,zip,country,bio,skills,twitter,facebook,linkedin,github,youtube,createdAt) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      values: [
        profile.id,
        profile.image,
        profile.email,
        profile.firstName,
        profile.lastName,
        profile.title,
        profile.address1,
        profile.address2,
        profile.city,
        profile.state,
        profile.zip,
        profile.country,
        profile.bio,
        profile.skills,
        profile.twitter,
        profile.facebook,
        profile.linkedin,
        profile.github,
        profile.youtube,
        profile.createdAt.toString(),
      ],
    });
    console.log(result);
  } catch (error) {
    console.log(error);
  }

  return profile;
}
export async function findProfile({ id }) {
  try {
    const result = await executeQuery({
      query: "SELECT * FROM profile WHERE id = ?",
      values: [id],
    });
    return result[0];
  } catch (error) {
    console.log(error);
  }
}
