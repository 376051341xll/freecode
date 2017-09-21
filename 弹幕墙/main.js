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

var content=[];
var contentinformation=Object;

function Save(){
    var content1 = document.getElementById("content").value;
    content=[content1];
    contentinformation={
        content:content1,
    };
    if(isNull()==false){
        alert("Please refine your danmu!");
    }else {
        $.ajax({
            type: 'PUT',
            data: contentinformation,
            url:  'http://47.93.200.205:8080/account/post',
            crossDomain: true,
            success: function (data) {
                postSuccess(data);
            }
        })
    }
    console.log(contentinformation);
    return contentinformation;
}

