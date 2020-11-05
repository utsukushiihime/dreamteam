import Layout from "../components/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactForm from "../components/contact-form";

export default function Contact() {
  return (
    <Layout>
      <div className="container my-5">
        <div className="row">
          <div className="col">
            <img className="img-fluid" src="/images/team_meeting.png" alt="" />
          </div>
          <div className="col text-left">
            <h2>Get in touch</h2>
            <div className="py-3">
              Failure will never overtake me if my determination to succeed is
              strong enough.
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </Layout>
  );
}
