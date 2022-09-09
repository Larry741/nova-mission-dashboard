import React from "react";
import { withStyles } from "arwes";

const styles = () => ({
  root: {
    margin: "0 auto",
    maxWidth: 800,
  },
  "@media (max-width: 800px)": {
    root: {
      margin: "0 12px",

      "@media (max-width: 305px)": {
        margin: "0 5px",
      },
    },
  },
});

const Centered = props => {
  const {
    classes,
    className,
    children,
    ...rest
  } = props;
  return (
    <div className={`${classes.root} ${className}`} {...rest}>
      {children}
    </div>
  );
};

export default withStyles(styles)(Centered);
