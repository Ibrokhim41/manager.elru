import {makeAutoObservable} from "mobx";
import axios from "axios";
import {api_url} from "./api_ulr";

const config = {
    headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        "Access-Control-Allow-Origin": "*",
    },
};

class selections {
    data = [];
    single_selection = {};
    new_data = {};
    imagePreview = "";

    constructor() {
        makeAutoObservable(this);
    }

    fetchSelections() {
        axios
            .get(`${api_url}/ru/blocks/collection`, config)
            .then((res) => {
                this.data = res.data;
            })
            .catch((err) => {
                console.log(err);
            });
    }

    createSelections() {
        console.log(this.new_data);
        let form_data = new FormData();
        form_data.append("image", this.new_data.image);
        form_data.append("detail", this.new_data.detail);
        form_data.append("link", this.new_data.link);
        form_data.append("title_uz", this.new_data.title_uz);
        form_data.append("title_ru", this.new_data.title_ru);
        form_data.append("title_en", this.new_data.title_en);
        axios
            .post(`${api_url}/ru/blocks/collection/create/`, form_data, config)
            .then((res) => {
                this.imagePreview = ""
                this.new_data = {}
            })
            .catch((err) => {
                console.log(err);
            });
    }

    removeSelection(data, setSelector) {
        let url = `${api_url}/ru/blocks/collection/delete/`;
        data.forEach((element, index) => {
            if (index === 0) {
                url += `?d=${element}`;
            } else {
                url += `&d=${element}`;
            }
        });
        console.log(url);
        axios
            .get(url, config)
            .then(() => {
                this.fetchSelections();
                setSelector([])
            })
            .catch((err) => {
                console.log(err);
            });
    }

    getSelection(id) {
        axios
            .get(`${api_url}/ru/blocks/collection/update/${id}`, config)
            .then((res) => {
                this.single_selection = res.data;
                this.new_data = res.data;
                this.imagePreview = res.data.image;
            })
            .catch((err) => {
                console.log(err);
            });
    }

    update_selection(id) {
        let form_data = new FormData();
        if (typeof this.new_data.image == "object") {
            form_data.append("image", this.new_data.image);
        }
        form_data.append("detail", this.new_data.detail);
        form_data.append("link", this.new_data.link);
        form_data.append("title_uz", this.new_data.title_uz);
        form_data.append("title_ru", this.new_data.title_ru);
        form_data.append("title_en", this.new_data.title_en);
        axios
            .patch(`${api_url}/ru/blocks/collection/update/${id}/`, form_data, config)
            .then(() => {})
            .catch((err) => {
                console.log(err);
            });
    }
}

export default new selections();
