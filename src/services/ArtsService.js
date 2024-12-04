import { api } from "./AxiosService.js"
import { Arts } from "@/models/Arts.js"
import { AppState } from "@/AppState.js"
import Pop from "@/utils/Pop.js"

class ArtsService {

    async getArtsByPage(pageNumber) {
        if (pageNumber == 0){
            Pop.error('Cannot Get Art On Page 0')
        } else {
            AppState.page = pageNumber
            console.log(AppState.page)
        }
    }

    async getArts(){
        const response = await api.get('api/artworks')        
        const artData = response.data.artworks.map(artPojo => new Arts(artPojo))
        AppState.Art = artData
        AppState.page = response.data.page
        AppState.totalPages = response.data.pages    
    }

}

export const artsService = new ArtsService()