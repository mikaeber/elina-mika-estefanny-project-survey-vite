import { FavoriteGenre } from "./FavoriteGenre";
import { FavoriteArtist } from "./FavoriteArtist";
import { Submit } from "./Submit";
import { FavoriteInstrument } from "./FavoriteInstrument";

export const Form = ({ formData, handleSubmit, handleChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <FavoriteInstrument
        formData={formData}
        handleChange={handleChange}
        className="fav-instrument"
      />
      <FavoriteGenre
        name="fav_genre"
        value={formData.fav_genre}
        handleChange={handleChange}
        className="fav-genre"
      />
      <FavoriteArtist
        value={formData.artist}
        onChange={handleChange}
        className="fav-artist"
      />
      <Submit handleSubmit={handleSubmit} />
    </form>
  );
};
