import React, { useState, useEffect, useRef } from "react";

function TypingText({ text, onComplete }) {
  const [displayedText, setDisplayedText] = useState("");
  const indexRef = useRef(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    let currentIndex = 0;
    intervalRef.current = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayedText(text.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalRef.current);
        setTimeout(() => {
          setDisplayedText("");
          onComplete();
        }, 1000); // Delay before starting next line typing
      }
    }, 50); // Adjust typing speed here

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [text, onComplete]);

  return <>{displayedText}</>;
}

export default TypingText;
