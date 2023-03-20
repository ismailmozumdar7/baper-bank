document.getElementById('button').addEventListener('click', function(){
    const emailFuild = document.getElementById('user-email');
    const email = emailFuild.value;
    const passwordFuild = document.getElementById('user-password');
    const pass = passwordFuild.value;
     
    if(email === 'ismailmoz24@gmail.com' && pass === 'ismailM'){
        window.location.href = 'Bank.html'
    }
    else{
        alert('sorbonash! ei tui horhota ki password vule geli?')
    }
})