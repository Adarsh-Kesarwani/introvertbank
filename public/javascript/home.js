let myAccount = document.createElement("div");
document.body.appendChild(myAccount);
myAccount.innerHTML = `
<div class="bank">
   <div class="nav">
      <div className="brand">
          <h2>Introvert Bank</h2> 
      </div>
      <div className="menuItems"> 
         <a href="/about">About US</a>
         <a href="/about">Contact</a>
         <a target="_blank" href="https://internship.thesparksfoundation.info/">Help</a>
         <a target="_blank" href="https://internship.thesparksfoundation.info/">About Internship</a>
     </div>
   </div>
</div>
<div class="container">
<div class="myinfo">
    <div class="mydetails">
        <h3>Email: ibank@gmail.com</h3>
        <h3>Contact: 8898991011</h3>
        <h3>Address: Delhi</h3>
    </div>
    <div class="myaccount">
        <h3>Bank: Introvert Bank</h3>
        <h3>IFSC:INTR000034</h3>
        <h3>Branch: Noida</h3>
    </div>
</div>
</div>
<div class="customers"><a href="/customers"><button>Show all account</button></a></div>`;
