document.querySelector("#parent").addEventListener("submit",paynow);
var paymentList = JSON.parse(localStorage.getItem("payment")) || [];


function paynow(event)
{
    event.preventDefault();
    var email = document.querySelector("#email").value;
    var name = document.querySelector("#name").value;
    var address = document.querySelector("#address").value;
    var  cardnumber = document.querySelector("#cardnumber").value;
    var cardname = document.querySelector("#cardname").value;
    var expairyDate = document.querySelector("#expairyDate").value;
    var securityCode =document.querySelector("#securityCode").value;


    var paymentObj={
        email :  email,
        name : name,
        address : address,
        cardnumber : cardnumber,
        cardname : cardname,
        expairyDate : expairyDate,
        securityCode : securityCode
    };
    console.log(paymentObj);
    paymentList.push(paymentObj);
    console.log(paymentList);
    localStorage.setItem("payment",JSON.stringify(paymentList))
    alert("Payment Successful");
}