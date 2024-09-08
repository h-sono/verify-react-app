import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ResistrationTypeList, New, Modify, Delete } from '../const/RegistrationType';
import { CONFIRM } from '../const/RoutingPath';
import { ButtonContainer, NewButton, ModifyButton, DeleteButton } from '../style/UpdateButtonStyle';
import { useDispatch, useSelector } from 'react-redux';
import { setTodoListInfo } from '../../store/TodoListInfoSlice';
import { selectUserInfo } from '../../store/UserInfoSlice';

export interface UpdateButtonInfo {
  todo?: string;
  todo_id?: number;
  date?: string;
  pagePath: string;
  applType: string;
}

// 新規 or 変更 or 削除ボタン。
export const UpdateButton: React.FC<UpdateButtonInfo> = props => {
  const { todo_id = 0, todo = '', date = '', pagePath, applType } = props;

  // reduxストアへの値のディスパッチ。
  const dispatch = useDispatch();

  // ページ遷移で使用するナビゲーションの宣言。
  const navigate = useNavigate();

  // ユーザー情報を取得。
  const userInfo = useSelector(selectUserInfo);

  // 登録種別に対応した登録種別名の状態管理。
  const [applTypeName, setApplTypeName] = React.useState<string>('');

  // 取得した登録種別名をセット。
  React.useEffect(() => {
    if (ResistrationTypeList[applType]) {
      setApplTypeName(ResistrationTypeList[applType]);
    }
  }, [applType]);

  // 新規 or 変更 or 削除ボタンを押下するときのアクション。
  const handleButtonClick = () => {
    // 選択したTodoの情報をreduxストアに保存。
    dispatch(
      setTodoListInfo({
        user_id: userInfo.user_id ?? 0,
        todo_id: todo_id,
        todo: todo,
        date: date,
        applType: applType
      })
    );

    // ボタンを押下したときに遷移するページを指定。
    if (applType !== Delete) {
      navigate(pagePath);
    } else {
      // 削除時は確認画面に遷移。
      navigate(CONFIRM);
    }
  };

  let Button: any;
  switch (applType) {
    case New:
      Button = <NewButton onClick={handleButtonClick}>{applTypeName}</NewButton>;
      break;
    case Modify:
      Button = <ModifyButton onClick={handleButtonClick}>{applTypeName}</ModifyButton>;
      break;
    case Delete:
      Button = <DeleteButton onClick={handleButtonClick}>{applTypeName}</DeleteButton>;
      break;
    default:
      Button = <p>※予想外の登録種別によりボタンが正常に表示されません。</p>;
      break;
  }

  return <ButtonContainer>{Button}</ButtonContainer>;
};
