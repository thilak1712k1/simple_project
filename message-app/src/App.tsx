import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Signin from './screens/auth/Sign_In';
import Signup from './screens/auth/Sign_up';
import ForgotPassword from './screens/auth/forgot_password';
import Dashbord from './screens/home/Dashbord';
import { AuthProvider } from './context/AuthContext';
import {routepath} from './routhpath';



function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
          <Routes>
              <Route path={routepath.auth.login} element={<Signin/>}></Route>
              <Route path={routepath.auth.forgotpassword} element={<ForgotPassword/>}></Route>
              <Route path={routepath.auth.register} element={<Signup/>}></Route>
              <Route path={routepath.dashboard} element={<Dashbord/>}></Route>
          </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
