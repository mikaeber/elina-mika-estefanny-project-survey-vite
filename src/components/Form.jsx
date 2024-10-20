import { FavoriteGenre } from "./FavoriteGenre";
import { FavoriteArtist } from "./FavoriteArtist";
import { Submit } from "./Submit";
import { FavoriteInstrument } from "./FavoriteInstrument";

export const Form = ({ formData, handleSubmit, handleChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <FavoriteInstrument formData={formData} handleChange={handleChange} />
      <FavoriteGenre
        name="fav_genre"
        value={formData.fav_genre}
        handleChange={handleChange}
      />
      <FavoriteArtist value={formData.artist} onChange={handleChange} />
      <Submit handleSubmit={handleSubmit} />
    </form>
  );
};
