import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
//BrowserRouter interacts with the history library and decides what to do based on the change in the URL,
//BrowserRouter tells react-router to look at the entire URL when deciding what dif components to show on the screen
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//Route is the main component of all React router. It's a React component that can be rendered inside of any other React component
//it provides the configuration that decides what components to show based on the URL
import promise from 'redux-promise';



//app is no longer used with react router because we have less of a centeral component 
//we're now using several components based on route
// import App from './components/app';


import reducers from './reducers';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new'
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


// <Route /> requires two properties, path and component. Path is almost always a string, component.
//Basically show or hide a component based on the route
//Browser router can only have one child element, so we wrap <Routes> in a <div>
//Other components can be mixed in under BrowserRouter, for example, if we wanted to show a header on every 'page' we just insert a seperate <Header /> component free from Routes
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/posts/new" component={PostsNew} />
          <Route path="/" component={PostsIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));

  //*************************
  // Router doesnt some unexpeced weird stuff with path.. it doesnt exactly match the path, instead it kinda run a
  // doesContain sort of deal, so we use the <Switch /> component. Nest routes inside of switch, Switch will only render the first route that exactly
  // matches the current URL. So we put our most specific routes at the top of the list ********
  