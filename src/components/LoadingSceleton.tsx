import { SimpleGrid } from "@chakra-ui/react";
import GameCardSceleton from "./GameCardSceleton";

function LoadingScelecton(){
    return (<SimpleGrid columns={{sm:1 , md:2, lg:3, xl:4}} padding={10} spacing={10}>
        {Array(10).fill(0).map((a,index)=><GameCardSceleton key={index} />)}
      </SimpleGrid>)

}
export default LoadingScelecton;