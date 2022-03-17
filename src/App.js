import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from "react";
import { Provider } from 'react-redux'
import store from "./ReduxStore/index";
import HomePage from './components/Pages/HomePage';
import SecuredHomePage from "./components/Pages/SecuredHomePage";
import SignIn from "./components/Pages/SignIn";
import { LeftPanel } from "./components";
import './App.scss'

function App() {
  return (
    <BrowserRouter>
        <Provider store={store}>
          <div className="App">
            <div>
                  <Routes>
                    <Route index element={<HomePage />} />
                    <Route path="sign-in" element={<SignIn />} />
                    <Route path="secured-homepage" element={<SecuredHomePage />} />
                    <Route path="leftPanel" element={<LeftPanel />} />
                    <Route path="/explore">Explore</Route>
                    <Route path="/notifications">Notifications</Route>
                    <Route path="/messages">Messages</Route>
                    <Route path="/bookmarks">Bookmarks</Route>
                    <Route path="/lists">Lists</Route>
                    <Route path="/profile">Profile</Route>
                  </Routes> 
            </div> 
          </div>
      </Provider>
    </BrowserRouter> 
  );
}

export default App;
