import React from 'react';
import { WebView } from 'react-native-webview';

export default function Product({ route }) {
    return (
        <WebView source={{ uri: route.params.product.url }} />
    );
}