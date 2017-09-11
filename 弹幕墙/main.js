/*将弹幕储存在本地数据库中*/
$(document).ready(function(){
    $("#launch").click(function(e){
        var site = new Object;
        site.content = document.getElementById("content").value;
        var str = JSON.stringify(site); // 将对象转换为字符串
        localStorage.setItem(site.content,str);
    });
})
var idnumber=0;
$(document).ready(function(){
    $('#launch').click(function(){
        idnumber++;
        var content=document.getElementById('content').value;
        var child=$('<div id="" class="childbox"></div>');
        $('#yes').append(content);
        $('#display').append(child);
    })
})
