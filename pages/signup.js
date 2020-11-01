import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { gql, useMutation } from "@apollo/client";
import { getErrorMessage } from "../lib/form";
import Field from "../components/field";

const SignUpMutation = gql`
  mutation SignUpMutation($name: String!, $email: String!, $password: String!) {
    signUp(input: { name: $name, email: $email, password: $password }) {
      user {
        id
        name
        email
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
    const nameElement = event.currentTarget.elements.name;
    const emailElement = event.currentTarget.elements.email;
    const passwordElement = event.currentTarget.elements.password;

    try {
      await signUp({
        variables: {
          name: nameElement.value,
          email: emailElement.value,
          password: passwordElement.value,
        },
      });

      router.push("/signin");
    } catch (error) {
      setErrorMsg(getErrorMessage(error));
    }
  }

  return (
    <div className="form-signin">
      <h1>Sign Up</h1>
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
        <button className="btn btn-purple" type="submit">
          Sign up
        </button>{" "}
        or{" "}
        <Link href="signin">
          <a className="btn btn-purple">Sign in</a>
        </Link>
      </form>
    </div>
  );
}

export default SignUp;
