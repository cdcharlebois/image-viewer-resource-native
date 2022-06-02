import { createElement } from "react";
import { Platform, View } from "react-native";
import FastImage from "react-native-fast-image";
import RNFS from "react-native-fs";

// Image can access the asset catalog, FastImage needs a URI

function removeExtension(uri) {
    return uri.replace(/\.[^/.]+$/, "");
}

function getSource(uri) {
    if (Platform.OS === "android") {
        return { uri: removeExtension(uri) };
    } else {
        return { uri: `${RNFS.MainBundlePath}/${uri}` };
    }
}

export const ImageViewerResource = ({ uri }) => {
    const source = getSource(uri);
    return (
        <View>
            <FastImage source={source} style={{ height: 100, width: 100 }} />
        </View>
    );
};
