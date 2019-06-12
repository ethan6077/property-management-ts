import React, { Component, ChangeEvent } from 'react';
import HeaderContainer from './header/HeaderContainer';
import PropertyListContainer from './properties/PropertyListContainer';
import Loader from './common/Loader';
import Error from './common/Error';
import { PropertyI } from '../types';
import styles from './PropertyPage.module.css';

interface Props {
  propertyFilter: string;
  propertyList: PropertyI[];
  propertyListStatus: string;
  fetchProperties: () => void;
}

interface State {
  propertyFilter: string;
  propertyList: PropertyI[];
  propertyStatus: string;
}

class PropertyPage extends Component<Props, State> {
  componentDidMount(): void {
    const { fetchProperties } = this.props;
    fetchProperties();
  }

  changeFilter = (event: ChangeEvent<HTMLSelectElement>): void => {
    this.setState({
      propertyFilter: event.target.value
    });
  };

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
    if (propertyFilter !== 'default') {
      filteredPropertyList = propertyList.filter(
        p => p.status === propertyFilter
      );
    } else {
      filteredPropertyList = propertyList;
    }
    return (
      <React.Fragment>
        <HeaderContainer
          propertyFilter={propertyFilter}
          changeFilter={this.changeFilter}
        />
        <PropertyListContainer propertyList={filteredPropertyList} />
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
