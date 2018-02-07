const commonStyles = {
  borderStyle: "solid",
  borderWidth: 1,
  cursor: "pointer",
  marginBottom: 0,
  marginLeft: 0,
  marginRight: 0,
  marginTop: 0,
  outline: "none",
  paddingBottom: "0.5rem",
  paddingLeft: "1.5rem",
  paddingRight: "1.5rem",
  paddingTop: "0.5rem",
  textAlign: "center"
};

export const containerStyles = {
  ...commonStyles,
  display: "inline-flex"
};

export const fullWidthContainerStyles = {
  ...commonStyles,
  display: "flex"
};

export const fullWidthTextContainerStyles = {
  ...commonStyles,
  display: "block"
};
