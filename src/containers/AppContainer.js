import App from './../components/App';
import { connect } from 'react-redux';

const mapStateToProps = store => {
  return {
    emptyState: store.AppReducer.emptyState,
  };
};
const mapDispatchToProps = () => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
