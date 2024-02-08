import React from 'react';
import { useNavigate } from 'react-router-dom';

// memo、dateのデータが欲しい
// 新規、変更、解約のコードをセッションストレージに保管してどの申し込みを実行するか判定
// ボタンを押下したときにセッションストレージに値を保存

export interface ButtonInfo {
  memo: string;
  date: string;
  pagePath: string;
  // 申し込み種別：N(New),M(Modify),C(Cancel)
  applType: string;
}

export const Button: React.FC<ButtonInfo> = props => {
  const { memo, date, pagePath, applType } = props;
  // const [buttonClicked, setButtonClicked] = React.useState<boolean>(false);
  const navigate = useNavigate();
  // ボタンを押下するときのアクション。
  const handleButtonClick = () => {
    // セッションストレージに値を保存
    // sessionStorage.setItem("TopTableSelectData", "hoge");
    sessionStorage.setItem(
      'TopTableSelectData',
      JSON.stringify({
        memo: memo,
        date: date,
        applType: applType
      })
    );
    // ページを指定。
    navigate(pagePath);
    // ボタンを押下したしたときにtrueに切り替え。
    // setButtonClicked(true);
  };

  // const handleClick = () => {
  //   sessionStorage.setItem("TopTableSelectData", "hoge");
  //   navigate("/input");
  // };
  return <button onClick={handleButtonClick}>※ボタンテスト</button>;
};
