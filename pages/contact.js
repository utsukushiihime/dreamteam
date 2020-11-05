import Layout from "../components/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
            <form>
              <div className="form-row">
                <div className="col-md-6 mb-3">
                  <label for="validationDefault01">First name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationDefault01"
                    value=""
                    placeholder="First Name"
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label for="validationDefault02">Last name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationDefault02"
                    placeholder="Last Name"
                    value=""
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="col-md-6 mb-3">
                  <label for="validationDefault03">City</label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationDefault03"
                    placeholder="City"
                    required
                  />
                </div>
                <div className="col-md-3 mb-3">
                  <label for="validationDefault04">State</label>
                  <select
                    className="custom-select"
                    id="validationDefault04"
                    required
                  >
                    <option selected disabled value="">
                      Texas
                    </option>
                    <option>California</option>
                    <option>Oregon</option>
                  </select>
                </div>
                <div className="col-md-3 mb-3">
                  <label for="validationDefault05">Zip</label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationDefault05"
                    placeholder="Zip Code"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="invalidCheck2"
                    required
                  />
                  <label className="form-check-label" for="invalidCheck2">
                    Agree to terms and conditions
                  </label>
                </div>
              </div>
              <button className="btn btn-purple" type="submit">
                Submit form
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
