document.getElementById('login-btn').addEventListener('click', function(e){
    
    const emailBox = document.getElementById('email');
    const userEmail = emailBox.value;
    
    
    const passBox = document.getElementById('password');
    const userPass = passBox.value;
    

    // never verify email & password on server side
    if (userEmail == 'sosurmosai@gmail.com' && userPass == 'sosurbarizindabad'){
        location.href = 'dashboard.html';
    } else {
        alert('Invalid User')
    }

})