import { Badge } from "@chakra-ui/react";

interface Props{
    score:number;
}
function MetricScore({score}:Props){
    let color = score > 75 ?"green": score >60 ?"yellow":""
    return (<Badge colorScheme={color} >{score}</Badge>);
}
export default MetricScore;