# mylo_assignment

This Repository contains the solution of an assignment
### database structure
 - There are four table in the database(user,role,permission,mapping).
 - User table stores the user name,role,id,and password.
 - Role table stores the roles(like admin,moderator etc.) and it's id.
 - Permission table stores the union of permissions that will be given to any type of user.
 - Mapping(table name is rpMaps) store mapping between roleId and permissionId.
 
### Installation

Install the dependencies and start the server.

```sh
$ git clone https://github.com/Villan-98/mylo_assignment.git
$ cd mylo_assignment
$ npm install
```
commands for create user and database in mysql are:
```sh
> create user 'username'@'localhost' identified by 'password'
> create database 'database_name'
> use 'database_name'
> grant all privileges on *.* to 'username'@'localhost'
```
 make config.json add the db credential and salt rounds in it(sample config is available for your refrence).
then run command:
```
$ npm start
```
- use api end point `api/home` to see basic functionality(non- premium user)
- add roles in db using post request on `admin/role`
- signup as (using post request on `auth/signUp`)
- signin using using post request on `auth/signUp`.

 ## API Endpoints
 
 ### open endpoints
 - User do not require to login first to fetch successfull result from these endpoints.
 - user has to send json in post request.
 - for login keys of the json data will be:- 'username' and 'password'.
 - for signUp keys of the json data will be:- 'name', 'password' and 'role'.
- Api end points are:-
     > [Login]  : `POST /auth/signIn/`<br/>
     > [signUp]  : `POST /auth/signUp/`<br/>
     > [home]  : `get /api/home/`<br/>
 - it is to be noted that  though home end point is open but it send different data for logged in and non-logged in user.
 ### Restricted Endpoints
- These endpoints require authentication first. Only admin can use these endpoints.
- for role key of the json data will be 'role'.
- for permission key of the json data will be 'permission'.
- for mapping key of the json data will be 'role' and 'permission'.
- Api end points are:-
     >[role]  : `POST /admin/role/`<br/>
     > [permission]  : `POST /admin/role/`<br/>
     > [mapping]  : `post /admin/role/mapping`<br/>
 
 - *Note- check for authentication is applied only on `role/mapping`  end point to prevent admin using insert command in mysql,s/he can atleast add one role(i.e admin) and permission through api request itself without signing in.*
 
