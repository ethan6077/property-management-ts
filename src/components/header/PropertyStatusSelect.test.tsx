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
  expect(wrapper.find('select').props().value).toBe('ALL');
});

it('select element renders the right value of the property filter - Current', (): void => {
  const wrapper = shallow(
    <PropertyStatusSelect
      propertyFilter="current"
      changePropertyFilter={() => {}}
    />
  );
  expect(wrapper.find('select').props().value).toBe('current');
});

it('select element renders the right value of the property filter - Sold', (): void => {
  const wrapper = shallow(
    <PropertyStatusSelect
      propertyFilter="sold"
      changePropertyFilter={() => {}}
    />
  );
  expect(wrapper.find('select').props().value).toBe('sold');
});

it('changePropertyFilter function should be called when select value changes', (): void => {
  const changePropertyFilterFn = jest.fn();
  const wrapper = shallow(
    <PropertyStatusSelect
      propertyFilter="all"
      changePropertyFilter={changePropertyFilterFn}
    />
  );
  wrapper.find('select').simulate('change', { value: 'sold' });
  expect(changePropertyFilterFn).toBeCalledTimes(1);
});
