
import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { gql, useQuery, useMutation } from "@apollo/client";


const UpdateUserProfileMutation = gql`
  mutation UpdateUserProfileMutation(
    $id: ID!
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
    updateUserProfile(
      input: {
        id: $id
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

function UpdateUserProfile() {
    cons [updateUserProfile] = useMutation(UpdateUserProfile)


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.todos.map(({ id, type }) => {
    let input;

    return (
      <div key={id}>
        <p>{type}</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            updateTodo({ variables: { id, type: input.value } });
            input.value = "";
          }}
        >
          <input
            ref={(node) => {
              input = node;
            }}
          />
          <button type="submit">Update Profile</button>
        </form>
      </div>
    );
  });
}

export default UpdateUserProfile;
