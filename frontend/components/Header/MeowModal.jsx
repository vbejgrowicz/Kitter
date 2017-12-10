import React from 'react';
import '../../../assets/stylesheets/NavBar/MeowModal.scss';


class MeowModal extends React.Component {

  render() {
    return (
      <div id="meow-modal" onClick={this.props.onClose}>
        <div id="modal" onClick={this.props.ignoreClose}>
          Meow
        </div>
      </div>
    );
  }
}

export default MeowModal;
