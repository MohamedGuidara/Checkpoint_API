
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNav from './Components/AppNav';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
   
import UserList from './Components/UserList';
import Profile from './Components/Profile';
function App() {    
  return (
    <div className="App">
      <BrowserRouter>
      <AppNav/>  
      <Switch>
        <Route exact path='/' component={UserList}/> 
        <Route path='/profile/:userID' component={Profile}/>
        
      </Switch>
      </BrowserRouter>
    </div>
  );
}    

export default App;
