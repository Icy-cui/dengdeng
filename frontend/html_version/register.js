// 原型模式
class User{
    constructor(name, email, phone, addr, password){
        this.setName(name);
        this.setEmail(email);
        this.setPhone(phone);
        this.setAddr(addr);
        this.setPassword(password);
    }
    setName(name){
        this.name = name;
    }
    setEmail(email){
        this.email = email;
    }
    setPhone(phone){
        this.phone = phone;
    }
    setAddr(addr){
        this.addr = addr;
    }
    setPassword(password){
        this.password = password;
    }
}

function init(){
    createForm.addEventListener('submit', (e)=>{
        e.preventDefault();
        var people;
        try{
            let name = document.querySelector("[name=name]").value;
            let email = document.querySelector("[name=email]").value;
            let phone = document.querySelector("[name=phone]").value;
            let addr = document.querySelector("[name=address]").value;
            let password = document.querySelector("[name=password]").value;
            let c_password = document.querySelector("[name=confirmed_password]").value;
            console.log(name, email, phone, addr, password);

            if(password != c_password){
                throw new Error("Password not match");
            }

            people = new User();
            people.setName(name);
            people.setEmail(email);
            people.setPhone(phone);
            people.setAddr(addr);
            people.setPassword(password);
            
        } catch(e){
            console.log(e);
        }
        console.log(people);
    });
}


let createForm = document.getElementById("my-form");
init();