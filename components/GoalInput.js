import { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

function GoalInput(props) {
  const [goal, setGoal] = useState("");

  function addinputHandler(text) {
    setGoal(text);
  }

  function addgoalHandler() {
    props.onAddGoal(goal);
    setGoal("");
  }

  console.log(goal);

  return (
    <View style={styles.inputContainer}>
      <TextInput
        styles={styles.textInput}
        placeholder="your course goal"
        onChangeText={addinputHandler}
        value={goal}
      />
      <Button title="Add Goal" onPress={addgoalHandler} />
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
});
