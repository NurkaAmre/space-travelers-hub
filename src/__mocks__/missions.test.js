import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../Components/redux/configureStore';
import Missions from '../Components/Missions/Missions';

describe('Missions Container component', () => {
  test('Missions Rockets correctly', () => {
    const missions = render(

      <Provider store={store}>

        <Missions />

      </Provider>,

    );
    expect(missions).toMatchSnapshot();
  });
});
