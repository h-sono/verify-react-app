import axios from 'axios';

export const Get = async (url: string) => {
  let resData: object = {};
  await axios
    .get(url)
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
