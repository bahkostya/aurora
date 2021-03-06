import React from "react";
import PropTypes from "prop-types";

const QtySelectorMinusIcon = ({ children, ...props }) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    {children}
    <g fill="none" fillRule="nonzero">
      <path d="M0 0h24v24H0z" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 12h16"
      />
    </g>
  </svg>
);

QtySelectorMinusIcon.displayName = "QtySelectorMinusIcon";

QtySelectorMinusIcon.defaultProps = {
  children: null
};

QtySelectorMinusIcon.propTypes = {
  children: PropTypes.node
};

export default QtySelectorMinusIcon;
