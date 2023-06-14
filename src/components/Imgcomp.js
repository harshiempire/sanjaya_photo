import React from "react";
// import {}

const Imgcomp = (props) => {
  return (
    <div className="d-inline-flex p-2">
      <figure>
        <img
          src={
            "http://teleuniv.in/sanjaya/student-images/" + props.url + ".jpg"
          }
          alt="img is shown here"
          className="photo"
        />
        <figcaption> {props.url} </figcaption>
      </figure>
    </div>
  );
};

export default Imgcomp;
