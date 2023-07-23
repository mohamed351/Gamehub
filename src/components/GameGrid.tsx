import useGame, { Platform } from "../hooks/useGames";
import {SimpleGrid, Text} from "@chakra-ui/react";
import GameCard from "./GameCard";
import LoadingScelecton from "./LoadingSceleton";
import { Genera } from "../hooks/useGenera";


interface Props{
    selectedGenera:Genera | null,
    selectedPlatform:Platform | null
}
function GameGrid(props:Props){

   const {getError,getGames,isLoading} = useGame(props.selectedGenera?.id , props.selectedPlatform?.id);

  
    return(
        <>
        {getError && <Text>{getError}</Text>}
       {isLoading &&  <LoadingScelecton/> }
    
    <SimpleGrid columns={{sm:1 , md:2, lg:3, xl:4}} marginTop={10} spacing={10}>
        {getGames.map(item=> <GameCard key={item.id} game={item} />)}
   </SimpleGrid>
   </>
    )

}
export default GameGrid;