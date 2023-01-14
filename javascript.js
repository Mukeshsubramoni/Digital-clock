const clock=document.querySelector('.clock');


function time(){
    var time = new Date()
    var hr=time.getHours()
    var min=time.getMinutes()
    var sec=time.getSeconds()
    if(hr>12){
        hr=hr-12;
        txt="PM"
    }else if(hr==0){
        txt="AM"
    }
    hr=hr<10?'0'+hr:hr;
    min=min<10?'0'+min:min;
    sec=sec<10?'0'+sec:sec;
    

    // clock.innerHTML=`${hr} : ${min} : ${sec}  ${txt}`

   var h=document.querySelectorAll('.h')
   var m=document.querySelectorAll('.m')
   var s=document.querySelectorAll('.s')
    hr=hr.toString();
    h[0].innerHTML=hr[0];
    h[1].innerHTML=hr[1];
    min=min.toString();
    m[0].innerHTML=min[0];
    m[1].innerHTML=min[1];
    sec=sec.toString();
    s[0].innerHTML=sec[0];
    s[1].innerHTML=sec[1];
}
setInterval(time,1000)