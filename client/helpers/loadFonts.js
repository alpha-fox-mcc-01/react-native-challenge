import * as Font from "expo-font";
async function loadFont() {
  await Font.loadAsync({
    "VarelaRound-Regular": require("../assets/fonts/VarelaRound-Regular.ttf")
  });
  setFontLoaded(true);
}

export default loadFont();
