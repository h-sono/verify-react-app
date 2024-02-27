import axios from 'axios';

export const Get = async (url: string) => {
  let resData: object = {};
  await axios
    .get(url)
    .then((res: any) => {
      // ステータスコード:200の時のレスポンスデータの取得。
      resData = res.data;
    })
    .catch(e => {
      console.log('Get:APIの呼び出しでエラーが発生しました。');
      console.log(e);
      // エラーの時のレスポンスデータを取得。
      resData = e.response.data;
    });
  // Promise<object>を返却。
  return resData;
};
