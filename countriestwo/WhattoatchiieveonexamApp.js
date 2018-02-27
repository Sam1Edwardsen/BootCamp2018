import React, { Component } from 'react';
import './ui-toolkit/css/nm-cx/main.css';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'


const RegionTab = (props) => {
  return (

    <Route exact={props.exact} path={props.to} children={({ match }) => {
      return (
        <li className={`tab-title ${match ? 'active' : ''}`} >
          <Link to={props.to}>{props.tabName}</Link>
        </li>
      )
    }
    } />
  )
}

const BlocView = (props) => {
  return (
    <div>
      <div class="columns small-3 padding-top-medium leftNav">
        <ul class="tabs vertical">
          <RegionTab exact={true} to={"/"} tabName="Home" />
          <RegionTab exact={true} to={"/tracking/countries"} tabName="Tracking" />
          <RegionTab exact={true} to={"/eu"} tabName="EU" />
          <RegionTab exact={true} to={"/efta"} tabName="EFTA" />
          <RegionTab exact={true} to={"/caricom"} tabName="CARICOM" />
          <RegionTab exact={true} to={"/pa"} tabName="PA" />
          <RegionTab exact={true} to={"/au"} tabName="AU" />
          <RegionTab exact={true} to={"/usan"} tabName="USAN" />
          <RegionTab exact={true} to={"/eeu"} tabName="EEU" />
          <RegionTab exact={true} to={"/al"} tabName="AL" />
          <RegionTab exact={true} to={"/asean"} tabName="ASEAN" />
          <RegionTab exact={true} to={"/cais"} tabName="CAIS" />
          <RegionTab exact={true} to={"/cefta"} tabName="CEFTA" />
          <RegionTab exact={true} to={"/nafta"} tabName="NAFTA" />
          <RegionTab exact={true} to={"/saarc"} tabName="SAARC" />
        </ul>
      </div>
      <div class="columns small-9 padding-top-medium rightHome">
        <h1>{props.match.params.bloc}</h1>
      </div>
    </div>
  )
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: [],
      trackedCountries: [],
      selectedCountry: undefined,
      selectedBloc: undefined,
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" render={()=> <BlocView />} />
            <Route exact path="/:bloc" render={({match})=> <BlocView match={match} />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
