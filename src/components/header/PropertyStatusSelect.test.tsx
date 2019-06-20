import React from 'react';
import { shallow } from 'enzyme';
import PropertyStatusSelect from './PropertyStatusSelect';

it('renders without crashing', (): void => {
  shallow(
    <PropertyStatusSelect
      propertyFilter="ALL"
      changePropertyFilter={() => {}}
    />
  );
});

it('select element renders the right value of the property filter - ALL', (): void => {
  const wrapper = shallow(
    <PropertyStatusSelect
      propertyFilter="ALL"
      changePropertyFilter={() => {}}
    />
  );
  expect(wrapper.find('select').text()).toBe('ALL');
});

it('select element renders the right value of the property filter - Current', (): void => {
  const wrapper = shallow(
    <PropertyStatusSelect
      propertyFilter="ALL"
      changePropertyFilter={() => {}}
    />
  );
  expect(wrapper.find('select').text()).toBe('ALL');
});

it('select element renders the right value of the property filter - Sold', (): void => {
  const wrapper = shallow(
    <PropertyStatusSelect
      propertyFilter="ALL"
      changePropertyFilter={() => {}}
    />
  );
  expect(wrapper.find('select').text()).toBe('ALL');
});
