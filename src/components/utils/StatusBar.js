import React from 'react';
import { StatusBar, View, Platform } from 'react-native';

export default () => (
    <View>
        <StatusBar />
         { Platform.OS === 'ios'
            ? <View style={{ height: 22 }} />
            : null } 
    </View>
);

// translucent
// animated
// {/* backgroundColor="rgba(0, 0, 0, 0.24)" */}