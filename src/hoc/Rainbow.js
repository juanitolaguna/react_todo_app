import React from "react";

const Rainbow = WrappedComponent => {
  const colours = ["red", "pink", "orange", "blue", "green", "yellow"];
  const randomColor = colours[Math.floor(Math.random() * 5)];
  const styles = {
    color: randomColor
  };

  return props => {
    return (
      <div style={styles}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default Rainbow;
