export class Arts{
    constructor(data){
        this.description = data.description, 
        this.id = data.id,
        this.imageUrl = data.imgUrls.thumb,
        this.attribution = data.attribution,
        this.color = data.color,
        this.height = data.height,
        this.width = data.width
    }
}
