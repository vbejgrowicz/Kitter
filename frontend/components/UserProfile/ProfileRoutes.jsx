import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProfileFeed from './ProfileFeed';

function ProfileRoutes() {
  return (
    <Switch>
      <Route
        exact
        path="/:username"
        render={() => (
          <ProfileFeed category="posts" />
        )}
      />
      <Route
        exact
        path="/:username/following"
        render={() => (
          <ProfileFeed category="following" />
        )}
      />
      <Route
        exact
        path="/:username/followers"
        render={() => (
          <ProfileFeed category="followers" />
        )}
      />
    </Switch>
  );
}

export default ProfileRoutes;
