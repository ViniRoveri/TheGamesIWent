import axios from "axios";

export const axiosGames = axios.create({
   baseURL: 'https://viniroveri.github.io/MyAPIs/json/TheGamesIWent.json'
})