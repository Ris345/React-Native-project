import { StyleSheet, View, Text } from "react-native";

function GoalItem(props) {
  return (
    <View styles={styles.goalItem}>
      <Text styles={styles.goalText} key={goal}>
        {props.text}
      </Text>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
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
