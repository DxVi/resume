import React, { useEffect } from 'react';
import $ from "jquery";
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./Header";
import About from "./About";
import Builds from "./Builds";
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';



function App() {
  const [{resumeData}, dispatch] = useStateValue();

  useEffect(() => {
    $.ajax({
      url: "/resumeData.json",
      dataType: "json",
      cache: false,
      success: (data) => {
        dispatch({ 
          type: actionTypes.SET_RESUMEDATA,
          resumeData: data
      })
      }
      // .bind(this),
      // error: function (xhr, status, err) {
      //   console.log(err);
      //   alert(err);
      // },
    });
  }, [dispatch])

  return (
    <div className="app">
      {
        resumeData ? 
        (
          <Router>
            <Header data={resumeData.main} />

            <Switch>
                <Route path ="/builds">
                  <Builds />
                </Route>
                <Route path="/">
                  <About data={resumeData.main}/>
                </Route>

            </Switch>

            {/* Home   */}

            {/* About/Contact */}

            {/* Resume */}

            {/* Builds🏗  */}
          </Router>
        )
        :(
          <>
          </>
        )
      }
      
    </div>
  );
}

export default App;
