import { Link, router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function LoginScreen() {
	return (
		<View>
			<Text>ZaróbSe - logowanie</Text>

			<Button title='Zaloguj' onPress={() => router.replace("/(tabs)")} />

			<Link href='/register'>Przejdź do rejestracji</Link>
		</View>
	);
}
