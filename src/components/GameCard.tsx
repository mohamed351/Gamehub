import { Card,CardBody,Image,Heading, CardFooter, HStack } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformList from "./PlatformList";
import MetricScore from "./MetricScore";
import getCroppedImage from "../services/image-url";


interface Props{
    game:Game
}
function GameCard({game}:Props){

    
    return(<Card borderRadius="10px" overflow="hidden">
            <Image src={getCroppedImage( game.background_image)} />
            <CardBody>
                <Heading  fontSize="2xl"> {game.name}</Heading>
                <HStack marginY="10px" justifyContent="space-between">
                 <PlatformList platforms={game.parent_platforms.map(a=> a.platform)} />
                    <MetricScore score={game.metacritic} />
                </HStack>
            </CardBody>
            <CardFooter>
               
            </CardFooter>
        </Card>)
}
export default GameCard;