const user = {
    name: 'John',
    age: 36,
    email: 'john@example.com'
};

// Without Object Destructor
const name1 = user.name;
const age1 = user.age;
const email1 = user.email;
console.log(name1, age1, email1); //John 36 john@example.com

// Without Object Destructor
const { name, age, email } = user;
console.log(name, age, email); //John 36 john@example.com