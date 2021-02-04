import React, {useEffect, useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Forside from "./Components/Forside";

import * as contentful from "contentful"
import About from "./Components/About";



const client = contentful.createClient({
  space: "pns8ulj2szxl",
  accessToken: "5BvDZhevRlzOu0IaVxGJ7-gQGg8USReCQ6rtSuQrHJQ"
})
 
function App() {

  const [data, setData] = useState();

  useEffect(() => {
    client.getEntry("1OwgjpJAkAtJ4s9BwqGgsi")
    .then((data) => {
      console.log(data);
      setData(data)
    })
    .catch(console.error)


    
  }, [])


  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/">Forside</Link>
          <Link to="/about">About</Link>
        </nav>

        <Switch>
          <Route exact path="/">
            {data ? <Forside data={data} /> : <p>Fejl ved hentning af data</p>}
          </Route>
          <Route path="/Underside">
            <h1>underside</h1>
          </Route>
          <Route>
            <About></About>

           
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
 
export default App;