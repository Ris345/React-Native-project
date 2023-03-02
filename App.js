import { StyleSheet, View, FlatList } from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() { 
  const [goalsList, setgoalsList] = useState([]);
  function addgoalHandler(goal) { 
    setgoalsList((goalsList) => [
      ...goalsList,
      { text: goal, id: Math.random().toString() },
    ]);
  }

  function deleteGoalHandler(id ) {
    setgoalsList(currentGoalsList => {
      return currentGoalsList.filter((goal) => goal.id !== id)
    })
 }


  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addgoalHandler} />
      <View styles={styles.goalsContainer}>
        <FlatList
          data={goalsList}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text} onDeleteItem={deleteGoalHandler} id={itemData.item.id} />;
          }}
          keyExtractor={(item) => {
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
