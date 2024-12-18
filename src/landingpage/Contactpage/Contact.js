import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

function Contact() {
  const [message, setMessage] = useState(""); // State to hold the success or error message
  const [isSubmitting, setIsSubmitting] = useState(false); // State to manage the form submission status
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true); // Set submitting to true to disable the form during submission
    setMessage(""); // Reset the message before submitting

    // Prepare the data to send to the API
    const data = {
      ...formData,
      access_key: "f291a60b-a082-4639-85c4-5d8a713eaabc"
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(data)
      });

      const jsonResponse = await res.json();

      if (jsonResponse.success) {
        setMessage("Your message has been sent successfully!"); // Set success message
      } else {
        setMessage("There was an issue sending your message. Please try again."); // Set failure message
      }
    } catch (error) {
      setMessage("There was an error. Please try again later."); // Error handling
    } finally {
      setIsSubmitting(false); // Reset the submitting status once the request is complete
    }
  };

  return (
    <StyledForm onSubmit={onSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        required
      ></textarea>
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Submit Form"}
      </button>

      {/* Conditionally render the success or error message */}
      {message && (
        <div style={styles.notice}>
          <p>{message}</p>
        </div>
      )}
    </StyledForm>
  );
}

// Slide-in animation using keyframes
const slideIn = keyframes`
  0% {
    transform: translateY(50px); /* Start position below */
    opacity: 0;
  }
  100% {
    transform: translateY(0); /* End position */
    opacity: 1;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 100px;
  margin-bottom: 100px;
  opacity: 0; /* Initially hidden */
  animation: ${slideIn} 1s forwards; /* Apply the slide-in animation */
  animation-delay: 0.3s; /* Delay for a smooth effect */

  input,
  textarea {
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
  }

  textarea {
    min-height: 100px;
  }

  button {
    padding: 12px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  button:disabled {
    background-color: #ccc;
  }
`;

const styles = {
  notice: {
    marginTop: "20px",
    padding: "10px",
    backgroundColor: "#d4edda",
    color: "#155724",
    border: "1px solid #c3e6cb",
    borderRadius: "4px",
    fontSize: "16px"
  }
};

export default Contact;
