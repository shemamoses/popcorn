import { HStack, Image } from "@chakra-ui/react";
import SearchInput from "./SearchInput";
import logo from "../assets/popcorn logo.svg";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <>
      <HStack justifyContent="space-between" padding="10px">
        <Image src={logo} alt="popcorn logo" boxSize="60px" />
        <SearchInput />
        
        <ColorModeSwitch />
      </HStack>
    </>
  );
};

export default NavBar;
