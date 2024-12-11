const questions = [
    {
        question: "What does the name 'Rizal' mean in Spanish?",
        options: [
            "Green fields",
            "Rice fields",
            "Noble birth",
            "Great wisdom"
        ],
        correct: 0
    },
    {
        question: "What is the maiden name of Dr. Rizal's mother?",
        options: [
            "Realonda",
            "Alonso",
            "Mercado",
            "Quintos"
        ],
        correct: 1
    },
    {
        question: "What profession did Rizal practice aside from being a writer?",
        options: [
            "Lawyer",
            "Doctor",
            "Engineer",
            "Teacher"
        ],
        correct: 1
    },
    {
        question: "In which European country did Rizal write most of his works?",
        options: [
            "France",
            "Germany",
            "Spain",
            "Belgium"
        ],
        correct: 2
    },
    {
        question: "What was the significance of the 'Noli Me Tangere' in Philippine history?",
        options: [
            "It was a love story",
            "It exposed the colonial abuses",
            "It was a scientific paper",
            "It was a collection of poems"
        ],
        correct: 1
    },
    {
        question: "What was Rizal's primary profession in Dapitan?",
        options: [
            "Teacher",
            "Doctor",
            "Farmer",
            "Writer"
        ],
        correct: 1
    },
    {
        question: "Where was Rizal executed?",
        options: [
            "Luneta Park",
            "Fort Santiago",
            "Bagumbayan",
            "Dapitan"
        ],
        correct: 2
    },
    {
        question: "What was the title of Rizal's first novel?",
        options: [
            "El Filibusterismo",
            "Noli Me Tangere",
            "Amor Patrio",
            "La Liga Filipina"
        ],
        correct: 1
    },
    {
        question: "In which year was the Rizal Law enacted?",
        options: [
            "1946",
            "1956",
            "1961",
            "1970"
        ],
        correct: 1
    },
    {
        question: "What is the significance of the poem 'Mi Último Adiós'?",
        options: [
            "It was a love poem",
            "It was a farewell to his country",
            "It was a political manifesto",
            "It was a scientific paper"
        ],
        correct: 1
    },
    {
        question: "Who was Rizal's first love?",
        options: [
            "Josephine Bracken",
            "Leonor Rivera",
            "Segunda Katigbak",
            "Maria Clara"
        ],
        correct: 2
    },
    {
        question: "What was the name of Rizal's second novel?",
        options: [
            "Noli Me Tangere",
            "El Filibusterismo",
            "Amor Patrio",
            "La Liga Filipina"
        ],
        correct: 1
    },
    {
        question: "What was the main theme of 'Noli Me Tangere'?",
        options: [
            "Love and sacrifice",
            "Colonial oppression",
            "Education and reform",
            "Nationalism"
        ],
        correct: 1
    },
    {
        question: "Who was the author of the book 'Sucesos de las Islas Filipinas'?",
        options: [
            "Jose Rizal",
            "Antonio de Morga",
            "Marcelo H. Del Pilar",
            "Graciano Lopez Jaena"
        ],
        correct: 1
    },
    {
        question: "What was the purpose of the La Liga Filipina?",
        options: [
            "To promote education",
            "To unite Filipinos for reform",
            "To establish a new government",
            "To fight against the Spanish"
        ],
        correct: 1
    },
    {
        question: "What did Rizal study in Europe?",
        options: [
            "Medicine and Philosophy",
            "Engineering and Arts",
            "Law and History",
            "Agriculture and Science"
        ],
        correct: 0
    },
    {
        question: "Which country did Rizal visit first in Europe?",
        options: [
            "France",
            "Spain",
            "Germany",
            "Belgium"
        ],
        correct: 1
    },
    {
        question: "What was the main objective of the Rizal Law?",
        options: [
            "To promote foreign literature",
            "To honor Rizal and encourage patriotism",
            "To establish new educational institutions",
            "To revise Philippine history"
        ],
        correct: 1
    },
    {
        question: "What was Rizal's pen name when he wrote for La Solidaridad?",
        options: [
            "Laong Laan",
            "Dimasalang",
            "Jose Rizal",
            "P. Jacinto"
        ],
        correct: 0
    },
    {
        question: "What was the significance of the Suez Canal for Rizal?",
        options: [
            "It was a trade route",
            "It increased contact with Europe",
            "It was a military strategy",
            "It was a cultural exchange"
        ],
        correct: 1
    },
    {
        question: "What did Rizal advocate for in his writings?",
        options: [
            "Violent revolution",
            "Peaceful reform",
            "Isolation from the world",
            "Complete independence"
        ],
        correct: 1
    },
    {
        question: "What was the name of Rizal's family home in Calamba?",
        options: [
            "Casa Rizal",
            "Casa Mercado",
            "Casa Bracken",
            "Casa de la Paz"
        ],
        correct: 1
    },
    {
        question: "What was Rizal's view on education?",
        options: [
            "It was unnecessary",
            "It was a tool for social change",
            "It should be limited to the elite",
            "It was a waste of time"
        ],
        correct: 1
    },
    {
        question: "What was the main message of Rizal's writings?",
        options: [
            "To promote violence",
            "To encourage ignorance",
            "To inspire nationalism and reform",
            "To support colonial rule"
        ],
        correct: 2
    },
    {
        question: "What was the name of Rizal's school in Dapitan?",
        options: [
            "La Liga Filipina",
            "Rizal Academy",
            "School of Arts and Trades",
            "Rizal Memorial School"
        ],
        correct: 2
    },
    {
        question: "Which of the following was a major influence on Rizal's writings?",
        options: [
            "The Bible",
            "Uncle Tom's Cabin",
            "The Communist Manifesto",
            "The Art of War"
        ],
        correct: 1
    },
    {
        question: "What was the primary focus of Rizal's novel 'El Filibusterismo'?",
        options: [
            "Love and romance",
            "Revenge and revolution",
            "Education and reform",
            "Historical events"
        ],
        correct: 1
    },
    {
        question: "Who was Rizal's closest friend and confidant?",
        options: [
            "Marcelo H. Del Pilar",
            "Ferdinand Blumentritt",
            "Andres Bonifacio",
            "Emilio Aguinaldo"
        ],
        correct: 1
    },
    {
        question: "What did Rizal advocate for in his essay 'The Indolence of the Filipinos'?",
        options: [
            "Filipinos are inherently lazy",
            "Colonial rule is beneficial",
            "Social reforms are necessary",
            "Education is not important"
        ],
        correct: 2
    },
    {
        question: "What was the name of the newspaper Rizal founded in Hong Kong?",
        options: [
            "Kalayaan",
            "La Solidaridad",
            "Diario de Manila",
            "El Heraldo de la Revolucion"
        ],
        correct: 0
    }
];

// Initialize variables
let currentScore = 0;
let timer;
let examStarted = false;

// DOM Elements
const startButton = document.getElementById('startExam');
const submitButton = document.getElementById('submitExam');
const retakeButton = document.getElementById('retakeExam');
const examQuestions = document.getElementById('examQuestions');
const examForm = document.getElementById('examForm');
const results = document.getElementById('results');
const scoreDisplay = document.getElementById('score');
const timeDisplay = document.getElementById('time');

// Add event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    startButton.addEventListener('click', startExam);
    submitButton.addEventListener('click', submitExam);
    retakeButton.addEventListener('click', retakeExam);
});

// Timer functionality
class ExamTimer {
    constructor(duration, display) {
        this.duration = duration; // Duration in seconds (1800 for 30 minutes)
        this.display = display; // Display element for the timer
        this.running = false; // Timer state
        this.timeLeft = duration; // Time left in seconds
    }

    start() {
        if (!this.running) {
            this.running = true;
            this.timeLeft = this.duration; // Reset time left to duration
            this.interval = setInterval(() => {
                this.tick();
            }, 1000); // Update every second
        }
    }

    tick() {
        if (this.timeLeft <= 0) {
            this.stop();
            submitExam(); // Automatically submit when time is up
            return;
        }

        const minutes = Math.floor(this.timeLeft / 60); // Calculate minutes
        const seconds = this.timeLeft % 60; // Calculate seconds

        // Update the timer display
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
        
        this.timeLeft--; // Decrement time left
    }

    stop() {
        clearInterval(this.interval); // Stop the timer
        this.running = false; // Update running state
    }

    reset() {
        this.stop(); // Stop the timer
        this.timeLeft = this.duration; // Reset time left to duration
        document.getElementById('minutes').textContent = "30"; // Reset display to 30 minutes
        document.getElementById('seconds').textContent = "00"; // Reset seconds
    }
}

// Initialize timer with 30 minutes (1800 seconds)
const examTimer = new ExamTimer(1800, timeDisplay);

function startExam() {
    examStarted = true;
    startButton.classList.add('hidden');
    examQuestions.classList.remove('hidden');
    submitButton.classList.remove('hidden');
    results.classList.add('hidden');
    
    // Shuffle questions
    shuffleArray(questions);
    
    // Create question elements
    createQuestions();
    
    // Start timer
    examTimer.start();
}

function createQuestions() {
    examForm.innerHTML = '';
    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question-container';
        
        const questionText = document.createElement('p');
        questionText.className = 'question-text';
        questionText.textContent = `${index + 1}. ${q.question}`;
        
        const optionsContainer = document.createElement('div');
        optionsContainer.className = 'options-container';
        
        q.options.forEach((option, optIndex) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option';
            
            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = `q${index}`;
            radio.value = optIndex;
            radio.id = `q${index}o${optIndex}`;
            
            const label = document.createElement('label');
            label.htmlFor = `q${index}o${optIndex}`;
            label.textContent = option;
            
            optionDiv.appendChild(radio);
            optionDiv.appendChild(label);
            optionsContainer.appendChild(optionDiv);
        });
        
        questionDiv.appendChild(questionText);
        questionDiv.appendChild(optionsContainer);
        examForm.appendChild(questionDiv);
    });
}

function submitExam() {
    // Check if all questions are answered
    const allAnswered = questions.every((q, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        return selected !== null; // Ensure each question has a selected answer
    });

    if (!allAnswered) {
        alert("Please answer all questions before submitting."); // Alert the user
        return; // Prevent submission
    }

    examTimer.stop(); // Stop the timer when the exam is submitted
    currentScore = calculateScore();
    showResults();
}

function calculateScore() {
    let score = 0;
    questions.forEach((q, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        if (selected && parseInt(selected.value) === q.correct) {
            score++;
        }
    });
    return score;
}

function showResults() {
    examQuestions.classList.add('hidden');
    submitButton.classList.add('hidden');
    results.classList.remove('hidden');
    scoreDisplay.textContent = currentScore;
}

function retakeExam() {
    examTimer.reset();
    startExam();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Add scroll behavior for navbar
const navbar = document.querySelector('.navbar');
let lastScrollTop = 0;

navbar.classList.add('show');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop === 0) {
        navbar.classList.remove('hide');
        navbar.classList.add('show');
    } else if (scrollTop > lastScrollTop) {
        navbar.classList.remove('show');
        navbar.classList.add('hide');
    } else {
        navbar.classList.remove('hide');
        navbar.classList.add('show');
    }

    lastScrollTop = scrollTop;
});

// Would you like me to continue with the rest of the functionality? 