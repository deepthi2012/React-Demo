import React, { Component } from "react";
import { Map } from "react-leaflet";
import "leaflet/dist/leaflet.css";

class App extends Component {
  render() {
    return (
      <div>
        <h3 style={{ textAlign: "center" }}>Most Populous Cities in Asia</h3>
        <Map style={{ height: "480px", width: "100%" }} zoom={1}></Map>
      </div>
    );
  }
}

export default App;
