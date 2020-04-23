/*
 * @Author: yoo
 * @Date: 2020-04-23 12:15:25
 * @LastEditTime: 2020-04-23 14:21:39
 * @LastEditors: yoo
 */
import axios from "axios";

var HttpService = {
  get(url: string, data: any) {
    return new Promise((resolve, reject) => {
      axios
        .get(url, {
          params: data
        })
        .then((res) => {
          console.log(res);
          if (res.data.code == 200) {
            resolve(res.data.data);
          }
        })
        .catch((err) => {
          resolve(err);
        });
    });
  },
  post(url: string, data: any) {
    return new Promise((resolve, reject) => {
      axios
        .post(url, {
          params: data
        })
        .then((res) => {
          if (res.data.code == 200) {
            resolve(res.data.data);
          }
        })
        .catch((err) => {
          resolve(err);
        });
    });
  }
}
export default HttpService;