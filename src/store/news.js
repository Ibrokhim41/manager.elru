import { makeAutoObservable } from "mobx";
import axios_instance from "./helpers/instance";

class news {
  data = [];
  new_data = {};

  constructor() {
    makeAutoObservable(this);
  }

  get_news() {
    axios_instance
      .get("/ru/news")
      .then((res) => {
        this.data = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  remove_news(ids) {
    let url = "/ru/news/delete";
    ids.forEach((item, index) => {
      if (index === 0) {
        url += `?d=${item}`;
      } else {
        url += `&d=${item}`;
      }
    });
    axios_instance
      .get(url)
      .then(() => {
        this.get_news();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  create_news() {
    let form_data = new FormData();
    form_data.append("image", this.new_data.image);
    form_data.append("image1", this.new_data.image1);
    form_data.append("image2", this.new_data.image2);
    form_data.append("title_uz", this.new_data.title_uz);
    form_data.append("title_ru", this.new_data.title_ru);
    form_data.append("title_en", this.new_data.title_en);
    form_data.append("content_uz", this.new_data.content_uz);
    form_data.append("content_ru", this.new_data.content_ru);
    form_data.append("content_en", this.new_data.content_en);
    form_data.append("info_uz", this.new_data.info_uz);
    form_data.append("info_ru", this.new_data.info_ru);
    form_data.append("info_en", this.new_data.info_en);
    axios_instance
      .post("/ru/news/create/", form_data)
      .then((res) => {
        console.log(res);
        this.get_news();
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export default new news();
