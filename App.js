import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [goal, setGoal] = useState("");
  const [goalsList, setgoalsList] = useState([]);

  function addinputHandler(text) {
    setGoal(text);
  }

  function addgoalHandler() {
    setgoalsList((prevList) => [
      ...goalsList,
      { text: goal, key: Math.random().toString() },
    ]);
  }

  const displayItems = goalsList.map((goals) => {
    return <Text>{goals}</Text>;
  });

  console.log(displayItems);

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
      <View styles={styles.goalsContainer}>
        <FlatList
          data={goalsList}
          renderItem={(itemData) => {
            return (
              <View styles={styles.goalItem}>
                <Text styles={styles.goalText} key={goal}>
                  {itemData.item.text}
                </Text>
              </View>
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 0,
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
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
  },
});
