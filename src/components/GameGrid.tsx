import useGame from "../hooks/useGames";
import {SimpleGrid, Text} from "@chakra-ui/react";
import GameCard from "./GameCard";

function GameGrid(){

   const {getError,getGames} = useGame();
  
    return(
        <>
        {getError && <Text>{getError}</Text>}
    <SimpleGrid columns={{sm:1 , md:2, lg:3, xl:4}} padding={10} spacing={10}>
        {getGames.map(item=> <GameCard key={item.id} game={item} />)}
   </SimpleGrid>
   </>
    )

}
export default GameGrid;