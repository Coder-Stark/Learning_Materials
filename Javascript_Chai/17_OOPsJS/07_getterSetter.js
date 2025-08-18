class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
        this._email = value;
    }

    get password(){
        return `${this._password}shiv`
    }
    set password(value){
        this._password = value;
    }
}
const shivam = new User("shivam@gmail.com", "abc");
console.log(shivam.email);                            //SHIVAM@GMAIL.COM
console.log(shivam.password);                         //abcshiv

