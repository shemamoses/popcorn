import { HStack, Image } from "@chakra-ui/react";
import SearchInput from "./SearchInput";
import logo from "../assets/popcorn logo.svg";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  const handleSearchValueChange = (searchValue: string) => {
    console.log("Search value changed:", searchValue);
  };
  return (
    <>
      <HStack justifyContent="space-between" padding="10px">
        <Image src={logo} alt="popcorn logo" boxSize="60px" />
        <SearchInput onSearchValueChange={handleSearchValueChange} />

        <ColorModeSwitch />
      </HStack>
    </>
  );
};

export default NavBar;
