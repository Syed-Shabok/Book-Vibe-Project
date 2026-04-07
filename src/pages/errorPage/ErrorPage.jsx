import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.code}>404</h1>
      <h2 style={styles.title}>Page Not Found</h2>
      <p style={styles.message}>
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>

      <Link to="/" style={styles.button}>
        Go Back Home
      </Link>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "black",
    textAlign: "center",
  },
  code: {
    fontSize: "120px",
    margin: "0",
    fontWeight: "bold",
    color: "#38bdf8",
  },
  title: {
    fontSize: "32px",
    margin: "10px 0",
  },
  message: {
    fontSize: "18px",
    color: "gray",
    maxWidth: "400px",
  },
  button: {
    marginTop: "20px",
    padding: "10px 20px",
    background: "#38bdf8",
    color: "white",
    textDecoration: "none",
    borderRadius: "8px",
    fontWeight: "bold",
  },
};

export default ErrorPage;
