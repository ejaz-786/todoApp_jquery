$(function(){

    $("#success").hide();
    $("#error").hide();


// let arr = [];
$("#btn-1").click(function(){ // add prod

   let arr =[];
    var val1 = $('#inp1').val();
    var val2 = $('#inp2').val();
    var val3 = $('#inp3').val();
    var val4 = $('#inp4').val();
  
   obj = {roll:val1,name:val2,price:val3,quant:val4};

   arr.push(obj);
//    console.log(arr);

for(x in arr){
    // console.log(x);
    let col ="";
    for(y in arr[x]){
        // console.log(y);
        // console.log(arr[x][y]);
      col += `<td>${arr[x][y]}</td>`
    }
    col += ` <td><span><a href="#" class="edit">Edit</a></span><span><a href="#" class="delete">delete</a></span></td>`
  let  row = `<tr>${col}</tr>"`;
    $("#mytable").append(row);
    $("#success").show();

}
});



$("p").on("click", function(){
    $(this).hide();
});

$("#mytable").on("click", function(event){
 var x = event.target;
 if(x.className == "edit"){
    var tr = $(".edit").parentNode.parenNode;
    // ar =[];
    $(tr).each(function(){
        let val = $(this).text()
        ar.push(val);
       }); 
    //    console.log(ar);
 }
 else if(x.className == "delete"){
    alert("delete hai ");
 }


});







});