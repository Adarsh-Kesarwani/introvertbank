let clearAccNumber = () => {
  document.getElementById("enterAccNum").value = parseInt(1);
};
let calculate = () => {
  let adarshBankBalance = parseInt(
    document.getElementById("adarshBankBalance").innerText
  );
  let accountNumber = parseInt(document.getElementById("enterAccNum").value); //customer account number
  let amount = parseInt(document.getElementById("enterAmount").value); //Amount to be transfer
  // alert(adarshBankBalance - amount);          // test alert adarsh account balance
  // alert(accountNumber); //  test customer account number
  if (
    accountNumber ==
      (101 ||
        102 ||
        103 ||
        104 ||
        105 ||
        106 ||
        107 ||
        108 ||
        109 ||
        110 ||
        111) 
  ){
    if (adarshBankBalance >= amount) {
      let custBB = parseInt(document.getElementById(accountNumber).innerText); // customer bank balance
      // alert("CustBB" + custBB);                                                 //alert custtomer bank balance
      var b = (document.getElementById(accountNumber).innerText =
        custBB + amount); //overwrite(customer bank balance )
      var finalBankBalance = adarshBankBalance - amount; // checking line
      // alert(finalBankBalance);
      document.getElementById("adarshBankBalance").innerText = parseInt(
        adarshBankBalance - amount
      ); // adarsh bank balace update
      alert(
        "Transaction Sucessfull " +
          "\n" +
          "My Balance " +
          finalBankBalance +
          "\n" +
          accountNumber +
          "Customer Account " +
          " " +
          b
      );
      document.getElementById("enterAccNum").value = parseInt(1);
      document.getElementById("enterAmount").value = parseInt(0);
    } else {
      alert("Insufficient balance ");
    }
  } else {
    alert("Please Enter Correct Account Number ");
    clearAccNumber();
  }
};
