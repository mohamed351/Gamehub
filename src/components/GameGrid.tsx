import useGame from "../hooks/useGames";
import {SimpleGrid, Text} from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSceleton from "./GameCardSceleton";
import LoadingScelecton from "./LoadingSceleton";

function GameGrid(){

   const {getError,getGames,isLoading} = useGame();

  
    return(
        <>
        {getError && <Text>{getError}</Text>}
  {isLoading &&  <LoadingScelecton/> }
    
    <SimpleGrid columns={{sm:1 , md:2, lg:3, xl:4}} padding={10} spacing={10}>
        {getGames.map(item=> <GameCard key={item.id} game={item} />)}
   </SimpleGrid>
   </>
    )

}
export default GameGrid;