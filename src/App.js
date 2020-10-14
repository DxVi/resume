import React, { useEffect } from 'react';
import $ from "jquery";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
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
      <Header data={resumeData.main} />
      <Home data={resumeData.main}/>
      <About data={resumeData.main}/>
      <Resume data={resumeData.resume} />
      <Portfolio data={resumeData.portfolio} />
    </div>
  );
}

export default App;
