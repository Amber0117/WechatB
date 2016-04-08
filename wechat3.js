$(document).ready(function(){

//language initialize 
//lansetting(chinese);

$("#indexbutton1").bind('touchstart', function(e){
  $( this ).css('background','blue');
});
$("#indexbutton1").bind('touchend', function(e){
  $( this ).css('background','#ffffe6');
});

FontSize();

$("#loadingpage").show();
$("#indexpage").hide();
$("#scanpage").hide();
$("#scanconfirmpage").hide();
$("#friendpage").hide();
$("#bosspage").hide();
$("#staffpage").hide();
$("#bosscompletepage").hide();
$("#staffcompletepage").hide();
$("#friendcompletepage").hide();
$("#alertpage1").hide();
$("#alertpage2").hide();

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var paras = getUrlParam(window.location.href);
var code=paras.code;

var id = "";
   
fetchUserInfo(code,id);

id= localStorage.getItem('UserID');

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//indexpage

$("#indexbutton1").click(function(){
  pageChange("#indexpage","#scanpage");
});


$("#indexbutton2").click(function(){
  pageChange("#indexpage","#friendpage");
});

var mark =1;

 $("#lanbutton").click(function(){

if (data.lang=="chinese")
      {  lansetting(english);
         data.lang="english";        
      }
else{ 
        lansetting(chinese);
        data.lang="chinese";    
      }

});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//scanpage

$("#scanQR").click(function(){
  pageChange("#scanpage","#scanconfirmpage");
});

$("#Sback").click(function(){
  pageChange("#scanpage","#indexpage");
});

$("#Sok").click(function(){
  
  data.merchant.name=$("#Rname").val();
  data.merchant.phone=$("#Rnumber").val();

 if((data.merchant.name=="")||(data.merchant.phone==""))
         {     
           pageChange("","#alertpage1");
         }
    else{
           pageChange("#scanpage","#staffpage");
           setStaffSelectedColor();
         }
  
});

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//scanconfirmpage

$("#Cback").click(function(){
  pageChange("#scanconfirmpage","#scanpage");
});

$("#Cok").click(function(){
  pageChange("#scanconfirmpage","#staffpage");
  setStaffSelectedColor()
});

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//friendpage

$("#Fback").click(function(){
  pageChange("#friendpage","#indexpage");
});

$("#Fok").click(function(){

    data.merchant.type=$("#FRtype").val();

    data.merchant.capacity = $("#FRcapacity").val();
    data.email = $("#Femail").val();
    data.phone = $("#Fnumber").val();
    data.userType = "friend";

    if((data.email=="")&&(data.phone==""))
         {     
               pageChange("","#alertpage2");
               //data.merchant.name="";
               //data.merchant.phone="";
         }
    else{
          pageChange("#friendpage","#friendcompletepage");
          updateUserInfo("",id,data);

         }

   });

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//bosspage

   $("#Bselect2").click(function(){
     pageChange("#bosspage","#staffpage");
     setStaffSelectedColor();

     fillin("BUemail","SUemail");
     fillin("BUnumber","SUnumber");
   });

   $("#Bselect1").click(function(){
    pageChange("#bosspage","#staffpage");
    setStaffSelectedColor();

    fillin("BUemail","SUemail");
    fillin("BUnumber","SUnumber");
   });

 $("#Bossback").click(function(){
    pageChange("#bosspage","#scanpage");
  });

 $("#Bossok").click(function(){
  
    data.email= $("#BUemail").val();
    data.phone= $("#BUnumber").val();

    data.userType="boss";

    if((data.email=="")||(data.phone==""))
         {     opacity:0.6;
               pageChange("","#alertpage1");           
               data.email="";
               data.phone="";
         }
    else{
         pageChange("#bosspage","#bosscompletepage");
          updateUserInfo("",id,data);

        }
   });
 
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//staffpage

$("#Sselect2").click(function(){
  pageChange("#staffpage","#bosspage");
  setBossSelectedColor();

   fillin("SUemail","BUemail");
  fillin("SUnumber","BUnumber");

});

$("#Sselect1").click(function(){
   pageChange("#staffpage","#bosspage");
   setBossSelectedColor();

   fillin("SUemail","BUemail");
   fillin("SUnumber","BUnumber");
});


$("#Staffback").click(function(){
   pageChange("#staffpage","#scanpage");

});

$("#Staffok").click(function(){

  data.email= $("#SUemail").val();
  data.phone= $("#SUnumber").val();
  
  data.userType="staff";

    if((data.email=="")&&(data.phone==""))
         {     
              pageChange("","#alertpage2");
               data.email="";
               data.phone="";
         }
    else{ 
          pageChange("#staffpage","#staffcompletepage");
          updateUserInfo("",id,data);
        }
});


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//bosscompletepage

$("#bosscomplete").click(function(){

  WeixinJSBridge.call('closeWindow');
});

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//friendcompletepage

$("#friendcomplete").click(function(){

  WeixinJSBridge.call('closeWindow');
});

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//staffcompletepage

   $("#staffcomplete").click(function(){
  WeixinJSBridge.call('closeWindow');
      
    });

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//alertpage
$("#alertpage1").click(function(){

    pageChange("#alertpage1","");
});


$("#alertpage2").click(function(){

    pageChange("#alertpage2","");
});

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


});

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

 function setFontSize (obj,proportion,base){
 $(obj).css("font-size",base*proportion+"px");
 };

  function setColor (obj,Color){
 $(obj).css("color",Color);
 };

  function setBackgroundColor (obj,Color){
 $(obj).css("background-color",Color);
 };

 function setBordercColor(obj,Color){
  $(obj).css("border-color",Color);
 };

 
 function setBossSelectedColor(){
     setBackgroundColor("#Bselect1","#CC9900");
     setBordercColor("#Bselect1","white");
     setBackgroundColor("#Bselect2","white");
     setColor("#Bselect2","#CC9900");
 };

 function setStaffSelectedColor(){
    setBackgroundColor("#Sselect1","white");
    setBordercColor("#Sselect1","white");
    setBackgroundColor("#Sselect2","#686868");
    setColor("#Sselect2","white");
 };

 function getHeght(baseId){
 var h=(document.getElementById(baseId).scrollHeight);
 return h;
 };

 function pageChange(hidepage,showpage){
 $(hidepage).hide();
 $(showpage).show();
 };


function FontSize(){

var baseindex= getHeght("indexpage");
var baseloading= getHeght("loadingpage");

setFontSize(".buttonindex",0.030,baseindex);
setFontSize(".heading1",0.041,baseindex);
setFontSize(".button",0.030,baseindex);

setFontSize(".heading2",0.023,baseindex);
setFontSize(".heading3",0.022,baseindex);

setFontSize(".input",0.028,baseindex);
setFontSize(".inputselect",0.028,baseindex);
setFontSize(".select",0.023,baseindex);
setFontSize(".line",0.030,baseindex);
setFontSize(".step",0.024,baseindex);
setFontSize(".alert1",0.036,baseindex);

setFontSize("#lanbutton",0.026,baseindex);
setFontSize("#scanQR",0.026,baseindex);
setFontSize("#loadingheading1",0.030,baseloading);



$(".select1").css("border-width",baseindex*0.01+"px");
};



function fillin(info,obj){
document.getElementById(obj).value=document.getElementById(info).value;
};

var markF= 0;
var markT= 0;






