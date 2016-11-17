/**
 * Created by Favorite on 17.11.2016.
 */

var arr=[];
var testVariable="test";
var testVariable1=1.02;
var bool=true;
var array=["string",12345,true];
var varOfTestFunction=4;
var obj= {
    "row1": 2,
    "row2": true,
    "row3": "string",
    "row4": [],
    "test-1": 1,
    "fnc": testFnc,
    // "fnc1": function () {
    //     console.log("my func");
    // }
    "fnc1": function (arg1) {
        console.log("arg1");
    },
    "fnc5":true
}

var testFnc=function () {
    console.log("test")
};

function test() {
    var varOfTestFunction=1;
    // testFnc(varOfTestFunction);
    // alert("varOfTestFunction");
    // var arr=[];
    // arr.push(varOfTestFunction);
    // console.log(arr);
    // console.log(obj.row1);
    // console.log(obj["row1"]);
    obj.fnc1();
}

var userData={
    'login':'username',
    "password":"userpassword"
};

function login() {
    // var username = document.getElementById("username").value;
    // var username = document.getElementsByName("username")[1].value;
    // var username = document.getElementsByClassName("username")[0].value;
    // var username = document.getElementsByTagName("input")[0].value;
    // var form=document.getElementsByName("userForm")[0];
    // console.log(form);
    var username=document.getElementsByName("username")[0].value;
    var password=document.getElementsByName("userpassword")[0].value;
    console.log({
        "username":username,
        "password":password
    });

}