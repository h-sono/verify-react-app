// セッションストレージのTopFormの型定義。
export interface SessionStorageTodoFormProps {
  user_id: number;
  todo_id: number;
  todo: string;
  date: string;
  applType: string;
}

export interface SessionStorageUserInfoFormProps {
  user_id: number;
  user_name: string;
  login_flg: boolean;
}

/**
 * セッションストレージにキーと値をセットする関数。
 * @param key セッションストレージのキー。
 * @param setValue セッションストレージの値(オブジェクト)。
 * @returns なし
 */
export const SessionStorageSet = (key: string, setValue: object) => {
  sessionStorage.setItem(key, JSON.stringify(setValue));
};

/**
 * セッションストレージの特定のキーの値を取得する関数。
 * @param key セッションストレージのキー。
 * @returns keyに対応する値。nullであれば空オブジェクトを返却。
 */
export const SessionStorageItemGet = (key: string) => {
  const getItem = sessionStorage.getItem(key);
  return getItem ? JSON.parse(getItem) : {};
};

/**
 * セッションストレージのキーと値をすべて削除する関数。
 * @param なし
 * @returns なし
 */
export const SessionStorageAllClear = () => {
  sessionStorage.clear();
};

/**
 * セッションストレージの特定のキーと値を削除する関数。
 * @param keys セッションストレージのキーのリスト。
 * @returns なし
 */
export const SessionStorageSpecificKeysClear = (keys: string[]) => {
  keys.forEach(key => {
    sessionStorage.removeItem(key);
  });
};
