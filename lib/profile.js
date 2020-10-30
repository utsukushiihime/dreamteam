import { v4 as uuidv4 } from "uuid";
import excuteQuery from "./db";
import moment from "moment";

export async function createProfile({
  email,
  image,
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
  isAvailable,
  twitter,
  facebook,
  linkedin,
  github,
  youtube,
}) {
  const profile = {
    id: uuidv4(),
    createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
    updatedAt: moment().format("YYYY-MM-DD HH:mm:ss"),
    email,
    image,
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
    isAvailable,
    twitter,
    facebook,
    linkedin,
    github,
    youtube,
  };

  try {
    const result = await excuteQuery({
      query:
        "INSERT INTO profile (id, createdAt,updatedAt,image, email,image,firstName,lastName,title,address1,address2,city,state,zip,country,bio,skills,isAvailable,twitter,facebook,linkedin,github,youtube,) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      values: [
        profile.id,
        profile.createdAt.toString(),
        profile.updatedAt.toString(),
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
        profile.isAvailable,
        profile.twitter,
        profile.facebook,
        profile.linkedin,
        profile.github,
        profile.youtube,
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
    const result = await excuteQuery({
      query: "SELECT * FROM profile WHERE id = ?",
      values: [id],
    });
    return result[0];
  } catch (error) {
    console.log(error);
  }
}
