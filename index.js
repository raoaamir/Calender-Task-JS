var p=0
var count;
var eventArray=[];

var event1={
Ename:"meeting",
loc:"LHR",
sTime:9,
eTime:10,
}

var event2={
    Ename:"meeting",
    loc:"LHR",
    sTime:11,
    eTime:12.5,
    }

    var event3={
        Ename:"meeting",
        loc:"LHR",
        sTime:13,
        eTime:14.5,
        }

        var event4={
            Ename:"meeting",
            loc:"LHR",
            sTime:14,
            eTime:15,
            }
eventArray = [event1,event2,event3,event4]





function createEvent(eventName,loc,time,endtime){
var Container = document.createElement("div");
Container.classList.add("event");
count=p.toString()
Container.id=count
Container.style.height= cheight(endtime,time);
var ti = document.createElement('h3');
ti.innerHTML=time.toString()
var name = document.createElement('p');
name.innerHTML=eventName
var location=document.createElement('span');
location.innerHTML=loc
location.style.color= "green"
Container.appendChild(ti);
Container.appendChild(name);
Container.appendChild(location);
var element = document.getElementById(time);
console.log(element)
element.appendChild(Container);
p++;
return Container ;
}

function cheight(a,b){

    var c=(((a-b)*1.9)*2).toString() +"rem"
    return c;
}

function elementsOverlap(el1, el2) {
    const domRect1 = el1.getBoundingClientRect();
    const domRect2 = el2.getBoundingClientRect();
  
    return !(
      domRect1.top > domRect2.bottom ||
      domRect1.right < domRect2.left ||
      domRect1.bottom < domRect2.top ||
      domRect1.left > domRect2.right
    );
  }
  
    

var z =[];
console.log(z);
eventArray.forEach(element => {
    var m=createEvent(element.Ename,element.loc ,element.sTime,element.eTime)
    console.log(m,"iii")
    z.push(m);
 console.log(z);
    
});


for(i=0;i<z.length;i++){
   for(j=i+1;j<z.length; j++){
    console.log(z[i]);
    console.log(elementsOverlap(z[i],z[j]),'i');
   if(elementsOverlap(z[i],z[j])){
       var a= z[i].parentElement;
        console.log(a)
      var h=((a.id-eventArray[j].sTime)*-1.9*2).toString()+"rem";
             a.appendChild(z[j]);
             z[j].style.marginTop=h;

         }
     }

}


// createEvent('meeting ','409c',9,11)
// createEvent('meeting at office','409c',10,13)

  