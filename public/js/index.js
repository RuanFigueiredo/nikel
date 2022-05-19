let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("session");

checkLogged();

//logar no sistema

document.getElementById("login-form").addEventListener("submit"), function(e){
    e.preventDefault();

    const email = document.getElementById("email-input").value;
    const password = document.getElementById("password-input").value; 
    const checkSession = document.getElementById("session-input").checked;


    const account = getAccount(email);



    if(!account){
        alert("Oops, verifique usuário ou a senha.")
        return;
    }

    if (account){
        if(account.password !== password){
            alert("Oops, verifique usuário ou a senha.")
            return;
        } 

saveSession(email,checkSession )

        window.location.href="home.html";
    }

    
}


//criar conta

document.getElementById("create-form").addEventListener("submit", function(e){
    e.preventDefault();



    const email = document.getElementById("email-create-input").value;
    const password = document.getElementById("password-create-input").value; 
    
   if(email.length < 4){
    alert("preencha um email válido, acima de 4 dígitos.")
    
   }

   if(password.length < 4){
       alert("preencha a senha com mínimo de 4 digitos")
       
   }
        alert("conta criada com sucesso!");

        function checkLogged(){
            if(session){
                sessionStorage.setItem("logged", session);
                logged = session;
            }
            if(logged){
                saveSession(logged, session);
            }
            window.location.href ="home.html"
        }

        saveAccount({
            login: email,
            password: password,
            transactions: [ ]
        });

  
    
    
});

function saveAccount(data){
    localStorage.setItem(data.login, JSON.stringify(data));
    //salva o usuário assim que cria a conta.
}

function saveSession(data, saveSession){
    if(saveSession){
        localStorage.setItem("session", data);
    }

    sessionStorage.setItem("logged", data)
}

function getAccount(){
    const account = localStorage.getItem(key);

    if(account){
        return JSON.parse(account);
    }
    return "";
}