import { getTodoList, GetTodoListResProps } from '../GetTodoList';

/**
 * Todoリスト取得API呼び出し。
 * @param user_id
 * @returns
 */
export const callGetTodoList = (user_id: number): Promise<GetTodoListResProps> => {
  return new Promise((resolve, reject) => {
    // 値が取得できなければ処理を中断。
    if (!user_id) return reject();

    // TodoリストAPI実行。
    getTodoList(user_id).then((data: any) => {
      if (data.error_flg) {
        // TODO: エラー画面作成予定。
        reject();
      } else {
        // 返却値。
        const resData = data as GetTodoListResProps;

        // 返却値をセット。
        resolve(resData);
      }
    });
  });
};
