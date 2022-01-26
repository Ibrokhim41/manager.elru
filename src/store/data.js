import { makeAutoObservable } from "mobx";
import axios from "axios";
import { api_url } from "./api_ulr";

class data {
    loged = 0;
    refresh = 0;
    categories = [];
    searched_categories = [];
    category = {};
    authors = [];
    author = {};

    constructor() {
        makeAutoObservable(this);
    }

    // categories
    fetchCategories() {
        axios
            .get(`${api_url}/ru/category/`)
            .then((data) => {
                this.categories = data.data;
            })
            .catch((err) => {
                err.response.status === 401 && this.refresh++;
            });
    }
    addCategory(data) {
        axios.post(`${api_url}/ru/category/create/`, data, {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
        });
    }
    removeCategory(data) {
        axios.delete(`${api_url}/ru/category/delate/`, data, {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
        });
    }
    updateCategory(data) {
        axios.put(`${api_url}/ru/category/update/${data.id}/`, data.data, {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
        });
    }
    getCategory(id) {
        axios
            .get(`${api_url}/ru/category/update/${id}/`, {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem("token")}`,
                },
            })
            .then((res) => {
                this.category = res.data;
            });
    }
    searchCategory(value) {
        this.searched_categories = this.categories.filter((item) =>
            item.title_en.toLowerCase().includes(value.toLowerCase())
        );
    }

    // authors
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

    // refresh token
    refreshToken() {
        // axios
        //     .post(
        //         `${api_url}/api/token/refresh/`,
        //         { refresh: sessionStorage.getItem("refresh_token") },
        //         {
        //             headers: {
        //                 Authorization: `Bearer ${sessionStorage.getItem(
        //                     "refresh_token"
        //                 )}`,
        //             },
        //         }
        //     )
        //     .then((res) => {
        //         sessionStorage.setItem("token", res.data.access);
        //     });
    }

    // isloged
    setLoged() {
        this.loged = 1;
    }
}

export default new data();
