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
