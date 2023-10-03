const User = {
    name: "",
    accountNumber:"",
    accountName: "",
    code: "",
    __proto__: {
       
         isSignin:false,
        register(accountname,accountnumber,code,name){
            this.accountName = accountname;
            this.accountNumber = accountnumber;
            this.code = code;
            this.name = name;
            console.log("Registered successfully , please wait for listed")
        },
        login(accountnumber,code){
            if(this.accountNumber === accountnumber && this.code === code){
                this.isSignin = true
            }else{
                console.log("your accountnumber or code is wrong");
                this.isSignin = false;
            }
        }
    }
    

}

User.register("Rakin","12345","234321","Fahim Faysal");

User.login("12345","23432");

if(User.isSignin){
    console.log("Welcome", User.name);
    console.log("Your balance is *****TK")
}else{
    console.log("You are not listed");
}


console.log(User);