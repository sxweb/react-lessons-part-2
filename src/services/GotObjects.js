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
}