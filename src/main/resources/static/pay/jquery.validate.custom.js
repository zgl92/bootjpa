jQuery.validator.addMethod("username", function(value, element) {   
	return this.optional(element) || /^(?!gm)(?!GM)(?!jbt)(?!JBT)[a-zA-Z]{1}([a-zA-Z0-9]|[_]){5,19}$/.test(value);   
}, "通行证账号格式不正确");

jQuery.validator.addMethod("password", function(value, element) {   
	return this.optional(element) || /^[^\u4e00-\u9fa5]{6,32}$/.test(value);   
}, "密码格式不正确");

//jQuery.validator.addMethod("usercardid", function(value, element) {   
//	return this.optional(element) || /^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/.test(value);   
//}, "身份证号码格式不正确");


// jQuery.validator.addMethod("usercardid", function(value, element) {   
	// return this.optional(element) || /^((1[1-5])|(2[1-3])|(3[1-7])|(4[1-6])|(5[0-4])|(6[1-5])|71|(8[12])|91)\d{4}((19\d{2}(0[13-9]|1[012])(0[1-9]|[12]\d|30))|(19\d{2}(0[13578]|1[02])31)|(19\d{2}02(0[1-9]|1\d|2[0-8]))|(19([13579][26]|[2468][048]|0[48])0229))\d{3}(\d|X|x)?$/.test(value);   
// }, "请输入正确的身份证号");



jQuery.validator.addMethod("lenght", function(value, element) {
   return this.optional(element) || islenght(value);   
 }, "身份证号长度应为15位或18位,请填写真实身份证");
 
 jQuery.validator.addMethod("usercardid", function(value, element) {
   return this.optional(element) || isIdCardNo(value);   
 }, "您的身份证格式有误,请填写真实身份证");
 
 
 
 
jQuery.validator.addMethod("realname", function(value, element) {   
return this.optional(element) || /^[\u0391-\uFFE5]{2,4}$/.test(value);   
});


jQuery.validator.addMethod("city", function(value, element) {
   return this.optional(element) || iscity(value);   
 }, "您的身份证省编码有误,请填写真实身份证");
 


jQuery.validator.addMethod("mobile", function(value, element) {   
	return this.optional(element) || /^0{0,1}(13[0-9]|14[0-9]|15[0-9]|17[0-9]|18[0-9])[0-9]{8}$/.test(value);   
}, "手机号码格式不正确");

jQuery.validator.addMethod("questionTO", function(value, element, param) { 
	if(value!='' && $(param).val()!=''){return value != $(param).val();}else{return true}
}, "密保保护问题相同");

jQuery.validator.addMethod("amount", function(value, element) {   
	//return this.optional(element) ||  /^([1-9]\d{1,4}|15000)$/.test(value);   
	return /^[1-9][0-9]{0,5}$/.test(value) && parseInt(value) <= 100000 && parseInt(value) >= 10;
}, "输入金额格式不正确(10-100000)");






var aCity={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",  
21:"辽宁",22:"吉林",23:"黑龙江",31:"襄阳",32:"江苏",33:"浙江",
34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北",  
43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川"  
,52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",63:"青海",  
64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外"}   

 
 function iscity(sId){  
  
  if(aCity[parseInt(sId.substr(0,2))]==null) 
  return false;  
  sBirthday=sId.substr(6,4)+"-"+Number(sId.substr(10,2))+"-"+Number(sId.substr(12,2));  
  var d=new Date(sBirthday.replace(/-/g,"/")) ;  

 
  return true;

 
}  


 function islenght(num) {

 var factorArr = new Array(7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2,1);
 var parityBit=new Array("1","0","X","9","8","7","6","5","4","3","2");
 var varArray = new Array();
 var intValue;
 var lngProduct = 0;
 var intCheckDigit;
 var intStrLen = num.length;
 var idNumber = num;
   // initialize
     if ((intStrLen != 15) && (intStrLen != 18)) {
	 
         return false;
     }
    
      return true;
     
	  }
 
 
 




function isIdCardNo(num) {

 var factorArr = new Array(7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2,1);
 var parityBit=new Array("1","0","X","9","8","7","6","5","4","3","2");
 var varArray = new Array();
 var intValue;
 var lngProduct = 0;
 var intCheckDigit;
 var intStrLen = num.length;
 var idNumber = num;
   // initialize
     if ((intStrLen != 15) && (intStrLen != 18)) {
	 
         return false;
     }
     // check and set value
     for(i=0;i<intStrLen;i++) {
         varArray[i] = idNumber.charAt(i);
         if ((varArray[i] < '0' || varArray[i] > '9') && (i != 17)) {
             return false;
         } else if (i < 17) {
             varArray[i] = varArray[i] * factorArr[i];
         }
     }
	 
	 if (intStrLen == 18) {
         //check date
         var date8 = idNumber.substring(6,14);
         if (isDate8(date8) == false) {
            return false;
         }
         // calculate the sum of the products
         for(i=0;i<17;i++) {
             lngProduct = lngProduct + varArray[i];
         }
         // calculate the check digit
         intCheckDigit = parityBit[lngProduct % 11];
         // check last digit
         if (varArray[17] != intCheckDigit) {
             return false;
         }
     }
     else{        //length is 15
         //check date
         var date6 = idNumber.substring(6,12);
         if (isDate6(date6) == false) {

             return false;
         }
     }
     return true;
     
	  }

function isDate6(sDate) {
   if(!/^[0-9]{6}$/.test(sDate)) {
      return false;
   }
   var year, month, day;
   year = sDate.substring(0, 4);
   month = sDate.substring(4, 6);
   if (year < 1700 || year > 2500) return false
   if (month < 1 || month > 12) return false
   return true
}

function isDate8(sDate) {
   if(!/^[0-9]{8}$/.test(sDate)) {
      return false;
   }
   var year, month, day;
   year = sDate.substring(0, 4);
   month = sDate.substring(4, 6);
   day = sDate.substring(6, 8);
   var iaMonthDays = [31,28,31,30,31,30,31,31,30,31,30,31]
   if (year < 1700 || year > 2500) return false
   if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) iaMonthDays[1]=29;
   if (month < 1 || month > 12) return false
   if (day < 1 || day > iaMonthDays[month - 1]) return false
   return true
}



function CheckReg(){

       if (document.regform.verifycode.value == '' )
     {
                document.regform.verifycode.focus();
                return false;
        }
    
     if (document.regform.password.value == '' )
     {
                document.regform.password.focus();
                return false;
        }
    if (document.regform.realname.value == '' )
     {
                document.regform.realname.focus();
                return false;
        }
    if (document.regform.usercardid.value == '' )
     {
                document.regform.usercardid.focus();
                return false;
        } 
    
    if (document.regform.email.value == '' )
     {
                document.regform.email.focus();
                return false;
        } 
        
        document.regform.NextStep.disabled=true;
        document.regform.NextStep.value='正在提交.'      
        return true;
}