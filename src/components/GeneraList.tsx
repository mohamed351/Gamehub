import { Button, HStack, Img, List, ListItem,Spinner,Text } from "@chakra-ui/react";
import useGanara, { Genera } from "../hooks/useGenera";


export interface Props{
    onSelectGenera:(genera:Genera)=> void 
}
function GeneraList({onSelectGenera}:Props){

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
                        {/* <Text fontSize={20}>{a.name}</Text> */}
                        <Button variant={"link"} onClick={()=>onSelectGenera(a)}> {a.name} </Button>
                        </HStack>
           </ListItem>)}  
        </List>
    );
}
export default GeneraList;