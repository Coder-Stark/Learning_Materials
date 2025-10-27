import React, { useState } from "react";

const Practice = () => {
  const [color1, setColor1] = useState("red");
  const [color2, setColor2] = useState("blue");

  return (
    <div style={styles.container}>
      {/* Box Container */}
      <div style={styles.boxContainer}>
        <div style={{ ...styles.box, backgroundColor: color1 }}>
          <p style={styles.boxText}>Box 1</p>
        </div>
        <div style={{ ...styles.box, backgroundColor: color2 }}>
          <p style={styles.boxText}>Box 2</p>
        </div>
      </div>

      {/* Button Container */}
      <div style={styles.buttonContainer}>
        <button
          style={{ ...styles.button, backgroundColor: "red" }}
          onClick={() => {
            setColor1("red");
            setColor2("red");
          }}
        >
          Red
        </button>
        <button
          style={{ ...styles.button, backgroundColor: "blue" }}
          onClick={() => {
            setColor1("blue");
            setColor2("blue");
          }}
        >
          Blue
        </button>
      </div>
    </div>
  );
};

export default Practice;

// Styles
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  boxContainer: {
    display: "flex",
    justifyContent: "space-around",
    width: "60%",
    marginBottom: "40px",
  },
  box: {
    width: "100px",
    height: "100px",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "2px solid white",
    color: "#fff",
    fontWeight: "bold",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
  },
  boxText: {
    margin: 0,
    fontSize: "16px",
    fontWeight: "bold",
    color: "white",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-around",
    width: "40%",
  },
  button: {
    padding: "12px 24px",
    borderRadius: "8px",
    border: "none",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "transform 0.2s",
  },
};
