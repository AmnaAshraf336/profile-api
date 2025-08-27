
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
const image = require("../assets/images/amna.jpg");

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={image} style={styles.profileImage} />
        <Text style={styles.name}>Amna Ashraf</Text>
        <Text style={styles.tagline}>programmer
        </Text>

        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>User Info</Text>
        <Text style={styles.cardText}>Email: amnaashraf35.gc@gmail.com</Text>
        <Text style={styles.cardText}>Phone: +92 3261684336</Text>
        <Text style={styles.cardText}>
          Address: Chak No.352, Layyah Road Chowk Azam
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eef1f5",
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 24,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 70,
    marginBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#222",
  },
  tagline: {
    fontSize: 16,
    color: "#09090aff",
    marginBottom: 12,
  },
  editButton: {
    backgroundColor: "#007bff",
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    elevation: 3,
  },
  editButtonText: {
    color: "#fff",
    fontWeight: "600",
  },
  card: {
    backgroundColor: "#8db1e4ff",
    padding: 20,
    borderRadius: 20,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#000000ff",
  },
  cardText: {
    fontSize: 14,
    color: "#343232ff",
    marginBottom: 6,
  },
});
