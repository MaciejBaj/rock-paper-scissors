'use strict';

import * as angular from 'angular';
import {WelcomePageModule} from './module';
import * as template from './welcomePage.html';

import './welcomePage.scss';

class WelcomePageComponent implements angular.IComponentOptions {

  public template: string = template;
  public controller: Function = WelcomePageController;
}

export class WelcomePageController {
  public static $inject: Array<string> = ['$state'];

  public homeScreenPath = require('file!img!../../assets/diagram.png');

  constructor(private $state) { }

  public goToGame() {
    this.$state.go('game');
  }
}

WelcomePageModule.component('welcomePage', new WelcomePageComponent());