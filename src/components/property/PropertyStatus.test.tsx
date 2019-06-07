import React from 'react';
import { shallow } from 'enzyme';
import PropertyStatus from './PropertyStatus';
import SmallCircle from './SmallCircle';
import StatusMap from '../header/StatusMap';
import { EPropertyStatus } from '../../types';

it('renders without crashing', () => {
  shallow(<PropertyStatus status={EPropertyStatus.Current} />);
});

it('SmallCircle props change according to property status', () => {
  describe('property status - current', () => {
    const propertyStatusWrapper = shallow(<PropertyStatus status={EPropertyStatus.Current} />);
    expect(propertyStatusWrapper.find(SmallCircle).props().status).toBe('current');
  });
  describe('property status - sold', () => {
    const propertyStatusWrapper = shallow(<PropertyStatus status={EPropertyStatus.Sold} />);
    expect(propertyStatusWrapper.find(SmallCircle).props().status).toBe('sold');
  });
});

it('Status Value change according to property status', () => {
  describe('property status - current', () => {
    const propertyStatusWrapper = shallow(<PropertyStatus status={EPropertyStatus.Current}  />);
    expect(propertyStatusWrapper.find('span').text()).toBe(StatusMap.get('current'));
  });
  describe('property status - sold', () => {
    const propertyStatusWrapper = shallow(<PropertyStatus status={EPropertyStatus.Sold}  />);
    expect(propertyStatusWrapper.find('span').text()).toBe(StatusMap.get('sold'));
  });
});
