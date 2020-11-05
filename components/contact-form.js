// You can live edit this code below the import statements
import React from "react";
import Fade from "react-reveal/Fade";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {};
  }
  makeField(id, col, name) {
    const value = this.state[id] || "",
      invalid = !!(value.length > 15), // check if odd
      className = "form-control" + (invalid ? " is-invalid" : "");
    return (
      <div className={`col-md-${col} mb-3`}>
        <label>{name}</label>
        <input
          type="text"
          className={className}
          data-id={id}
          placeholder={name}
          value={value}
          onChange={this.handleChange}
        />
        <Fade bottom collapse when={invalid}>
          <div className="invalid-feedback" style={{ display: "block" }}>
            You entered too many characters. (limit 15)
          </div>
        </Fade>
      </div>
    );
  }
  handleChange({ target }) {
    this.setState({
      [target.getAttribute("data-id")]: target.value,
    });
  }
  render() {
    return (
      <form autoComplete="off">
        <div className="form-row">
          {this.makeField("f1", 4, "First nаme")}
          {this.makeField("f2", 4, "Lаst name")}
          {this.makeField("f3", 4, "Usernаme")}
        </div>
        <div className="form-row">
          {this.makeField("f4", 6, "Citу")}
          {this.makeField("f5", 3, "Stаte")}
          {this.makeField("f6", 3, "Ziр")}
        </div>
        <button className="btn btn-purple" type="button">
          Submit form
        </button>
        <small className="form-text text-muted">
          This button does nothing and is here just for the demo.
        </small>
      </form>
    );
  }
}

export default ContactForm;
