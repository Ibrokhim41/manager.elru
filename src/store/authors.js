import { makeAutoObservable } from "mobx";
import axios from "axios";
import { api_url } from "./api_ulr";

class authors {
    authors = [];
    author = {};

    constructor() {
        makeAutoObservable(this);
    }

    fetchAuthors() {
        axios
            .get(`${api_url}/ru/author/`, {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem("token")}`,
                },
            })
            .then((data) => {
                this.authors = data.data;
            });
    }
    addAuthor(data) {
        axios.post(`${api_url}/ru/author/create/`, data, {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
        });
    }
    removeAuthor(id) {
        axios.post(`${api_url}/ru/author/delate/${id}/`, {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
        });
    }
    updateAuthor(data) {
        axios.put(`${api_url}/ru/author/update/${data.id}/`, data.data, {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
        });
    }
    getAuthor(id) {
        axios
            .get(`${api_url}/ru/author/update/${id}/`, {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem("token")}`,
                },
            })
            .then((res) => {
                this.author = res.data;
            });
    }
}

export default new authors();
