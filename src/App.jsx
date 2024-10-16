import { useState } from "react";
import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { Results } from "./components/Results";

export const App = () => {
  // state to store all the answers to the questions in one state object, currently only artist (dropdown-select-question) but can be expanded to include other questions
  const [formData, setFormData] = useState({
    artist: "",
    textInput: "",
    // TODO radio-button-question
  });
  const [submitted, setSubmitted] = useState(false);


  // function to save the answers to the questions in formData state when the form is submitted
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
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
      <Header />
      {/* if form is submitted (submitted === true), then render the Results, otherwise show the form  */}
      {submitted ? (
        <Results artist={formData.artist} textInput={formData.textInput}/>
      ) : (
        <Form
          // setArtist={setArtist}
          formData={formData}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        />
      )}
    </>
  );
};
