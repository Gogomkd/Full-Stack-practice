function LoginForm() {
    var mainDiv = document.createElement("div");
    mainDiv.style.width = "500px";
    mainDiv.style.height = "500px";
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(mainDiv);
    var FirstName = document.createElement("input");
    FirstName.id = "name";
    // FirstName.innerHTML = "User Name";
    FirstName.placeholder = "User Name"
    FirstName = document.getElementsByTagName("div")[0].appendChild(FirstName);
    var LastName = document.createElement("input");
    LastName.id = "surname";
    // LastName.innerHTML = "Last Name";
    LastName.placeholder = "Last Name";
    LastName = document.getElementsByTagName("div")[0].appendChild(LastName);
    var Password = document.createElement("input");
    Password.id = "password";
    Password.type = "password";
    Password.placeholder = "Input your Password";
    Password = document.getElementsByTagName("div")[0].appendChild(Password);
    var Email = document.createElement("input");
    Email.id = "Email";
    Email.type = "email";
    Email.required;
    Email.placeholder = "Input your yahoo e-mail";
    Email = document.getElementsByTagName("div")[0].appendChild(Email);
    var kopce = document.createElement("button");
    kopce.id = "button";
    kopce.innerHTML = "Get user data";
    kopce = document.getElementsByTagName("div")[0].appendChild(kopce);
    kopce.addEventListener("click", function(){
        var Person = {
            firstName: FirstName.value,
            lastName: LastName.value,
            password: Password.value,
            email: Email.value,
            
        }
        
        if(Person.password.length < 8){
           document.write("vnesovte pogresen password");

        
        }else {document.write("The User is </br>",Person.firstName," ", Person.lastName, "</br> ",Person.password,"</br> ",Person.email);}
    })

    
    
    
}

LoginForm();