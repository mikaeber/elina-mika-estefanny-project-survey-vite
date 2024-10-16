import { TextInput } from "./TextInput";
import { SelectQuestion } from "./SelectQuestion";
import { Submit } from "./Submit";
import { RadioButtonQuestion } from "./RadioButtonQuestion";

export const Form = () => {
  return (
    <form>
      <TextInput />
      <RadioButtonQuestion />
      <SelectQuestion />
      <Submit />
    </form>
  );
};
