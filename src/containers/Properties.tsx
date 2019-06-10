import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { StoreStateI } from '../types';
import PropertyList from '../components/properties/PropertyList';

function mapStateToProps(state: StoreStateI) {
  return {
    propertyList: state.propertyList,
  };
}

function mapDispatchToProps(dispatch: Dispatch<actions.PropertyActions>) {
  return {
    fetchPropertiesStart: () => dispatch(actions.fetchPropertiesStart()),
    fetchPropertiesDone: () => dispatch(actions.fetchPropertiesDone()),
    fetchPropertiesError: () => dispatch(actions.fetchPropertiesError()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PropertyList);
