import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";

export default function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesion</Text>
      <TextInput style={styles.input} placeholder="Usuario" />
      <TextInput style={styles.input} placeholder="Contraseña" />
      <View>
        <TouchableOpacity style={styles.btnIngresar}>
          <Text style={styles.textIngresar}>Ingresar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnBorrar}>
          <Text style={styles.textIngresar}>Borrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#f1f1f1",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    width: "80%",
    padding: 10,
    marginVertical: 15,
    borderRadius: 20,
  },
  btnIngresar: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: "rgb(24, 27, 233)",
    width: "35%",
    alignItems: "center",
  },
  textIngresar: {
    color: "white",
    fontSize: 18,
  },
  btnBorrar: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: "rgb(233, 24, 24)",
    width: "35%",
    alignItems: "center",
  },
});
