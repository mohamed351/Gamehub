import {ThemeConfig, extendTheme} from "@chakra-ui/react";


const config: ThemeConfig = {
    initialColorMode: 'dark', // 'dark' | 'light'
    useSystemColorMode: true,
  }
console.log(config);
export default extendTheme(config)