import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface GameResponse{
    count:number;
    results:Game[]
}
export interface Game{
    id:number;
    name:string;
    background_image:string;
    parent_platforms:{platform:Platform}[]
    metacritic:number
}
export interface Platform{
    id:number;
    name:string;
    slug:string
}
const useGame =()=>{

    const [getGames,setGames] = useState<Game[]>([]);
    const [getError,setError] = useState("");
    useEffect(()=>{
        const controller = new AbortController();
        apiClient.get<GameResponse>("/games",{signal:controller.signal}).then(a=> setGames(a.data.results))
        .catch(err=>{
            if(err  instanceof CanceledError) return;
            setError(err)
        });
        return ()=> controller.abort();
       },[])

       return {getGames, getError};
}
export default useGame;