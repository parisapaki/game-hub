import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

export default function ColorMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack padding="10px">
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Text>Dark mode</Text>
    </HStack>
  );
}
