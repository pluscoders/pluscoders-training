# API (postgres)

## Tasks list

**DONE init sequelize (postgres) with the following models**

User
- id
- name
- email
- password

Note
- id
- user_id
- text
- date

Commands history

```sh
$ sequelize ...
$npm i sequelize pg dotenv

$npm i -D sequelize-cli 

Snpx sequelize init
$npx sequelize db:create
$npx sequelize model:generate --name User --attributes name:string,age:integer,email:string,password:string
$npx sequelize model:generate --name Note --attributes user_id:integer,text:string,date:integer
$npx sequelize db:migrate
```

**TODO implement registration process (middleware, bcrypt...); use insomnia to test it**

```sh
$npm init -y
$npm i express morgan nodemon dotenv cors
$npx eslint --init
$npx create-gitignore node

$npm i cookie-parser express-session session-file-store bcrypt
```

**TODO implement authentication process (middleware, bycrypt...); use insomnia to test i**

