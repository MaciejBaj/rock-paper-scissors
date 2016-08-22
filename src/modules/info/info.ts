'use strict';

import * as angular from 'angular';
import {InfoModule} from './module';

import * as template from './info.html';
import './info.scss';

class InfoComponent implements angular.IComponentOptions {
  public template: string = template;
}

InfoModule.component('info', new InfoComponent());