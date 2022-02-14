
let val=0;
var plus=$("#btn-add");
var reset=$("#btn-reset");
var sub=$("#btn-sub");
style();

plus.on('click',function(){
    if(val<10)
    {
        val++;
        $("#count").text(val);
        plus.prop('disabled',false);
        style();
    }
    else
    {
        plus.prop('disabled',true);
    }
});

sub.on('click',function(){
  if(val>0){
    val--;
    $("#count").text(val);
    plus.prop('disabled',false);
    style();
}
else {
    sub.prop('disabled', true);
}
});
reset.on('click',function(){
    val=0;
    $("#count").text(val);
    style();
});
function style()
{
    if(val%2==0)
    {
        $("body").css("background-color","lightblue");
        $("#count").css("color","white");
    }
    else
    {
        $("body").css("background-color","grey");
        $("#count").css("color","red");
    }
}