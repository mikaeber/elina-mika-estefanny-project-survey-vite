export const TextInput = ({ name, value, handleChange }) => {
  return (
  <input
   type="text"
   name={name}
   value={value}
   placeholder="Write your answer here"
   onChange={handleChange}
  //  onChange={() => console.log("Input change")} 
   />
  );
};
