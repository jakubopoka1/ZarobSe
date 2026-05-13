import { Link, router } from "expo-router";
import {
	Image,
	KeyboardAvoidingView,
	Platform,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
	return (
		<SafeAreaView style={styles.container}>
			<KeyboardAvoidingView
				style={styles.keyboardView}
				behavior={Platform.OS === "ios" ? "padding" : "height"}>
				<ScrollView
					contentContainerStyle={styles.scrollContent}
					keyboardShouldPersistTaps='handled'
					showsVerticalScrollIndicator={false}>
					<View style={styles.content}>
						<View style={styles.heroSection}>
							<Image
								source={require("../assets/images/login.png")}
								style={styles.image}
							/>

							<Text style={styles.title}>Zarabiaj lokalnie z ZaróbSe</Text>

							<Text style={styles.description}>
								Znajduj lokalne zlecenia i buduj swoją reputację w społeczności.
							</Text>
						</View>

						<View style={styles.form}>
							<TextInput
								placeholder='E-mail'
								placeholderTextColor='#bababa'
								style={styles.input}
							/>

							<TextInput
								placeholder='Hasło'
								placeholderTextColor='#bababa'
								secureTextEntry
								style={styles.input}
							/>
						</View>

						<View style={styles.buttonContainer}>
							<Text
								style={styles.loginButton}
								onPress={() => router.replace("/(tabs)")}>
								Zaloguj
							</Text>
						</View>

						<View style={styles.registerRow}>
							<Text style={styles.registerText}>Nie masz konta?</Text>

							<Link href='/register' style={styles.registerLink}>
								Zarejestruj się
							</Link>
						</View>
					</View>
				</ScrollView>
			</KeyboardAvoidingView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#F5F5FA",
		paddingHorizontal: 24,
	},
	keyboardView: {
		flex: 1,
		width: "100%",
	},
	scrollContent: {
		flexGrow: 1,
		justifyContent: "center",
		alignItems: "center",
		paddingVertical: 24,
	},
	content: {
		width: "100%",
		maxWidth: 320,
	},
	heroSection: {
		alignItems: "center",
		marginBottom: 40,
	},
	image: {
		width: 300,
		height: 230,
		borderRadius: 24,
		marginBottom: 24,
	},
	title: {
		fontSize: 34,
		fontWeight: "700",
		color: "#1E2A5A",
		textAlign: "center",
	},
	description: {
		marginTop: 12,
		fontSize: 15,
		color: "#6B7280",
		textAlign: "center",
		lineHeight: 22,
	},
	form: {
		gap: 16,
	},
	input: {
		backgroundColor: "white",
		borderRadius: 16,
		padding: 16,
		fontSize: 16,
	},
	buttonContainer: {
		marginTop: 24,
	},
	loginButton: {
		backgroundColor: "#4169E1",
		color: "white",
		textAlign: "center",
		paddingVertical: 16,
		borderRadius: 16,
		fontSize: 16,
		fontWeight: "700",
		overflow: "hidden",
		shadowColor: "#4169E1",
		shadowOffset: {
			width: 0,
			height: 6,
		},
		shadowOpacity: 0.25,
		shadowRadius: 12,
		elevation: 6,
	},
	registerRow: {
		flexDirection: "row",
		justifyContent: "center",
		marginTop: 24,
		gap: 4,
	},
	registerText: {
		color: "#6B7280",
	},
	registerLink: {
		color: "#4169E1",
	},
});
