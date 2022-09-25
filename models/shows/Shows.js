import Show from "./Show"

class Shows {
    constructor(){
        this.shows = []
    }

    fromData(shows){
        shows.map(rawShow =>{
            const show = new Show()
            show.fromData(rawShow)
            this.shows.push(show)
        })
    }
}

export default Shows