## Data Layer

npm i sequelize pg dotenv

npm i -D sequelize-cli

npx sequelize init
npx sequelize db:create
npx sequelize model:generate --name User --attributes name:string,age:integer,email:string,password:string
npx sequelize db:migrate

## Server Layer

npm i express hbs morgan

npm i -D nodemon
