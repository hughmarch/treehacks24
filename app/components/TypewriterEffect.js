import React, { useState, useEffect } from 'react';

// SingleMessageTypewriter applies the typewriter effect to a single message
const SingleMessageTypewriter = ({ message }) => {
  const [displayedText, setDisplayedText] = useState('');
  const words = message.split(" ");
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    if (words.length === 0) return; // Do nothing if the message is empty

    const intervalId = setInterval(() => {
      // Add the next word to the displayed text
      if (!words[wordIndex]) {
        clearInterval(intervalId);
        return;
      }
      setDisplayedText((currentText) => currentText + (currentText ? " " : "") + words[wordIndex]);
      setWordIndex((currentIndex) => currentIndex + 1);
    }, 75); // Adjust timing as needed

    return () => clearInterval(intervalId); // Clean up on unmount
  }, [words, wordIndex]);

  return <p className="text-black my-2 text-left">{displayedText}</p>;
};

// TypewriterEffect maps each suggested response to its own SingleMessageTypewriter
const TypewriterEffect = ({ suggestedResponses }) => {
  return (
    <>
      {suggestedResponses.length !== 0 &&
        suggestedResponses.map((response, index) => (
          <SingleMessageTypewriter key={index} message={response} />
        ))}
    </>
  );
};

export default TypewriterEffect;
