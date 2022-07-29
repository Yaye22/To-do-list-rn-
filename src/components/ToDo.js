import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const ToDo = ({ item, remove,select }) => {
  return (
    <TouchableOpacity onPress={()=>select(item)} style={styles.content}>
      <View style={[styles.radio]}>
        <View
          style={{
            flex: 1,
            margin: 1,
            backgroundColor: item.isSelected ? "tomato" : "#FFF",
          }}
        />
      </View>
      <Text style={styles.desc}>{item.text}</Text>
      <TouchableOpacity style={{ flex: 1 }} onPress={() => remove(item)}>
        <AntDesign name="delete" size={20} color="black" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default ToDo;

const styles = StyleSheet.create({
  content: {
    marginVertical: 8,
    backgroundColor: "#FFF",
    alignItems: "center",
    minHeight: 60,
    elevation: 5,
    borderRadius: 8,
    flexDirection: "row",
    padding: 8,
  },
  desc: {
    flex: 10,
    fontSize: 16,
  },
  radio: {
    borderWidth: 1.5,
    borderColor: "gray",
    width: 15,
    height: 15,
    borderRadius: 15,
    marginRight: 8,
  },
});
