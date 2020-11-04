import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { gql, useMutation } from "@apollo/client";
import { getErrorMessage } from "../lib/form";
import Field from "../components/field";
import TextArea from "../components/textarea";

const SignUpMutation = gql`
  mutation SignUpMutation(
    $image: String
    $name: String!
    $title: String
    $email: String!
    $bio: String
    $address: String
    $city: String
    $state: String
    $zip: Int
    $skills: String
    $password: String!
  ) {
    signUp(
      input: {
        image: $image
        name: $name
        title: $title
        email: $email
        bio: $bio
        address: $address
        city: $city
        state: $state
        zip: $zip
        skills: $skills
        password: $password
      }
    ) {
      user {
        id
        image
        name
        title
        email
        bio
        address
        city
        state
        zip
        skills
      }
    }
  }
`;

function SignUp() {
  const [signUp] = useMutation(SignUpMutation);
  const [errorMsg, setErrorMsg] = useState();
  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();
    const imageElement = event.currentTarget.elements.image;
    const nameElement = event.currentTarget.elements.name;
    const titleElement = event.currentTarget.elements.title;
    const emailElement = event.currentTarget.elements.email;
    const bioElement = event.currentTarget.elements.bio;
    const addressElement = event.currentTarget.elements.address;
    const cityElement = event.currentTarget.elements.city;
    const stateElement = event.currentTarget.elements.state;
    const zipElement = event.currentTarget.elements.zip;
    const skillsElement = event.currentTarget.elements.skills;
    const passwordElement = event.currentTarget.elements.password;

    try {
      await signUp({
        variables: {
          image: imageElement.value,
          name: nameElement.value,
          title: titleElement.value,
          email: emailElement.value,
          bio: bioElement.value,
          address: addressElement.value,
          city: cityElement.value,
          state: stateElement.value,
          zip: parseInt(zipElement.value),
          skills: skillsElement.value,
          password: passwordElement.value,
        },
      });

      router.push("/signin");
    } catch (error) {
      setErrorMsg(getErrorMessage(error));
    }
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col d-flex align-content-stretch flex-wrap">
          <img className="img-fluid" src="/images/teamwork_2.png" />
        </div>
        <div className="col d-flex align-content-stretch flex-wrap">
          <div className="form-signin">
            <h1>Sign Up</h1>
            <p>
              Let us first talk about dreams. We all know that dreams do play a
              role in our daily lives. The majority of people pay little
              attention to dreams. Dreams can help us find solutions to our
              daily problems and see things from a different perspective.
              Whenever we are dreaming, we can be who or what we want to be,
              regardless of the fact that in real life,{" "}
            </p>
            <form onSubmit={handleSubmit}>
              {errorMsg && <p>{errorMsg}</p>}
              <Field
                name="name"
                type="text"
                autoComplete="name"
                required
                label="Name"
              />
              <Field
                name="email"
                type="email"
                autoComplete="email"
                required
                label="Email"
              />
              <Field
                name="password"
                type="password"
                autoComplete="password"
                required
                label="Password"
              />
              <h4>Profile Info</h4>
              <Field
                name="title"
                type="text"
                autoComplete="title"
                label="Title"
              />
              <Field
                name="image"
                type="text"
                autoComplete="image"
                label="Profile Image URL"
              />
              <Field
                name="address"
                type="text"
                autoComplete="address"
                label="Address"
              />
              <Field name="city" type="text" autoComplete="city" label="City" />
              <Field
                name="state"
                type="text"
                autoComplete="state"
                label="State"
              />
              <Field name="zip" type="number" autoComplete="zip" label="Zip" />
              <TextArea
                name="bio"
                type="textarea"
                autoComplete="bio"
                label="Bio"
              />
              <TextArea
                name="skills"
                type="textarea"
                autoComplete="skills"
                label="Skills"
              />
              <button
                className="btn btn-purple btn-lg btn-block mb-3"
                type="submit"
              >
                Sign up
              </button>{" "}
              <small>
                Already have an account?{" "}
                <Link href="signin">
                  <a className="mt-3">Sign in</a>
                </Link>
              </small>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
