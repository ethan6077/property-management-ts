import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { StoreStateI, PropertyFilterT } from '../types';
import PropertyStatusSelect from '../components/header/PropertyStatusSelect';

interface StateProps {
  propertyFilter: PropertyFilterT;
}

function mapStateToProps(state: StoreStateI): StateProps {
  return {
    propertyFilter: state.propertyFilter
  };
}

interface DispatchProps {
  changePropertyFilter: (filter: PropertyFilterT) => any;
}

function mapDispatchToProps(dispatch: Dispatch): DispatchProps {
  return {
    changePropertyFilter: (filter: PropertyFilterT) =>
      dispatch(actions.changePropertyFilter(filter))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PropertyStatusSelect);
