import {AiFillWindows} from "react-icons/ai";
import {BsPlaystation, BsXbox,BsBrowserSafari,BsAndroid,BsNintendoSwitch } from "react-icons/bs";
import { SiMacos, } from "react-icons/si";
import {FaLinux} from "react-icons/fa";
import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
interface Props{
    platforms:Platform[]
}
function PlatformList({platforms}:Props){
    const iconMap:{[key:string]:any} ={
        PC:AiFillWindows,
        PlayStation:BsPlaystation,
        Xbox:BsXbox,
        "Apple Macintosh":SiMacos,
        Linux:FaLinux,
        Web:BsBrowserSafari,
        Android:BsAndroid,
        Nintendo:BsNintendoSwitch


    }
    return (<HStack>
    {platforms.map(plat => <Icon fontSize={20} key={plat.id} as={iconMap[plat.name]} xlinkTitle={plat.name} color={"gray.400"}></Icon>)}
    </HStack>)
}
export default PlatformList;