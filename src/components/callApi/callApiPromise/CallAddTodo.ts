import { NavigateFunction } from 'react-router-dom';
import { AddTodo, AddTodoResProps } from '../AddTodo';
import { HeaderInfo } from '../../const/HeaderInfo';
import { INPUT } from '../../const/RoutingPath';

/**
 * Todo新規登録API呼び出し。
 * @param user_id
 * @param todo
 * @param headerInfo
 * @param navigate
 * @returns
 */
export const callAddTodo = (
  user_id: number,
  todo: string,
  headerInfo: HeaderInfo,
  navigate: NavigateFunction
): Promise<AddTodoResProps> => {
  return new Promise((resolve, reject) => {
    // 値が取得できなければ処理を中断。
    if (!user_id || !todo) return reject();

    // リクエストデータ。
    const reqData = { user_id: user_id, todo: todo };

    // Todo新規登録API実行。
    AddTodo(reqData, headerInfo).then((data: any) => {
      if (data.error_flg) {
        // TODO:エラーを出す。暫時入力画面に戻る。
        navigate(INPUT);
      } else {
        // 返却値。
        const resData = data as AddTodoResProps;

        // 返却値を返す。
        resolve(resData);
      }
    });
  });
};
