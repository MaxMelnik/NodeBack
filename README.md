# NodeBack
Simple backend using node.js and express   
Source version on http://cocoa-beans.ru/backend/simple-node-backend/

Run server:  
```npm run server```
>App listening at port 8000

Add new rooms:  
```
$ curl -X POST -H "Content-Type: application/json" -d '{"name": "Test room 1"}' http://localhost:8000/rooms
$ curl -X POST -H "Content-Type: application/json" -d '{"name": "Test room 2"}' http://localhost:8000/rooms
```

Find rooms containing '1' in name:  
 ```$ curl 'http://localhost:8000/rooms?searchString=1'```
 >{"rooms":[{"id":0,"name":"Test room 1"}]}
 
 Send messages: 
 ```
 $ curl -X POST -H "Content-Type: application/json" -d '{"body": "Test message", "username": "test_user"}' http://localhost:8000/rooms/0/messages
 $ curl -X POST -H "Content-Type: application/json" -d '{"body": "Еще одно сообщение!", "username": "TheOwl"}' http://localhost:8000/rooms/0/messages
 ```
 
 Get messges by roomId:  
  ``` $ curl http://localhost:8000/rooms/0/messages ```
  >{"messages":[{"id":0,"body":"Test message","username":"test_user","datetime":"Wed,28 Dec 2016 22:49:16 GMT"},{"id":1,"body":"Еще одно сообщение!","username":"TheOwl","datetime":"Wed, 28 Dec 2016 22:49:30 GMT"}]}
