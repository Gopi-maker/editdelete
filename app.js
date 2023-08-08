 var form=document.getElementById("addForm");
var list=document.getElementById("items");
var listen=document.getElementById("newId");
var filter=document.getElementById("filter");
 filter.addEventListener("keyup",filterItem);

list.addEventListener("click",removeItem);

listen.addEventListener("click",addItem);
function addItem(e){ 
    e.preventDefault();
     var itm=document.getElementById("item").value;
     var mti=document.getElementById("meti").value;
      var li=document.createElement("li");
     li.className="list-group-item";
    li.appendChild(document.createTextNode(itm));
    li.appendChild(document.createTextNode(mti));
     list.appendChild(li);
    
     var buton=document.createElement("button");
     buton.className="btn btn-danger btn-sm float-right  delete";
     buton.appendChild(document.createTextNode("X"));
     li.appendChild(buton);

    
     var edit=document.createElement("button");
     var lrt=document.querySelector(".list-group-item:nth-child(1)");
     edit.className="btn btn-primary btn-sm float-right  edit";
     edit.appendChild(document.createTextNode("Edit"));
     li.appendChild(edit,edit.nextElementSibling);
    
     


   
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

function filterItem(e){
 var text=e.target.value.toLowerCase();
 var item=list.getElementsByTagName("li");
Array.from(item).forEach(function(it){
    var itemName=it.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text)!=-1){
        it.style.display="block";
    } else { 
        it.style.display="none";
    }
});
}