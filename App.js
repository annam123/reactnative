import React from "react";
import { View, StyleSheet } from "react-native";
import RegistrationForm from "./components/RegistrationForm";
import LoginForm from "./components/LoginForm";

const App = () => {
  return (
    <View style={styles.container}>
      <RegistrationForm />
      <LoginForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
