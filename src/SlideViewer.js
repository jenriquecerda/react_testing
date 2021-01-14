import React, { useState } from "react";

const Button = (props) => (
  <button type="button" onClick={props.onClick}>
    {props.name}
  </button>
);

const Image = (props) => (
  <figure>
    <img
      src={`../img/${props.fileName}`}
      width="720"
      height="540"
      alt={props.name}
    />
    <figcaption>{props.name}</figcaption>
  </figure>
);

const slidesStyle = {
  textAlign: "center",
};

const SlideViewer = ({ slides }) => {
  const [index, setIndex] = useState(0);

  const previousSlide = () => setIndex(index - 1);
  const nextSlide = () => setIndex(index + 1);

  if (!slides || slides.length === 0) {
    return "No Slides";
  } else {
    const slide = slides[index];
    return (
      <div>
        {slides && (
          <div>
            <div style={slidesStyle}>
              <h1>SLIDES</h1>
              <Image name={slide.name} fileName={slide.filename} />
              {index > 0 && <Button name="Previous" onClick={previousSlide} />}
              {index != slides.length - 1 && (
                <Button name="Next" onClick={nextSlide} />
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
};

export default SlideViewer;
