import React from "react";
import { HashRouter,Routes,Route } from "react-router-dom";
import Candi from "./candidate";
import End from "./person";


function App(){
  return(

    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Candi/>}/>
        <Route exact path="/person" element={<End/>}/>

      </Routes>
    </HashRouter>
  )


}
export default App;