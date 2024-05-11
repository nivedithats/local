let fName = document.getElementById("name");
let fEmail = document.getElementById("email");
let fMobile = document.getElementById("mobile");


let user = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : [];

//create user
const addUser =  (e) => {
    e.preventDefault();
    try{
        let name = fName.value;
        let email = fEmail.value;
        let mobile = fMobile.value;

        let data = {
            name:name,
            email:email,
            mobile:mobile
        }
        console.log(`new user =`,data)

      let newUser ={
        id:Math.floor(Math.random() * 10000),
        ...data
      }

      let extEmail = user.find(item => item.email === email)
      let extMobile = user.find(item => item.mobile === mobile)


      if(extEmail){
        alert("Email already exist")
      }else if(extMobile){
        alert("Mobile already exist")
      }else{
     
        user.push(newUser)
        localStorage.setItem("users",JSON.stringify(user))
        alert("New user data srored successfully")
        window.location.href = "index.html"
      }

     
      

      

    }catch(err){
        console.log(err.message)
    }
}


/*
localStorage.setItem(name,value) ->  set the value
localStorage.getItem(name) -> get the value
localStirage.removeItem(name) -> remove the value
localStorage.clear() -> clear the value
*/

