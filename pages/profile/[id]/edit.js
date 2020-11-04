import { gql, useMutation } from "@apollo/client";


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
      {
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
    cons [updateUserProfile] = useMutation(UpdateUserProfileMutation)


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.user.map(({ id, image, name, title, email, bio, address, city, state, zip, skills }) => {
    let input;

    return (
      <div key={id}>
        <p>{type}</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            updateUserProfile({ variables: { id, image: input.value, name: input.value, title: input.value, email: input.value, bio: input.value, address: input.value, city: input.value, state: input.value, zip: input.value, skills: input.value  } });
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
