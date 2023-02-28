let signupBtn=document.getElementById("signupbtn");
let siginBtn=document.getElementById("signinbtn");
let nameField=document.getElementById("namefield");
let Title=document.getElementById("title");

      siginBtn.onclick = function(){
       //document.getElementById("namefield").style.display = "none"
       nameField.style.maxHeight="1";
       Title.innerHTML="Sign In";
       signupBtn.classList.add("disable");
       siginBtn.classList.remove("disable");
      }
      signupBtn.onclick = function(){
        nameField.style.maxHeight="70px";
        //document.getElementById("namefield").style.display = "grid";
        Title.innerHTML="Sign up";
        signupBtn.classList.remove("disable");
        signinBtn.classList.add("disable");
      }
      
      function Validationform() {
      var name = document.forms.Regform.Name.value;
      var email=document.forms.Regform.Email.value;
      var password=document.forms.Regform.Password.value;
      var phone=document.forms.Regform.Phone.value;
      var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;  //Javascript reGex for Email Validation.
      var regPhone=/^\d{10}$/;                                        // Javascript reGex for Phone Number validation.
      var regName = /\d+$/g;           
      
      console.log(name)
      if(name=="" || regName.test(name)){
        window.alert("Please enter your name properly!");
        name.focus();
        return false;
      } 
      if(email=="" || !regEmail.test(email)){
        window.alert("Enter correct email");
        email.focus();
        return false;
      }
      if (phone == "" || !regPhone.test(phone)) {
        alert("Please enter valid phone number.");
        phone.focus();
        return false;
    }
      if(password==""){
        window.alert("please enter your password");
        password.focus();
        return false;
      }
      if(password.length <6){
        alert("Password should be atleast 6 character long");
        password.focus();
        return false;
      }
      return true;
    }