export default class GotObject{

    constructor(){
        this._baseUrl = 'https://anapioficeandfire.com/api/';
    }

    async getObject(url){
        const res = await fetch(`${this._baseUrl}${url}`);
        const json = await res.json();
        return json;
    }

    getCharacter(id){
        return this.getObject(`characters/${id}`);
    }

    getBook(id){
        return this.getObject(`books/${id}`);
    }

    getHouse(id){
        return this.getObject(`houses/${id}`);
    }

    getCharacters(){
        return this.getObject(`characters/?page=4`);
    }

    getBooks(){
        return this.getObject(`books`);
    }
    getHouses(){
        return this.getObject(`houses`);
    }
}