export interface ResistrationType {
  [key: string]: string;
}

// 登録種別一覧：N(New：新規登録),M(Update：変更登録),D(Delete：削除)
export const New = 'N';
export const Modify = 'M';
export const Delete = 'D';

// 登録種別と和名の対応。
export const ResistrationTypeList: ResistrationType = {
  N: '新規',
  M: '変更',
  D: '削除'
};
