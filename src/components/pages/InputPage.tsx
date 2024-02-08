import React from "react";
import { useNavigate } from "react-router-dom";

export const InputPage: React.FC = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/confirm");
  };
  return (
    <div>
      <p>入力ページ</p>
      <button onClick={handleClick}>※ボタンテスト2</button>
    </div>
  );
};
