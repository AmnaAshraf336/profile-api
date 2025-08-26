
import React from "react";
import { Image, StatusBar, StyleSheet, Text, View } from "react-native";

const image = require("../assets/images/amna.jpg");
const ProfileScreen = () => {
  return (
    <View style={styles.safe}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={styles.safe.backgroundColor}
      />

      <View style={styles.container}>
        <View style={styles.card} accessibilityRole="summary">
          <Image
            source={image}
            style={[styles.avatar, { width: 300, height: 300 }]}
            accessibilityLabel="Image of Amna Ashraf"
          />
          <Text style={styles.name}>Hi 👋, I'm Amna Ashraf </Text>
          <Text style={styles.bio} numberOfLines={6}>
             A Freelance Full Stack Developer helping 
            startups and growing teams build scalable, high-performance web and 
            mobile applications — from idea to deployment.
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#2c2c2fff",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  card: {
    width: "100%",
    maxWidth: 760,
    borderRadius: 16,
    padding: 20,
    alignItems: "center",
  },
  avatar: {
    borderRadius: 16,
    marginBottom: 18,
    resizeMode: "cover",
  },
  name: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 10,
  },
  bio: {
    color: "#d0d6e0",
    fontSize: 16,
    lineHeight: 22,
    textAlign: "center",
    marginBottom: 18,
  },
});

export default ProfileScreen;
