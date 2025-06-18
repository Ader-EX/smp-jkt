import PropTypes from "prop-types";

// Reusable PropTypes for Fakultas pages
export const FakultasPropTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export const NavbarPropTypes = {
  children: PropTypes.node.isRequired,
};

// Add other PropTypes here as needed
