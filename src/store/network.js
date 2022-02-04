import {makeAutoObservable} from "mobx";
import axios_instance from "./helpers/instance";

class network {
    new_data = {}

    constructor() {
        makeAutoObservable(this)
    }
    create_network() {
        axios_instance.post('/ru/blocks/network/create/' , this.new_data).then(() => {
        }).catch((err) => {
            console.log(err)
        })
    }
}

export default new network()