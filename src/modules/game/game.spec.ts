import '../../index';
import 'angular';
import 'angular-mocks';
import {ComponentTest} from '../util/ComponentTest';
import {GameController} from './game';
import {APP_NAME} from '../../index';

import 'phantomjs-polyfill';

describe('Component GameComponent', () => {
  var directiveTest: ComponentTest<GameController>;
  beforeEach(angular.mock.module(APP_NAME));
  beforeEach(() => {
    directiveTest = new ComponentTest<GameController>('<game></game>', 'game');
  });

  describe('game proceeds in right order', () => {
    it('user message should be set to initial value', () => {
      const attributes: any = { };
      directiveTest.createComponent(attributes);
      expect(directiveTest.element.find('.game__message').text()).toBe("Choose your weapon!");
    });
  
    it('user chooses "rock" and is notified about the game result', () => {
      const attributes: any = { };
      const gameController: GameController = directiveTest.createComponent(attributes);
      gameController.startBattle('rock');
      directiveTest.scope.$digest();
      expect(directiveTest.element.find('.game__message').text()).not.toBe("Choose your weapon!");
    });

  });
  
});

