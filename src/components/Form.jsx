import { TextInput } from "./TextInput";
import { SelectQuestion } from "./SelectQuestion";
import { Submit } from "./Submit";
import { RadioButtonQuestion } from "./RadioButtonQuestion";

export const Form = ({ formData, handleSubmit, handleChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <TextInput />
      <RadioButtonQuestion formData={formData} handleChange={handleChange} />
      <SelectQuestion value={formData.artist} onChange={handleChange} />
      <Submit handleSubmit={handleSubmit} />
    </form>
  );
};
