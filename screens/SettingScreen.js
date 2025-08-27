import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons"; // install: npm install react-native-vector-icons

// Example options
const settingsOptions = [
  { id: 1, icon: "person-outline", title: "Account" },
  { id: 2, icon: "lock-closed-outline", title: "Privacy" },
  { id: 3, icon: "notifications-outline", title: "Notifications" },
  { id: 4, icon: "log-out-outline", title: "Logout" },
];

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Settings</Text>

      {/* Settings Boxes Container */}
      <View style={styles.boxContainer}>
        {settingsOptions.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.box}
            activeOpacity={0.7}
          >
            {/* Icon */}
            <Icon name={item.icon} size={26} color="#007BFF" style={{ marginBottom: 8 }} />
            {/* Title */}
            <Text style={styles.boxText}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    justifyContent: "center", // Center vertically
    alignItems: "center", // Center horizontally
    padding: 16,
  },
  header: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 30,
  },
  boxContainer: {
    flexDirection: "row",
    flexWrap: "wrap", // Allow boxes to wrap
    justifyContent: "center",
    gap: 16, // For RN 0.71+, if not, use margin
  },
  box: {
    width: 120,
    height: 120,
    backgroundColor: "#fff",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
    elevation: 5, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  boxText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
  },
});
