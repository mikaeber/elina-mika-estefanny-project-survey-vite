export const FavoriteInstrument = ({ formData, handleChange }) => {
  return (
    <div className="fav-instrument">
      <h2>1.</h2>
      <h3>Choose your favorite instrument</h3>
      <div className="radio-group">

      {/* // Updated the label to dynamically apply the "checked" class when the user selects "Guitar".
      // This allows the background or other styles to change based on the selected option. */}
      <label
          className={`radio-button ${formData.fav_instrument === "Guitar" ? "checked" : ""}`} 
          htmlFor="guitar"
        >
          <input
            type="radio"
            id="guitar"
            name="fav_instrument"
            value="Guitar"
            checked={formData.fav_instrument === "Guitar"}
            onChange={handleChange}
          />
          Guitar
          <span className="checkmark"></span>
        </label>

      {/* // Updated the label to dynamically apply the "checked" class when the user selects "Piano".
      // This allows the background or other styles to change based on the selected option. */}
        <label
          className={`radio-button ${formData.fav_instrument === "Piano" ? "checked" : ""}`} 
          htmlFor="piano"
        >
          <input
            type="radio"
            id="piano"
            name="fav_instrument"
            value="Piano"
            checked={formData.fav_instrument === "Piano"}
            onChange={handleChange}
          />
          Piano
          <span className="checkmark"></span>
        </label>

      {/* // Updated the label to dynamically apply the "checked" class when the user selects "Drums".
      // This allows the background or other styles to change based on the selected option. */}       
        <label
          className={`radio-button ${formData.fav_instrument === "Drums" ? "checked" : ""}`} 
          htmlFor="drums"
        >
          <input
            type="radio"
            id="drums"
            name="fav_instrument"
            value="Drums"
            checked={formData.fav_instrument === "Drums"}
            onChange={handleChange}
          />
          Drums
          <span className="checkmark"></span>
        </label>
      </div>
    </div>
  );
};
