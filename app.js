 var form=document.getElementById("addForm");
var list=document.getElementById("items");
var listen=document.getElementById("newId");


list.addEventListener("click",removeItem);

listen.addEventListener("click",addItem);
function addItem(e){ 
    e.preventDefault();
     var itm=document.getElementById("item").value;
      var li=document.createElement("li");
     li.className="list-group-item";
    li.appendChild(document.createTextNode(itm));
     list.appendChild(li);
    
     var buton=document.createElement("button");
     buton.className="btn btn-danger btn-sm float-right delete";
     buton.appendChild(document.createTextNode("X"));
     li.appendChild(buton);

    
     var edit=document.createElement("button");
     //var lrt=document.querySelector(".list-group-item:nth-child(1)");
     edit.className="btn btn-primary btn-sm float-right edit";
     edit.appendChild(document.createTextNode("Edit"));
     li.appendChild(edit);
    
     


   
}

function removeItem(e){
    e.preventDefault();
    if(e.target.classList.contains("delete")){
        if(confirm("Are You Sure?")){
            var ret=e.target.parentElement;
            list.removeChild(ret);
        }

    }
}