## ソースの保管場所

- https://github.com/h-sono/verify-react-app

## Docker イメージの保管場所

- https://hub.docker.com/
- Repositories にある。

## React

- 起動する：`C:\Users\sonob\github\test-app>npm start`

## Django

- 仮想環境に切り替える：`C:\Users\sonob\github\test-app>`で`testenv\Scripts\activate`
- 起動する：`(testenv) C:\Users\sonob\github\test-app\testapp>python manage.py runserver`
- パッケージを requirements.txt に出力：`pip freeze > requirements.txt`

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

#### イメージ：test-app-react（サービス名：react）のプッシュ手順

- イメージのビルド：`PS C:\Users\sonob\github\test-app> docker build -t hsonosono/test-app-react . -f Dockerfile.front`
- タグ付け：`PS C:\Users\sonob\github\test-app> docker tag hsonosono/test-app-react:latest docker.io/hsonosono/test-app-react:latest`
- Docker Hub へのイメージのプッシュ：`PS C:\Users\sonob\github\test-app> docker push docker.io/hsonosono/test-app-react:latest`

#### イメージ：test-app-django（サービス名：django）のプッシュ手順

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

テスト変更1
