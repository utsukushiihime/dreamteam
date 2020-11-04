import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { gql, useMutation } from "@apollo/client";
import { getErrorMessage } from "../lib/form";
import Field from "../components/field";
import TextArea from "../components/textarea";
import ToggleContent from "../components/toggle";

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
          <div className="container">
            <img className="img-fluid" src="/images/teamwork_2.png" />
          </div>
        </div>
        <div className="col d-flex align-content-stretch flex-wrap">
          <div className="form-signin">
            <h1>Sign Up</h1>
            <p>
              Let us first talk about dreams. We all know that dreams do play a
              role in our daily lives. Dreams can help us find solutions to our
              daily problems and see things from a different perspective.
            </p>
            <form onSubmit={handleSubmit}>
              {errorMsg && (
                <div className="alert alert-danger">
                  Houston, we have a problem. Please fill out all profile
                  information. <br />
                  {errorMsg}
                </div>
              )}
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
              <h4>Required Profile Info</h4>
              <ToggleContent>
                <Field
                  name="title"
                  type="text"
                  autoComplete="title"
                  required
                  label="Title"
                />
                <Field
                  name="image"
                  type="text"
                  autoComplete="image"
                  required
                  label="Profile Image URL"
                />
                <Field
                  name="address"
                  type="text"
                  autoComplete="address"
                  required
                  label="Address"
                />
                <div className="row">
                  <div className="col-8">
                    <Field
                      name="city"
                      type="text"
                      autoComplete="city"
                      required
                      label="City"
                    />
                  </div>
                  <div className="col">
                    <Field
                      name="state"
                      type="text"
                      autoComplete="state"
                      required
                      label="State"
                    />
                  </div>
                </div>
                <Field
                  name="zip"
                  type="number"
                  autoComplete="zip"
                  label="Zip"
                />
                <TextArea
                  name="bio"
                  type="textarea"
                  autoComplete="bio"
                  required
                  label="Bio"
                />
                <TextArea
                  name="skills"
                  type="textarea"
                  autoComplete="skills"
                  required
                  label="Skills (comma separated)"
                />
              </ToggleContent>
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
