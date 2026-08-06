// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc";
tinderUser.name = "Anas";
tinderUser.isLoggedIn = false;


// console.log(tinderUser);

const regularUser = {
    email: "regular@example.com",
    fullname: {
        userFullname: {
            firstName: "Anas",
            lastName: "siddique"
        }
    }
};
// console.log(regularUser.fullname);
 

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};
const obj4 = {5: "e", 4: "f"};

const obj3 = Object.assign({}, obj1, obj2, obj4) ;

console.log(obj3);