
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import About from './pages/About/About';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import Home from './pages/Home/Home/Home';
import BikeDetails from './pages/Login/BikeDetails/BikeDetails';
import ContractUs from './pages/Login/ContractUs/ContractUs';
import Login from './pages/Login/Login/Login';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import Register from './pages/Login/Register/Register';
import ThankYou from './pages/Login/ThankYou/ThankYou';
import NotFound from './pages/NotFound/NotFound';
import OurTeam from './pages/OurTeam/OurTeam/OurTeam';
import Services from './pages/Services/Services';


function App() {
  return (
    <div className="App" style={{ letterSpacing: ".005em" }}>

      <AuthProvider>
        <BrowserRouter>


          <Switch>

            <Route exact path='/'>
              <Home></Home>

            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/about'>
              <About></About>

            </Route>
            <Route path='/services'>
              <Services></Services>
            </Route>
            <Route path='/ourteam'>
              <OurTeam></OurTeam>
            </Route>
            <PrivateRoute path='/dashboard'>
              <Dashboard></Dashboard>
            </PrivateRoute>


            <PrivateRoute path='/bike/:id'>
              <BikeDetails></BikeDetails>
            </PrivateRoute>

            <PrivateRoute path='/contractus'>
              <ContractUs></ContractUs>
            </PrivateRoute>



            <PrivateRoute path='/thankyou'>
              <ThankYou></ThankYou>
            </PrivateRoute>

            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>




            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>

        </BrowserRouter>

      </AuthProvider>
    </div>
  );
}

export default App;
