import PropTypes from "prop-types";

// These follow the composable form specification
// http://forms.dairystatedesigns.com/user/input/#selection-inputs
const optionsSyntax = PropTypes.arrayOf(PropTypes.shape({
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]).isRequired,
}));

export default {
  options: PropTypes.oneOfType([
    optionsSyntax,
    PropTypes.arrayOf(PropTypes.shape({
      optgroup: PropTypes.string,
      options: optionsSyntax
    }))
  ])
};
