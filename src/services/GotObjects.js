export default class GotObject{

    constructor(){
        this._baseUrl = 'https://anapioficeandfire.com/api/';
    }

    async getObject(url){
        const res = await fetch(`${this._baseUrl}${url}`);
        const json = await res.json();
        return json;
    }

    async getCharacter(id){
        const res =  await this.getObject(`characters/${id}`);
        return this._transformCharacter(res);
    }

    getBook(id){
        return this.getObject(`books/${id}`);
    }

    getHouse(id){
        return this.getObject(`houses/${id}`);
    }

    async getCharacters(){
        const res = await this.getObject(`characters/?page=4`);
        return res.map(this._transformCharacter);
    }

    getBooks(){
        return this.getObject(`books`);
    }
    getHouses(){
        return this.getObject(`houses`);
    }

    _transformCharacter(char){
        const reg = /\d/gi;
        const id = parseInt(char.url.match(reg).join(''));
        return{
            name: char.name ? char.name : 'no data',
            gender: char.gender ? char.gender : 'no data',
            born: char.born ? char.born : 'no data',
            died: char.died ? char.died : 'no data',
            culture: char.culture ? char.culture : 'no data',
            id: id ? id : 'no data'
        }
    }

    _transformHouse(house){
        return{
            name: house.name,
            region: house.region,
            words: house.words,
            titles: house.titles,
            overlord: house.overlord,
            ancestralWeapons: house.ancestralWeapons
        }
    }

    _transformBook(book){
        return{
            name: book.name,
            numberOfPages: book.numberOfPages,
            publisher: book.publisher,
            released: book.released
        }
    }
}