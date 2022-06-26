import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";

const SigninScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign In</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
      />
      <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
        <Text style={styles.link}>Sign Up instead.</Text>
      </TouchableOpacity>
    </View>
  );
};

SigninScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    margin: 15,
    flex: 1,
    justifyContent: "center",
    marginBottom: 70,
  },
  link: {
    color: "#5ea303",
    marginTop: 30,
    fontSize: 20,
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
  },
  input: {
    height: 50,
    borderWidth: 1,
    padding: 10,
    marginBottom: 15,
    fontSize: 20,
  },
  text: {
    fontSize: 30,
    marginBottom: 15,
  },
});

export default SigninScreen;
