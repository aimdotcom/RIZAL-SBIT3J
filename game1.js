// Round data (add as many rounds as you want)
const rounds = [
    {
      word: "DRACO",
      images: ["images2/image1.jpg", "images2/image2.jpg", "images2/image3.jpg", "images2/image4.jpg"], // Put your actual image URLs here
      letters: ["A","R", "C", "O", "D"]
    },
    {
      word: "SPAIN",
      images: ["images2/image5.jpg", "images2/image6.jpg", "images2/image7.jpg", "images2/image8.jpg"], 
      letters: ["N", "I", "P", "A", "S"]
    },
    {
      word: "WRITER",
      images: ["images2/Writer 1.jpeg", "images2/Writer 2.jpeg", "images2/Writer 3.jpeg", "images2/Writer 4.jpeg"], 
      letters: ["R", "E", "R", "W", "I", "T"]
    },
    {
      word: "REVOLUTION",
      images: ["images2/Revolution 1.jpeg", "images2/Revolution 2.jpeg", "images2/Revolution 3.jpeg", "images2/Revolution 4.jpeg"], 
      letters: ["L", "E", "V", "O", "R", "T", "I", "N","O", "U"]
    },
    {
      word: "EXECUTION",
      images: ["images2/EXECUTION 1.png", "images2/EXECUTION 2.jpg", "images2/EXECUTION 3.jpg", "images2/EXECUTION 4.jpg"], 
      letters: ["C", "U", "T", "E", "N", "E", "X", "I","O"]
    },
    {
      word: "PATRIOTISM",
      images: ["images2/Patriotism 1.jpg", "images2/Patriotism 2.jpg", "images2/Patriotism 3.jpg", "images2/Patriotism 4.jpg"], 
      letters: ["S", "I", "T", "M", "O", "R", "A", "T","I", "P"]
    },
    {
      word: "FILIPINO",
      images: ["images2/Filipino 1.jpg", "images2/Filipino 2.jpg", "images2/Filipino 3.jpg", "images2/Filipino 4.jpg"], 
      letters: ["L", "P", "O", "I", "F", "N", "I", "I","I"]
    },
    {
      word: "FREEDOM",
      images: ["images2/Freedom 1.jpg", "images2/Freedom 2.jpg", "images2/Freedom 3.jpg", "images2/Freedom 4.jpg"], 
      letters: ["D", "O", "M", "E", "R", "E", "F"]
    },
    {
      word: "POET",
      images: ["images2/Poet 1.jpg", "images2/Poet 2.png", "images2/Poet 3.jpg", "images2/Poet 4.jpg"], 
      letters: ["T", "E", "P", "O"]
    },
    {
        word: "MASON",
        images: ["images2/MASON 1.jpg", "images2/MASON 2.png", "images2/MASON 3.jpg", "images2/MASON 4.jpg"], 
        letters: ["A", "M", "O", "S", "N"]
    },
    
  ];
  
  let currentRoundIndex = 0;
  let currentRound = rounds[currentRoundIndex];
  let currentContainerIndex = 0;
  
  // DOM Elements
  const imagesContainer = document.getElementById('images2');
  const wordContainer = document.getElementById('word-container');
  const letterButtonsContainer = document.getElementById('letter-buttons');
  const nextRoundButton = document.getElementById('next-round');
  
  // Function to start the current round
  function startRound() {
    // Clear previous round data
    imagesContainer.innerHTML = '';
    wordContainer.innerHTML = '';
    letterButtonsContainer.innerHTML = '';
  
    // Set images dynamically
    currentRound.images.forEach((src, index) => {
      const imgElement = document.createElement('img');
      imgElement.src = src;
      imgElement.alt = `Image ${index + 1}`;
      imagesContainer.appendChild(imgElement);
    });
  
    // Set up letter containers dynamically
    for (let i = 0; i < currentRound.word.length; i++) {
      const letterContainer = document.createElement('div');
      letterContainer.classList.add('letter-container');
      // Allow click to delete letter
      letterContainer.addEventListener('click', () => handleLetterDelete(letterContainer));
      wordContainer.appendChild(letterContainer);
    }
  
    // Set up letter buttons dynamically
    currentRound.letters.forEach(letter => {
      const button = document.createElement('button');
      button.classList.add('letter-btn');
      button.innerText = letter;
      button.addEventListener('click', () => handleLetterClick(letter));
      letterButtonsContainer.appendChild(button);
    });
  
    // Reset container index for the current round
    currentContainerIndex = 0;
    nextRoundButton.style.display = 'none';
  }
  
  // Handle letter button click
  function handleLetterClick(letter) {
    const containers = document.querySelectorAll('.letter-container');
    if (currentContainerIndex < currentRound.word.length) {
      // Only place the letter in the container if it is empty
      if (containers[currentContainerIndex].innerText === '') {
        containers[currentContainerIndex].innerText = letter;
        currentContainerIndex++;
  
        // Check if the word is complete only after placing the letter
        if (currentContainerIndex === currentRound.word.length) {
          setTimeout(() => checkAnswer(), 100); // Add slight delay to allow last letter to display
        }
      }
    }
  }
  
  // Handle deleting a letter
  function handleLetterDelete(letterContainer) {
    if (letterContainer.innerText !== '') {
      letterContainer.innerText = '';
      currentContainerIndex--; // Move the container index back to allow replacing the letter
    }
  }
  
  // Check if the user guessed correctly
  function checkAnswer() {
    const guessedWord = [...document.querySelectorAll('.letter-container')].map(container => container.innerText).join('');
    if (guessedWord === currentRound.word) {
      alert('Correct! You guessed the word!');
      nextRoundButton.style.display = 'inline-block';
    } else {
      alert('Incorrect, try again!');
    }
  }
  
  // Proceed to the next round
  nextRoundButton.addEventListener('click', () => {
    currentRoundIndex++;
    if (currentRoundIndex < rounds.length) {
      currentRound = rounds[currentRoundIndex];
      startRound();
    } else {
      alert('You finished all the rounds!');
    }
  });
  
  // Start the first round
  startRound();
