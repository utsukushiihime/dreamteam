import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Layout from "../components/layout";
import { gql } from "@apollo/client";
import { useMutation } from "@apollo/client";
import { getErrorMessage } from "../lib/form";
import Field from "../components/field";
import TextArea from "../components/textarea";

const AddProjectMutation = gql`
  mutation AddProjectMutation($name: String!, $description: String!) {
    addProject(input: { name: $name, description: $description }) {
      project {
        id
        name
        description
      }
    }
  }
`;

function AddProject() {
  const [addProject] = useMutation(AddProjectMutation);
  const [errorMsg, setErrorMsg] = useState();
  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();

    const nameElement = event.currentTarget.elements.name;
    const descriptionElement = event.currentTarget.elements.description;

    try {
      await addProject({
        variables: {
          name: nameElement.value,
          description: descriptionElement.value,
        },
      });
      await router.push("/project/");
    } catch (error) {
      setErrorMsg(getErrorMessage(error));
    }
  }

  return (
    <Layout>
      <div className="form-signin">
        <h1>Add Project Info</h1>
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
                label="Project Name"
              />
              <TextArea
                name="description"
                type="textarea"
                autoComplete="description"
                required
                label="Project Description"
              />
              <button className="btn btn-purple" type="submit">
                Add Project
              </button>{" "}
              or{" "}
              <Link href="/project/all">
                <button className="btn btn-purple">Go to Projects</button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default AddProject;
