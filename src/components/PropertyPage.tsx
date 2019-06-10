import React, { Component, ChangeEvent } from 'react';
import HeaderContainer from './header/HeaderContainer';
import PropertyListContainer from './properties/PropertyListContainer';
import Loader from './common/Loader';
import Error from './common/Error';
import { PropertyI } from '../types';
import styles from './PropertyPage.module.css';

interface State {
  propertyFilter: string;
  propertyList: PropertyI[];
  propertyStatus: string;
}

class PropertyPage extends Component<any, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      propertyFilter: 'default',
      propertyList: [],
      propertyStatus: 'initial' // initial, loading, done, error
    };
  }

  async componentDidMount(): Promise<any> {
    try {
      this.setState({ propertyStatus: 'loading' });
      const response = await fetch(
        'https://code-challenge.activepipe.com/challenge/properties'
      );
      const dataInJson = await response.json();
      this.setState({ propertyStatus: 'done' });
      this.setState({ propertyList: dataInJson });
    } catch (e) {
      console.warn(e);
      this.setState({ propertyStatus: 'error' });
    }
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
    let filteredPropertyList = [];
    if (this.state.propertyFilter !== 'default') {
      filteredPropertyList = this.state.propertyList.filter(
        (p): boolean => p.status === this.state.propertyFilter
      );
    } else {
      filteredPropertyList = this.state.propertyList;
    }
    return (
      <React.Fragment>
        <HeaderContainer
          propertyFilter={this.state.propertyFilter}
          changeFilter={this.changeFilter}
        />
        <PropertyListContainer propertyList={filteredPropertyList} />
      </React.Fragment>
    );
  }

  render(): JSX.Element {
    let content = null;
    if (this.state.propertyStatus === 'loading') {
      content = this.renderLoader();
    } else if (this.state.propertyStatus === 'error') {
      content = this.renderErrorMsg();
    } else {
      content = this.renderMainContent();
    }
    return <div className={styles.propertyPage}>{content}</div>;
  }
}

export default PropertyPage;
