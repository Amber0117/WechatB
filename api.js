
//var id='5702ac4dee3aaca66dcab199';

var serverUrl = "http://52.5.156.91:8080/user";

var url="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxa6d450bf9726ed3b&redirect_uri=http%3A%2F%2Fnydev1.menusifu.com%2Fuser&response_type=code&scope=snsapi_userinfo&state=123456#wechat_direct";


function getUrlParam(name)
{ 
  var r = window.location.search.substr(1);
  var list = window.location.search.substr(1).split('&');
  var para = {};
  for(var i in list){
    var t = list[i].split('=');
    para[t[0]]=t[1];
    }
  return para;
}

function fetchUserInfo(code,id,NextGo,ErrorGo){
  if(!code&&!id)return;
  var myurl = serverUrl + (!!id?('/'+id):('?code='+code));
  //alert(myurl);
//alert("markF="+markF);
  $.ajax({
         type: 'GET',
         url: myurl,
         success: function(info) {
         	storeID(info.id);
          storeLang(info.lang);
         // alert(info.lang+"1");
          //alert("1");
          pageChange("#loadingpage","#indexpage");
          
          if(!!NextGo)NextGo(info);
          
          if(info.lang!=undefined){ 
            iniLan(info.lang);

          };
        },
          error:function(){
              if(!!ErrorGo)ErrorGo();
          }
      });
};

function storeID(id){
    localStorage.setItem('UserID', id);
	  data.id=id;
}

function storeLang(lang){
    localStorage.setItem('UserLang', lang);
    data.lang=lang;
}

function iniLan(info){
    if(data.lang=="chinese")
       {lansetting(chinese);
       }
    else
       {lansetting(english);
     }
}

function updateUserInfo(code,id,data,NextGo,ErrorGo){
  var myurl = serverUrl + '/'+id;
  $.ajax({
         type: 'PUT',
         url: myurl,
         data:{
          username:data.username,
          phone:data.phone,
          email:data.email,
          userType:data.userType,
          //lang:data.lang,
          lang:data.lang,
          merchant:{ name:data.merchant.name,
                    phone:data.merchant.phone,
                    type:data.merchant.type,
                    capacity:data.merchant.capacity
                  }
         },
          success: function(ret) {
             if(!!NextGo)NextGo();
          },
          error:function(){
              if(!!ErrorGo)ErrorGo();
          }
      });
}


var data={
      
        //"id":undefined,
         "id":undefined,
        "username":undefined,
        "firstname":undefined,
        "lastname":undefined,
        "birthday":undefined,
        "gender":undefined,
        "phone":undefined,
        "email":undefined,
        "description":undefined,
        "facebook":undefined,
        "twitter":undefined,
        "prefix":undefined,
        "lang":undefined,
        "userType":undefined,

        "merchant":{
             "merchantId":undefined , 
             "name":undefined ,
             "phone":undefined ,
             "type":undefined,
             "capacity":undefined,
             "delivery":undefined
           },
        "address":{
             "address1":undefined , 
             "address2":undefined , 
             "city":undefined , 
             "state":undefined , 
             "zipcode":undefined 
        }
}

 //var id='56fd38e815f8f386a2569120';












