// - Object
let user = {
    name: 'John',
    age: 30
}

// - 箭头函数
let func = (arg1)=> arg1 

let arr = [1, 2, 3];
arr.forEach(item => console.log(item));

setTimeout(() => {})

// - this
let user = {
    name: 'John',
    age: 30,

    sayHi: function() {
        alert(this.name, 'hello');
    }
}

// user.sayHi();

// - Promise 链和 Async/await
let promise = fetch('https://api.github.com/users/octocat') // user.json
                .then(function(response) {
                    if(response.status === 200) {
                        return response.text();
                    }else {
                        alert('Error');
                    }
                }).then(function(text) {})
                .catch(error => console.log(error));

// - 在浏览器中储存数据
// 1. cookie
document.cookie = 'name=John ';
// 2. localStorage / sessionStorage
store

// - DOM

// - 跨域问题
cors