import { HStack, Img, List, ListItem,Spinner,Text } from "@chakra-ui/react";
import useGanara from "../hooks/useGenera";

function GeneraList(){

    const {genera,getError,isLoading} = useGanara();

    if(getError){
        return null;
    }
    if(isLoading){
        return <Spinner />
    }
    return (
        <List >
           {genera.map(a=> <ListItem key={a.id}> 
                    <HStack paddingY={2} >
                        <Img src={a.image_background} boxSize="12" borderRadius={10} />
                        <Text fontSize={20}>{a.name}</Text>
                        </HStack>
           </ListItem>)}  
        </List>
    );
}
export default GeneraList;