document.getElementById('Log-Out').addEventListener('click', function () {
    window.location.href = 'index.html'

})
// Deposit
document.getElementById('Deposit-btn').addEventListener('click', function () {
    const userDeposit = document.getElementById('user-Deposit');
    const Deposit = userDeposit.value;
    const userDepositString = parseFloat(Deposit)

    const depositAmount = document.getElementById('Total-Deposit');
    const depositAmaunGet = depositAmount.innerText;
    const amaunGetString = parseFloat(depositAmaunGet)
    const add = amaunGetString + userDepositString;
    depositAmount.innerText = add;

    const totalBalence = document.getElementById('Total-balence');
    const Total = totalBalence.innerText;
    const totalString = parseFloat(Total);
    const setTotalBalence = totalString + userDepositString;
    totalBalence.innerText = setTotalBalence;
    userDeposit.value = ''
})

// Widdrow
document.getElementById('Widdrow-btn').addEventListener('click', function () {
    const userWiddrow = document.getElementById('user-Widdrow');
    const Widdrow = userWiddrow.value;
    const userWiddrowString = parseFloat(Widdrow);

    const widdrowAmount = document.getElementById('Total-Widdrow');
    const totalWiddrow = widdrowAmount.innerText;
    const widdrowAmountGet = parseFloat(totalWiddrow);
    const addWiddrow = userWiddrowString + widdrowAmountGet;
    widdrowAmount.innerText = addWiddrow;

    const totalBalence = document.getElementById('Total-balence');
    const Total = totalBalence.innerText;
    const totalString = parseFloat(Total);
    const setTotalBalence = totalString - userWiddrowString;
    totalBalence.innerText = setTotalBalence;
    userWiddrow.value = ''
    
}) 