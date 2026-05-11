import { Link, router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function RegisterScreen() {
	return (
		<View>
			<Text>ZaróbSe - rejestracja</Text>

			<Button title='Zarejestruj' onPress={() => router.replace("/(tabs)")} />

			<Link href='/login'>Wróć do logowania</Link>
		</View>
	);
}
