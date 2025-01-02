const phrases = [
    "Web Development",
    "AI",
    "Analytics",
    "Software Engineering"
  ];
  const typingSpeed = 100; // Speed of typing (in milliseconds)
  const erasingSpeed = 75; // Speed of erasing (in milliseconds)
  const delayBetweenWords = 1500; // Delay before starting the next word (in milliseconds)
  const animatedText = document.querySelector(".animated-text");
  
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  
  function typeEffect() {
    const currentPhrase = phrases[phraseIndex];
    const displayedText = currentPhrase.substring(0, charIndex);
  
    animatedText.textContent = displayedText;
  
    if (!isDeleting && charIndex < currentPhrase.length) {
      // Typing the word
      charIndex++;
      setTimeout(typeEffect, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
      // Erasing the word
      charIndex--;
      setTimeout(typeEffect, erasingSpeed);
    } else if (!isDeleting && charIndex === currentPhrase.length) {
      // Pause before erasing
      isDeleting = true;
      setTimeout(typeEffect, delayBetweenWords);
    } else if (isDeleting && charIndex === 0) {
      // Move to the next word
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      setTimeout(typeEffect, typingSpeed);
    }
  }
  
  // Start the typing effect
  document.addEventListener("DOMContentLoaded", () => {
    typeEffect();
  });
  