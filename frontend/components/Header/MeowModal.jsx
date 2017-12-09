import React from 'react';

class MeowModal extends React.Component {

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div>
        Meow
      </div>
    );
  }
}

export default MeowModal;
