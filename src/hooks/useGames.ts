import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platform{
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform:Platform}[]
    metacritic:number;
  }
  
  interface FetchGamesResponse {
    count: number;
    results: Game[];
  }


export default function useGames(){
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const controller = new AbortController();

        apiClient
        .get<FetchGamesResponse>("/games", {signal:controller.signal})
        .then((res) => setGames(res.data.results))
        .catch((error) => {
            if (error instanceof CanceledError) return;
            setError(error.message)
    });

        return () => controller.abort();
    }, []);

    return {games, error};
}