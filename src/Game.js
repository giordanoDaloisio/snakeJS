import Snake from './Snake';
import FoodManager from './FoodManager';

import {
  createBoard,
  createMessage,
  createScore,
  createDifficultyManager,
} from './utils';

import {
  MEDIUM,
} from './constants';

const Game = function(root) {
  const scoreBoard = createScore(root);
  const board = createBoard(root);
  createDifficultyManager(root, this);
  this.difficulty = MEDIUM;

  this.start = function() {
    const foodManager = new FoodManager(board);
    let snake, food, direction, score, intervalId;

    function init() {
      snake = new Snake(board);
      food = foodManager.createFood(snake);
      direction = '';
      score = 0;
      scoreBoard.textContent = score;
    }

    function changeDirection(event) {
      const prev_dir = snake.getDirection();
      direction = prev_dir;
      if (event.code === 'ArrowUp' &&
          (prev_dir !== 'down' || snake.getLength() < 2)) {
        direction = 'up';
      } else if (event.code === 'ArrowDown' &&
          (prev_dir !== 'up' || snake.getLength() < 2)) {
        direction = 'down';
      } else if (event.code === 'ArrowLeft' &&
          (prev_dir !== 'right' || snake.getLength() < 2)) {
        direction = 'left';
      } else if (event.code === 'ArrowRight' &&
          (prev_dir !== 'left' || snake.getLength() < 2)) {
        direction = 'right';
      }
    }

    function play() {
      snake.move(direction);
      if (snake.eat(food)) {
        score++;
        scoreBoard.textContent = score;
        food.destroy();
        food = foodManager.createFood(snake);
        snake.grow();
      }
      if (snake.isDead()) {
        window.removeEventListener('keydown', changeDirection);
        clearInterval(intervalId);
        snake.reset();
        food.destroy();
        init();
        createMessage(board, 'Hai perso!');
      }
    }

    init();
    createMessage(board, 'Premi una freccia per muovere il serpente');

    board.addEventListener('start', () => {
      window.addEventListener('keydown', changeDirection);
      intervalId = setInterval(play, this.difficulty);
    });

    board.addEventListener('resetTime', () => {
      if(intervalId !== undefined){
        clearInterval(intervalId);
        intervalId = setInterval(play, this.difficulty);
      }
    });
  };

  this.setDifficulty = function(difficulty) {
    this.difficulty = difficulty;
    const event = new Event('resetTime');
    board.dispatchEvent(event);
  };
};

export default Game;
