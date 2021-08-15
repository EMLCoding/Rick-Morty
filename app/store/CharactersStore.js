import { observable } from "mobx";

class CharactersStore {
    @observable characters = []
    @observable title = 'The Rick and Morty API'
}

export default CharactersStore