export const SelectQuestion = ({ value, onChange }) => {
  return (
    <>
      <h2>Dropdown</h2>
      <select
        name="artist"
        id="artist"
        form="artistform"
        // onChange={(event) => setArtist(event.target.value)}
        onChange={onChange}
        value={value}
        required
      >
        <option value="" selected disabled hidden>
          Please select
        </option>
        <option value="Madonna">Madonna</option>
        <option value="Billie Eilish">Billie Eilish</option>
        <option value="Cher">Cher</option>
        <option value="Charlie XCX">Charlie XCX</option>
      </select>
    </>
  );
};
