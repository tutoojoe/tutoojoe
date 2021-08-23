let namecheck=false;
let mailcheck=false;
let phonecheck=false;
let messagecheck=false;

$(document).ready(function(){

    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

    $("#name").keyup(function(){
        let name=this.value;
        let nameregex= /^[a-zA-Z ]*$/;
        if(name.length<3)
        {
            namecheck=false;
            $("#name-error-msg").text("Name should have minimum 3 characters");
        }
        else if(!name.match(nameregex)){
            namecheck=false;
            $("#name-error-msg").text("Invalid input")
        }
        else if(name.includes("  ")){
            namecheck=false;
            $("#name-error-msg").text("More than one space not allowed")
        }
        else{
            namecheck=true;
            $("#name-error-msg").text("")
        }
      
    })

// opther inputs
//email
$("#email").keyup(function(){
    let mail=this.value;
    let mailregex= /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if(!mail.match(mailregex)){
        mailcheck=false;
        $("#email-error-msg").text("Invalid email")
    }
    else{
        mailcheck=true;
        $("#email-error-msg").text("")
    }
  
})


$("#mobnumber").keyup(function(){
    let mobile=this.value;
    let phoneregex= /^[0-9]+$/;
    if(mobile.length<10 || mobile.length>10){
        phonecheck=false;
        $("#mob-error-msg").text("Enter your 10 digit mobile number")
    }else if(!mobile.match(phoneregex)){
        phonecheck=false;
        $("#mob-error-msg").text("Invalid Entry")
    }
    else{
        phonecheck=true;
        $("#mob-error-msg").text("")
    }
  
})


$("#messagebox").keyup(function(){
    let message=this.value;
    
    if(message.length<100){
        messagecheck=false;
        $("#message-error-msg").text("Write more details..")
    }
    else{
        messagecheck=true;
        $("#message-error-msg").text("")
    }
  
})





$("#contactform").submit((e)=>{
    e.preventDefault()
    if(namecheck==true && mailcheck==true && phonecheck==true && messagecheck==true){
        $.ajax({
            url:"https://script.google.com/macros/s/AKfycbwNBRt8UGnVhkUAHQou0U7ic-xLVhtrobLyPt9mbeqV-IiLRIBCvvRDLH_e8Y_oQXGYAA/exec",
            data:$("#contactform").serialize(),
            method:"post",
            success:function (response){
                alert("Form submitted successfully")
                window.location.reload()
                //window.location.href="https://google.com"
            },
            error:function (err){
                alert("Something Error")
    
            }
        })
    }
    else
    {
        $("#submit-error-msg").text("Recheck all the details and submit again")
    }
    
})







})






