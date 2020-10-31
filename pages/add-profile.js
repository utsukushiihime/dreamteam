import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { gql } from "@apollo/client";
import { useMutation } from "@apollo/client";
import { getErrorMessage } from "../lib/form";
import Field from "../components/field";

const AddProfileMutation = gql`
  mutation AddProfileMutation(
    $email: String!
    $firstName: String!
    $lastName: String!
    $city: String!
    $country: String!
    $isAvailable: String
  ) {
    addProfile(
      input: {
        email: $email
        firstName: $firstName
        lastName: $lastName
        city: $city
        country: $country
        isAvailable: $isAvailable
      }
    ) {
      profile {
        email
        firstName
        lastName
        city
        country
        isAvailable
      }
    }
  }
`;

function AddProfile() {
  const [addProfile] = useMutation(AddProfileMutation);
  const [errorMsg, setErrorMsg] = useState();
  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();

    const emailElement = event.currentTarget.elements.email;
    const firstNameElement = event.currentTarget.elements.firstName;
    const lastNameElement = event.currentTarget.elements.lastName;
    const cityElement = event.currentTarget.elements.city;
    const countryElement = event.currentTarget.elements.country;
    const isAvailableElement = event.currentTarget.elements.isAvailable;

    try {
      await addProfile({
        variables: {
          email: emailElement.value,
          firstName: firstNameElement.value,
          lastName: lastNameElement.value,
          city: cityElement.value,
          country: countryElement.value,
          isAvailable: isAvailableElement.value,
        },
      });
      await router.push("/profile");
    } catch (error) {
      setErrorMsg(getErrorMessage(error));
    }
  }

  return (
    <div className="form-signin">
      <h1>Add Profile Info</h1>
      <form onSubmit={handleSubmit}>
        {errorMsg && (
          <p>
            Houston, we have a problem. <br />
            {errorMsg}
          </p>
        )}
        <div className="row">
          <div className="col">
            <Field
              name="email"
              type="email"
              autoComplete="email"
              required
              label="Email"
            />
            <Field
              name="firstName"
              type="text"
              autoComplete="firstName"
              required
              label="First name"
            />
            <Field
              name="lastName"
              type="text"
              autoComplete="lastName"
              required
              label="Last Name"
            />
            <Field
              name="city"
              type="text"
              autoComplete="city"
              required
              label="City"
            />
            <Field
              name="country"
              type="text"
              autoComplete="country"
              required
              label="Country"
            />
            <Field
              name="isAvailable"
              type="text"
              autoComplete="isAvailable"
              label="isAvailable"
            />
            <button className="btn btn-purple" type="submit">
              Add to Profile
            </button>{" "}
            or{" "}
            <Link href="profile">
              <button className="btn btn-purple">Go to Profile</button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddProfile;
