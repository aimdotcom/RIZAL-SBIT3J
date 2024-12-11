const gameData = [
    {
      question: " Foreign fanboy na may notebook puno ng quotes mula sa mga nobela ni Rizal, Certified Rizalian at pen pal goals.",
      images: [
        { src: "images/luna.jpg", name: "A. Luna", isCorrect: false },
        { src: "images/blumentritt.jpg", name: "F. Blumentritt", isCorrect: true },
        { src: "images/delpilar.jpg", name: "M.H. Del Pilar", isCorrect: false },
      ],
    },
    {
        question: "Kilala bilang “wingman” ng kilusan pero laging bida sa mga talumpati. Kung may mic, may speech agad.",
        images: [
          { src: "images/jaena.jpg", name: "G.L. Jaena", isCorrect: true },
          { src: "images/luna.jpg", name: "A. Luna", isCorrect: false },
          { src: "images/delpilar.jpg", name: "M.H. Del Pilar", isCorrect: false },
        ],
      },
    {
        question: "Ate na parang stage mom—laging proud sa achievements ni Rizal. Panganay pero parang nanay.",
        images: [
          { src: "images/josephine.jpg", name: "Josephine B.", isCorrect: false },
          { src: "images/lucia.jpg", name: "Lucia M.", isCorrect: false },
          { src: "images/saturnina.jpg", name: "Saturnina R.", isCorrect: true },
        ],
    },
    {
      question: "Tropang propagandista na pwede ring bida sa Call of Duty. Ang Luna na hindi mo gugustuhing kalaban sa nerf wars.",
      images: [
        { src: "images/jluna.png", name: "J. Luna", isCorrect: false },
        { src: "images/luna.jpg", name: "A. Luna", isCorrect: true },
        { src: "images/delpilar.jpg", name: "M.H. Del Pilar", isCorrect: false },
      ],
    },
    {
        question: "Espanyol na literal 'hinuli' si Rizal dahil sa kanyang mga gawa. Halatang hindi fan ng El Fili.",
        images: [
          { src: "images/despujol.jpg", name: "E. Despujol", isCorrect: true },
          { src: "images/blumentritt.jpg", name: "F. Blumentritt", isCorrect: false },
          { src: "images/jaena.jpg", name: "G.L. Jaena", isCorrect: false },
        ],
    },
    {
        question: "Ang legit na 'first love never dies' ni Rizal, pero long-distance relationship ang kalaban.",
        images: [
          { src: "images/leonorv.jpg", name: "Leonor V.", isCorrect: false },
          { src: "images/luna.jpg", name: "A. Luna", isCorrect: false },
          { src: "images/leonorr.jpg", name: "Leonor R.", isCorrect: true },
        ],
    },
    {
        question: "Pangarap ni Rizal na maging 'partner-in-crime' pero natagpuan ang tunay na forever sa iba. Kapitbahay lang, pero ang puso nila malayo.",
        images: [
          { src: "images/jluna.png", name: "J. Luna", isCorrect: false },
          { src: "images/leonorr.jpg", name: "Leonor R.", isCorrect: false },
          { src: "images/leonorv.jpg", name: "Leonor V.", isCorrect: true },
        ],
    },
    {
        question: "Maestro na laging may hawak na stick—hindi pambalasa, kundi panakot! Ang original terror teacher ni Rizal sa Biñan.",
        images: [
          { src: "images/cruz.jpg", name: "Justiniano A.C.", isCorrect: true },
          { src: "images/despujol.jpg", name: "E. Despujol", isCorrect: false },
          { src: "images/blumentritt.jpg", name: "F. Blumentritt", isCorrect: false },
        ],
    },
    {
        question: "A may teleserye-level love story kasama si Rizal, may plot twist pa! 'Ikaw ang forever ko, kahit sa exile lang.'",
        images: [
          { src: "images/leonorr.jpg", name: "Leonor R.", isCorrect: false },
          { src: "images/josephine.jpg", name: "Josephine B.", isCorrect: true },
          { src: "images/segunda.jpg", name: "Segunda K.", isCorrect: false },
        ],
    },
    {
        question: "Tahimik na kuya pero laging backup ni Rizal sa lahat ng laban. Ayaw magpakuha ng litrato.",
        images: [
          { src: "images/cruz.jpg", name: "Justiniano A.C.", isCorrect: false },
          { src: "images/delpilar.jpg", name: "A. Luna", isCorrect: false },
          { src: "images/paciano.jpg", name: "Paciano", isCorrect: true },
        ],
    },
    {
        question: "Unang “friendzoned” na forever tropa lang ni Rizal. Pangarap maging Mrs. Rizal pero di nagkatotoo.",
        images: [
          { src: "images/segunda.jpg", name: "Segunda K.", isCorrect: true },
          { src: "images/lucia.jpg", name: "Lucia M.", isCorrect: false },
          { src: "images/josephine.jpg", name: "Josephine B.", isCorrect: false },
        ],
    },
    {
        question: "Ang Supremo ng Katipunan na walang takot! Real talk, siya ang ultimate underdog na nagbigay ng action hero vibes!",
        images: [
          { src: "images/jluna.png", name: "J. Luna", isCorrect: false },
          { src: "images/andres.png", name: "Andres B.", isCorrect: true },
          { src: "images/delpilar.jpg", name: "M.H. Del Pilar", isCorrect: false },
        ],
    },
    {
        question: "Ang pambansang bayani na may utak, talento, at hitsura! Hindi lang doktor, manunulat, at pintor, kundi nagising ang mga Pilipino sa kanyang mga nobela.",
        images: [
          { src: "images/delpilar.jpg", name: "M.H. Del Pilar", isCorrect: false },
          { src: "images/andres.png", name: "Andres B.", isCorrect: false },
          { src: "images/jose.jpg", name: "Jose Rizal", isCorrect: true },
        ],
    },
  ];
  
  let currentRound = 0;
  let score = 0;
  
  const questionElement = document.getElementById("question");
  const imagesContainer = document.getElementById("images-container");
  const scoreElement = document.getElementById("score");
  const nextButton = document.getElementById("next-button");
  
  function loadRound(roundIndex) {
    const roundData = gameData[roundIndex];
    questionElement.textContent = roundData.question;
    imagesContainer.innerHTML = "";
  
    roundData.images.forEach((imageData, index) => {
      // Create a container for the image and name
      const imgContainer = document.createElement("div");
      imgContainer.classList.add("image-item");
  
      // Create and append the image
      const imgElement = document.createElement("img");
      imgElement.src = imageData.src;
      imgElement.addEventListener("click", () => handleAnswer(imageData.isCorrect, imgElement));
      imgContainer.appendChild(imgElement);
  
      // Create and append the name
      const nameElement = document.createElement("p");
      nameElement.textContent = imageData.name;
      imgContainer.appendChild(nameElement);
  
      imagesContainer.appendChild(imgContainer);
    });
  
    nextButton.style.display = "none";
  }
  
  function handleAnswer(isCorrect, imgElement) {
    if (isCorrect) {
      score++;
      imgElement.classList.add("correct");
    } else {
      imgElement.classList.add("incorrect");
    }
  
    scoreElement.textContent = score;
  
    // Disable all images
    Array.from(imagesContainer.children).forEach((imgContainer) => {
      imgContainer.querySelector("img").style.pointerEvents = "none";
    });
  
    nextButton.style.display = "block";
  }
  
  nextButton.addEventListener("click", () => {
    currentRound++;
    if (currentRound < gameData.length) {
      loadRound(currentRound);
    } else {
      questionElement.textContent = "Ang kaniyang final score ay " + score + ".";
      imagesContainer.innerHTML = "";
      nextButton.style.display = "none";
    }
  });
  
  // Initialize the first round
  loadRound(currentRound);
  