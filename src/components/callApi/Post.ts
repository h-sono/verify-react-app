import axios from 'axios';

// クッキーを送信するための設定。
axios.defaults.withCredentials = true;

/**
 * Post APIの共通関数。
 * ・ジェネリクス型を使用。TReqはリクエストデータの型、TResはレスポンスデータの型。
 * @param url APIのURL。
 * @param req APIのリクエストデータ。
 * @param config postのconfig。
 * @returns
 */
export const Post = async <TReq extends object, TRes extends object>(
  url: string,
  req: TReq,
  config: object
): Promise<TRes | null> => {
  // 返却値を管理。
  let resData: TRes | null = null;

  console.log('config', config);

  await axios
    .post(url, req, config)
    .then((res: any) => {
      // ステータスコード:200の時のレスポンスデータの取得。
      resData = res.data as TRes;
    })
    .catch(e => {
      // TODO: エラー処理
      if (e.response) {
        // リクエストがサーバーに届いたときのエラー処理。
        // ステータスコードを取得。
        const statusCode = e.response.status;

        if (statusCode >= 400 && statusCode < 500) {
          // 400系エラー（クライアントエラー）の処理。
          console.log(`Client Error: ステータスコード: ${statusCode}`);
          console.log('リクエストが正しくありません。クライアントエラーが発生しました。');
        } else if (statusCode >= 500 && statusCode < 600) {
          // 500系エラー（サーバーエラー）の処理。
          console.log(`Server Error: ステータスコード: ${statusCode}`);
          console.log('サーバーエラーが発生しました。サーバー側で問題が発生しています。');
        } else {
          // その他のエラー。
          console.log(`Unexpected Error: ステータスコード: ${statusCode}`);
        }
        // エラーの時のレスポンスデータを取得。
        resData = e.response.data as TRes;
      } else if (e.request) {
        // リクエストがサーバーに届かなかった場合のエラー処理。
        console.log('Post: リクエストがサーバーに到達しませんでした。');
        console.log(e.request);
        throw new Error('リクエストがサーバーに到達しませんでした。');
      } else {
        // 想定外のエラーが起きたときの処理。
        console.log('Post: リクエストの設定中にエラーが発生しました。');
        console.log(e.message);
        throw new Error(e.message);
      }
    });

  // Promise<TRes>を返却。
  return resData;
};
