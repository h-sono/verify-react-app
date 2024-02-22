import axios from 'axios';

// クッキーを送信するための設定。
axios.defaults.withCredentials = true;

export const Post = async (url: string, req: object, config: object) => {
  let resData: object = {};
  await axios
    .post(url, req, config)
    .then((res: any) => {
      resData = res.data;
    })
    .catch(e => {
      console.log('API通信に失敗しました。');
      console.log(e);
    });
  // Promise<object>を返却。
  return resData;
};
