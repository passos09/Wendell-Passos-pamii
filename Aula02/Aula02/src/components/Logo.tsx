import { Image } from "@/components/ui/image";

export default function Logo() {
  return (
    <Image
      source={require("../../assets/images/tabIcons/Discord-Logo-White.png")}
      alt="logo"
      className="w-69 h-12 mb-46"
      resizeMode="contain"
    />
  );
}