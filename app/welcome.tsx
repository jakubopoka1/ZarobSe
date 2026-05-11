import { router } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function WelcomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.heroSection}>
          <Text style={styles.badge}>LOKALNE ZLECENIA • SĄSIEDZKA POMOC</Text>
          <Text style={styles.title}>
            Zarabiaj pomagając ludziom w swojej okolicy
          </Text>
          <Text style={styles.description}>
            Znajduj szybkie zlecenia blisko Ciebie i buduj swoją reputację w
            lokalnej społeczności.
          </Text>
          <Image
            source={require("../assets/images/welcome.png")}
            style={styles.image}
          />
        </View>

        <View style={styles.cardsContainer}>
          <View style={styles.infoCard}>
            <Text style={styles.cardEmoji}>⚡</Text>
            <Text style={styles.cardTitle}>Szybkie{"\n"}zlecenia</Text>
          </View>

          <View style={styles.infoCard}>
            <Text style={styles.cardEmoji}>📍</Text>
            <Text style={styles.cardTitle}>Blisko{"\n"}Ciebie</Text>
          </View>

          <View style={styles.infoCard}>
            <Text style={styles.cardEmoji}>🤝</Text>
            <Text style={styles.cardTitle}>Zaufana{"\n"}społeczność</Text>
          </View>
        </View>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => router.push("/register")}
          >
            <Text style={styles.primaryButtonText}>Zacznij teraz</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={() => router.push("/login")}
          >
            <Text style={styles.secondaryButtonText}>Mam już konto</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5FA",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  content: {
    width: "100%",
    maxWidth: 340,
  },
  heroSection: {
    alignItems: "center",
    marginBottom: 36,
  },
  badge: {
    color: "#4F7BFF",
    fontSize: 12,
    fontWeight: "700",
    marginBottom: 18,
    letterSpacing: 1,
  },
  image: {
    width: 320,
    height: 210,
    alignSelf: "center",
    marginTop: 28,
  },
  title: {
    fontSize: 36,
    fontWeight: "800",
    color: "#1E2A5A",
    lineHeight: 40,
    textAlign: "center",
  },
  description: {
    marginTop: 18,
    fontSize: 16,
    color: "#6B7280",
    lineHeight: 26,
    textAlign: "center",
  },
  cardsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 34,
    gap: 10,
  },
  infoCard: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 18,
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  cardEmoji: {
    fontSize: 24,
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 12,
    fontWeight: "600",
    color: "#374151",
    textAlign: "center",
    lineHeight: 16,
    paddingHorizontal: 4,
  },
  buttonsContainer: {
    gap: 12,
  },
  primaryButton: {
    backgroundColor: "#4F7BFF",
    paddingVertical: 18,
    borderRadius: 16,
    alignItems: "center",
  },
  primaryButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
  },
  secondaryButton: {
    backgroundColor: "#ECEBFA",
    paddingVertical: 18,
    borderRadius: 16,
    alignItems: "center",
  },
  secondaryButtonText: {
    color: "#1E2A5A",
    fontSize: 16,
    fontWeight: "600",
  },
});
