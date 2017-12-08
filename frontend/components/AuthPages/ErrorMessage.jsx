import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../../../assets/stylesheets/AuthPages/AuthPages.scss';
import { clearError } from '../../actions/AuthActions';

class ErrorMessage extends React.Component {

  render() {
    const currentPage = this.context.router.history.location.pathname;
    const { page, message } = this.props.AuthReducer.error

    return currentPage === page ? (
      <div className="error-message">
        {message}
      </div>
    ) : (
      null
    );
  }
}

ErrorMessage.contextTypes = {
  router: PropTypes.object.isRequired
}

function mapStateToProps({ AuthReducer }) {
  return { AuthReducer };
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateError: () => {
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ErrorMessage);
