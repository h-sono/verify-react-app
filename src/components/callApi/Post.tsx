import axios from 'axios';

// クッキーを送信するための設定。
axios.defaults.withCredentials = true;

export const Post = async (url: string, req: object, config: object) => {
  let resData: object = {};
  await axios
    .post(url, req, config)
    .then((res: any) => {
      // ステータスコード:200の時のレスポンスデータの取得。
      resData = res.data;
    })
    .catch(e => {
      console.log('Post:APIの呼び出しでエラーが発生しました。');
      console.log(e);
      // エラーの時のレスポンスデータを取得。
      resData = e.response.data;
    });
  // Promise<object>を返却。
  return resData;
};
