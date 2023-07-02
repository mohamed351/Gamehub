import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

function GameCardSceleton(){
    return (<>
    <Card  width="400px">
    <Skeleton height="350px" >
    </Skeleton>
    <CardBody>
        <SkeletonText></SkeletonText>
        </CardBody>
        </Card>
        </>)
}
export default GameCardSceleton