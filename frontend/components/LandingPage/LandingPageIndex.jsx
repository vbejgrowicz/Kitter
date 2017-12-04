import React from 'react';
import '../../../assets/stylesheets/LandingPage.scss';

class LandingPage extends React.Component {

  render() {
    return (
      <div>
      <div className="header">
        <div>
          <span className="brand-icon">
            CAT LOGO
          </span>
          <span>
            <button className="btn">Sign up</button>
            <button className="btn">Log in</button>
          </span>
        </div>

        <div className="page-title">What's happening?</div>
      </div>
      <div className="content">
        <div className="title"></div>

      </div>
      <div className="bottom-data">
        <div>2017 Kitter</div>
      </div>
      </div>
    );
  }
}

export default LandingPage;
