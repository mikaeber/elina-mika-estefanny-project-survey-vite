import { useState } from "react";
import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { Results } from "./components/Results";
import "./App.css";

export const App = () => {
  // state to store all the answers to the questions in one state object, currently only artist (dropdown-select-question) but can be expanded to include other questions
  const [formData, setFormData] = useState({
    artist: "",
    fav_instrument: "",
    fav_genre: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // function to save the answers to the questions in formData state when the form is submitted
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true); // Update the state to indicate the form has been submitted
  };

  // function to handle when a user answers any of the questions
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      {/* Conditionally render the header */}
      {!submitted && <Header className="header" />}  {/* Hide the header when submitted */}
      
      {/* if form is submitted (submitted === true), then render the Results, otherwise show the form */}
      {submitted ? (
        <Results
          artist={formData.artist}
          fav_instrument={formData.fav_instrument}
          fav_genre={formData.fav_genre}
          className="results"
        />
      ) : (
        <Form
          formData={formData}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          className="form"
        />
      )}
    </>
  );
};