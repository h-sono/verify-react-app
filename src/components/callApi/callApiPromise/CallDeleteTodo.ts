import { NavigateFunction } from 'react-router-dom';
import { HeaderInfo } from '../../const/HeaderInfo';
import { INPUT } from '../../const/RoutingPath';
import { DeleteTodo, DeleteTodoProps, DeleteTodoResProps } from '../DeleteTodo';

/**
 * Todo削除API呼び出し。
 * @param user_id
 * @param todo
 * @param headerInfo
 * @param navigate
 * @returns
 */
export const callDeleteTodo = (
  todo_id: number,
  user_id: number,
  headerInfo: HeaderInfo,
  navigate: NavigateFunction
): Promise<DeleteTodoResProps> => {
  return new Promise((resolve, reject) => {
    // 値が取得できなければ処理を中断。
    if (!todo_id || !user_id) return reject();

    // リクエストデータ。
    const reqData: DeleteTodoProps = { todo_id: todo_id, user_id: user_id };

    // Todo削除API実行。
    DeleteTodo(reqData, headerInfo).then((data: any) => {
      if (data.error_flg) {
        // TODO:エラーを出す。暫時入力画面に戻る。
        navigate(INPUT);
      } else {
        // 返却値。
        const resData = data as DeleteTodoResProps;

        // 返却値を返す。
        resolve(resData);
      }
    });
  });
};
