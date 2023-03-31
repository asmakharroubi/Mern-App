

// import Home from './Components/Home';
// import Booking from './Components/Booking';
import Layout from './Components/Layout/Layout';
//  import PersonnalizedTrip from './Components/PersonnalizedTrip';
// import User from './Components/User';
// import { Switch } from "react-router-dom";

// import { BrowserRouter as Router,  Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      {/* <User /> */}
      {/* <Booking /> */}
      {/* <PersonnalizedTrip/> */}
      {/* <Home/>
      <Switch>
  <Route exact path="/" component={Booking} />
</Switch>
       */}
      {/* <Router>
        {/* <Switch>
          <Route exact path="/"> */}
            {/* your home page component */}
          {/* </Route>
          <Route path="/Booking">
            <Booking />
          </Route>
        </Switch>
      </Router> */} 
      <Layout/>
    </div>
  );
}

export default App;
