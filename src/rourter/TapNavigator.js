import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeNavigator from './navigator/HomeNavigator';
import SearchNavigator from './navigator/SearchNavigator';
import NotifiNavigator from './navigator/NotifiNavigator';
import UserNavigator from './navigator/UserNavigator';
import { Home, SearchNormal1, Notification, User } from 'iconsax-react-native';
import { COLORS, animate1, animate2, circle1, circle2 } from '../../constants/theme';

const Tabs = createBottomTabNavigator();

const Tabbar = () => [
    { route: "Home", label: "Home", icon: Home, component: HomeNavigator },
    { route: "Search", label: "Search", icon: SearchNormal1, component: SearchNavigator },
    { route: "Notifications", label: "Notifications", icon: Notification, component: NotifiNavigator },
    { route: "User", label: "User", icon: User, component: UserNavigator }
];

const TabNavigator = () => (
  <Tabs.Navigator 
    screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
            position: "absolute",
            backgroundColor: COLORS.black,
            height: 70,
            justifyContent: 'space-between',
        }
    }}
  >
    {Tabbar().map((item, index) => (
        <Tabs.Screen 
            key={index} 
            name={item.route} 
            component={item.component}
            options={{
                tabBarButton: (props) => <Tabbarbtt {...props} item={item} />,
                tabBarShowLabel: false,
            }}
        />
    ))}
  </Tabs.Navigator>
);

const Tabbarbtt = (props) => {
    const { item, onPress, accessibilityState } = props;
    const focused = accessibilityState.selected;
    const viewRef = useRef(null);
    const circleRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        if (focused) {
            viewRef.current.animate(animate1, 0);
            circleRef.current.animate(circle1, 0);
            textRef.current.transitionTo({ scale: 1 });
        } else {
            viewRef.current.animate(animate2, 0);
            circleRef.current.animate(circle2, 0);
            textRef.current.transitionTo({ scale: 0 });
        }
    }, [focused]);

    return (
        <TouchableOpacity
            style={styles.touchable}
            onPress={onPress}
            activeOpacity={1}
        >
            <Animatable.View 
                ref={viewRef}
                duration={1000}
                style={[styles.btn, { opacity: focused ? 1 : 0.5 }]} // Adjust opacity for unselected state
            >
                <Animatable.View 
                    ref={circleRef} 
                    style={[styles.hinhtron, { opacity: focused ? 1 : 0 }]} // Circle only visible when selected
                >
                    <item.icon color={focused ? "red" : "white"} size={24} />
                </Animatable.View>
                <Animatable.Text ref={textRef} style={[styles.textbtt, { opacity: focused ? 1 : 0 }]}>
                    {item.label}
                </Animatable.Text>
            </Animatable.View>
            {!focused && (
                <item.icon color="white" size={24} style={styles.icon} /> // Add icon for unselected state
            )}
        </TouchableOpacity>
    );
}

export default TabNavigator;

const styles = StyleSheet.create({
    touchable: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textbtt: {
        fontSize: 12,
        color: COLORS.red,
        fontWeight: 'bold',
    },
    btn: {
        alignItems: 'center',
        width: 100,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
    },
    hinhtron: {
        borderColor: COLORS.ck,
        backgroundColor: COLORS.black,
        borderWidth: 4,
        width: 50,
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        position: 'absolute', 
        top: '50%',
        left: '50%',
        transform: [{ translateX: -15 }, { translateY: -18 }], 
    },
});
