import React from 'react';
import { shallow } from 'enzyme';
import PropertyStatus from './PropertyStatus';
import SmallCircle from './SmallCircle';
import { PropertyStatusE } from '../../types';

it('renders without crashing', (): void => {
  shallow(<PropertyStatus status={PropertyStatusE.Current} />);
});

it('SmallCircle props change according to property status', (): void => {
  describe('property status - current', (): void => {
    const propertyStatusWrapper = shallow(
      <PropertyStatus status={PropertyStatusE.Current} />
    );
    expect(propertyStatusWrapper.find(SmallCircle).props().status).toBe(
      'current'
    );
  });
  describe('property status - sold', (): void => {
    const propertyStatusWrapper = shallow(
      <PropertyStatus status={PropertyStatusE.Sold} />
    );
    expect(propertyStatusWrapper.find(SmallCircle).props().status).toBe('sold');
  });
});

it('Status Value change according to property status', (): void => {
  describe('property status - current', (): void => {
    const propertyStatusWrapper = shallow(
      <PropertyStatus status={PropertyStatusE.Current} />
    );
    expect(propertyStatusWrapper.find('span').text()).toBe('Current');
  });
  describe('property status - sold', (): void => {
    const propertyStatusWrapper = shallow(
      <PropertyStatus status={PropertyStatusE.Sold} />
    );
    expect(propertyStatusWrapper.find('span').text()).toBe('Sold');
  });
});
