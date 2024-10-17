export const FavoriteInstrument = ({ formData, handleChange }) => {
  return (
    <div className="fav-instrument">
      <h2>1.</h2>
      <h3>Choose your favorite instrument</h3>
      <div className="radio-group">
        <label className="radio-button" htmlFor="guitar">
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
        <label className="radio-button" htmlFor="piano">
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
        <label className="radio-button" htmlFor="drums">
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
