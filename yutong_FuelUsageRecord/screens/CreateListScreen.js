import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useSelector, useDispatch } from "react-redux";
import { addConsumption } from "../store/feul-action";

const CreateList = ({ navigation }) => {
  const dispatch = useDispatch();
  const fuelStore = useSelector((state) => state.fuel.consumptionList);
  const [fuelType, setFuelType] = useState();
  const [enteredLitres, setLitres] = useState();

  const fuelTypeInputHandler = (fuelType) => {
    setFuelType(fuelType);
  };

  const litreInputHander = (enteredLitres) => {
    setLitres(enteredLitres);
  };

  const createFuelHandle = () => {
    const selectedTypeItem = fuelStore.find(
      (item) => item.fuelType === fuelType
    );
    const newConsumption = {
      id: new Date().toISOString(),
      ...selectedTypeItem,
      quantity: enteredLitres,
      useAmount: selectedTypeItem.price * +enteredLitres
    };

    dispatch(addConsumption(newConsumption));
    setFuelType("");
    setLitres("");

    Alert.alert(
      "Fuel Usage Created",
      "You have successfully create the fuel usage",
      [
        {
          text: "OK",
          onPress: () => navigation.navigate("FuelList"),
        },
      ]
    );
  };
  return (
    <View>
      <View style={styles.container}>
        <Picker
          selectedValue={fuelType}
          style={styles.picker}
          onValueChange={fuelTypeInputHandler}
          value={fuelType}
        >
          <Picker.Item color="grey" label="Feul Type" value="" />
          <Picker.Item label="Petrol" value="Petrol" />
          <Picker.Item label="Diesel" value="Diesel" />
          <Picker.Item label="Battery Charge" value="BatteryCharge" />
        </Picker>
      </View>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={litreInputHander}
          value={enteredLitres}
          placeholder="Enter liters/ charge unit here"
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={createFuelHandle} style={styles.button}>
          <Text style={styles.buttonText}>Create</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    marginLeft: "20%",
    marginTop: 60,
  },
  button: {
    backgroundColor: "#0782F9",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  picker: {
    alignItems: "center",
  },
  container: {
    width: "70%",
    borderWidth: 1,
    borderColor: "black",
    padding: 8,
    margin: "15%",
  },
  input: {
    width: "70%",
    borderWidth: 1,
    borderColor: "black",
    padding: 20,
    marginLeft: "15%",
  },
});
export default CreateList;
