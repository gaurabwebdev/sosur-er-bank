document.getElementById('deposit-btn').addEventListener('click', function(){
    
    const depositInput = document.getElementById('deposit-amount');
    let depositAmount = parseFloat(depositInput.value);

    
    let totalDep = document.getElementById('totalDp');
    let totalBal = document.getElementById('totalBL');
    
    let totalDepAm = parseFloat(totalDep.innerText);
    let totalBalAm = parseFloat(totalBal.innerText);

    if(depositAmount<0){
        alert('Please enter a valid amount');
        depositInput.value = '';
    } else{
        
        totalDepAm += depositAmount;
        totalBalAm += depositAmount;

        totalDep.innerText = totalDepAm;
        totalBal.innerText = totalBalAm;
    }
    
});

document.getElementById('withdraw-btn').addEventListener('click', function(e){
    
    const withdrawInput = document.getElementById('withdraw-amount');
    let withdrawAmount = parseFloat(withdrawInput.value);

    
    const totalWith = document.getElementById('totalWD');
    const totalBal = document.getElementById('totalBL');
    
    let totalWithAm = parseFloat(totalWith.innerText);
    let totalBalAm = parseFloat(totalBal.innerText);
    
    if(withdrawAmount<0 || withdrawAmount>totalBalAm){
        alert('Please enter a valid amount');
        withdrawInput.value = '';
    } else {
        totalWithAm += withdrawAmount;
        totalBalAm -= withdrawAmount;

        totalWith.innerText = totalWithAm;
        totalBal.innerText = totalBalAm;
    }
    
});