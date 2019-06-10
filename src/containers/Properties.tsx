import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { StoreStateI, PropertyI } from '../types';
import PropertyList from '../components/properties/PropertyList';

interface Props {
  propertyList: PropertyI[];
}

function mapStateToProps(state: StoreStateI): Props {
  return {
    propertyList: state.propertyList
  };
}

// function mapDispatchToProps(dispatch: Dispatch<actions.PropertyActions>) {
//   return {
//     fetchPropertiesStart: () => dispatch(actions.fetchPropertiesStart()),
//     fetchPropertiesDone: () => dispatch(actions.fetchPropertiesDone()),
//     fetchPropertiesError: () => dispatch(actions.fetchPropertiesError()),
//   }
// }

export default connect(
  mapStateToProps,
  null
)(PropertyList);
