import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "./components/header/Header";

import { pageStyles, outletStyles } from "./styles/appStyles";

function App() {
  return (
    // <div style={pageStyles}>
    //   <ScrollRestoration />
    //   <Header />
    //   <div style={outletStyles}>
    //     <Outlet />
    //   </div>
    // </div>
    <div>
      <h1>App Page</h1>
    </div>
  );
}

export default App;
