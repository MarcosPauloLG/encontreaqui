var full_name;
var email;
var password;

var btn_cadastro = document.getElementById('btn_cadastro')
btn_cadastro.addEventListener('click', saveUser);

function saveUser(){
     full_name = document.getElementById('name').value;
     email = document.getElementById('email').value;
     password = document.getElementById('password').value;

 
    if(full_name.length > 0 && email.length > 0 && password.length > 0){
        user = {
            full_name: full_name,
            email: email,
            password: password
        }

        localStorage.setItem('user', JSON.stringify(user))
        alert("Novo usuário criado!")
        document.location.href='./UserProfile.html'
    }else{
        alert("dados incompletos")
        
    }
}
