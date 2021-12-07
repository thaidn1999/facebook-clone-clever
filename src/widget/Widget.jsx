import React from "react";
import "./Widget.css";
function Widget() {
  return (
    <div className="widgets">
      <div className="widget">
        <iframe
          width="350"
          height="315"
          src="https://www.youtube.com/embed/8NbusX40wRs"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="350"
          height="315"
          src="https://www.youtube.com/embed/QHfjAlmHw4c"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default Widget;
