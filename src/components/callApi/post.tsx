import axios from 'axios';

export const Post = (url: string, req: any) => {
  let resData: object = {};
  axios
    .post(url, req)
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
