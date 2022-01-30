import { makeAutoObservable } from "mobx";
import axios from "axios";
import { api_url } from "./api_ulr";

class categories {
  categories = [];
  searched_categories = [];
  category = {};
  new_category = {
    title_ru: "",
    title_uz: "",
    title_en: "",
  };
  booksId = [];

  constructor() {
    makeAutoObservable(this);
  }

  async fetchCategories() {
    await axios
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

  addNewCategory(data) {
    if (data.hasOwnProperty("title_ru")) {
      this.new_category = {
        ...this.new_category,
        title_ru: data.title_ru,
      };
    } else if (data.hasOwnProperty("title_uz")) {
      this.new_category = {
        ...this.new_category,
        title_uz: data.title_uz,
      };
    } else {
      this.new_category = {
        ...this.new_category,
        title_en: data.title_en,
      };
    }
  }

  // add selected books to category
  addBooksId(id) {
    this.booksId = id;
  }

  // add books to category and create category
  addBookToCategory() {
    axios
      .post(`${api_url}/ru/category/create/`, this.new_category, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        const category = res.data.id;
        if (this.booksId.length > 0) {
          this.booksId.forEach((id) => {
            axios
              .get(`${api_url}/ru/books/update/${id}`, {
                headers: {
                  Authorization: `Bearer ${sessionStorage.getItem("token")}`,
                },
              })
              .then((res) => {
                const data = {
                  category: res.data.category.concat(category),
                };
                axios.patch(`${api_url}/ru/books/update/${id}`, data, {
                  headers: {
                    Authorization: `Bearer ${sessionStorage.getItem("token")}`,
                  },
                });
              });
          });
        }
      });
  }
}

export default new categories();
