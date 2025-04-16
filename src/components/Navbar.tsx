import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorMode from "./ColorMode";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchtext: string) => void;
}

export default function Navbar({ onSearch }: Props) {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={onSearch} />
      <ColorMode />
    </HStack>
  );
}
