import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import Home from '../Component/Home';
import Topics from '../Component/Topics';
import Topic from '../Component/Topic';
import Jobs from '../Component/Jobs';
import Remote from '../Component/Remote';
import Programmer from '../Component/Programmer';
import NewTopic from '../Component/NewTopic';
import App from '../App';
import Posts from '../Component/Posts';
import Login from '../Component/Login'; 
import Adduser from "../Component/adduser";


const RouteConfig = (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="topics" component={Topics}/>
      <Route path="adduser" component={Adduser}/>
      <Route path="topics?type=:name" component={Topics}/>
      <Route path="topics/new" component={NewTopic}/>
      <Route path="topics/:id" component={Topic}/>
      <Route path="remote" component={Remote}/>
      <Route path="programmer" component={Programmer}/>
      <Route path="jobs" component={Jobs}/>
      <Route path="sites" component={Jobs}/>
      <Route path="posts" component={Posts}/>
      <Route path="login" component={Login}/>
    </Route>
  </Router>
);
 
export default RouteConfig;
