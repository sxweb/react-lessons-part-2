export default class GotObject{

    constructor(){
        this._baseUrl = 'https://anapioficeandfire.com/api/';
    }

    getObject = async(url) => {
        const res = await fetch(`${this._baseUrl}${url}`);
        const json = await res.json();
        return json;
    }

    getCharacter = async(id) => {
        const res =  await this.getObject(`characters/${id}`);
        return this._transformCharacter(res);
    }

    getBook = (id) =>{
        return this.getObject(`books/${id}`);
    }

    getHouse = (id) => {
        return this.getObject(`houses/${id}`);
    }

    getCharacters = async() => {
        const res = await this.getObject(`characters/?page=4`);
        return res.map(this._transformCharacter);
    }

    getBooks = async() => {
        const res = await this.getObject(`books`);
        return res.map(this._transformBook);
    }
    getHouses = async() => {
        const res = await this.getObject(`houses`);
        return res.map(this._transformHouse);
    }

    getId =(value) =>{
        const reg = /\d/gi;
        const id = parseInt(value.match(reg).join(''));
        return id;
    }

    checkValue = (value) =>{
        value = value ? value : 'no data'
        return value;
    }

    _transformCharacter = (char) =>{
        const id = this.getId(char.url);
        return{
            name:  this.checkValue(char.name),
            gender:  this.checkValue(char.gender),
            born: this.checkValue(char.born),
            died: this.checkValue(char.died),
            culture: this.checkValue(char.culture),
            id: this.checkValue(id)
        }
    }

    _transformHouse = (house) =>{
        const id = this.getId(house.url);
        return{
            name: this.checkValue(house.name),
            region: this.checkValue(house.region),
            words: this.checkValue(house.words),
            titles: this.checkValue(house.titles),
            overlord: this.checkValue(house.overlord),
            ancestralWeapons: this.checkValue(house.ancestralWeapons),
            id: this.checkValue(id)
        }
    }

    _transformBook = (book) =>{
        const id = this.getId(book.url);
        return{
            name: this.checkValue(book.name),
            numberOfPages: this.checkValue(book.numberOfPages),
            publisher: this.checkValue(book.publisher),
            released: this.checkValue(book.released),
            id: this.checkValue(id)
        }
    }
}