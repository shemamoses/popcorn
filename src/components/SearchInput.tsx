import { InputGroup, Input, InputLeftElement } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";

const SearchInput = ({ onSearchValueChange }) => {
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    onSearchValueChange(searchValue);
  }, [searchValue, onSearchValueChange]);

  return (
    <>
      <form>
        <InputGroup size="lg">
          <InputLeftElement children={<BsSearch />} />
          <Input
            type="text"
            value={searchValue}
            placeholder="Search Movies..."
            variant="filled"
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </InputGroup>
      </form>
    </>
  );
};

export default SearchInput;
