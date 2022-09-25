class Show {
    constructor(){
        this.id = null
        this.name = null
        this.genres = []
        this.rating = null
        this.image = null
        this.runtime = null
        this.summary = null
        this.premiered = null
    }

    fromData(data){
        this.id = data.id
        this.name = data.name
        this.genres = data.genres
        this.rating = data.rating
        this.image = data.image
        this.runtime = data.runtime
        this.summary = data.summary
        this.premiered = data.premiered
    }
}

export default Show