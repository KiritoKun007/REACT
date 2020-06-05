import React, { Component } from "react";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";

import "./Blog.css";
import Posts from "./Posts/Posts";
// import NewPost from "./NewPost/NewPost";
import asyncComponent from "../../hoc/asyncComponent";

const AsyncNewPosts = asyncComponent(() => {
    return import("./NewPost/NewPost")
})

class Blog extends Component {

    state={
        auth: true
    }

  render() {
    return (
      <div>
        <header className="Header">
          <nav>
            <ul>
              <NavLink to="/posts" exact activeClassName="my-active" activeStyle={{
                backgroundColor: '#ddd',
                borderColor: 'black',
                cursor: 'pointer',
                fontWeight: 'bold',
              }} >
                <li>Posts</li>
              </NavLink>
              <NavLink to={{
                  pathname: "/new-post",
                  //hash: '#submit',
                  //search: '?quick-submit=true'
              }}>
                <li>New Post</li>
              </NavLink>
            </ul>
          </nav>
        </header>
        {/* <Posts /> */}
        {/* <Route path="/" exact render={() => <h1>Hello</h1>} />
        <Route path="/" render={() => <h1>Hello2</h1>} /> */}
        <Switch>
            { this.state.auth ? <Route path="/new-post" component={AsyncNewPosts} /> : null }
            <Route path="/posts" component={Posts} />
            {/* <Route render={() => <h1>Not Found!!</h1>} /> */}
            <Redirect from="/" to="/posts" />
            {/* <Route path="/" component={Posts} /> */}
        </Switch>
      </div>
    );
  }
}

export default Blog;
