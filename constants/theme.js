import { Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');

export const COLORS = {
    primary: 'rgba(220,77,63,255)',
    white: '#FFFFFF',
    ck:'#F6F6F6',
    black: '#111111',
    gray: '#999999',
    lightGray: '#CCCCCC',
    green: '#00C853',
    red: '#de2939',
    blue: '#2196F3',
};

export const SIZES = {
    // Global SIZES
    base: 8,
    font: 14,
    radius: 30,
    padding: 8,
    padding2: 12,
    padding3: 16,

    // FONT Sizes
    largeTitle: 50,
    h1: 30,
    h2: 22,
    h3: 20,
    h4: 18,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,

    // App Dimensions
    width,
    height,
};

export const FONTS = {
    largeTitle: {
        fontFamily: 'black',
        fontSize: SIZES.largeTitle,
        lineHeight: 55,
    },
    h1: { fontFamily: 'bold', fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: 'bold', fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: 'bold', fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: 'bold', fontSize: SIZES.h4, lineHeight: 22 },
    body1: { fontFamily: 'regular', fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily: 'regular', fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily: 'regular', fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: 'regular', fontSize: SIZES.body4, lineHeight: 20 },
};

export const animate1 = { 
    0: { scale: 1, translateY: 0 }, 
    0.5: { scale: 1.2, translateY: -15 }, 
    1: { scale: 1, translateY: -30 } 
};

export const animate2 = { 
    0: { scale: 1, translateY: -30 }, 
    0.5: { scale: 1.2, translateY: -15 }, 
    1: { scale: 1, translateY: 0 } 
};

export const circle1 = { 
    0: { scale: 0 }, 
    0.5: { scale: 0.5 }, 
    1: { scale: 1 } 
};

export const circle2 = { 
    0: { scale: 1 }, 
    0.5: { scale: 0.5 }, 
    1: { scale: 0 } 
};

export const ANIMATIONS = {
    bannerOpacity: {
        inputRange: [0, 200],
        outputRange: [1, 0],
        extrapolate: 'clamp',
    },
    bannerHeight: {
        inputRange: [0, 200],
        outputRange: [200, 0],
        extrapolate: 'clamp',
    },
    bannerTranslateY: {
        inputRange: [0, 200],
        outputRange: [0, -100],
        extrapolate: 'clamp',
    },
    listTranslateY: {
        inputRange: [0, 200],
        outputRange: [0, -200],
        extrapolate: 'clamp',
    }
};

const appTheme = { COLORS, SIZES, FONTS, animate1, animate2, circle1, circle2, ANIMATIONS };

export default appTheme;
