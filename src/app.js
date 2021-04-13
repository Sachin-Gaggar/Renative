import React from "react";
import { View } from "react-native";
import { Api } from "renative";
import Home from "./component/Home";

const App = () => (
  <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
    <Home />
  </View>
);

export default App;
