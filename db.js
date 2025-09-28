users = [
    { "id": 1, "name": "Alice", "email": "alice@example.com" },
    { "id": 2, "name": "Bob", "email": "bob@example.com" },
    { "id": 3, "name": "Charlie", "email": "charlie@example.com" },
    { "id": 4, "name": "Diana", "email": "diana@example.com" },
    { "id": 5, "name": "Ethan", "email": "ethan@example.com" },
    { "id": 6, "name": "Fiona", "email": "fiona@example.com" },
    { "id": 7, "name": "George", "email": "george@example.com" },
    { "id": 8, "name": "Hannah", "email": "hannah@example.com" },
    { "id": 9, "name": "Ivan", "email": "ivan@example.com" },
    { "id": 10, "name": "Julia", "email": "julia@example.com" }
  ]





  function getUsers(){
    return users
  }

  function getUserById(id){
    return users.find((user)=>user.id == id)
  }


  module.exports = {getUsers, getUserById}