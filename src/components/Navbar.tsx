import {HStack , Image,Text} from "@chakra-ui/react"
import log  from "../assets/600px-RPC-JP_Logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
function Navbar(){
 return(<>
 <HStack justifyContent={"space-between"}>   
    <Image src={log} boxSize="60px" />
     <ColorModeSwitch />
  </HStack>
 </>)
}
export default Navbar;