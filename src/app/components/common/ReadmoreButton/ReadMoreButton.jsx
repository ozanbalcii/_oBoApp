import React, { useState } from "react";

const ReadMoreButton = ({ text, maxLength }) => {
  const [isTruncated, setIsTruncated] = useState(true);

  const toggleTruncate = () => {
    setIsTruncated(!isTruncated);
  };

  const truncatedText = isTruncated ? text.slice(0, maxLength) : text;

  return (
    <div>
      <p className="whitespace-pre-line">{truncatedText}</p>
      {text.length > maxLength && (
        <button
          className="text-blue-500 hover:underline focus:outline-none transition-all"
          onClick={toggleTruncate}
        >
          {isTruncated ? "Read More" : "Read Less"}
        </button>
      )}
    </div>
  );
};

export default ReadMoreButton;
