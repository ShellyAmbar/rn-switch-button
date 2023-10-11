import {StyleSheet} from "react-native";

const createStyle = (translateX) => {
  return StyleSheet.create({
    row: {
      flexDirection: "row",

      position: "relative",
    },

    switchTitleSelected: {
      fontSize: 20,
      textAlign: "center",
    },
    switchTitleUnSelected: {
      fontSize: 16,
      textAlign: "center",
    },

    buttonSwitchOuter: {
      paddingHorizontal: 16,
    },
    buttonSwitchInner: {
      backgroundColor: "#A9A9A9",
      borderRadius: 12,
    },
    buttonSwitchButton: {
      paddingVertical: 15,
      borderColor: "transparent",
      borderRadius: 12,

      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 1,

      borderRightWidth: 0,
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
    },
    buttonSwitchActiveButton: {
      backgroundColor: "#FF1493",
      paddingVertical: 11,
      top: 4,
      bottom: 4,
      borderRadius: 12,
      transform: [
        {
          translateX,
        },
      ],

      position: "absolute",
      width: "50%",
    },
  });
};
export default createStyle;
