export const RadioButtonQuestion = ({ formData, handleChange }) => {
  return (
    <>
      <h2>Choose your favorite language</h2>
      <div>
        <input
          type="radio"
          id="html"
          name="fav_language"
          value="HTML"
          checked={formData.fav_language === "HTML"}
          onChange={handleChange}
        />
        <label htmlFor="html">HTML</label>
      </div>
      <div>
        <input
          type="radio"
          id="css"
          name="fav_language"
          value="CSS"
          checked={formData.fav_language === "CSS"}
          onChange={handleChange}
        />
        <label htmlFor="css">CSS</label>
      </div>
      <div>
        <input
          type="radio"
          id="javascript"
          name="fav_language"
          value="JavaScript"
          checked={formData.fav_language === "JavaScript"}
          onChange={handleChange}
        />
        <label htmlFor="javascript">JavaScript</label>
      </div>
    </>
  );
};
