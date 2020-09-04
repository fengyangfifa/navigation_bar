import { connect } from "react-redux";

import Footer from "../components/Footer";
import { setFilter } from "../actions";
import { getFilter } from '../selectors'

const mapStateToProps = (state) => {
  return {
    filter: getFilter(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFilter: (filter) => dispatch(setFilter(filter)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
