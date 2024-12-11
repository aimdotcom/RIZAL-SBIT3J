class PuzzleGame {
    constructor() {
        this.board = document.getElementById('puzzle-board');
        this.startButton = document.getElementById('start-puzzle');
        this.stopButton = document.getElementById('stop-puzzle');
        this.timerDisplay = document.getElementById('timer');
        this.bestTimeDisplay = document.getElementById('best-time');
        this.attemptsDisplay = document.getElementById('attempts');
        
        this.pieces = [];
        this.timer = null;
        this.seconds = 0;
        this.attempts = 0;
        this.pauseCount = 0;
        this.isPlaying = false;
        this.isPaused = false;
        
        this.initializeGame();
    }

    initializeGame() {
        this.startButton.addEventListener('click', () => this.startGame());
        this.stopButton.addEventListener('click', () => this.handleStopButton());
        this.stopButton.textContent = 'Pause';  // Initial text
    }

    startGame() {
        this.isPlaying = true;
        this.isPaused = false;
        if (this.seconds === 0) {
            this.attempts++;
            this.attemptsDisplay.textContent = this.attempts;
        }
        this.startButton.disabled = true;
        this.stopButton.disabled = false;
        this.stopButton.textContent = 'Pause';
        
        if (!this.pieces.length) {
            this.createPuzzlePieces();
        }
        this.startTimer();
    }

    handleStopButton() {
        if (this.pauseCount >= 2) {
            // If already used 2 pauses, this is a give up
            this.giveUp();
        } else if (this.isPaused) {
            // If paused, continue the game
            this.continueGame();
        } else {
            // Pause the game
            this.pauseGame();
        }
    }

    pauseGame() {
        this.isPaused = true;
        this.isPlaying = false;
        this.pauseCount++;
        clearInterval(this.timer);
        this.stopButton.textContent = 'Continue';
        this.startButton.disabled = true;
        
        // If this was the second pause, update button for next click
        if (this.pauseCount >= 2) {
            this.stopButton.textContent = 'Give Up';
        }
    }

    continueGame() {
        this.isPaused = false;
        this.startGame();
    }

    giveUp() {
        this.isPlaying = false;
        clearInterval(this.timer);
        this.startButton.disabled = false;
        this.stopButton.disabled = true;
        this.stopButton.textContent = 'Give Up';
        this.seconds = 0;
        this.pauseCount = 0;
        this.timerDisplay.textContent = this.formatTime(0);
        alert('Better luck next time! Try again?');
        this.board.innerHTML = '';
        this.pieces = [];
    }

    createPuzzlePieces() {
        this.board.innerHTML = '';
        this.pieces = [];

        // Create a 3x3 grid of puzzle pieces
        for (let i = 0; i < 9; i++) {
            const piece = document.createElement('div');
            piece.className = 'puzzle-piece';
            piece.draggable = true;
            
            // Calculate position for background image
            const row = Math.floor(i / 3);
            const col = i % 3;
            piece.style.backgroundImage = 'url("puzzle.jpg")';
            piece.style.backgroundSize = '300%';  // 3 times the size for 3x3 grid
            piece.style.backgroundPosition = `${col * 50}% ${row * 50}%`;
            
            this.pieces.push(piece);
        }

        // Shuffle pieces
        this.shuffleArray(this.pieces);
        
        // Add pieces to board
        this.pieces.forEach(piece => {
            this.board.appendChild(piece);
            this.setupDragAndDrop(piece);
        });
    }

    setupDragAndDrop(piece) {
        piece.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', this.pieces.indexOf(piece));
        });

        piece.addEventListener('dragover', (e) => {
            e.preventDefault();
        });

        piece.addEventListener('drop', (e) => {
            e.preventDefault();
            const fromIndex = parseInt(e.dataTransfer.getData('text/plain'));
            const toIndex = this.pieces.indexOf(piece);
            
            // Swap pieces
            [this.pieces[fromIndex], this.pieces[toIndex]] = [this.pieces[toIndex], this.pieces[fromIndex]];
            
            // Update DOM
            this.updateBoard();
            
            // Check if puzzle is solved
            if (this.checkWin()) {
                this.handleWin();
            }
        });
    }

    updateBoard() {
        this.board.innerHTML = '';
        this.pieces.forEach(piece => {
            this.board.appendChild(piece);
        });
    }

    checkWin() {
        const hasWon = this.pieces.every((piece, index) => {
            const currentPos = piece.style.backgroundPosition;
            const row = Math.floor(index / 3);
            const col = index % 3;
            const correctPos = `${col * 50}% ${row * 50}%`;
            return currentPos === correctPos;
        });

        if (hasWon) {
            this.handleWin();
        }
        return hasWon;
    }

    handleWin() {
        this.isPlaying = false;
        clearInterval(this.timer);
        const currentTime = this.seconds;
        const bestTime = localStorage.getItem('puzzleBestTime');
        
        if (!bestTime || currentTime < parseInt(bestTime)) {
            localStorage.setItem('puzzleBestTime', currentTime);
            this.bestTimeDisplay.textContent = this.formatTime(currentTime);
        }
        
        this.startButton.disabled = false;
        this.stopButton.disabled = true;
        this.stopButton.textContent = 'Give Up';
        this.seconds = 0;
        this.pauseCount = 0;

        // Celebration effect
        alert('Congratulations! You solved the puzzle! 🎉'); // Simple alert
        // Alternatively, you can use a more visual celebration
        this.showCelebrationAnimation(); // Call a function to show animation
    }

    // Function to show a celebration animation
    showCelebrationAnimation() {
        const celebrationDiv = document.createElement('div');
        celebrationDiv.innerHTML = '<h1>🎉 You Did It! 🎉</h1>';
        celebrationDiv.style.position = 'fixed';
        celebrationDiv.style.top = '50%';
        celebrationDiv.style.left = '50%';
        celebrationDiv.style.transform = 'translate(-50%, -50%)';
        celebrationDiv.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
        celebrationDiv.style.padding = '20px';
        celebrationDiv.style.borderRadius = '10px';
        celebrationDiv.style.zIndex = '1000';
        celebrationDiv.style.textAlign = 'center';
        document.body.appendChild(celebrationDiv);

        // Remove the celebration message after a few seconds
        setTimeout(() => {
            document.body.removeChild(celebrationDiv);
        }, 3000);
    }

    stopGame() {
        this.isPlaying = false;
        clearInterval(this.timer);
        this.startButton.disabled = false;
        this.stopButton.disabled = true;
    }

    startTimer() {
        this.timer = setInterval(() => {
            this.seconds++;
            this.timerDisplay.textContent = this.formatTime(this.seconds);
        }, 1000);
    }

    formatTime(seconds) {
        const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
        const secs = (seconds % 60).toString().padStart(2, '0');
        return `${mins}:${secs}`;
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
}

// Initialize the puzzle game when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new PuzzleGame();
}); 