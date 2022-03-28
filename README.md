readme.md

# SITA-backend

to run it
npm install
npm start 
listening to PORT 5000

## Description

Our client needs to create and read comments for each flight they have in our system, with the following information:
• ID
• Comment
• Date
• UserId
• FlightId
• Tags
Due to that, we need you to create 2 endpoints using Node Js:

1. Create comment
   You will receive the following information:
   • Comment: String (mandatory)
   • UserId: Number (mandatory)
   • FlightId: Number (mandatory)
   • Tags: String Array (optional)
   You have to save the information in the database that you want (Mysql or Mongo) creating a unique ID.
2. Retrieve comments
   Create an endpoint to retrieve the list of comments for a specific flight ID. You will receive the FlightID and it should return a JSON with the comments.

## ROUTES:

GET
all flights and by ID
Get
all comments
POST
a comment

## Models

```
Flight model
{
commentId: type: Number,
comment: type: String,
date: type: Date,
userId: type: Number,
flightId: type: Number,
tags: type: Array
}

Comment model
{
comment: String,
userId: type: Number,
flightId: [{ type: Schema.Types.ObjectId, ref: "Flight"}],
tags: type: Array
};

```

## Links

### Git

The url to the repository
[Repository Link](https://github.com/juliajulia89/SITA-backend)

```

```
