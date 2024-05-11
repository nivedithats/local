let fName = document.getElementById("Name");
let fNameEmail = document.getElementById("email");
let fMobile = document.getElementById("mobile");


const addUser = async (e) => {
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
    }catch(err){
        console.log(err.message)
    }
}

