import React, { FC } from "react";

interface Props {
  // Add your prop types here
}

const MyGridComponent: FC<Props> = async (props) => {
  const onSubmit = async (data) => {
    "use server";
  };
  return (
    <>
      <form action={onSubmit}>
        <p>Please select your favorite Web language:</p>
        <input type="radio" id="html" name="fav_language" value="HTML" />
        <label htmlFor="html">HTML</label>
        <br />
        <input type="radio" id="css" name="fav_language" value="CSS" />
        <label htmlFor="css">CSS</label>
        <br />
        <input
          type="radio"
          id="javascript"
          name="fav_language"
          value="JavaScript"
        />
        <label htmlFor="javascript">JavaScript</label>

        <br />
        <br />

        <p>Please select your age:</p>
        <input type="radio" id="age1" name="age" value="30" />
        <label htmlFor="age1">0 - 30</label>
        <br />
        <input type="radio" id="age2" name="age" value="60" />
        <label htmlFor="age2">31 - 60</label>
        <br />
        <input type="radio" id="age3" name="age" value="100" />
        <label htmlFor="age3">61 - 100</label>
        <br />
        <br />
        <input type="text" name="name" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default MyGridComponent;
