import React, { Component } from 'react';
import './App.css';
import './ui-toolkit/css/nm-cx/main.css'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import axios from 'axios'

const TopHeadlines = (props) => {
  return (
    <div>
      <div><h1>Top Headlines</h1></div>
      <div>
        <div class="card" style={{ width: '700px', display: 'inline-block', float: 'center' }}>
          <img src="someimage" style={{ float: 'left', display: 'inline-block' }} />
          <div style={{ display: 'inline-block' }}>
            <div>Title</div>
            <div>Author</div>
            <p>Sum limpsum textum</p>
          </div>
        </div>
      </div>
    </div>
  )
}
const TechnologySources = (props) => {
  return (
    <div>
      <h1>Select Your Sources!</h1>
      <div>
        <input id="busibtn" name="business" type="radio" value="business" />
        <label for="busibtn">Business</label>
        <input id="techbtn" name="business" type="radio" value="technology" />
        <label for="techbtn">Technology</label>
        <input id="scibtn" name="business" type="radio" value="business" />
        <label for="scibtn">Science</label>
      </div>
      <h1>Technology Sources</h1>
      <div>
        <div class="card" style={{ width: '700px', display: 'inline-block', float: 'center' }}>
          <img src="someimage" style={{ float: 'left', display: 'inline-block' }} />
          <div style={{ display: 'inline-block' }}>
            <div>Title</div>
            <div>Author</div>
            <p>Sum limpsum textum</p>
          </div>
        </div>
      </div>
    </div>
  )
}
const PersonalFeed = (props) => {
  return (
    <div>
      <h1>Personal Feed</h1>
      <div>
        <div class="card" style={{ width: '700px', display: 'inline-block', float: 'center' }}>
          <img src="someimage" style={{ float: 'left', display: 'inline-block' }} />
          <div style={{ display: 'inline-block' }}>
            <div>Title</div>
            <div>Author</div>
            <p>Sum limpsum textum</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const NavView = (props) => {
  return (
    <div>
      <ul class="tabs padding-left-medium padding-top-small topNav">
        <li class="tab-title active"><button>Home</button></li>
        <li class="tab-title"><button>Customize</button></li>
        <li class="tab-title"><button>Personal Feeds</button></li>
      </ul>
      <div class="row padding-horiz-medium">
        <div class="columns small-9 padding-vert-medium">
        </div>
      </div>
    </div>
  )
}


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      articles: [],
      subscription: [],
      category: [],
    }
    this.setNewsArticles = this.setNewsArticles.bind(this)
    this.changeNewsArticles = this.changeNewsArticles.bind(this)
  }

  setNewsArticles(articleName) {
    const promise = axios.get('http://newsapi.org/v2/top-headlines?country=us&apiKey=2971bde953c94814a04a94af0480faf2');
  }

  changeNewsArticles(article) {
    this.setState({ selectedArticle: article })
  }


  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <div class="card padding-none">
              <h1 class="padding-bottom-medium siteTitle">News Me!</h1>
              <NavView />
              <Route exact path="/" component={TopHeadlines} />
              <Route path="/categories" component={TechnologySources} />
              <Route path="/feed" component={PersonalFeed} />
            </div>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
