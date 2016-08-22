'use strict';

import * as angular from 'angular';
import 'angular-ui-router';

import './modules/game';
import {GameModule} from './modules/game/module';
import './modules/info';
import {InfoModule} from './modules/info/module';
import './modules/title';
import {TitleModule} from './modules/title/module';
import './modules/welcomePage';
import {WelcomePageModule} from './modules/welcomePage/module';

import {routesConfig} from './routes.ts';
import './styles/global.scss';

export const APP_NAME = 'rock-paper-scissors-app';

angular.module(APP_NAME, ['ui.router',
                          InfoModule.name,
                          GameModule.name,
                          TitleModule.name,
                          WelcomePageModule.name]).config(routesConfig);

angular.bootstrap(document, [APP_NAME], {
    strictDi: true
});