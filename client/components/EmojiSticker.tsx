import { View, Image } from "react-native";

interface Props {
  imageSize: number
  stickerSource: any
}
export default function EmojiSticker({ imageSize, stickerSource }: Props) {
  return (
    <View style={{ top: -350 }}>
      <Image source={stickerSource} resizeMode='contain' style={{ width: imageSize, height: imageSize }} />
    </View>
  )
}