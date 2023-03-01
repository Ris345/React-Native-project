import { StyleSheet, View, Button, TextInput, FlatList } from "react-native";
import { useState } from "react";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goal, setGoal] = useState("");
 

  function addinputHandler(text) {
    setGoal(text);
  }

  function addgoalHandler() {
    setgoalsList((prevList) => [
      ...goalsList,
      { text: goal, key: Math.random().toString() },
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addgoalHandler} />
      <View styles={styles.goalsContainer}>
        <FlatList
          data={goalsList}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text} />;
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
  goalsContainer: {
    flex: 1,
  },
});
