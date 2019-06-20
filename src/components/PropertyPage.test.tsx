import React from 'react';
import { shallow } from 'enzyme';
import PropertyPage from './PropertyPage';
import HeaderContainer from './header/HeaderContainer';
import PropertyListContainer from './properties/PropertyListContainer';
import Loader from './common/Loader';
import Error from './common/Error';
import { PropertyStatusE } from '../types';

it('renders without crashing', (): void => {
  shallow(
    <PropertyPage
      propertyFilter="default"
      propertyList={[]}
      propertyListStatus="initial"
      fetchProperties={() => {}}
    />
  );
});

it('renders nothing when propertyStatus is initial', (): void => {
  const propertyPageWrapper = shallow(
    <PropertyPage
      propertyFilter="default"
      propertyList={[]}
      propertyListStatus="initial"
      fetchProperties={() => {}}
    />,
    {
      disableLifecycleMethods: true
    }
  );
  expect(propertyPageWrapper.find(Loader)).toHaveLength(0);
  expect(propertyPageWrapper.find(Error)).toHaveLength(0);
});

it('renders Loader when propertyStatus is loading', (): void => {
  const propertyPageWrapper = shallow(
    <PropertyPage
      propertyFilter="default"
      propertyList={[]}
      propertyListStatus="loading"
      fetchProperties={() => {}}
    />,
    {
      disableLifecycleMethods: true
    }
  );
  expect(propertyPageWrapper.find(Loader)).toHaveLength(1);
});

it('renders Error when propertyStatus is error', (): void => {
  const propertyPageWrapper = shallow(
    <PropertyPage
      propertyFilter="default"
      propertyList={[]}
      propertyListStatus="error"
      fetchProperties={() => {}}
    />,
    {
      disableLifecycleMethods: true
    }
  );
  expect(propertyPageWrapper.find(Error)).toHaveLength(1);
});

it('renders HeaderContainer and PropertyListContainer when propertyStatus is done', (): void => {
  const propertyPageWrapper = shallow(
    <PropertyPage
      propertyFilter="default"
      propertyList={[]}
      propertyListStatus="done"
      fetchProperties={() => {}}
    />,
    {
      disableLifecycleMethods: true
    }
  );
  expect(propertyPageWrapper.find(HeaderContainer)).toHaveLength(1);
  expect(propertyPageWrapper.find(PropertyListContainer)).toHaveLength(1);
});

it('renders filtered propertyList when propertyFilter is set', (): void => {
  const propertyPageWrapper = shallow(
    <PropertyPage
      propertyFilter="default"
      propertyList={[
        {
          id: 1,
          status: PropertyStatusE.Current,
          street: '1 Fake Street',
          suburb: 'Glen Iris',
          state: 'VIC',
          postcode: '3146',
          price: 1230500,
          image:
            'https://code-challenge.activepipe.com/property-images/frontage/01.jpg'
        },
        {
          id: 2,
          status: PropertyStatusE.Sold,
          street: '2 Fake Street',
          suburb: 'Glen Iris',
          state: 'VIC',
          postcode: '3146',
          price: 1330500,
          image:
            'https://code-challenge.activepipe.com/property-images/frontage/02.jpg'
        },
        {
          id: 3,
          status: PropertyStatusE.Current,
          street: '3 Fake Street',
          suburb: 'Glen Iris',
          state: 'VIC',
          postcode: '3146',
          price: 2200000,
          image:
            'https://code-challenge.activepipe.com/property-images/frontage/03.jpg'
        }
      ]}
      propertyListStatus="done"
      fetchProperties={() => {}}
    />,
    {
      disableLifecycleMethods: true
    }
  );
  expect(propertyPageWrapper.find(PropertyListContainer)).toHaveLength(1);
  // by default, list all the properties
  expect(
    propertyPageWrapper.find(PropertyListContainer).props().propertyList
  ).toHaveLength(3);
  // after set the filter, only available properties will be listed
  propertyPageWrapper.setProps({ propertyFilter: PropertyStatusE.Current });
  expect(
    propertyPageWrapper.find(PropertyListContainer).props().propertyList
  ).toHaveLength(2);
});
