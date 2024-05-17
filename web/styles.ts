import FontAwesome from 'react-native-vector-icons/Fonts/FontAwesome.ttf';
import Ionicons from 'react-native-vector-icons/Fonts/Ionicons.ttf';
import MaterialIcons from 'react-native-vector-icons/Fonts/MaterialIcons.ttf';

export function appendStyleSheet(style: string) {
    const styleElement = document.createElement('style');
    styleElement.type = 'text/css';
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if ((styleElement as any).styleSheet) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (styleElement as any).styleSheet.cssText = style;
    } else {
        styleElement.appendChild(document.createTextNode(style));
    }
    document.head.appendChild(styleElement);
}

appendStyleSheet(`@font-face {
    src: url(${FontAwesome});
    font-family: FontAwesome;
}`);
appendStyleSheet(`@font-face {
    src: url(${Ionicons});
    font-family: Ionicons;
}`);
appendStyleSheet(`@font-face {
    src: url(${MaterialIcons});
    font-family: MaterialIcons;
}`);