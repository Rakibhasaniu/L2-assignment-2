This app is created mainly by express js, mongoose, typeScript, cors.

I used dotenv for managing environmental variables.
Joi is used to validate user data when create new user or update user info.
Bcrypt is used for hasing password of user.

In DataBase, userId and username is unique. So , only one userId or username is exsist at a time.

I used standerd post method to create data as described in assignment description. Data must be in json format.

for example:

    {
        "userId": 3,
        "username": "bob_jones",
        "password": "strongPassword456",
        "fullName": {
            "firstName": "Bob",
            "lastName": "Jones"
        },
        "age": 38,
        "email": "bob.jonesexample.com",
        "isActive": false,
        "hobbies": [
            "cooking",
            "gaming",
            "hiking"
        ],
        "address": {
            "street": "789 Pine Street",
            "city": "Mountain View",
            "country": "Natureland"
        }
    }

I use static methods to check weather an user exisist or not.

User Routes:

1. GET(http://localhost:3000/api/users) : get all users

2. GET(http://localhost:3000/api/users/:userId) : get one user by userId

3. POST(http://localhost:3000/api/users) : create new user

4. PUT(http://localhost:3000/api/users/:userId) : update one user by userId

5. DELETE(http://localhost:3000/api/users/:userId) : delete one user by userId

For Bonus marks , I create order module and orders collection separate from user modules and collection.

In my app, users who are already in user collection can add new product to their orders array.
Users can also update(push) their orders array.
users can also know their total product price
For product add request , user should follow the given stucture.

Ex:

    {
        "productName": "Product A",
        "price": 19.99,
        "quantity": 2
    }

Order Routes: Orders Routes are written in user.routes.ts.

1. PUT(http://localhost:3000/api/users/:userId/orders) : add new product

2. GET(http://localhost:3000/api/users/:userId/orders) : get all orders of user by userId

3. GET(http://localhost:3000/api/users/:userId/orders/total-price) :get totalprice of ordered products of an user
