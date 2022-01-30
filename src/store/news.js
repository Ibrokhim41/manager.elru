import {makeAutoObservable} from "mobx";
import axios_instance from "./helpers/instance";

class news {
    data = [];
    new_data = {};

    constructor() {
        makeAutoObservable(this)
    }
    get_news() {
        axios_instance.get('/ru/news').then((res) => {
            this.data = res.data
        }).catch((error) => {
            console.log(error)
        })
    }
    remove_news(ids) {
        let url = "/ru/news/";
        ids.forEach((item, index) => {
            if(index === 0) {
                url += `?d=${item}`;
            }else {
                url += `&d=${item}`
            }
        })
        axios_instance.get(url).then(() => {
            this.get_news()
        }).catch((err) => {
            console.log(err)
        })
    }
    create_news() {
        let form_data = new FormData()
        form_data.append('image', this.new_data.image)
        form_data.append('title', this.new_data.title)
        form_data.append('content', this.new_data.content)
        form_data.append('info', this.new_data.info)
        axios_instance.post('/ru/news/create/', form_data).then((res) => {
            console.log(res)
            this.get_news()
        }).catch((err) => {
            console.log(err)
        })
    }
}

export default new news()