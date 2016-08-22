'use strict';

import * as angular from 'angular';
import {TitleModule} from './module';

import * as template from './title.html';
import './title.scss';

class TitleComponent implements angular.IComponentOptions {
  public template: string = template;
  public controller: Function = TitleController;
}

class TitleController {
  public static $inject: Array<string> = ['$state'];

  constructor(private $state) { }

  public goToInfo() {
    this.$state.go('info');
  }

}
TitleModule.component('appTitle', new TitleComponent());