# Task CRUD

Technologies used

 * MongoDB
 * Node
 * Express
 * Angular


To Run Application
 1. Make sure Mongo is up and running 
 2. Got to root and do `npm install` 
 3. After success do `node index.js`

The application will run on port `8082` click http://localhost:8082 in order to access application.

>index js
>
>This is the entry point of application which has ststic directories defined in path established the mongo DB connection and listens to port

> server / taskRoute js
>
> The main routing of express is done here as REST configuration, all the function in rest calling is defined in `taskCtrl js` and its core implementation in `taskServices js`

Other files in server are just for providing a generic access to db and rest results.

> public / javascripts / main js
>
> The entry point for client side application angular bootstraping and routing are defined here

> public / javascripts / listCtrl, editCtrl, createCtrl
>
> Are basically controller for list, edit and create task binding it with views inside tpls / * , All the communication with services happens via `javascripst / taskService js`


### Application Overview

The list page
![Showing list of Tasks](https://raw.githubusercontent.com/VinodLouis/task-crud/master/images/list.png)

Add Task : button disabled till required fields are filled
![Add task](https://raw.githubusercontent.com/VinodLouis/task-crud/master/images/add_new_empty.png)

Edit Task (using same screen with route params to get data and render)
![Edit Tasks](https://raw.githubusercontent.com/VinodLouis/task-crud/master/images/edit_task_data.png)

Delete Task : 
![Edit Tasks](https://raw.githubusercontent.com/VinodLouis/task-crud/master/images/delete_confirmation.png)

Notifications : Toast is used for notification.


Things to improve : 

1. Bower packaging is not managed currently as running public as static build
2. Validations could have been more strict
3. User management missing
4. Look wise improvement










