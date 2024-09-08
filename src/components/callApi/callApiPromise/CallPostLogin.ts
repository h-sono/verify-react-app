import { HeaderInfo } from '../../const/HeaderInfo';
import { LoginProps, LoginResProps, PostLogin } from '../PostLogin';

/**
 * ログインAPI呼び出し。
 * @param username
 * @param password
 * @param headerInfo
 * @returns
 */
export const callPostLogin = (username: string, password: string, headerInfo: HeaderInfo): Promise<LoginResProps> => {
  return new Promise((resolve, reject) => {
    // username、passwordが無い場合は処理を中断。
    if (!username || !password) return reject();

    // リクエストデータ生成。
    const reqData: LoginProps = { username, password };

    // ログインAPI実行。
    PostLogin(reqData, headerInfo).then((data: any) => {
      if ('error' in data) {
        // TODO: エラー処理を追加。
        reject();
      } else {
        // 返却値。
        const resData = data as LoginResProps;

        // 返却値を返す。
        resolve(resData);
      }
    });
  });
};
