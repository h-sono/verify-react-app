import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { TodoForm } from '../const/Form.tsx';
import { SessionStorageSet } from '../utils/SessionStorageUtils.tsx';
import { ResistrationTypeList } from '../const/RegistrationType.tsx';
import { Delete } from '../const/RegistrationType.tsx';
import { CONFIRM } from '../const/RoutingPath.tsx';
import { UserInfoContext } from '../hook/CommonUseContext.tsx';

export interface UpdateButtonInfo {
  todo?: string;
  todo_id?: number;
  date?: string;
  pagePath: string;
  applType: string;
}

export const UpdateButton: React.FC<UpdateButtonInfo> = props => {
  const { todo_id = 0, todo = '', date = '', pagePath, applType } = props;
  // ページ遷移で使用するナビゲーションの宣言。
  const navigate = useNavigate();
  // ユーザー情報を格納しているコンテキストの呼び出し。
  const UseUserContext = useContext(UserInfoContext);
  // 登録種別に対応した登録種別名の状態管理。
  const [applTypeName, setApplTypeName] = React.useState<string>('');

  // 取得した登録種別名をセット。
  React.useEffect(() => {
    if (ResistrationTypeList[applType] !== undefined) {
      setApplTypeName(ResistrationTypeList[applType]);
    }
  }, [applType]);

  // 新規 or 変更 or 削除ボタンを押下するときのアクション。
  const handleButtonClick = () => {
    // セッションストレージに選択したTodoの情報を保存。
    SessionStorageSet(TodoForm, {
      user_id: UseUserContext.user_id,
      todo_id: todo_id,
      todo: todo,
      date: date,
      applType: applType
    });
    // ボタンを押下したときに遷移するページを指定。
    if (applType !== Delete) {
      navigate(pagePath);
    } else {
      // 削除時は確認画面に遷移。
      navigate(CONFIRM);
    }
  };

  return (
    <div>
      <button onClick={handleButtonClick}>{applTypeName}</button>
    </div>
  );
};
