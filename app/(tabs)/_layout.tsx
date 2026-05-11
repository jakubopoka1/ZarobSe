import { Tabs } from "expo-router";
import React from "react";

import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
	return (
		<Tabs
			screenOptions={{
				headerShown: false,

				tabBarStyle: {
					height: 88,
					paddingTop: 10,
					paddingBottom: 10,
					borderTopWidth: 1,
					borderTopColor: "#E5E7EB",
					backgroundColor: "#FFFFFF",
				},

				tabBarActiveTintColor: "#2563EB",

				tabBarInactiveTintColor: "#94A3B8",

				tabBarLabelStyle: {
					fontSize: 12,
					fontWeight: "600",
				},
			}}>
			{/* Przeglądaj */}
			<Tabs.Screen
				name='index'
				options={{
					title: "Przeglądaj",

					tabBarIcon: ({ color, size }) => (
						<Ionicons name='search' size={size} color={color} />
					),
				}}
			/>

			{/* Dodaj zlecenie */}
			<Tabs.Screen
				name='post'
				options={{
					title: "Dodaj",

					tabBarIcon: ({ color, size }) => (
						<Ionicons name='add-circle' size={size} color={color} />
					),
				}}
			/>

			{/* Moje zlecenia */}
			<Tabs.Screen
				name='my-jobs'
				options={{
					title: "Moje",

					tabBarIcon: ({ color, size }) => (
						<Ionicons name='briefcase' size={size} color={color} />
					),
				}}
			/>

			{/* Profil */}
			<Tabs.Screen
				name='profile'
				options={{
					title: "Profil",

					tabBarIcon: ({ color, size }) => (
						<Ionicons name='person' size={size} color={color} />
					),
				}}
			/>
		</Tabs>
	);
}
