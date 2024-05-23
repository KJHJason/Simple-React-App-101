// rafce for shortcut using ES7 snippets VSCode extension
// react arrow function component with export

import { ReactNode } from "react";

interface AlertProps {
  children: ReactNode; // ReactNode to pass in html content
  onClose: () => void;
}

const Alert = ({ children, onClose }: AlertProps) => {
  return (
    <div
      className="alert alert-primary alert-dismissible fade show"
      role="alert"
    >
      {children}
      <button
        onClick={onClose}
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alert;
