import { useState } from "react";
import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { Results } from "./components/Results";
import { RadioButtonQuestion } from "./components/RadioButtonQuestion"; 

export const App = () => {
  // state to store all the answers to the questions in one state object, currently only artist (dropdown-select-question) but can be expanded to include other questions
  const [formData, setFormData] = useState({
    artist: "",
    fav_language: "",
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
        <Results artist={formData.artist} fav_language={formData.fav_language} textInput={formData.textInput} />
      ) : (
        <Form
          formData={formData}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        >
          <RadioButtonQuestion
            formData={formData}
            handleChange={handleChange}
        />
       </Form> 
      )}
    </>
  );
};
