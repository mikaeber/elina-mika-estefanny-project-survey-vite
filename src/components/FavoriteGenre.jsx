export const FavoriteGenre = ({ name, value, handleChange }) => {
  return (
    <>
      <h2>Favorite Genre</h2>
      <input
        type="text"
        name={name}
        value={value}
        placeholder="Write your answer here"
        onChange={handleChange}
        //  onChange={() => console.log("Input change")}
      />
    </>
  );
};
