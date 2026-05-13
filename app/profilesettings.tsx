import { router } from "expo-router";
import { useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileSettingsScreen() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [publicProfileEnabled, setPublicProfileEnabled] = useState(true);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.headerTitle}>Ustawienia profilu</Text>

        <View style={styles.avatarSection}>
          <View style={styles.avatarWrapper}>
            <Image
              source={require("../assets/images/undraw_friendly-guy-avatar_dqp5 (1).png")}
              style={styles.avatar}
            />
          </View>

          <Text style={styles.changePhoto}>Zmień zdjęcie</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Dane użytkownika</Text>

          <View style={styles.inputCard}>
            <Text style={styles.label}>Nazwa użytkownika</Text>
            <TextInput placeholder="@piotrek_dev" style={styles.input} />
          </View>

          <View style={styles.inputCard}>
            <Text style={styles.label}>Adres e-mail</Text>
            <TextInput
              placeholder="piotrek@email.com"
              keyboardType="email-address"
              style={styles.input}
            />
          </View>

          <View style={styles.inputCard}>
            <Text style={styles.label}>Opis profilu</Text>
            <TextInput
              placeholder="Napisz coś o sobie"
              multiline
              style={styles.bioInput}
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Preferencje</Text>

          <View style={styles.settingRow}>
            <View>
              <Text style={styles.settingTitle}>Powiadomienia</Text>
              <Text style={styles.settingDescription}>
                Otrzymuj informacje o nowych zleceniach.
              </Text>
            </View>
            <Switch
              value={notificationsEnabled}
              onValueChange={setNotificationsEnabled}
            />
          </View>

          <View style={styles.settingRow}>
            <View>
              <Text style={styles.settingTitle}>Tryb publiczny</Text>
              <Text style={styles.settingDescription}>
                Twój profil będzie widoczny dla innych.
              </Text>
            </View>
            <Switch
              value={publicProfileEnabled}
              onValueChange={setPublicProfileEnabled}
            />
          </View>
        </View>

        <Pressable
          style={styles.saveButton}
          onPress={() => router.push("/(tabs)/profile")}
        >
          <Text style={styles.saveButtonText}>Zapisz zmiany</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5FA",
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 40,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: "800",
    color: "#1E2A5A",
    marginBottom: 28,
  },
  avatarSection: {
    alignItems: "center",
    marginBottom: 36,
  },
  avatarWrapper: {
    backgroundColor: "#ECEBFA",
    borderRadius: 999,
    padding: 18,
    marginBottom: 14,
  },
  avatar: {
    width: 130,
    height: 130,
  },
  changePhoto: {
    color: "#4F7BFF",
    fontWeight: "700",
    fontSize: 15,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1E2A5A",
    marginBottom: 16,
  },
  inputCard: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 18,
    marginBottom: 14,
  },
  label: {
    fontSize: 13,
    fontWeight: "600",
    color: "#6B7280",
    marginBottom: 10,
  },
  input: {
    fontSize: 16,
    color: "#1F2937",
  },
  bioInput: {
    minHeight: 90,
    textAlignVertical: "top",
    fontSize: 16,
    color: "#1F2937",
  },
  settingRow: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 18,
    marginBottom: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 16,
  },
  settingTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#1F2937",
    marginBottom: 4,
  },
  settingDescription: {
    color: "#6B7280",
    fontSize: 13,
    lineHeight: 18,
    maxWidth: 220,
  },
  saveButton: {
    backgroundColor: "#4F7BFF",
    paddingVertical: 18,
    borderRadius: 18,
    alignItems: "center",
    marginBottom: 40,
  },
  saveButtonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
});
