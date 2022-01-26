import { makeAutoObservable } from "mobx";
import axios from "axios";
import { api_url } from "./api_ulr";

class Books {
    refresh = 0;
    data = [];
    filter_books = [];
    isFilter = false;

    constructor() {
        makeAutoObservable(this);
    }

    async fetchBooks() {
        await axios
            .get(`${api_url}/ru/books/`, {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem("token")}`,
                },
            })
            .then((data) => {
                this.data = data.data;
            })
            .catch((err) => {
                err.response.status === 401 && this.refresh++;
            });
    }

    filterBooks(data) {
        if (data.category && data.category !== "Все") {
            axios.get(`${api_url}/ru/category/${data.category}`).then((res) => {
                this.data = res.data;
                if (res.data.length !== 0) {
                    if (data.title) {
                        this.data = this.data.filter((book) =>
                            book.title_ru
                                .toLowerCase()
                                .includes(data.title.toLowerCase())
                        );
                    }
                    if (data.author) {
                        this.data = this.data.filter((book) =>
                            book.author.name_ru
                                .toLowerCase()
                                .includes(data.author.toLowerCase())
                        );
                    }
                }
            });
        } else {
            this.fetchBooks().then(() => {
                if (data.title) {
                    this.data = this.data.filter((book) =>
                        book.title_ru
                            .toLowerCase()
                            .includes(data.title.toLowerCase())
                    );
                }
                if (data.author) {
                    this.data = this.data.filter((book) =>
                        book.author.name_ru
                            .toLowerCase()
                            .includes(data.author.toLowerCase())
                    );
                }
            });
        }
    }

    // filterBooks(data) {
    //     if (data.category && data.category !== "Все") {
    //         axios.get(`${api_url}/ru/category/${data.category}`).then((res) => {
    //             this.filter_books = res.data;
    //             if (res.data.length === 0) {
    //                 this.data = [];
    //             } else {
    //                 if (data.title) {
    //                     this.filter_books = this.filter_books.filter((book) =>
    //                         book.title_ru
    //                             .toLowerCase()
    //                             .includes(data.title.toLowerCase())
    //                     );
    //                 }
    //                 if (data.author) {
    //                     this.filter_books = this.filter_books.filter((book) =>
    //                         book.author.name_ru
    //                             .toLowerCase()
    //                             .includes(data.author.toLowerCase())
    //                     );
    //                 }
    //             }
    //         });
    //     } else {
    //         if (this.data === []) {
    //             this.fetchBooks().then(() => {
    //                 this.filter_books = this.data;
    //             });
    //         } else {
    //             this.filter_books = this.data;
    //         }
    //         if (data.title) {
    //             this.filter_books = this.filter_books.filter((book) =>
    //                 book.title_ru
    //                     .toLowerCase()
    //                     .includes(data.title.toLowerCase())
    //             );
    //         } else {
    //             this.filter_books = [];
    //         }
    //         if (data.author) {
    //             this.filter_books = this.filter_books.filter((book) =>
    //                 book.author.name_ru
    //                     .toLowerCase()
    //                     .includes(data.author.toLowerCase())
    //             );
    //         } else {
    //             this.filter_books = [];
    //         }
    //     }
    //     if(data.title !== "" || data.author !== "" || data.category !== ""){
    //         this.isFilter = this.isFilter + 1;
    //     } else {
    //         this.isFilter = 0;
    //     }
    // }
}

export default new Books();
