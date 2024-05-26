// var is function scoped
function varTest() {
    var x = 1;
    if (true) {
        var x = 2;  // same variable!
        console.log(x);  // 2
    }
    console.log(x);  // 2
}
varTest();

// let is block scoped
function letTest() {
    let y = 1;
    if (true) {
        let y = 2;  // different variable
        console.log(y);  // 2
    }
    console.log(y);  // 1
}
letTest();

// const is block scoped, but cannot be reassigned
function constTest() {
    const z = 1;
    if (true) {
        const z = 2;  // different variable because block scoped
        console.log(z);  // 2
    }
    console.log(z);  // 1
    // z = 3;  // error! const variables cannot be reassigned
}
constTest();