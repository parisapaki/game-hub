import { Menu, MenuItem, MenuList, MenuButton, Button } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

export default function SortSelected() {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: Relevance
      </MenuButton>
      <MenuList>
        <MenuItem>Relevance</MenuItem>
        <MenuItem>Date added</MenuItem>
        <MenuItem>Name</MenuItem>
        <MenuItem>Release Date</MenuItem>
        <MenuItem>popularity</MenuItem>
        <MenuItem>average raiting</MenuItem>
      </MenuList>
    </Menu>
  );
}
