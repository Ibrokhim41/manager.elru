import {makeAutoObservable} from "mobx";
import axios_instance from "./helpers/instance";

class mainbanner {
    new_data = {}

    constructor() {
        makeAutoObservable(this)
    }

    create_main_banner() {
        let form_data = new FormData()
        form_data.append("banner1", this.new_data.banner1);
        form_data.append("banner2", this.new_data.banner2);
        form_data.append("banner3", this.new_data.banner3);
        form_data.append("link1", this.new_data.link1);
        form_data.append("link2", this.new_data.link2);
        form_data.append("link3", this.new_data.link3);
        form_data.append("small_banner1", this.new_data.small_banner1);
        form_data.append("small_banner2", this.new_data.small_banner2);
        form_data.append("small_link1", this.new_data.small_link1);
        form_data.append("small_link2", this.new_data.small_link2);

        axios_instance.post('/ru/blocks/mainbanner/create/', form_data).then(() => {

        }).catch((err) => {
            console.log(err)
        })
    }
}

export default new mainbanner()