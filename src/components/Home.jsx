import React from "react";

function Home() {

  const handleClick = () => {
    alert("Welcome to my React website 🚀");
  };

  return (
    <div style={styles.container}>

      {/* Navbar */}
      <nav style={styles.nav}>
        <h2>MyCompany</h2>
        <div>
          <a href="#" style={styles.link}>Home</a>
          <a href="#" style={styles.link}>Services</a>
          <a href="#" style={styles.link}>Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={styles.hero}>
        <h1>Welcome to My React Homepage</h1>
        <p>Training | Consultancy | Development</p>

        <button style={styles.button} onClick={handleClick}>
          Get Started
        </button>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        © 2026 MyCompany. All rights reserved.
      </footer>

    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial",
  },

  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 30px",
    background: "#0d6efd",
    color: "white",
  },

  link: {
    marginLeft: "15px",
    color: "white",
    textDecoration: "none",
  },

  hero: {
    height: "80vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "#f4f6f8",
  },

  button: {
    marginTop: "15px",
    padding: "10px 20px",
    fontSize: "16px",
    background: "#0d6efd",
    color: "white",
    border: "none",
    cursor: "pointer",
  },

  footer: {
    textAlign: "center",
    padding: "15px",
    background: "#111",
    color: "white",
  }
};

export default Home;