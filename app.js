

document.getElementById("loan-form").addEventListener('submit', function (e) {

    document.getElementById("loading").style.display = 'block';

    setTimeout(() => {
        calculate();
    }, 3000);

    e.preventDefault();
}
);




function calculate() {


    const amount = document.getElementById("amount");
    const interest = document.getElementById("interest");
    const years = document.getElementById("years");
    const monthlyPayment = document.getElementById("monthly-payment");
    const totalPayment = document.getElementById("total-payment");
    const totalInterest = document.getElementById("total-interest");


    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatePayments = parseFloat(years.value) * 12;
    const x = Math.pow(1 + calculatedInterest, calculatePayments);
    const monthly = (principal * x * calculatedInterest) / (x - 1);

    if (isFinite(monthly)) {
        document.getElementById("loading").style.display = 'none';
        document.querySelector(".results").style.display = 'block';
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatePayments).toFixed(2);
        totalInterest.value = ((monthly * calculatePayments) - principal).toFixed(2);
    }
    else {
        Swal.fire('Check your number Please!')
    }

}





