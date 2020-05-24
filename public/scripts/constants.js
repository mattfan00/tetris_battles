const COLS = 10;
const ROWS = 20;
const BLOCK_SIZE = 20;


const KEY = {
  LEFT: 37,
  RIGHT: 39,
  DOWN: 40,
  DROP: 32,
  ROTATE: 38
}

const moveList = [
  KEY.LEFT,
  KEY.RIGHT,
  KEY.DOWN
]

const SHAPES = [
  { 
    color: 'rgba(0, 209, 209, 1)', // cyan
    ghostColor: 'rgba(0, 209, 209, 0.5)',
    shape: [
      [1, 1, 1, 1], 
      [0, 0, 0, 0], 
      [0, 0, 0, 0], 
      [0, 0, 0, 0]
    ]
  },
  { 
    color: 'rgba(69, 72, 255, 1)', // blue
    ghostColor: 'rgba(69, 72, 255, 0.5)',
    shape: [
      [2, 0, 0], 
      [2, 2, 2], 
      [0, 0, 0]
    ]
  },
  { 
    color: 'rgba(255, 165, 0, 1)', // orange
    ghostColor: 'rgba(255, 165, 0, 0.5)',
    shape: [
      [0, 0, 3], 
      [3, 3, 3], 
      [0, 0, 0]]
  },
  { 
    color: 'rgba(227, 227, 23, 1)', // yellow
    ghostColor: 'rgba(227, 227, 23, 0.5)',
    shape: [
      [4, 4], 
      [4, 4]
    ]
  },
  { 
    color: 'rgba(4, 209, 4, 1)', // green
    ghostColor: 'rgba(4, 209, 4, 0.5)',
    shape: [
      [0, 5, 5], 
      [5, 5, 0], 
      [0, 0, 0]
    ]
  },
  { 
    color: 'rgba(163, 18, 163, 1)', // purple
    ghostColor: 'rgba(163, 18, 163, 0.5)',
    shape: [
      [0, 6, 0], 
      [6, 6, 6], 
      [0, 0, 0]
    ]
  },
  { 
    color: 'rgba(255, 0, 0, 1)',
    ghostColor: 'rgba(255, 0, 0, 0.5)',
    shape: [
      [7, 7, 0], 
      [0, 7, 7], 
      [0, 0, 0]
    ]
  }
]