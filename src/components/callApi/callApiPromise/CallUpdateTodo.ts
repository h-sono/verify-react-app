import { NavigateFunction } from 'react-router-dom';
import { HeaderInfo } from '../../const/HeaderInfo';
import { INPUT } from '../../const/RoutingPath';
import { UpdateTodo, UpdateTodoProps, UpdateTodoResProps } from '../UpdateTodo';

/**
 * Todo更新API呼び出し。
 * @param user_id
 * @param todo
 * @param headerInfo
 * @param navigate
 * @returns
 */
export const callUpdateTodo = (
  todo_id: number,
  user_id: number,
  todo: string,
  headerInfo: HeaderInfo,
  navigate: NavigateFunction
): Promise<UpdateTodoResProps> => {
  return new Promise((resolve, reject) => {
    // 値が取得できなければ処理を中断。
    if (!user_id || !todo_id || !todo) return reject();

    // リクエストデータ。
    const reqData: UpdateTodoProps = { todo_id: todo_id, user_id: user_id, todo: todo };

    // Todo更新API実行。
    UpdateTodo(reqData, headerInfo).then((data: any) => {
      if (data.error_flg) {
        // TODO:エラーを出す。暫時入力画面に戻る。
        navigate(INPUT);
      } else {
        // 返却値。
        const resData = data as UpdateTodoResProps;

        // 返却値を返す。
        resolve(resData);
      }
    });
  });
};
