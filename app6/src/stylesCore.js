import {Platform, StyleSheet} from "react-native";

const stylesCore = StyleSheet.create({
  tabbarHeight: {
    flex:1,
    padding: 10,
    ...Platform.select({
      ios: {
        paddingBottom: 64,
      },
      android: {
        paddingBottom: 54,
      }
    })
  }
});

export default stylesCore;