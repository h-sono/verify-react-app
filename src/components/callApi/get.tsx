import axios from 'axios';

export const Get = (url: string) => {
  let resData: object = {};
  axios
    .get(url)
    .then((res: any) => {
      console.log(res.data);
      resData = res.data;
    })
    .catch((e) => {
      console.log('API通信に失敗しました。');
      console.log(e);
    });

  return resData;
};
