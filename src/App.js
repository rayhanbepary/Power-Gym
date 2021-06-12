import './App.css';
import { Switch, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Classes from './pages/Classes/Classes';
import Plans from './pages/Plans/Plans';
import SingleClass from './pages/ClassDetails/SingleClass';
import Membership from './pages/Membership/Membership';

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/classes" exact component={Classes}/>
      <Route path="/pricing" exact component={Plans}/>
      <Route path="/class/:slug" exact component={SingleClass}/>
      <Route path="/membership" exact component={Membership}/>
    </Switch>
  );
}

export default App;
