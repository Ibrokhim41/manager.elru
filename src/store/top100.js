import { makeAutoObservable } from "mobx";
import axios from "axios";
import { api_url } from "./api_ulr";
const config = {
  headers: {
    Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    "Access-Control-Allow-Headers": "X-Requested-With, privatekey",
    "Content-Type": "application/json",
  },
};

class top100 {
  data = [];
  new_data = {};
  imagePreview = "";
  remove_tops = [];
  constructor() {
    makeAutoObservable(this);
  }
  async fetchTop100() {
    await axios
      .get(`${api_url}/ru/blocks/top100`, config)
      .then((res) => {
        this.data = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  add_tops() {
    let form_data = new FormData();
    form_data.append("image", this.new_data.image);
    form_data.append("link", this.new_data.link);
    form_data.append("title_uz", this.new_data.title_uz);
    form_data.append("title_ru", this.new_data.title_ru);
    form_data.append("title_en", this.new_data.title_en);
    form_data.append("content_uz", this.new_data.content_uz);
    form_data.append("content_ru", this.new_data.content_ru);
    form_data.append("content_en", this.new_data.content_en);

    axios
      .post(`${api_url}/ru/blocks/top100/create`, form_data, config)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  edit_tops(id) {
    axios
      .get(`${api_url}/ru/blocks/top100/update/${id}`, config)
      .then((res) => {
        this.new_data = res.data;
        this.imagePreview = res.data.image;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  save_tops(id) {
    let form_data = new FormData();
    form_data.append("image", this.new_data.image);
    form_data.append("link", this.new_data.link);
    form_data.append("title_uz", this.new_data.title_uz);
    form_data.append("title_ru", this.new_data.title_ru);
    form_data.append("title_en", this.new_data.title_en);
    form_data.append("content_uz", this.new_data.content_uz);
    form_data.append("content_ru", this.new_data.content_ru);
    form_data.append("content_en", this.new_data.content_en);

    axios
      .post(`${api_url}/ru/blocks/top100/update/${id}`, form_data, config)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  removeTops() {
    let url = `${api_url}/ru/blocks/top100/delete/`;
    this.remove_tops.forEach((element, index) => {
      if (index === 0) {
        url += `?d=${element}`;
      } else {
        url += `&d=${element}`;
      }
    });
    axios
      .get(url, config)
      .then(() => {
        this.fetchTop100();
        this.remove_tops = [];
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export default new top100();
