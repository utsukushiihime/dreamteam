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
