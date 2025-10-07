import React from "react";

const ErrorPage = () => {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#f8f9fa",
      color: "#343a40",
      textAlign: "center",
    },
    heading: {
      fontSize: "3rem",
      marginBottom: "1rem",
    },
    message: {
      fontSize: "1.2rem",
      marginBottom: "2rem",
    },
    button: {
      padding: "0.5rem 1rem",
      fontSize: "1rem",
      color: "#fff",
      backgroundColor: "#007bff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      textDecoration: "none",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404 - Page Not Found</h1>
      <p style={styles.message}>
        Oops! The page you are looking for does not exist.
      </p>
      <a href="/" style={styles.button}>
        Go Back to Home
      </a>
    </div>
  );
};

export default ErrorPage;
