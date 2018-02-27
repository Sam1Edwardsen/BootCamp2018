import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './ui-toolkit/css/nm-cx/main.css';
import '/Users/edw8846/Documents/Bootcamp 2018/testheart/node_modules/pretty-checkbox/src/pretty-checkbox.scss'

class App extends Component {
  render() {
    return (
      <div className="App bgimage">
        {/* <div class="heart" ></div> */}
        {/* //has to have an onclick event to toggle css class="heart-blast" */}
       
        

<div class="pretty p-icon p-toggle p-plain">
        <input type="checkbox" />
        <div class="state p-off">
            <i class="icon fa fa-heart-o "></i>
            <label>fa-heart-o</label>
        </div>
        <div class="state p-on p-info-o">
            <i class="icon fa fa-heart"></i>
            <label>fa-heart</label>
        </div>
    </div>

          <button onClick={() => { alert('alert'); }}>alert</button>
          <div>
            <div className="card" style={{ width: '700px', display: 'inline-block', float: 'center' }}>
              <img src="https://vignette.wikia.nocookie.net/simpsons/images/0/05/Nick_Riviera.png/revision/latest?cb=20170903205918" style={{ float: 'left', display: 'inline-block', height: '135px', width: '100px' }} />
              <div style={{ display: 'inline-block' }}>
                <div>Dr. Nicholas Riviera</div>
                <div>Specialty: Physical Therapy</div>
                <div>123 Fake St.</div>
                <div>Springfield, IL 62704</div>
                <input style={{ float: 'right' }} className="star" type="checkbox" title="savedoc" />
              </div>
            </div>
          </div>

          <div className="card" style={{ width: '900px', display: 'inline-block', float: 'center' }}>
            <div>
              <div className="row">
                <div className="small-6 medium-6 large-6 xlarge-6 columns">
                  <img src="http://31.media.tumblr.com/tumblr_lxay62n5JH1qhc4v3o2_r2_250.jpg" />
                  <h2 style={{ topPadding: '20px' }}>Languages Spoken</h2>
                  <p>English</p>
                  <h2>Publications</h2>
                  <p className="docBio">Science Journal Weekly | Medical Roundup | DocAdvice 2017 | You Ate What? </p>
                  <h2>Insurance Compatibility</h2>
                  <p className="docBio">Humana | BlueCross BlueShield | OuchMyFoot | ThatsGoingToNeedASecondOpinion</p>
                  <h2>Find Me</h2>
                  <p className="docBio">Address: 3600 Broadway
          Oakland, CA 94611</p>
                  <p className="docBio">Phone: 510-752-5438</p>
                </div>
                <div className="small-6 medium-6 large-6 xlarge-6 columns">
                  <h1>Meet Doctor Gary</h1>
                  <h2>Biography</h2>
                  <p className="docBio scrollBox">Rodney Erickson is a content marketing professional at HubSpot, an inbound marketing and sales platform that helps companies attract visitors, convert leads, and close customers. Previously, Rodney worked as a marketing manager for a tech software startup. He graduated with honors from Columbia University with a dual degree in Business Administration and Creative Writing. Rodney Erickson is a content marketing professional at HubSpot, an inbound marketing and sales platform that helps companies attract visitors, convert leads, and close customers. Previously, Rodney worked as a marketing manager for a tech software startup. He graduated with honors from Columbia University with a dual degree in Business Administration and Creative Writing. Rodney Erickson is a content marketing professional at HubSpot, an inbound marketing and sales platform that helps companies attract visitors, convert leads, and close customers. Previously, Rodney worked as a marketing manager for a tech software startup. He graduated with honors from Columbia University with a dual degree in Business Administration and Creative Writing."</p>
                  <h2>Education</h2>
                  <p className="docBio">University of Cincinnati College of Medicine |
                  San Joaquin General Hospital |
                  Kaiser Permanente Medical Center Oakland CA |
                  San Joaquin General Hospital |
          Cleveland Clinic Foundation </p>
                  <h2>Specialties</h2>
                  <div className="docBio"></div>
                  <div className="scrollBox">Hips, Knees, Ankles, Hips, Knees, Ankles, Hips, Knees, Ankles, Hips, Knees, Ankles, Hips, Knees, Ankles, Hips, Knees, Ankles, Hips, Knees, Ankles, Hips, Knees, Ankles, Hips, Knees, Ankles, Hips, Knees, Ankles, Hips, Knees, Ankles, Hips, Knees, Ankles, Hips, Knees, Ankles, Hips, Knees, Ankles, Hips, Knees, Ankles, Hips, Knees, Ankles, Hips, Knees, Ankles, Hips, Knees, Ankles, Hips, Knees, Ankles, Hips, Knees, Ankles, Hips, Knees, Ankles, Ankles, Hips, Knees, Ankles, Hips, Knees, Ankles, Hips, Knees, Ankles, Hips, Knees, Ankles, Hips, Knees, Ankles, Hips, Knees, Ankles, Hips, Knees, Ankles, Hips, Knees, Ankles
                  Ankles, Hips, Knees, Ankles, Hips, Knees, Ankles, Hips, Knees, Ankles, Hips, Knees, Ankles, Hips, Knees, Ankles, Hips, Knees, Ankles, Hips, Knees, Ankles, Hips, Knees, AnklesAnkles, Hips, Knees, Ankles, Hips, Knees, Ankles, Hips, Knees, Ankles, Hips, Knees, Ankles, Hips, Knees, Ankles, Hips, Knees, Ankles, Hips, Knees, Ankles, Hips, Knees, Ankles
                </div>
                </div>
              </div>


              <button onClick={() => { alert('Profile not found. Please create a profile.'); }}>1</button>
              <button onClick={() => { alert('Profile created successfully.'); }}>2</button>
              <button onClick={() => { alert('Profile already exists.'); }}>3</button>
              <button onClick={() => { alert('Please enter in valid email address.'); }}>4</button>
              <button onClick={() => { alert('alert'); }}>5</button>
              <button onClick={() => { alert('alert'); }}>6</button>


            </div>
          </div>
        </div>
        );
      }
    }
    
    export default App;
