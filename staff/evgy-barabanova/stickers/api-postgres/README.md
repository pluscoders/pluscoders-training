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
$ sequel
```

**TODO create registration process (middleware...); use insomnia to test it**

