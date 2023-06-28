import {HStack , Image,Text} from "@chakra-ui/react"
import log  from "../assets/600px-RPC-JP_Logo.png";
function Navbar(){
 return(<>
 <HStack>   
    <Image src={log} boxSize="60px" />
    <Text>Game Hub</Text>
  </HStack>
 </>)
}
export default Navbar;