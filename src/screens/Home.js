import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import formatDate from "../helpers/formatDate";

import { AntDesign } from "@expo/vector-icons";
import ToDo from "../components/ToDo";

const Home = () => {
  const [task, setTask] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addTodo = () => {
    const Task = {};
    Task.id = todoList.length + 1;
    Task.text = task;
    Task.isSelected = false;
    setTodoList([...todoList, Task]);
    setTask("");
  };

  const selectTask = (task) => {
    for (const key in todoList) {
      if (Object.hasOwnProperty.call(todoList, key)) {
        const element = todoList[key];
        element.isSelected = false;
      }
    }
    const taskIndex = todoList.findIndex((item) => item.id === task.id);
    if (todoList[taskIndex].isSelected === true) {
      todoList[taskIndex].isSelected = false;
    } else todoList[taskIndex].isSelected = true;
    setTodoList([...todoList]);
  };

  const removeTodo = (task) => {
    const newList = todoList.filter((item) => item.id != task.id);
    setTodoList(newList);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>To-Do.</Text>
        <Text style={{ fontSize: 16, fontWeight: "500" }}>
          {formatDate(new Date())}
        </Text>
      </View>
      <FlatList
        contentContainerStyle={{ padding: 15 }}
        data={todoList}
        renderItem={({ item }) => (
          <ToDo remove={removeTodo} select={selectTask} item={item} />
        )}
        keyExtractor={(item, index) => index}
      />
      <View style={styles.footer}>
        <TextInput
          style={styles.inputText}
          value={task}
          placeholder="Add a Task ..."
          onChangeText={setTask}
        />
        <TouchableOpacity disabled={!task} onPress={addTodo} style={styles.add}>
          <AntDesign name="plus" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#023047",
  },
  header: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    elevation: 5,
    height: 80,
    width: "100%",
    justifyContent: "space-between",
    backgroundColor: "#ffb703",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "700",
  },
  footer: {
    position: "absolute",
    justifyContent: "space-between",
    flexDirection: "row",
    bottom: 10,
    left: 0,
    right: 0,
    width: "100%",
    height: 90,
    paddingHorizontal: 10,
  },
  inputText: {
    width: "80%",
    height: 45,
    color: "black",
    borderRadius: 10,
    elevation: 5,
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "lightgray",
    fontSize: 16,
    padding: 10,
  },
  add: {
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: "#FFF",
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});
