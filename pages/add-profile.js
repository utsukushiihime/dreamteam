import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Layout from "../components/layout";
import { gql } from "@apollo/client";
import { useMutation } from "@apollo/client";
import { getErrorMessage } from "../lib/form";
import Field from "../components/field";

const AddProfileMutation = gql`
  mutation AddProfileMutation(
    $email: String!
    $firstName: String!
    $lastName: String!
    $title: String!
    $address1: String
    $address2: String
    $city: String!
    $state: String
    $zip: Int
    $country: String!
  ) {
    addProfile(
      input: {
        email: $email
        firstName: $firstName
        lastName: $lastName
        title: $title
        address1: $address1
        address2: $address2
        city: $city
        state: $state
        country: $country
        zip: $zip
      }
    ) {
      profile {
        id
        email
        firstName
        lastName
        title
        address1
        address2
        city
        state
        zip
        country
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
    const titleElement = event.currentTarget.elements.title;
    const address1Element = event.currentTarget.elements.address1;
    const address2Element = event.currentTarget.elements.address2;
    const cityElement = event.currentTarget.elements.city;
    const stateElement = event.currentTarget.elements.state;
    const zipElement = event.currentTarget.elements.zip;
    const countryElement = event.currentTarget.elements.country;

    try {
      await addProfile({
        variables: {
          email: emailElement.value,
          firstName: firstNameElement.value,
          lastName: lastNameElement.value,
          title: titleElement.value,
          address1: address1Element.value,
          address2: address2Element.value,
          city: cityElement.value,
          state: stateElement.value,
          zip: parseInt(zipElement.value),
          country: countryElement.value,
        },
      });
      await router.push(`/profile?id=${id}`);
    } catch (error) {
      setErrorMsg(getErrorMessage(error));
    }
  }

  return (
    <Layout>
      <div className="container text-left">
        <h1>Add/Edit Profile Info</h1>
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
              <div className="row">
                <div className="col">
                  <Field
                    name="firstName"
                    type="text"
                    autoComplete="firstName"
                    required
                    label="First name"
                  />
                </div>
                <div className="col">
                  <Field
                    name="lastName"
                    type="text"
                    autoComplete="lastName"
                    required
                    label="Last Name"
                  />
                </div>
              </div>

              <Field
                name="title"
                type="text"
                autoComplete="title"
                required
                label="Title"
              />
              <Field
                name="address1"
                type="text"
                autoComplete="address1"
                required
                label="Address 1"
              />
            </div>
            <div className="col">
              <Field
                name="address2"
                type="text"
                autoComplete="address2"
                required
                label="Address 2"
              />{" "}
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
                  {" "}
                  <Field
                    name="state"
                    type="text"
                    autoComplete="state"
                    required
                    label="State"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  {" "}
                  <Field
                    name="zip"
                    type="number"
                    autoComplete="zip"
                    required
                    label="Zip"
                  />
                </div>
                <div className="col">
                  <Field
                    name="country"
                    type="text"
                    autoComplete="country"
                    required
                    label="Country"
                  />
                </div>
              </div>
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
    </Layout>
  );
}

export default AddProfile;
