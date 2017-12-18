import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { clearError } from '../../actions/AuthActions';

class ErrorMessage extends React.Component {
  componentDidMount() {
    const errorPage = this.props.AuthReducer.error.page;
    const currentPage = this.context.router.history.location.pathname;
    if (errorPage) {
      if (currentPage !== errorPage) {
        this.props.updateError();
      }
    }
  }

  render() {
    const currentPage = this.context.router.history.location.pathname;
    const { page, message } = this.props.AuthReducer.error;

    return (
      <div className="message-space">
        {currentPage === page ? <div className="message">{message}</div> : null}
      </div>
    );
  }
}

ErrorMessage.contextTypes = {
  router: PropTypes.object.isRequired,
};

ErrorMessage.propTypes = {
  updateError: PropTypes.func.isRequired,
  AuthReducer: PropTypes.object.isRequired,
};

function mapStateToProps({ AuthReducer }) {
  return { AuthReducer };
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateError: () => {
      dispatch(clearError());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ErrorMessage);
