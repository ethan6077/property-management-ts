import React from 'react';
import { shallow } from 'enzyme';
import PropertyPage from './PropertyPage';
import HeaderContainer from './header/HeaderContainer';
import PropertyListContainer from './properties/PropertyListContainer';
import Loader from './common/Loader';
import Error from './common/Error';

it('renders without crashing', (): void => {
  shallow(<PropertyPage />);
});

it('renders nothing when propertyStatus is initial', (): void => {
  const propertyPageWrapper = shallow(<PropertyPage />, {
    disableLifecycleMethods: true
  });
  expect(propertyPageWrapper.find(Loader)).toHaveLength(0);
  expect(propertyPageWrapper.find(Error)).toHaveLength(0);
});

it('renders Loader when propertyStatus is loading', (): void => {
  const propertyPageWrapper = shallow(<PropertyPage />, {
    disableLifecycleMethods: true
  });
  propertyPageWrapper.setState({ propertyStatus: 'loading' });
  expect(propertyPageWrapper.find(Loader)).toHaveLength(1);
});

it('renders Error when propertyStatus is error', (): void => {
  const propertyPageWrapper = shallow(<PropertyPage />, {
    disableLifecycleMethods: true
  });
  propertyPageWrapper.setState({ propertyStatus: 'error' });
  expect(propertyPageWrapper.find(Error)).toHaveLength(1);
});

it('renders HeaderContainer and PropertyListContainer when propertyStatus is done', (): void => {
  const propertyPageWrapper = shallow(<PropertyPage />, {
    disableLifecycleMethods: true
  });
  propertyPageWrapper.setState({ propertyStatus: 'done' });
  expect(propertyPageWrapper.find(HeaderContainer)).toHaveLength(1);
  expect(propertyPageWrapper.find(PropertyListContainer)).toHaveLength(1);
});

it('renders filtered propertyList when propertyFilter is set', (): void => {
  const propertyPageWrapper = shallow(<PropertyPage />, {
    disableLifecycleMethods: true
  });
  propertyPageWrapper.setState({
    propertyList: [
      {
        id: 1,
        status: 'current',
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
        status: 'sold',
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
        status: 'current',
        street: '3 Fake Street',
        suburb: 'Glen Iris',
        state: 'VIC',
        postcode: '3146',
        price: 2200000,
        image:
          'https://code-challenge.activepipe.com/property-images/frontage/03.jpg'
      }
    ]
  });
  propertyPageWrapper.setState({ propertyStatus: 'done' });
  expect(propertyPageWrapper.find(PropertyListContainer)).toHaveLength(1);
  // by default, list all the properties
  expect(
    propertyPageWrapper.find(PropertyListContainer).props().propertyList
  ).toHaveLength(3);
  // after set the filter, only available properties will be listed
  propertyPageWrapper.setState({ propertyFilter: 'current' });
  expect(
    propertyPageWrapper.find(PropertyListContainer).props().propertyList
  ).toHaveLength(2);
});
