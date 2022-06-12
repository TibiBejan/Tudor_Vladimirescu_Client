import React, { useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import axios from 'axios';
// Components
import ScrollToTop from './utils/ScrollToTop';
// Pages
import Index from './pages/Index';
import About from './pages/About';
import Cafetaria from './pages/Cafetaria';
import Contact from './pages/Contact';
import Hall from './pages/Hall';
import Halls from './pages/Halls';
import Sportbase from './pages/Sportbase';
import Accommodation from './pages/Accommodation';
import News from './pages/News';
import StudentServices from './pages/StudentServices';

import PrivateRoutes from './utils/PrivateRoutes';
import StudentDashboard from './pages/StudentDashboard';
import AdminDashboard from './pages/AdminDashboard';

import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';

import Unauthorized from './pages/Unauthorized';
import Page404 from './pages/404';
// Redux
import { useDispatch } from 'react-redux';
import { requestCheckLogin, receiveCheckLogin, receiveCheckLoginError } from './features/user/userSlice';

function App() {
  // Redux
  const dispatch = useDispatch();

  // Effect
  useEffect(() => {
    (async () => {
      try {
        // INIT REQ
        dispatch(requestCheckLogin);

        const response = await axios.request({method: 'GET', url: `${process.env.REACT_APP_API_URL}/auth/login`});
        if(response.status === 200 || response.status === 201) {
          dispatch(receiveCheckLogin(response.data.data));
        } else {
          dispatch(receiveCheckLoginError('There is an error with current session, please try to login again'));
        }
      } catch (error) {
        dispatch(receiveCheckLoginError(error.message));
      }
    })();
  }, [dispatch]);
    
  return (
    <div className="App">
      <Router>
          <ScrollToTop>
            <Routes>
              {/* <Route element={<PrivateRoutes auth={authSession} allowedRoles={['admin']} />}>
                <Route path="admin" element={<AdminDashboard />} />
              </Route>

              <Route element={<PrivateRoutes auth={authSession} allowedRoles={['student']} />}>
                <Route path="student" element={<StudentDashboard />} />
              </Route> */}

              <Route index path="/" element={<Index />} />
              <Route path="about-us" element={<About />} />
              <Route path="canteen" element={<Cafetaria />} />
              <Route path="contact-us" element={<Contact />} />
              <Route path="halls" element={<Halls />}/>
              <Route path="halls/:hallId" element={<Hall />} />
              <Route path="sportbase" element={<Sportbase />} />
              <Route path="accommodation" element={<Accommodation />} />
              <Route path="news" element={<News />} />
              <Route path="dss" element={<StudentServices />} />

              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="forgot-password" element={<ForgotPassword />} />
              <Route path="reset-password/:token" element={<ResetPassword />} />

              <Route path="unauthorized" element={<Unauthorized />} />
              <Route path="*" element={<Page404 />} />
            </Routes>
          </ScrollToTop>
        </Router>
    </div>
  );
}

export default App;
