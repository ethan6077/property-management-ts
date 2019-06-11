import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { StoreStateI, PropertyI } from '../types';
import PropertyPage from '../components/PropertyPage';

interface StateProps {
  propertyFilter: string;
  propertyList: PropertyI[];
  propertyListStatus: string;
}

function mapStateToProps(state: StoreStateI): StateProps {
  return {
    propertyFilter: state.propertyFilter,
    propertyList: state.propertyList,
    propertyListStatus: state.propertyListStatus
  };
}

interface DispatchProps {
  fetchPropertiesStart: () => void;
  fetchPropertiesDone: () => void;
  fetchPropertiesError: () => void;
}

function mapDispatchToProps(
  dispatch: Dispatch<actions.PropertyActions>
): DispatchProps {
  return {
    fetchPropertiesStart: () => dispatch(actions.fetchPropertiesStart()),
    fetchPropertiesDone: () => dispatch(actions.fetchPropertiesDone()),
    fetchPropertiesError: () => dispatch(actions.fetchPropertiesError())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PropertyPage);
