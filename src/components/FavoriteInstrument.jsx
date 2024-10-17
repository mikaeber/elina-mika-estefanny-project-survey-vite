export const FavoriteInstrument = ({ formData, handleChange }) => {
  return (
    <>
      <h2>Choose your favorite instrument</h2>
      <div>
        <input
          type="radio"
          id="guitar"
          name="fav_instrument"
          value="Guitar"
          checked={formData.fav_instrument === "Guitar"}
          onChange={handleChange}
        />
        <label htmlFor="guitar">Guitar</label>
      </div>
      <div>
        <input
          type="radio"
          id="piano"
          name="fav_instrument"
          value="Piano"
          checked={formData.fav_instrument === "Piano"}
          onChange={handleChange}
        />
        <label htmlFor="piano">Piano</label>
      </div>
      <div>
        <input
          type="radio"
          id="drums"
          name="fav_instrument"
          value="Drums"
          checked={formData.fav_instrument === "Drums"}
          onChange={handleChange}
        />
        <label htmlFor="drums">Drums</label>
      </div>
    </>
  );
};
