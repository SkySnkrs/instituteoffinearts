import { api } from "./AxiosService.js"
import { Arts } from "@/models/Arts.js"
import { AppState } from "@/AppState.js"

class ArtsService {

    async getArts(){
        const response = await api.get('api/artworks')        
        const artData = response.data.artworks.map(artPojo => new Arts(artPojo))
        AppState.Art = artData
        AppState.page = response.data.page
        AppState.totalPages = response.data.pages    
    }

}

export const artsService = new ArtsService()