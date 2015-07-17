use Assessment


db.roles.insert(
{
"type":"superadmin",
"permissions":["read", "write", "manage users", "manage pages"]
})

db.roles.insert(
{
"type":"admin",
"permissions":["read", "write", "manage pages"]
})

db.roles.insert(
{
"type":"editor",
"permissions":["read", "write"]
})

db.roles.find().pretty()

==========================================================================================================================
db.users.insert( 
{
"username":"user_1",
"password":"1234",
"role_id":db.roles.find({"type":"superadmin"}, {_id:1}).map(function(item){ return item._id; }),
"created_on":new Date(15, 2, 2014),
"last_login":new Date(15,2,2014),
"profile": {
"name" : "abc",
"age" : 21,
"address" : "Pune"},
"phone":[9890659927, 8806254879]
})

db.users.insert( 
{ 

"username" : "user_2", 
"password" : "456", 
"role_id":db.roles.find({"type":"admin"}, {_id:1}).map(function(item){ return item._id; }),
"created_on": new Date(21,8,2012), 
"last_login" : new Date(15,10,2012), 
"profile": { 
"name" : "xyz", 
"age" : 22, 
"address" : "Mumbai" }, 
"phone":[9766449981]
})

db.users.insert( 
{ 
"username" : "user_3", 
"password" : "789", 
"role_id":db.roles.find({"type":"editor"}, {_id:1}).map(function(item){ return item._id; }),
"created_on": new Date(13,8,2013), 
"last_login" : new Date(13,10,2014), 
"profile": { 
"name" : "pqr", 
"age" : 22, 
"address" : "Kerala" }, 
"phone":"0123456789" 
})

db.users.find().pretty()
==========================================================================================================================


db.pages.insert( 
{
"title": "MyPage 1",
"slug": "---",
"user_id" : db.users.find({"username":"user_3"}, {_id:1}).map(function(item){ return item._id; }),
"contents" : "This is my first page",
"comments": [
{ 
"comment1":
{
"content" : "Welcome" , 
"user_id" : db.users.find({"username":"user_1"}, {_id:1}).map(function(item){ return item._id; })
},
"comment2":
{
"content" : "nice", 
"user_id" : db.users.find({"username":"user_2"}, {_id:1}).map(function(item){ return item._id; })
}
}]
}
)

db.pages.insert( 
{
"title": "MyPage 2",
"slug": "---",
"user_id" : db.users.find({"username":"user_3"}, {_id:1}).map(function(item){ return item._id; }),
"contents" : "My life",
"comments": [
{ 
"comment1":
{
"content" : "Good" , 
"user_id" : db.users.find({"username":"user_2"}, {_id:1}).map(function(item){ return item._id; })
}
}]
}
)

db.pages.find().pretty()
==========================================================================================================================

db.blogs.insert( 
{
"title": "A thought about technology",
"slug": "---",
"user_id" : db.users.find({"username":"user_3"}, {_id:1}).map(function(item){ return item._id; }),
"contents" : "Ruby on rails is a fast paced ruby based framework",
"comments": [
{ 
"comment1":
{
"content" : "Nice post. Read once" , 
"user_id" : db.users.find({"username":"user_3"}, {_id:1}).map(function(item){ return item._id; })
}
}]
}
)

db.blogs.insert( 
{
"title": "Sanskrit as a Computer language?",
"slug": "---",
"user_id" : db.users.find({"username":"user_2"}, {_id:1}).map(function(item){ return item._id; }),
"contents" : "Yes. you read it read right. Sanskrit will be used by 7th generation Super computer",
"comments": [
{ 
"comment1":
{
"content" : "Awesome" , 
"user_id" : db.users.find({"username":"user_1"}, {_id:1}).map(function(item){ return item._id; })
}
}]
}
)
db.blogs.find().pretty()
