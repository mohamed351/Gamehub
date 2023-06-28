import {HStack, Switch, useColorMode, Text} from "@chakra-ui/react";


function ColorModeSwitch(){
    const {colorMode,toggleColorMode} = useColorMode();
  return(  <HStack paddingRight="10px">
        <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} />
        <Text>Dark Mode</Text>
    </HStack>)
}

export default ColorModeSwitch;