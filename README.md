## ソースの保管場所

- https://github.com/h-sono/verify-react-app

## ログインページのパス

- `http://localhost:3000/todo/login/`

## Django REST Flamework 側のパス

- `http://localhost:8000/api/`の後に API のパスを入れる。
  ※例：`http://localhost:8000/api/todo/`

## Docker イメージの保管場所

- https://hub.docker.com/
- Repositories にある。

## React

- 起動する：`C:\Users\sonob\github\test-app>npm start`

## Django

### 全般

- 仮想環境に切り替える(Ubuntu)：`C:\Users\sonob\github\verify-react-app>`で`source todoappenv/bin/activate`
- 起動する：`(testenv) C:\Users\sonob\github\test-app\testapp>python manage.py runserver`
  ※settings の local.py を読み取る場合：`python manage.py runserver --settings=todo_app_v2.settings.local`
- パッケージを requirements.txt に出力：`pip freeze > requirements.txt`
- パッケージを requirements.txt からインストール：`pip install -r requirements.txt`
- `todo_app`配下の`models.py`でマイグレーションファイルを生成：`python manage.py makemigrations todo_app`
  ※PostgreSQl の認証ができない場合は`docker-compose down --rmi all`でイメージ、コンテナ、ボリュームをすべて削除して再度`docker-compose up --build`でビルドしなおす。docker 起動中にパスワードを変更したり、古いパスワードのイメージやコンテナを使っていると認証エラーが発生することがある。
- `todo_app/migrations/`配下のマイグレーションファイルでマイグレートする：`python manage.py migrate todo_app`

### Django REST framework の UI を開く場合

- Docker にて Django を起動した状態で：`http:/localhost:8000/api/{特定のAPIのURL}`

## Docker

### 各種コマンド

- 起動：`docker-compose up --build`
- コンテナに接続：`docker-compose exec {コンテナ名} bash`
  ※例：docker-compose exec db bash

### Docker イメージに関して

- bash を使用できるイメージとできないイメージがあるので注意。
- 現状、Debian のバージョン 12（コードネーム：bullseye）を使用。

### React から API リクエストを Django サーバーに転送する設定

- `package.json`に追加した`proxy": "http://django:8000"`で転送。
- 「django」は docker-compose.yml のコンテナ名。django コンテナの 8000 番ポートに転送。

### イメージの管理方法

- Docker hub を使用。以下イメージのプッシュ手順。
  - イメージのビルド。イメージ名は`docker image ls`で確認。
    docker build -t {Docker アカウントのユーザー名}/イメージ名 {Dockerfile を配置しているディレクトリ} -f {ビルド対象の Dockerfile}
  - イメージのビルドが成功したらそれに対してリポジトリ情報をタグ付けする必要がある。
    docker tag {Docker アカウントのユーザー名}/イメージ名:{タグ名(任意)} docker.io/{Docker アカウントのユーザー名}/イメージ名:{タグ名(任意)}
  - Docker Hub にイメージをプッシュする。
    docker push docker.io/{Docker アカウントのユーザー名}/イメージ名:{タグ名(任意)}

### イメージのプッシュ手順

#### イメージ：verify-app-react（サービス名：react）のプッシュ手順

- イメージのビルド：`PS C:\Users\sonob\github\test-app> docker build -t hsonosono/test-app-react . -f Dockerfile.front`
- タグ付け：`PS C:\Users\sonob\github\test-app> docker tag hsonosono/test-app-react:latest docker.io/hsonosono/test-app-react:latest`
- Docker Hub へのイメージのプッシュ：`PS C:\Users\sonob\github\test-app> docker push docker.io/hsonosono/test-app-react:latest`

#### イメージ：verify-app-django（サービス名：django）のプッシュ手順

- イメージのビルド：`PS C:\Users\sonob\github\test-app> docker build -t hsonosono/test-app-django . -f Dockerfile.app`
- タグ付け：`PS C:\Users\sonob\github\test-app> docker tag hsonosono/test-app-django:latest docker.io/hsonosono/test-app-django:latest`
- Docker Hub へのイメージのプッシュ：`PS C:\Users\sonob\github\test-app> docker push docker.io/hsonosono/test-app-react:latest`

### イメージのビルド設定

- `docker-compose.yml`にて Docker Hub で保管しているイメージをビルドする場合は以下のようにする。
- image で Docker Hub で保管しているイメージをプルしてビルドする。
  ※Docker Hub で管理しているイメージは公開されるので注意。

````yml
react:
  image: docker.io/hsonosono/test-app-react:latest
  ports:
    - '3000:3000'
  depends_on:
    - django
```

- 通常はローカルに配置している Dockerfile からビルドする。

```yml
build:
  context: .
  dockerfile: Dockerfile.front
````

### Docker で未使用のイメージを削除する方法

- `$ docker image prune`を実行。使用しているイメージは残る。

### Docker Hub にイメージを保管せず、ローカルでビルドした他のイメージを使う方法

- 以下はビルドした react1 のイメージ：test-app-react1 を、react2 でプルして使う場合。
- react2 の`depends_on`で react1 を指定しておかないと react1 がビルドされる前に react2 がビルドされてしまい、react2 で react1 のイメージをプルすることができず、ビルドが失敗する。

```yml
react1:
  build:
    context: .
    dockerfile: Dockerfile.front
  ports:
    - '3000:3000'
  depends_on:
    - django

react2:
  image: test-app-react1
  ports:
    - '3002:3000'
  depends_on:
    - react1
```

## db コンテナ

- `POSTGRES_DB`、`POSTGRES_USER`、`POSTGRES_PASSWORD`は Django の settings の`DATABASES`の設定値と統一する。
- Django 側でマイグレーションされて DB が生成されてから PostgreSQL に接続する。
- `docker-compose exec db bash`で db コンテナに接続してから、`psql -U todo_app_user -d todo_app_db`で PostgreSQL に接続する。

### Docker イメージのサイズが大きくならないよう注意すること

- `COPY . .`のようにルートディレクトリのソースすべてをワークディレクトリにコピーするとイメージサイズが大きくなる。必要なディレクトリだけコピーするようにする。

### Docker 起動時に以下エラーが発生した場合の対応

- `sh: 1: react-scripts: Permission denied`
  ⇒react-scripts に実行権限を与える。verify-react-app ディレクトリで`chmod +x node_modules/.bin/react-scripts`実行。

### テーブルデータ
- 以下、todoテーブルにデータを挿入するときの例。
```sql
INSERT INTO todo (id, created_date_time, update_date_time, del_flg, todo, appltype, user_id) VALUES (1, NOW(), NOW(), false, 'テストtodo1', '["M", "C"]', 1);
```
- テーブルデータをjson形式でダンプする(Dockerは起動しておく)。
```bash
$ docker-compose exec django bash
$ python manage.py dumpdata --indent 4 > dumpdata.json
```
- json形式でダンプしておいたテーブルデータをロードする(Dockerは起動しておく)。
```bash
$ docker-compose exec django bash
# 以下コマンドを実行するディレクトリにあらかじめロードしたいjsonファイルを配置しておく。
$ python manage.py loaddata dumpdata.json
```

## Reactをビルドせず開発サーバーで起動してDjango側のAPIを呼び出す
- `docker-compose.yml`のサービス：`react-nginx`は`npm run build`で生成したhtml/jsファイル
をNginxで配信してブラウザに描画している。よって、ビルド後にReact側のソースを変更しても変更が
反映されない。
- 開発時は即時変更を反映させたいので以下のようにする。
  - `docker-compose.yml`のサービス：`react-nginx`をコメントアウトしてから`docker-compose up -d`などでDockerを起動。
  - 別ターミナルで`npm run start`を実行し、Reactの開発サーバーを起動。
  - ReactのAPI呼び出しコンポーネントを以下のように一時的に修正してDjango側のAPIにアクセスできるようにする。以下は/src/components/callApi/GetTodoList.tsxの例。
  ```typescript
  export const getTodoList = (user_id?: number) => {
    // return Get(`/api/todo/${user_id}`);
    return Get(`http://localhost:8000/api/todo/${user_id}`);
  };
  ```