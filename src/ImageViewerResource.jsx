import { Component, createElement } from "react";
import {Image, View, Platform} from "react-native";
import FastImage from "react-native-fast-image";
import RNFS from "react-native-fs";

// Image can access the asset catalog, FastImage needs a URI

export const ImageViewerResource = ({uri}) => {
    const getBundleDirectory = () => {
        return Platform.OS === "ios" ? RNFS.MainBundlePath : RNFS.DocumentDirectoryPath
    }
    // const definitelyTheUri = Image.resolveAssetSource({uri: uri}).uri;
    // console.info(getBundleDirectory());
    const filePath = `${getBundleDirectory()}/${uri}`
    console.info(filePath);
    const source = {uri : filePath}
    return (
        <View>
            <Image source={source} style={{height: 100, width: 100}}/>
        </View>
    )
}
