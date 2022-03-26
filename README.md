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


Nice to have
• Express framework
• HTTP Verbs
• Data Validations
• Manage duplicates
• Postman Collection // Used Rest Client instead 
• Extra functionalities (Sort, Filter …)
• Database: Mongo or Mysql
• Develop using SOLID
• Unit Test
• Documentation