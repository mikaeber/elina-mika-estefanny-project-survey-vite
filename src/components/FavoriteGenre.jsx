export const FavoriteGenre = ({ name, value, handleChange }) => {
  return (
    <div className="fav-genre">
      <h2>2.</h2>
      <h3>Favorite Genre</h3>
      <input
        type="text"
        name={name}
        value={value}
        placeholder="Write your answer here"
        onChange={handleChange}
        //  onChange={() => console.log("Input change")}
      />
   </div>
  );
};
