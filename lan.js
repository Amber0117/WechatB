function lansetting(lantype){   
  
 // alert("lan");
$("#indexheading1").html(lantype.indexpage.indexheading1);
$("#indexbutton1").html(lantype.indexpage.indexbutton1);
$("#indexor").html(lantype.indexpage.indexor);
$("#indexbutton2").html(lantype.indexpage.indexbutton2);
$("#lanbutton").html(lantype.indexpage.lanbutton);

//scanpage
$("#scanstep").html(lantype.scanpage.scanstep);
$("#scanQR").html(lantype.scanpage.scanQR);
$("#scanor").html(lantype.scanpage.scanor);
$("#Rname").attr("placeholder",lantype.scanpage.Rname);
$("#Rnumber").attr("placeholder",lantype.scanpage.Rnumber);
$("#Sback").html(lantype.scanpage.Sback);
$("#Sok").html(lantype.scanpage.Sok);

// "friendpage": 
$("#friendheading1").html(lantype.friendpage.friendheading1);
$("#friendheading2").html(lantype.friendpage.friendheading2);
$("#Femail").attr("placeholder",lantype.friendpage.Femail);
$("#Fnumber").attr("placeholder",lantype.friendpage.Fnumber);

$("#FRtype0").text(lantype.friendpage.FRtype0);
$("#FRtype1").text(lantype.friendpage.FRtype1);
$("#FRtype2").text(lantype.friendpage.FRtype2);
$("#FRtype3").text(lantype.friendpage.FRtype3);
$("#FRtype4").text(lantype.friendpage.FRtype4);
$("#FRtype5").text(lantype.friendpage.FRtype5);
$("#FRtype6").text(lantype.friendpage.FRtype6);
$("#FRtype7").text(lantype.friendpage.FRtype7);
$("#FRtype8").text(lantype.friendpage.FRtype8);
$("#FRtype9").text(lantype.friendpage.FRtype9);

$("#FRcapacity0").text(lantype.friendpage.FRcapacity0);
$("#FRcapacity5").text(lantype.friendpage.FRcapacity5);

$("#Fback").html(lantype.friendpage.Fback);
$("#Fok").html(lantype.friendpage.Fok);

//bosspage
$("#bossstep").html(lantype.bosspage.bossstep);
$("#bossheading1").html(lantype.bosspage.bossheading1);
$("#Bselect2").html(lantype.bosspage.Bselect2);
$("#bossheading2").html(lantype.bosspage.bossheading2);
$("#BUemail").attr("placeholder",lantype.bosspage.BUemail);
$("#BUnumber").attr("placeholder",lantype.bosspage.BUnumber);
$("#Bossback").html(lantype.bosspage.Bossback);
$("#Bossok").html(lantype.bosspage.Bossok);

//staffpage
$("#staffstep").html(lantype.staffpage.staffstep);
$("#staffheading1").html(lantype.staffpage.staffheading1);
$("#Sselect2").html(lantype.staffpage.Sselect2);
$("#staffheading2").html(lantype.staffpage.staffheading2);
$("#SUemail").attr("placeholder",lantype.staffpage.SUemail);
$("#SUnumber").attr("placeholder",lantype.staffpage.SUnumber);
$("#Staffback").html(lantype.staffpage.Staffback);
$("#Staffok").html(lantype.staffpage.Staffok);

//bosscomplete
$("#BCheading1").html(lantype.bosscompletepage.BCheading1);
$("#BCheading21").html(lantype.bosscompletepage.BCheading21);
$("#BCheading22").html(lantype.bosscompletepage.BCheading22);
$("#bosscomplete").html(lantype.bosscompletepage.bosscomplete);

//friendcomplete
$("#FCheading1").html(lantype.friendcompletepage.FCheading1);
$("#FCheading21").html(lantype.friendcompletepage.FCheading21);
$("#FCheading22").html(lantype.friendcompletepage.FCheading22);
$("#friendcomplete").html(lantype.friendcompletepage.friendcomplete);

//staffcomplete
$("#SCheading1").html(lantype.staffcompletepage.SCheading1);
$("#SCheading21").html(lantype.staffcompletepage.SCheading21);
$("#SCheading22").html(lantype.staffcompletepage.SCheading22);
$("#staffcomplete").html(lantype.staffcompletepage.staffcomplete);

//scanconfirm
$("#confirmheading1").html(lantype.scanconfirmpage.confirmheading1);
$("#CRemail").attr("placeholder",lantype.staffpage.CRemail);
$("#CRnumber").attr("placeholder",lantype.staffpage.CRnumber);
$("#Cback").html(lantype.scanconfirmpage.Cback);
$("#Cok").html(lantype.scanconfirmpage.Cok);

//alert
$("#alert11").html(lantype.alertpage1.alert11);
$("#alert12").html(lantype.alertpage1.alert12);

$("#alert21").html(lantype.alertpage2.alert21)
$("#alert22").html(lantype.alertpage2.alert22);

  };


var english = {
 "indexpage":{ "indexheading1":" Menusifu account", 
             "indexbutton1":"I'm using Menusifu",
             "indexor":"------------ Or  ------------", 
             "indexbutton2":" To know Menusifu",
             "lanbutton":"中文"
             }, 

 "scanpage":{ "scanstep":"STEP 1 Restaurant Info" , 
             "scanQR":"Scan Restaurant QR code" ,
             "scanor":"------------ Or  ------------" , 
             "Rname":"Restaurant Name" ,
             "Rnumber":"Restaurant Phone Number" , 
             "Sback":"BACK" ,
             "Sok":"OK" ,
             } ,

 "friendpage":  { "friendheading1":"Thank you for sign up!" , 
             "friendheading2":" You have been verified as a Menusifu Friend. Please let us know what Menusify can do for you" ,
             
             "FRtype0":"Restaurant Type",
             "FRtype1":"Chinese",
             "FRtype2":"Japanese",
             "FRtype3":"Korean",
             "FRtype4":"Amberican",
             "FRtype5":"Barbecue",
             "FRtype6":"Hotpot",
             "FRtype7":"Dessert",
             "FRtype8":"Beverage",
             "FRtype9":"Other",

             "FRcapacity0":"Restaurant Capacity",
             "FRcapacity5":"200 or more",
     


             "Femail":"Your Email" ,
             "Fnumber":"Your Phone Number",
             "Fback":"BACK" ,
             "Fok":"OK" ,
             } ,

  "scanconfirmpage":  { "confirmheading1":"Please confirm restaurant Information" , 
             "CRemail":"Restaurant Email" ,
             "CRnumber":"Restaurant  Phone Number",
             "Cback":"BACK" ,
             "Cok":"OK" ,
             }, 

  
  "bosspage":  { "bossstep":"STEP 2 Personal Info" , 
             "bossheading1":"You are a " ,
             "Bselect2":"I am a restaurant owner",
             "bossheading2":"Please fill in contact information to verify your identity" ,
             "BUemail":"Your Email" ,
             "BUnumber":"Your Phone Number",
            
             "Bossback":"BACK" ,
             "Bossok":"OK" ,
             } ,


  "staffpage":  { "staffstep":"STEP 2 Personal Info" , 
             "staffheading1":"You are a " ,
             "Sselect2":"I am a restaurant owner",
             "staffheading2":"Please fill in contact information to verify your identity" ,
             "SUemail":"Your Email" ,
             "SUnumber":"Your Phone Number",
            
             "Staffback":"BACK" ,
             "Staffok":"OK" ,
             } ,

"bosscompletepage":  { "BCheading1":"Thank you!" , 
             "BCheading21":" For you account safety, the VIP Verification Process may take 34 hours.",
             "BCheading22":"You will get a notificatoin message after verified. Or you can call 888-xxx-xxxx." ,
             "bosscomplete":"Complete",
             } ,

"friendcompletepage":  { "FCheading1":"Thank you for signing up!" , 
             "FCheading21":"Welcome to join our Menusifu Family!",
             "FCheading22":"Menusifu 365 will let you know more about our latest product updates." ,
             "friendcomplete":"Complete",
             } ,

"staffcompletepage":  { "SCheading1":"Thank you!" , 
             "SCheading21":"You have been verified as ######'s Member.",
             "SCheading22":"Menusifu 365 will do our best to help you using Menusifu product." ,
             "staffcomplete":"Complete",
             } ,

"alertpage1":  { "alert11":"Please fill in all the blanks before verify." , 
                 "alert12":"Thank you!",
             
             },

"alertpage2":  { "alert21":"Please fill in at least one blank before verify." , 
                 "alert22":"Thank you!",
             
             }  
}


 var chinese = {

  "indexpage":{ "indexheading1":" Menusifu 账户", 
             "indexbutton1":"正在使用 Menusifu",
             "indexor":"------------ 或  ------------", 
             "indexbutton2":"希望了解Menusifu",
             "lanbutton":"English"
             } ,

  "scanpage":{ "scanstep":"第一步：餐厅信息" , 
             "scanQR":"扫餐厅二维码" ,
             "scanor":" ------ 手动填写餐厅信息 ------" , 
             "Rname":"餐厅名称" ,
             "Rnumber":"餐厅电话" , 
             "Sback":"返回" ,
             "Sok":"下一步" ,
             } ,

  "friendpage":  { "friendheading1":"感谢您注册Menusifu!" , 
             "friendheading2":" 请选择与您餐厅信息相匹配的选项。我们将根据您提供的信息，为您提供个性化的Menusifu专属产品介绍推荐。" ,
             
             "FRtype0":"餐厅类别" ,
             "FRtype1":"中国菜" ,
             "FRtype2":"日本菜" ,
             "FRtype3":"韩国菜" ,
             "FRtype4":"美国菜" ,
             "FRtype5":"烧烤" ,
             "FRtype6":"火锅" ,
             "FRtype7":"甜品" ,
             "FRtype8":"饮料" ,
             "FRtype9":"其他" ,

             "FRcapacity0":"餐厅规模" ,
             "FRcapacity5":"200 及以上" ,



             "Femail":"邮 箱" ,
             "Fnumber":"电 话",
             "Fback":"返回" ,
             "Fok":"确认" ,
             } ,

"bosspage":  { "bossstep":"第二步：个人信息" , 
             "bossheading1":"您是" ,
             "Bselect2":"餐厅老板",
             "bossheading2":"请填写您的联系方式以便验证您的身份" ,
             "BUemail":"您的Email" ,
             "BUnumber":"您的电话",
            
             "Bossback":"返回" ,
             "Bossok":"确认" ,
             } ,

 "staffpage":  { "staffstep":"第二步：个人信息" , 
             "staffheading1":"您是" ,
             "Sselect2":"餐厅老板",
             "staffheading2":"请填写您的联系方式以便验证您的身份" ,
             "SUemail":"您的Email" ,
             "SUnumber":"您的电话",
            
             "Staffback":"返回" ,
             "Staffok":"确认" ,
             } ,

"bosscompletepage":  { "BCheading1":"感谢您注册Menusifu！" , 
             "BCheading21":"VIP验证过程可能需要24小时以保证您的账户安全。",
             "BCheading22":"验证完成后您将收到我们的信息。您也可以拨打 888-xxx-xxxx." ,
             "bosscomplete":"完成",
             } ,

"friendcompletepage":  { "FCheading1":"感谢您注册Menusifu！" , 
             "FCheading21":"欢迎您加入Menusifu大家庭！",
             "FCheading22":"我们会为您提供最新的Menusifu产品信息！" ,
             "friendcomplete":"完成",
             } ,

"staffcompletepage":  { "SCheading1":"感谢您注册Menusifu！" , 
             "SCheading21":"您已成为XXX餐厅的一员",
             "SCheading22":"Menusifu 365将会尽力帮助您使用Menusifu的产品" ,
             "staffcomplete":"完成",
             } ,

"scanconfirmpage":  { "confirmheading1":"请确认餐厅信息" , 
             "CRemail":"餐厅Email" ,
             "CRnumber":"餐厅电话",
             "Cback":"返回" ,
             "Cok":"下一步" ,
             } ,

"alertpage1":  { "alert11":"请填写完整所有信息" , 
                 "alert12":"非常感谢!",
             
             } ,

"alertpage2":  { "alert21":"请填写至少一项信息" , 
                 "alert22":"非常感谢!",
             
             } 

// "alertpage2":  { "alert21":"请至少填写一项信息" , 
//                  "alert22":"非常感谢!",
             
//              } ,

}



