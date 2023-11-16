import { Spacer, InputGroup, Input, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <>
      <Spacer />
      <form>
        <InputGroup size="lg">
          <InputLeftElement children={<BsSearch />} />
          <Input type="text" placeholder="Search Movies..." variant="filled" />
        </InputGroup>
      </form>
    </>
  );
};

export default SearchInput;
