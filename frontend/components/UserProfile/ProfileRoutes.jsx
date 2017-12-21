import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProfileFeed from './ProfileFeed';

function ProfileRoutes() {
  return (
    <Switch>
      <Route exact path="/:username" component={ProfileFeed} />
      <Route exact path="/:username/following" component={null} />
      <Route exact path="/:username/followers" component={null} />
    </Switch>
  );
}

export default ProfileRoutes;
