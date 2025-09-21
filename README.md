Tic-Tac-Toe Game
A modern, responsive tic-tac-toe game built with React, TypeScript, and Vite. Features a sleek dark theme, score tracking, and game history.

🎮 Live Demo
Play the game here

✨ Features
Interactive Gameplay: Click on squares to make your move
Score Tracking: Keep track of wins for X, O, and ties
Game History: Review and jump to any previous move
Responsive Design: Works perfectly on desktop, tablet, and mobile
Modern UI: Dark theme with vibrant colors and smooth animations
TypeScript: Full type safety and better development experience

🚀 Tech Stack

React 18 - UI library
TypeScript - Type safety
Vite - Build tool and development server
CSS3 - Modern styling with CSS custom properties
Vercel - Deployment platform

🛠️ Installation

Clone the repository

bash   git clone https://github.com/PiedraverdeAllysonJhen/tictactoe_A.git
   cd tictactoe_A

Install dependencies

bash   npm install

Start the development server

bash   npm run dev

Open your browser
Navigate to http://localhost:5173

📁 Project Structure
src/
├── components/
│   ├── Game.tsx          # Main game component
│   ├── board.tsx         # Game board component
│   └── square.tsx        # Individual square component
├── utils/
│   ├── winnerCalculator.tsx  # Game logic for determining winners
│   └── scorer.tsx            # Score tracking utilities
├── App.tsx               # Root component
├── App.css               # Styling
├── type.ts               # TypeScript type definitions
├── main.tsx              # Application entry point
└── index.css             # Global styles

🎯 How to Play

Start a Game: The game board will appear with X going first
Make Moves: Click on any empty square to place your mark
Win Condition: Get three of your marks in a row (horizontal, vertical, or diagonal)
Score Tracking: Wins and ties are automatically tracked
Game History: Use the move buttons to review previous game states
New Game: Click "New Game" to start fresh
Reset Scores: Click "Reset Scores" to clear the scoreboard

🎨 Customization
Color Scheme
The game uses CSS custom properties for easy theming. You can modify colors in App.css:
css:root {
  --background-color: #1a1a2e;
  --x-color: #ff6b6b;
  --o-color: #4ecdc4;
  --button-bg-color: #e94560;
  /* ... more variables */
}
Responsive Breakpoints

Desktop: > 900px
Tablet: 700px - 900px
Mobile: < 500px

🧪 Available Scripts

npm run dev - Start development server
npm run build - Build for production
npm run preview - Preview production build
npm run lint - Run ESLint