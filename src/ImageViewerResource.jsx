import { createElement } from "react";
import { Platform } from "react-native";
import FastImage from "react-native-fast-image";
import RNFS from "react-native-fs";

// Image can access the asset catalog, FastImage needs a URI

function removeExtension(uri) {
    return uri.replace(/\.[^/.]+$/, "");
}

function getSource(uri) {
    if (Platform.OS === "android") {
        return { uri: removeExtension(uri).replace(/\//, "_").toLowerCase() };
    } else {
        return { uri: `${RNFS.MainBundlePath}/${uri}` };
    }
}

export const ImageViewerResource = ({ uri, style }) => {
    const source = getSource(uri);
    return (
        <FastImage source={source} style={style} resizeMode={FastImage.resizeMode.contain} />
    );
};
