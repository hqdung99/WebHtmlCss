export default function postToGoogle(name, phoneNumber, email, dispatchBox, products, sumMoney) {
    var entryname = "entry.1445392553";
    var entryphonenumber = "entry.1648335433";
    var entryemail = "entry.2083310488";
    var entrydispatchBox = "entry.891738378";
    var entryproductsAndAmount = "entry.940405162";
    var entrySumMoney = "entry.1565641795";

    $.ajax({
        url: "https://docs.google.com/forms/d/1UWfOZ8UZXqypbt7hTQuKaSt8DBW89PH6p-X1Rut8PME/formResponse?",
        data: {"entry.1445392553": name, "entry.1648335433": phoneNumber, "entry.2083310488": email, "entry.891738378": dispatchBox, "entry.940405162": products, "entry.1565641795": sumMoney},

        type: "POST",
        dataType: "xml",
        success: function(d) {
            console.log("Send data success");
        },
        error: function(x, y, z) {
            console.log("Send data failed");
        }
    });
    return false;
}