import Layout from "../components/layout";

export default function About() {
  return (
    <Layout>
      <div className="container">
        <div className="row my-4">
          <div className="col">
            <img src="/images/team_task.png" alt="" className="img-fluid" />
          </div>
          <div className="col text-left">
            <h1>About us</h1>
            <p>
              We're a small team of dedicated developers. We wanted to make it
              simple for people to find team members without a bloated solution.{" "}
            </p>
            <p>Reasons we love a simple solution.</p>
            <ul className="list-purple">
              <li>Don't have to worry about learning a new software.</li>
              <li>Unlimited projects.</li>
              <li>Low cost membership.</li>
              <li>Quickly find members and add them to a project.</li>
              <li>No big monthly fees.</li>
              <li>FREE Skill assessment for members.</li>
              <li>Easily vet team members.</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
