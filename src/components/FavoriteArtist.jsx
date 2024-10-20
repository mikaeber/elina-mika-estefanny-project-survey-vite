export const FavoriteArtist = ({ value, onChange }) => {
  return (
     <div className="fav-artist">
      <h2>3.</h2>
      <h3>What is your favorite artist?</h3>
      <select
        name="artist"
        id="artist"
        form="artistform"
        // onChange={(event) => setArtist(event.target.value)}
        onChange={onChange}
        value={value}
        required
      >
        <option value="selected disabled hidden">
          Please select
        </option>
        <option value="Madonna">Madonna</option>
        <option value="Billie Eilish">Billie Eilish</option>
        <option value="Cher">Cher</option>
        <option value="Charlie XCX">Charlie XCX</option>
      </select>
    </div> 
  );
};
