'use strict';

import * as angular from 'angular';

import {GameModule} from './module';

import {
  BIG_WEAPONS_PATHS,
  GAME_RESULT_MESSAGES,
  GAME_RULES,
  SMALL_WEAPONS_PATHS,
  WEAPONS
} from './gameResources';

import * as template from './game.html';
import './game.scss';

class GameComponent implements angular.IComponentOptions {
  public template: string = template;
  public controller: Function = GameController;
}

export class GameController {

  public message: string;
  public rockPath: string = SMALL_WEAPONS_PATHS.rock;
  public paperPath: string = SMALL_WEAPONS_PATHS.paper;
  public scissorsPath: string = SMALL_WEAPONS_PATHS.scissors;
  public userWeaponPath: string;
  public computerWeaponPath: string;

  constructor() {
    this.message = 'Choose your weapon!';
  }

  public startBattle(userWeapon: string) {
    const computerWeapon: string = GameController.randomWeapon;
    const battleResult: string = GAME_RULES[`${userWeapon} vs ${computerWeapon}`];
    this.message = GAME_RESULT_MESSAGES[battleResult];
    this.userWeaponPath = BIG_WEAPONS_PATHS[userWeapon];
    this.computerWeaponPath = BIG_WEAPONS_PATHS[computerWeapon];
  }

  private static get randomWeapon(): string {
    return WEAPONS[Math.floor(Math.random() * WEAPONS.length)];
  }
}

GameModule.component('game', new GameComponent());