import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Home, SearchNormal1, Notification, User } from 'iconsax-react-native';
import Animated, { interpolate, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const TabBar = ({ state, descriptors, navigation }) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.tabBar, { paddingBottom: insets.bottom }]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const iconProps = {
          size: 24,
          color: isFocused ? 'black' : 'gray',
        };

        const icon = () => {
          switch (route.name) {
            case 'Home':
              return <Home {...iconProps} />;
            case 'Search':
              return <SearchNormal1 {...iconProps} />;
            case 'Notifi':
              return <Notification {...iconProps} />;
            case 'User':
              return <User {...iconProps} />;
            default:
              return null;
          }
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tab}
          >
            <Animated.View style={useAnimatedStyle(() => {
              const scale = withSpring(isFocused ? 1.5 : 1);
              return { transform: [{ scale }] };
            })}>
              {icon()}
            </Animated.View>
            <Text style={{ color: isFocused ? 'black' : 'gray', fontSize: 12 }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingTop: 10,
  },
  tab: {
    alignItems: 'center',
  },
});

export default TabBar;
