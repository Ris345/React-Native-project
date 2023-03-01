import { View, TextInput, Button, StyleSheet } from "react-native";

function GoalInput(props) {
    const [goalsList, setgoalsList] = useState([]);
  return (
    <View style={styles.inputContainer}>
      <TextInput
        styles={styles.textInput}
        placeholder="your course goal"
        onChangeText={addinputHandler}
      />
      <Button title="Add Goal" onPress={props.onAddGoal  } />
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
});
