const passwordbox=document.getElementById("password");
const visible=document.getElementById("toggleBtn");
const length=12;
const upperCase="QWERTYUIOPASDFGHJKLZXCVBNM";
const lowerCase="qwertyuiopasdfghjklzxcvbnm";
const num="1234567890";
const symbol="!@#$%^&*()_+{}|:<>?;";
const allchars=upperCase+lowerCase+num+symbol;

function createPassword()
{
    let password=""
    //try once deleting below 4
    password+=upperCase[Math.floor(Math.random()*upperCase.length)];
    password+=lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password+=num[Math.floor(Math.random()*num.length)];
    password+=symbol[Math.floor(Math.random()*symbol.length)];
    
    while(length>password.length)
    {
        password+=allchars[Math.floor(Math.random()*allchars.length)];
    }
    passwordbox.value=password;

}
function copypass()
{
    passwordbox.select();
    document.execCommand("copy");
}
function togglePasswordVisibility()
{
    if(passwordbox.type=="password")
    {
        passwordbox.type="text";
        visible.textContent="Hide passoword";
    }
    else{
        passwordbox.type="password";
        visible.textContent="Show passoword";
    }
}
