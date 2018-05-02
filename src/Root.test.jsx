import React from 'react';
import Root from './Root';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<Root />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
