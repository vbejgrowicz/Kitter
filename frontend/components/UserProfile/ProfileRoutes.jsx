import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProfileFeed from './ProfileFeed';

function ProfileRoutes() {
  return (
    <Switch>
      <Route
        exact
        path="/:username/following"
        component={() => (
          <ProfileFeed category="following" />
        )}
      />
      <Route
        exact
        path="/:username/followers"
        component={() => (
          <ProfileFeed category="followers" />
        )}
      />
      <Route
        path="/:username"
        component={() => (
          <ProfileFeed category="posts" />
        )}
      />
    </Switch>
  );
}

export default ProfileRoutes;
