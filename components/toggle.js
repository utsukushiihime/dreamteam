import React from "react";
import useBooleanState from "use-boolean-state";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ToggleContent = ({ children }) => {
  const [showing, show, close] = useBooleanState(false);

  return (
    <div>
      <div className="btn-group" role="group">
        <button type="button" className="btn btn-purple btn-sm" onClick={show}>
          <FontAwesomeIcon className="text-white" icon="plus-circle" />
        </button>
        <button type="button" className="btn btn-purple btn-sm" onClick={close}>
          <FontAwesomeIcon className="text-white" icon="times-circle" />
        </button>
        {/* <button type="button" className="btn btn-purple" onClick={toggle}>
          Toggle
        </button> */}
      </div>
      <div className="mt-4">{showing && <div> {children}</div>}</div>
    </div>
  );
};
export default ToggleContent;
