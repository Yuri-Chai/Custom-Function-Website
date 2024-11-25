username = document.getElementById("username")
password = document.getElementById("password")
console.log (password)


document.getElementById("submit").onclick = function(){
    console.log(username.value)
    console.log(password.value)
    
    if (password.value === "0112" && username.value.toLowerCase() == "yuri"){
        document.getElementById("message").innerHTML = "The password and username is correct"
    } else {
        document.getElementById("message").innerHTML = "The password and username is incorrect, try again"
    }


    
}

