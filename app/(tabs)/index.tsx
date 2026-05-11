// Import ikon z biblioteki Expo.
// Używamy ich np. do lupy i ikonki lokalizacji.
import { Ionicons } from "@expo/vector-icons";

// Import podstawowych komponentów React Native.
import {
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";

// Tymczasowe dane zleceń.
const jobs = [
	{
		id: 1,
		title: "Koszenie trawnika",
		location: "Tychy",
		price: "80 zł",
		category: "Ogród",
		description: "Potrzebuję pomocy przy skoszeniu trawnika w ogrodzie.",
	},
	{
		id: 2,
		title: "Wyprowadzenie psa",
		location: "Katowice",
		price: "40 zł",
		category: "Zwierzęta",
		description: "Szukam osoby do wyprowadzenia psa po południu.",
	},
	{
		id: 3,
		title: "Pomoc przy przeprowadzce",
		location: "Mikołów",
		price: "150 zł",
		category: "Dom",
		description: "Potrzebne dwie osoby do wniesienia kilku mebli.",
	},
];

// Kategorie
const categories = ["Wszystko", "Ogród", "Zwierzęta", "Dom", "Zakupy"];

export default function BrowseScreen() {
	return (
		<View style={styles.container}>
			{/* Header */}
			<View style={styles.header}>
				<Text style={styles.logo}>Zarób Se</Text>

				<Text style={styles.subtitle}>
					Znajdź lokalne zlecenie w swojej okolicy
				</Text>
			</View>

			{/* Search */}
			<View style={styles.searchBox}>
				<Ionicons name='search-outline' size={20} color='#6B7280' />

				<TextInput
					placeholder='Szukaj zleceń...'
					placeholderTextColor='#9CA3AF'
					style={styles.searchInput}
				/>
			</View>

			{/* Kategorie */}
			<View style={styles.categoriesWrapper}>
				<ScrollView
					horizontal
					showsHorizontalScrollIndicator={false}
					contentContainerStyle={styles.categories}>
					{categories.map((category, index) => (
						<TouchableOpacity
							key={category}
							style={[
								styles.categoryPill,
								index === 0 && styles.activeCategoryPill,
							]}>
							<Text
								style={[
									styles.categoryText,
									index === 0 && styles.activeCategoryText,
								]}>
								{category}
							</Text>
						</TouchableOpacity>
					))}
				</ScrollView>
			</View>

			{/* Lista zleceń */}
			<ScrollView
				showsVerticalScrollIndicator={false}
				contentContainerStyle={styles.jobsList}>
				{jobs.map((job) => (
					<TouchableOpacity
						key={job.id}
						style={styles.jobCard}
						activeOpacity={0.85}>
						{/* Góra karty */}
						<View style={styles.jobTopRow}>
							<View style={styles.categoryBadge}>
								<Text style={styles.categoryBadgeText}>{job.category}</Text>
							</View>

							<Text style={styles.price}>{job.price}</Text>
						</View>

						{/* Tytuł */}
						<Text style={styles.jobTitle}>{job.title}</Text>

						{/* Opis */}
						<Text style={styles.jobDescription}>{job.description}</Text>

						{/* Dół karty */}
						<View style={styles.jobBottomRow}>
							<View style={styles.locationRow}>
								<Ionicons name='location-outline' size={17} color='#6B7280' />

								<Text style={styles.location}>{job.location}</Text>
							</View>

							<Text style={styles.detailsText}>Szczegóły</Text>
						</View>
					</TouchableOpacity>
				))}
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 20,
		paddingTop: 60,
		backgroundColor: "#F8FAFC",
	},

	header: {
		marginBottom: 22,
	},

	logo: {
		fontSize: 32,
		fontWeight: "800",
		color: "#2563EB",
	},

	subtitle: {
		marginTop: 6,
		fontSize: 15,
		color: "#64748B",
	},

	searchBox: {
		height: 52,
		paddingHorizontal: 16,
		borderRadius: 18,
		backgroundColor: "#FFFFFF",
		flexDirection: "row",
		alignItems: "center",
		gap: 10,
		borderWidth: 1,
		borderColor: "#E5E7EB",
	},

	searchInput: {
		flex: 1,
		fontSize: 15,
		color: "#111827",
	},

	categoriesWrapper: {
		height: 72,
		marginVertical: 18,
		justifyContent: "center",
	},

	categories: {
		gap: 10,
		paddingRight: 20,
		alignItems: "center",
	},

	categoryPill: {
		height: 44,
		paddingHorizontal: 18,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 999,
		backgroundColor: "#FFFFFF",
		borderWidth: 1,
		borderColor: "#E5E7EB",
	},

	activeCategoryPill: {
		backgroundColor: "#2563EB",
		borderColor: "#2563EB",
	},

	categoryText: {
		fontSize: 14,
		fontWeight: "600",
		color: "#475569",
	},

	activeCategoryText: {
		color: "#FFFFFF",
	},

	jobsList: {
		paddingBottom: 30,
		gap: 14,
	},

	jobCard: {
		padding: 18,
		borderRadius: 22,
		backgroundColor: "#FFFFFF",
		borderWidth: 1,
		borderColor: "#E5E7EB",
	},

	jobTopRow: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},

	categoryBadge: {
		paddingHorizontal: 10,
		paddingVertical: 5,
		borderRadius: 999,
		backgroundColor: "#EFF6FF",
	},

	categoryBadgeText: {
		fontSize: 12,
		fontWeight: "700",
		color: "#2563EB",
	},

	price: {
		fontSize: 18,
		fontWeight: "800",
		color: "#16A34A",
	},

	jobTitle: {
		marginTop: 14,
		fontSize: 19,
		fontWeight: "800",
		color: "#0F172A",
	},

	jobDescription: {
		marginTop: 7,
		fontSize: 14,
		lineHeight: 20,
		color: "#64748B",
	},

	jobBottomRow: {
		marginTop: 16,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},

	locationRow: {
		flexDirection: "row",
		alignItems: "center",
		gap: 4,
	},

	location: {
		fontSize: 14,
		color: "#64748B",
		fontWeight: "600",
	},

	detailsText: {
		fontSize: 14,
		fontWeight: "800",
		color: "#2563EB",
	},
});
