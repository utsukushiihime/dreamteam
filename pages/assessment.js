import Link from "next/link";
import Layout from "../components/layout";

export default function Assessment() {
  return (
    <Layout>
      <div className="container mt-5">
        <h1>Assessment</h1>
        <div className="row mt-5">
          <div className="col text-left">
            <h5>Coming Soon - Phase II</h5>
            <h6>API we're considering</h6>
            <p className="mb-4">
              The QuizAPI is a SaaS which lets you test your knowledge on a wide
              variety of technical topics. You can create your own Quiz or get
              random set of questions for a speicifc topic including Linux,
              DevOps, BASH, PHP and lots more. We offer an easy to use API which
              allows you to embed the quiz on your own website.
              <br />
            </p>
            <button className="btn btn-purple-outline">
              <Link href="https://quizapi.io/">Quiz API</Link>
            </button>
          </div>
          <div className="col text-left">
            <p>
              They're free for development, open-source, and non-commercial use.
            </p>
            <p>
              <pre className="bg-dark p-3 rounded-lg">
                <code className="text-muted">
                  curl https://quizapi.io/api/v1/questions -G \<br />
                  -d apiKey=YOUR_API_KEY \<br />
                  -d limit=10
                </code>
              </pre>
            </p>
            <p>
              This returns a JSON object with the results in an array you can
              iterate over.
            </p>
            <p>
              <pre className="bg-dark p-3 rounded-lg">
                <code className="text-warning">
                  <span className="text-white">&#91;</span>
                  <br />
                  <div className="ml-4">
                    <span className="text-white">
                      &#123;
                      <br />
                    </span>
                    <div className="ml-4">
                      "id"<span className="text-info"></span>
                      <span className="text-info">:</span>{" "}
                      <span className="text-success">1,</span>
                      <br />
                      "question"<span className="text-info"></span>
                      <span className="text-info">:</span>{" "}
                      <span className="text-success">
                        "How to delete a directory in Linux?",
                      </span>
                      <br />
                      "description":{" "}
                      <span className="text-success">"delete folder",</span>
                      <br />
                      "answers"<span className="text-info"></span>
                      <span className="text-info">:</span>{" "}
                      <span className="text-white">&#123;</span>
                      <br />
                      "answer_a"<span className="text-info"></span>
                      <span className="text-info">:</span>{" "}
                      <span className="text-success">"ls",</span>
                      <br />
                      "answer_b"<span className="text-info"></span>
                      <span className="text-info">:</span>{" "}
                      <span className="text-success">"delete",</span>
                      <br />
                      "answer_c"<span className="text-info"></span>
                      <span className="text-info">:</span>{" "}
                      <span className="text-success">"remove",</span>
                      <br />
                      "answer_d"<span className="text-info"></span>
                      <span className="text-info">:</span>{" "}
                      <span className="text-success">"rmdir",</span>
                      <br />
                      "answer_e"<span className="text-info"></span>
                      <span className="text-info">:</span>{" "}
                      <span className="text-success">null,</span>
                      <br />
                      "answer_f"<span className="text-info"></span>
                      <span className="text-info">:</span>{" "}
                      <span className="text-success">null</span>
                      <br />
                    </div>
                    <span className="text-white">&#125;,</span>

                    <br />
                    <span className="text-white">&#123;</span>
                    <br />
                    <div className="ml-4">
                      "multiple_correct_answers"
                      <span className="text-info">:</span>{" "}
                      <span className="text-success">"false",</span>
                      <br />
                      "correct_answers"<span className="text-info">:</span>{" "}
                      <span className="text-white">&#123;</span>
                      <br />
                      "answer_a_correct"<span className="text-info">
                        :
                      </span>{" "}
                      <span className="text-success">"false",</span>
                      <br />
                      "answer_b_correct"<span className="text-info">
                        :
                      </span>{" "}
                      <span className="text-success">"false",</span>
                      <br />
                      "answer_c_correct"<span className="text-info">
                        :
                      </span>{" "}
                      <span className="text-success">"false",</span>
                      <br />
                      "answer_d_correct"<span className="text-info">
                        :
                      </span>{" "}
                      <span className="text-success">"true",</span>
                      <br />
                      "answer_e_correct"<span className="text-info">
                        :
                      </span>{" "}
                      <span className="text-success">"false",</span>
                      <br />
                      "answer_f_correct"<span className="text-info">
                        :
                      </span>{" "}
                      <span className="text-success">"false"</span>
                      <br />
                    </div>
                    <span className="text-white">&#125;,</span>
                    <br />
                    <div className="ml-4">
                      "explanation"<span className="text-info">:</span>{" "}
                      <span className="text-success">
                        "rmdir deletes an empty directory",
                      </span>
                      <br />
                      "tip"<span className="text-info">:</span>
                      <span className="text-success">{" "}null,</span>
                      <br />
                      "tags"<span className="text-info">:</span>{" "}
                      <span className="text-white">&#91; &#x005D;,</span>
                      <br />
                      "category"<span className="text-info">:</span>{" "}
                      <span className="text-success">"linux",</span>
                      <br />
                      "difficulty"<span className="text-info">:</span>{" "}
                      <span className="text-success">"Easy"</span>
                      <br />
                    </div>
                    <span className="text-white">&#125;</span>
                    <br />
                  </div>
                  <span className="text-white">&#x005D;</span>
                  <br />
                </code>
              </pre>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
