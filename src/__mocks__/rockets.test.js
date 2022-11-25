import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../Components/redux/configureStore';
import Rocket from '../Components/Rockets/Rocket';

describe('Rockets Container component', () => {
  test('Renders Rockets correctly', () => {
    const rockets = render(

      <Provider store={store}>

        <Rocket />

      </Provider>,

    );
    expect(rockets).toMatchSnapshot();
  });
});
