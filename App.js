import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { useState } from "react";

export default function App() {
  const [goal, setGoal] = useState("");
  const [goalsList, setgoalsList] = useState([])

  function addinputHandler(text) {
    setGoal(text);
  }

  function addgoalHandler() {
   setgoalsList(prevList => [...goalsList, goal])
  }

  const displayItems = goalsList.map(goals => {
    return (
      <View key ={Math.random()}>
           <Text>{goalsList.goals}</Text>
      </View>
     
    )
  })



  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          styles={styles.textInput}
          placeholder="your course goal"
          onChangeText={addinputHandler}
        />
        <Button title="Add Goal" onPress={addgoalHandler} />
      </View>
      <View styles={styles.inputContainer}>
        <Text>{displayItems}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 1,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 1,
  },
});
