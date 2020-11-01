import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Layout from "../components/layout";
import { gql } from "@apollo/client";
import { useMutation } from "@apollo/client";
import { getErrorMessage } from "../lib/form";
import Field from "../components/field";
import TextArea from "../components/textarea";

const AddSkillMutation = gql`
  mutation AddSkillMutation($name: String!) {
    addSkill(input: { name: $name }) {
      skill {
        id
        name
      }
    }
  }
`;

function AddSkill() {
  const [addSkill] = useMutation(AddSkillMutation);
  const [errorMsg, setErrorMsg] = useState();
  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();

    const nameElement = event.currentTarget.elements.name;

    try {
      await addSkill({
        variables: {
          name: nameElement.value.toLowerCase(),
        },
      });
      await router.push("/profile");
    } catch (error) {
      setErrorMsg(getErrorMessage(error));
    }
  }

  return (
    <Layout>
      <div className="form-signin">
        <h1>Add Skill Info</h1>
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
                name="name"
                type="text"
                autoComplete="name"
                required
                label="Skill Name"
              />
              <button className="btn btn-purple" type="submit">
                Add Skill
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

export default AddSkill;
