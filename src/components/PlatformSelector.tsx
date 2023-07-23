import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import {AiFillCaretDown} from "react-icons/ai"
import usePlatform from "../hooks/userPlatform";
import { Platform } from "../hooks/useGames";

interface Props{
    onSelectedPlatform:(platform:Platform)=>void,
    selectedPlatform:Platform | null
}
function PlatformSelector({onSelectedPlatform,selectedPlatform}:Props){
    const {platform, getError} = usePlatform();
    if(getError){
        return null;
    }
    return (<>
    <Menu>
        <MenuButton as={Button} rightIcon={<AiFillCaretDown/>}>{selectedPlatform ? selectedPlatform?.name : 'Plaform'}</MenuButton>
        <MenuList>
            {platform.map(c=><MenuItem onClick={()=>onSelectedPlatform(c)}  key={c.id}>{c.name}</MenuItem>)}
        </MenuList>
    </Menu>
    </>)
}
export default PlatformSelector;