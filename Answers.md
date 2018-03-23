<!-- Answers to the Short Answer Essay Questions go here -->

## Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.
It's a function(also called pre hooks and hooks) that creates a bridge between two existing async functions.
## What does bcrypt do in order to prevent attacks?
bcrypt hashes the password and salts the password. Which are short random characters that are appended to to the end of the password.
## What are the three parts of the JSON Web Token?
### json web tokens are composed of three parts. 
The header, which consist of the respective hashing algorithm that is being used also containing which type of token is being applied. The Payload, which contains claims about the current user as well as additional metadata. There are three types of claims: registered, public, and private. Signature, which is basically a bundle of the two previously mentioned bodies of a token. A signature needs an encoded header, encoded payload, a secret, the algorithm in the header, and signs it. Signing ensures that the message was not tampered in anyway and also authenticates the credentials of the user.
