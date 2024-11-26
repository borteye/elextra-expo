import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Heart, Home, Search, User } from 'lucide-react-native'
import Colors from '@/constants/Colors'

export default function _layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.primary,
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, size }) => <Home size={size} color={color} />,
          tabBarLabel: "Home",
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ color, size }) => <Search size={size} color={color} />,
          tabBarLabel: "Search",
        }}
      />
      <Tabs.Screen
        name="favorite"
        options={{
          tabBarIcon: ({ color, size }) => <Heart size={size} color={color} />,
          tabBarLabel: "Favorite",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, size }) => <User size={size} color={color} />,
          tabBarLabel: "Profile",
        }}
      />
    </Tabs>
  )
}