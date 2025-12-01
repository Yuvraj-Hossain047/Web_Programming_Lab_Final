// Log In Work
const handleLogin = async() => {
    const userId = document.getElementById("userId").value;
    const password = document.getElementById("password").value;

    const user = {
        userId : userId,
        password : password,
    };
    const userInfo = await fetchData(user);

    const noUser = document.getElementById("noUser");
    if(userInfo.length === 0){
        noUser.classList.remove("hidden");
    }
    else{
        noUser.classList.add("hidden");
        // putting user data in local storage
        localStorage.setItem("currentUser", JSON.stringify(userInfo[0]));
        window.location.href = "./pages/phonebook.html";
    }
};
const fetchData = async(user) => {
    let data;
    try{
        const res = await fetch('http://localhost:5000/users',{
        method: 'POST',
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(user),
    });
        data = await res.json();
    }
    catch(err){
        console.log("Error Connection to Server:",err);
    }
    finally{
        return data;
    }
}
// page direct
const newUser = () => {
  window.location.href = "./pages/newUser.html";
};
