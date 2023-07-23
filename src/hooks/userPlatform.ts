import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platform{
    id:number;
    name:string;
    slug:string;
}
export interface PlatformResponse{
    count:number;
    results:Platform[]
}
const usePlatform =()=>{

    const [platform,usePlatform] = useState<Platform[]>([]);
    const [getError,setError] = useState("");
    const [isLoading,setIsLoading] = useState(true);
    useEffect(()=>{
        const controller = new AbortController();
        apiClient.get<PlatformResponse>("/platforms/lists/parents",{signal:controller.signal}).then(a=> {
            usePlatform(a.data.results);
            setIsLoading(false)})
        .catch(err=>{
            if(err  instanceof CanceledError) return;
            setError(err)
        });
        return ()=> controller.abort();
       },[])

       return {platform, getError, isLoading};
}
export default usePlatform;