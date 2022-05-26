import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GameDetails from "./components/GameDetails";
import Home from "./components/Home";
import Header from "./components/Header";
import Signup from "./components/Signin";
import PageNotFound from "./components/PageNotFound";
import "./main.css";
import ErroBoundary from "./components/ErroBoundary";

class App extends React.Component {
  render() {
    return (
      <div>
        <ErroBoundary>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/">
                <Route index element={<Home />} />
                <Route path="details/:name" element={<GameDetails />} />
              </Route>
              {/* <Route path="/filtering" >
                        <Route index element={<Filter data={this.state.data}/>} />
                    <Route path="details/:name" element={<GameDetails />} />
                    </Route> */}
              <Route path="/signup" element={<Signup />} />
              <Route path="/*" element={<PageNotFound />} />
            </Routes>
          </BrowserRouter>
        </ErroBoundary>
      </div>
    );
  }
}

export default App;
