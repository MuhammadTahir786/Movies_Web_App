import React from "react";
import Navigation from "./routes";
import { Provider } from "react-redux";
import { store } from "./store";

const App = () => {
  return (
    // provider is used to setup a redux store that contain whole application data
    <Provider store={store}>
      {/* Navigation component containing routes to navigate between pages */}
      <Navigation />
    </Provider>
  )
}
export default App