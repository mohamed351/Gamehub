import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface GeneraResponse{
    count:number;
    results:Genera[]
}
interface Genera{
    id:number;
    name:string;
    image_background:string;
}

const useGanara =()=>{

    const [genera,setGenera] = useState<Genera[]>([]);
    const [getError,setError] = useState("");
    const [isLoading,setIsLoading] = useState(true);
    useEffect(()=>{
        const controller = new AbortController();
        apiClient.get<GeneraResponse>("/genres",{signal:controller.signal}).then(a=> {
            setGenera(a.data.results);
            setIsLoading(false)})
        .catch(err=>{
            if(err  instanceof CanceledError) return;
            setError(err)
        });
        return ()=> controller.abort();
       },[])

       return {genera, getError, isLoading};
}
export default useGanara;