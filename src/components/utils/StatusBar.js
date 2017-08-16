import React from 'react';
import { StatusBar, View, Platform } from 'react-native';

export default () => (
    <View>
        <StatusBar
            translucent
            backgroundColor="rgba(0, 0, 0, 0.24)"
            animated
        />
        { Platform.OS === 'android' && Platform.Version >= 20 
            ? <View style={{ height: 24 }} />
            : null }
    </View>
);