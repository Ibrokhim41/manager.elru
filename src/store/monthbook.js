import { makeAutoObservable } from "mobx";
import axios_instance from "./helpers/instance";

class month_books {
  new_data = {};
  constructor() {
    makeAutoObservable(this);
  }

  create_month_books() {
    let form_data = new FormData();
    form_data.append("image", this.new_data.image);
    form_data.append("link", this.new_data.link);
    axios_instance
      .post(`/ru/blocks/monthbook/create/`, form_data)
      .then(() => {
        this.new_data = {};
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export default new month_books();
