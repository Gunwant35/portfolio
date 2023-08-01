import React from "react";

const contactDetails = {
  email: "example@example.com",
  phone: "123-456-7890",
};

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    // Code to handle form submission, e.g., sending the form data to a server

    // Clearing the form fields after submission
    this.setState({
      name: "",
      email: "",
      message: "",
    });
  };

  render() {
    const { email, phone } = contactDetails;
    const { name, email: userEmail, message } = this.state;
    return (
      <main className="container mx-auto max-width section">
        <h1 className="text-center text-2xl md:text-3xl lg:text-6xl text-dark-heading dark:text-light-heading font-semibold md:font-bold">
          For any questions please drop a mail
        </h1>
        <h3 className="text-center text-3xl md:text-4xl lg:text-6xl text-gradient font-semibold md:font-bold pt-5 md:pt-10 md:pb-6">
          <a href={`mailto:${email}`}>{email}</a>
        </h3>
        <span className="text-center text-content text-xl font-light block">or</span>
        <h3 className="text-center text-3xl md:text-4xl lg:text-6xl text-gradient font-semibold md:font-bold pt-2 md:py-6">
          <a href={`tel:${phone}`}>{phone}</a>
        </h3>
        <div className="contact-me-section" style={{ marginTop: "80px" }}>
          <div className="container" style={styles.formContainer}>
            <form onSubmit={this.handleSubmit} action="https://formspree.io/f/moqojlgl" method="POST">
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={this.handleInputChange}
                style={styles.formInput}
                placeholder="Name"
                required
              />
              <br />
              <input
                type="email"
                id="email"
                name="email"
                value={userEmail}
                onChange={this.handleInputChange}
                style={styles.formInput}
                placeholder="Email"
                required
              />
              <br />
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={this.handleInputChange}
                style={styles.formTextarea}
                placeholder="Message"
                required
              />
              <br />
              <button type="submit" style={styles.submitButton}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </main>
    );
  }
}

export default Contact;

// Add the CSS styles as an object here
const styles = {
  formContainer: {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  formInput: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "3px",
  },
  formTextarea: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "3px",
    resize: "vertical",
    height: "150px",
  },
  submitButton: {
    backgroundColor: "#4caf50",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};
