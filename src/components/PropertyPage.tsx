import React from 'react';
import HeaderContainer from './header/HeaderContainer';
import PropertyListContainer from './properties/PropertyListContainer';
import Loader from './common/Loader';
import Error from './common/Error';
import styles from './PropertyPage.module.css';

class PropertyPage extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      propertyFilter: 'default',
      propertyList: [],
      propertyStatus: 'initial', // initial, loading, done, error
    };
  }

  async componentDidMount() {
    try {
      this.setState({ propertyStatus: 'loading' });
      const response = await fetch('https://code-challenge.activepipe.com/challenge/properties');
      const dataInJson = await response.json();
      this.setState({ propertyStatus: 'done' });
      this.setState({ propertyList: dataInJson });
    } catch (e) {
      console.warn(e);
      this.setState({ propertyStatus: 'error' });
    }
  }

  changeFilter = (event) => {
    this.setState({
      propertyFilter: event.target.value,
    });
  }

  renderLoader() {
    return (
      <div className={styles.loaderContainer}>
        <Loader />
      </div>
    );
  }

  renderErrorMsg() {
    return (
      <div className={styles.msgContainer}>
        <Error />
      </div>
    );
  }

  renderMainContent() {
    let filteredPropertyList = [];
    if (this.state.propertyFilter !== 'default') {
      filteredPropertyList = this.state.propertyList.filter(p => p.status === this.state.propertyFilter);
    } else {
      filteredPropertyList = this.state.propertyList;
    }
    return (
      <React.Fragment>
        <HeaderContainer propertyFilter={this.state.propertyFilter} changeFilter={this.changeFilter} />
        <PropertyListContainer propertyList={filteredPropertyList} />
      </React.Fragment>
    )
  }

  render() {
    let content = null;
    if (this.state.propertyStatus === 'loading') {
      content = this.renderLoader();
    } else if (this.state.propertyStatus === 'error') {
      content = this.renderErrorMsg();
    } else {
      content = this.renderMainContent();
    }
    return (
      <div className={styles.propertyPage}>
        {content}
      </div>
    );
  }
}

export default PropertyPage;
