class user{
    constructor(username, email, password){
        this.username = username;
        this.password = password;
        this.email = email;
    }
    //This below is an constant function 
    static countUsers(){
        console.log('There are 50 users ');
    }
    register(){
        console.log(this.username + " is now registered"); 
    }
}
class Member extends user{
    constructor(username, email, password, memberPackage){
        super(username, email, password);
        this.memberPackage = memberPackage;
    }
    getPackege(){
        return this.username + " is now substribed with the " + this.memberPackage + " package.";
    }
}

var Sibu = new Member('Sibu', 'sibu@gmail.com', '@134644', 'Standard');

// var Siweh = new user('Siweh', 'siweh@gmail.com', '@12345');
// Siweh.register();
// user.countUsers();
Sibu.getPackege();
console.log(Sibu.getPackege());