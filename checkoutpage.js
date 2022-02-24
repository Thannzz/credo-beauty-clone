document.querySelector("#parent").addEventListener("submit",paypal);
var checkoutList = JSON.parse(localStorage.getItem("checkout")) || [];

function paypal(event)
{
    event.preventDefault();
    var email = document.querySelector("#email").value;
    var first = document.querySelector("#first").value;
    var last = document.querySelector("#last").value;
    var address = document.querySelector("#address").value;
    var apartment = document.querySelector("#apartment").value;
    var city = document.querySelector("#city").value;
    var States = document.querySelector("#States").value;
    var country = document.querySelector("#country").value;
    var zipcode = document.querySelector("#zipcode").value;
    var phone = document.querySelector("#phone").value;
    var code = document.querySelector("#code").value

    var checkoutObj = {
        email : email,
        first :first,
        last : last,
        address : address,
        apartment : apartment,
        city : city,
        States : States,
        country : country,
        zipcode : zipcode,
        phone : phone,
        code : code
    };
    checkoutList.push(checkoutObj);

    console.log(checkoutList);
    localStorage.setItem("checkout",JSON.stringify(checkoutList))
} 