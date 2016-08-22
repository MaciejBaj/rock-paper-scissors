export const WEAPONS = ['rock', 'paper', 'scissors'];

export const BIG_WEAPONS_PATHS = {
  rock: require('file!img!../../assets/140 Rock.png'),
  paper: require('file!img!../../assets/140 Paper.png'),
  scissors: require('file!img!../../assets/140 Scissors.png')
};

export const SMALL_WEAPONS_PATHS = {
  rock: require('file!img!../../assets/60 Rock.png'),
  paper: require('file!img!../../assets/60 Paper.png'),
  scissors: require('file!img!../../assets/60 Scissors.png')
};

export const GAME_RESULTS = {
  win: 'win',
  loose: 'loose',
  draw: 'draw'
};

export const GAME_RESULT_MESSAGES = {
  [GAME_RESULTS.win]: 'You won. Play again?',
  [GAME_RESULTS.loose]: 'You loose. Play again?',
  [GAME_RESULTS.draw]: 'Draw. Play again?'
};

export const GAME_RULES = {
  'rock vs paper': GAME_RESULTS.loose,
  'rock vs scissors': GAME_RESULTS.win,
  'rock vs rock': GAME_RESULTS.draw,
  'paper vs scissors': GAME_RESULTS.loose,
  'paper vs rock': GAME_RESULTS.win,
  'paper vs paper': GAME_RESULTS.draw,
  'scissors vs rock': GAME_RESULTS.loose,
  'scissors vs paper': GAME_RESULTS.win,
  'scissors vs scissors': GAME_RESULTS.draw,
};