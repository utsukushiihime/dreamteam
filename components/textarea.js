export default function TextArea({
  name,
  label,
  type,
  autoComplete,
  required,
}) {
  return (
    <div className="form-group">
      <label id={[name, "label"].join("-")} htmlFor={[name, "input"].join("-")}>
        {label} {required ? <span title="Required">*</span> : undefined}
      </label>
      <br />

      <textarea
        className="form-control"
        placeholder={"Enter " + [label]}
        autoComplete={autoComplete}
        id={[name, "input"].join("-")}
        name={name}
        required={required}
        type={type}
        rows="3"
      ></textarea>
    </div>
  );
}
