import React from "react";

const ResponsiveIframe = () => {
  return (
    <div className="w-full text-center mt-10 md:mt-20">
      <h1 className="text-2xl sm:text-3xl md:text-5xl text-center font-bold mb-6">
        Share Your Thoughts
      </h1>

      <div className="relative w-[90%] h-[80vh] md:h-[70vh] mx-auto">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSc8aZdy1LntUkzvW9fbCwb9sgQbSAJ2CP1qzFxTUnyqN-AkYA/viewform?usp=dialog"
          title="Embedded Page"
          className="absolute top-0 left-0 w-full h-full rounded-lg shadow-md"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default ResponsiveIframe;
