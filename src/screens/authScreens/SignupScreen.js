import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import CheckBox from "expo-checkbox";

const SignupScreen = ({ navigation }) => {
  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text h3 style={styles.text}>
        Sign Up here
      </Text>
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
      <View style={styles.flexRow}>
        <Text style={{ fontSize: 20 }}>I am a mentor: </Text>
        <CheckBox
          disabled={false}
          style={styles.checkBox}
          value={checked}
          onValueChange={(newValue) => setChecked(newValue)}
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
        <Text style={styles.link}>Sign In instead.</Text>
      </TouchableOpacity>
    </View>
  );
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
  checkBox: {
    height: 30,
    width: 30,
  },
});

export default SignupScreen;
