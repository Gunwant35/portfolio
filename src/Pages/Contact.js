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
          <style>
            {`
              .contact-me-section {
                background-color: #f5f5f5;
                padding: 50px 0;
                text-align: center;
              }
              
              .container {
                max-width: 800px;
                margin: 0 auto;
                padding: 0 15px;
              }
              
              h1 {
                font-size: 2.1em;
                margin-bottom: 30px;
              }
              
              .form-input {
                width: 100%;
                padding: 10px;
                border: 1px solid #ccc;
                border-radius: 5px;
                font-size: 16px;
                margin-bottom: 20px;
              }
              
              .submit-button {
                background-color: #4caf50;
                color: #fff;
                padding: 10px 20px;
                border: none;
                border-radius: 5px;
                font-size: 16px;
                cursor: pointer;
              }
              
              .submit-button:hover {
                background-color: #45a049;
              }
            `}
          </style>
          <div className="container">
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={this.handleInputChange}
                className="form-input"
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
                className="form-input"
                placeholder="Email"
                required
              />
              <br />
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={this.handleInputChange}
                className="form-input"
                placeholder="Message"
                required
              />
              <br />
              <button type="submit" className="submit-button">
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
