import React, { Component } from 'react';
import HeaderBar from './header/HeaderBar';
import PropertyListWrapper from './properties/PropertyListWrapper';
import Loader from './common/Loader';
import Error from './common/Error';
import { PropertyI, FilterDefaultE } from '../types';
import styles from './PropertyPage.module.css';

interface Props {
  propertyFilter: string;
  propertyList: PropertyI[];
  propertyListStatus: string;
  fetchProperties: () => void;
}

class PropertyPage extends Component<Props> {
  componentDidMount(): void {
    const { fetchProperties } = this.props;
    fetchProperties();
  }

  renderLoader(): JSX.Element {
    return (
      <div className={styles.loaderContainer}>
        <Loader />
      </div>
    );
  }

  renderErrorMsg(): JSX.Element {
    return (
      <div className={styles.msgContainer}>
        <Error />
      </div>
    );
  }

  renderMainContent(): JSX.Element {
    const { propertyFilter, propertyList } = this.props;
    let filteredPropertyList = [];
    if (propertyFilter !== FilterDefaultE.All) {
      filteredPropertyList = propertyList.filter(
        p => p.status === propertyFilter
      );
    } else {
      filteredPropertyList = propertyList;
    }
    return (
      <React.Fragment>
        <HeaderBar />
        <PropertyListWrapper propertyList={filteredPropertyList} />
      </React.Fragment>
    );
  }

  render(): JSX.Element {
    const { propertyListStatus } = this.props;
    let content = null;
    if (propertyListStatus === 'loading') {
      content = this.renderLoader();
    } else if (propertyListStatus === 'error') {
      content = this.renderErrorMsg();
    } else {
      content = this.renderMainContent();
    }
    return <div className={styles.propertyPage}>{content}</div>;
  }
}

export default PropertyPage;
