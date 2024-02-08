import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TOP, CONFIRM } from '../const/routingPath.tsx';

export const InputPage: React.FC = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(CONFIRM);
  };
  const pageBack = () => {
    navigate(TOP);
  };
  return (
    <div>
      <p>入力ページ</p>
      <button onClick={handleClick}>確認</button>
      <button onClick={pageBack}>戻る</button>
    </div>
  );
};
