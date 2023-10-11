import { StyleSheet, Image, Dimensions, Button } from "react-native";

import { Text, View } from "../../components/Themed";
import { useState } from "react";
import WebView from "react-native-webview";
import { MonoText } from "../../components/StyledText";

export default function TabOneScreen() {
  const [webViewEnabled, setWebViewEnabled] = useState(false);

  if (webViewEnabled)
    return (
      <View style={{ flex: 1, alignItems: "flex-end" }}>
        <WebView
          style={styles.webview}
          source={{ uri: "https://SeismicCore.com/" }}
        />
      </View>
    );
  else
    return (
      <View style={styles.container}>
        <View>
          <Image
            style={{ width: 150, height: 150, marginVertical: 30 }}
            source={require("../../assets/images/icon.png")}
          />
          <Text style={styles.title}>SeimsicCore</Text>
        </View>
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />

        <View>
          <View style={styles.getStartedContainer}>
            <Text
              style={styles.getStartedText}
              lightColor="rgba(0, 0, 0, 0.8)"
              darkColor="rgba(255, 255, 255, 0.8)"
            >
              Welcome to the Seismic
              <Text
                style={styles.getStartedText}
                lightColor="rgba(87,179,253,0.8)"
                darkColor="rgba(87,179,253,0.8)"
              >
                Core
              </Text>{" "}
              App.
            </Text>

            <View
              style={[styles.codeHighlightContainer, styles.homeScreenFilename]}
              darkColor="rgba(255,255,255,0.05)"
              lightColor="rgba(0,0,0,0.05)"
            >
              <MonoText>
                <Button
                  title="SeismicCore.com"
                  onPress={() => {
                    setWebViewEnabled(true);
                  }}
                ></Button>
              </MonoText>
            </View>
          </View>
        </View>
      </View>
    );
}

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: "center",
  },
  container: {
    flex: 1,
    marginVertical: 75,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  homeScreenFilename: {
    marginVertical: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  webview: {
    flex: 1,
    backgroundColor: "rgba(87,179,253,0.8)",
    width: deviceWidth,
    height: deviceHeight,
  },
});
