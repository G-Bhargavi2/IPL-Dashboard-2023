import {BrowserRouter , Route , Routes} from 'react-router-dom'
import React from 'react';

import Home from './components/Home/Home';
import TeamMatches from './components/TeamMatches/TeamMatches';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path = "/" element = {<Home />} />
          <Route path = "team-matches/:latest_match_id" element= {<TeamMatches />} />
          <Route path = "*"  element = {<NotFound />} />
        </Routes>
    
      </BrowserRouter>
  );
}

export default App;
