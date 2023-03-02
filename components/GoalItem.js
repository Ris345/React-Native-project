import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  console.log(props.text);
  return (
    <View styles={styles.goalItem}>
      <Pressable
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressedData }) => pressedData && styles.pressedData}
      >
        <Text styles={styles.goalText} key={props.id}>
          {props.text}
        </Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    marginBottom: 50,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedData: {
    opacity: 0.5,
  },
  goalText: {
    color: "white",
  },
});
