import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0D0D0D",
    flex: 1,
    alignItems: "center",
    paddingTop: 80,
  },
  containerInputList: {
    backgroundColor: "#1a1a1a",
    flex: 1,
    width: "100%",
    paddingHorizontal: 24,
    marginTop: 80,
  },
  textLogo: {
    color: "#4EA8DE",
    fontSize: 32,
    fontWeight: "bold"
  },
  containerInput: {
    flexDirection: "row",
    marginTop: -27,
  },
  input: {
    backgroundColor: "#262626",
    color: "#f2f2f2",
    height: 54,
    flex: 1,
    borderRadius: 8,
    paddingLeft: 14
  },
  buttonAdd: {
    width: 54,
    height: 54,
    backgroundColor: "#4EA8DE",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10
  },
  containerLabelList: {
    marginTop: 32,
    paddingBottom: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: "#262626",
    borderBottomWidth: 2,
  },
  itemLabelList: {
    flexDirection: "row",
    gap: 6
  },
  LabelListText: {
    color: "#1e6f9f",
    fontWeight: "bold"
  },
  LabelListTextPurple: {
    color: "#5e60ce",
    fontWeight: "bold"
  },
  LabelListCounter: {
    color: "#f2f2f2",
    backgroundColor: "#262626",
    paddingHorizontal: 8,
    borderRadius: 8,
    paddingVertical: 1,
  }
})