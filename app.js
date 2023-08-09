 var form=document.getElementById("addForm");
var list=document.getElementById("items");
var listen=document.getElementById("newId");
var filter=document.getElementById("filter");
 filter.addEventListener("keyup",filterItem);

list.addEventListener("click",removeItem);
list.addEventListener("click",editItem);

listen.addEventListener("click",addItem);

function addItem(e){ 
    e.preventDefault();
    var fname=document.getElementById("item").value;
    var lname=document.getElementById("meti").value;

      var li=document.createElement("li");
     li.className="list-group-item";
    li.appendChild(document.createTextNode(fname));
    li.appendChild(document.createTextNode(lname));
     list.appendChild(li);
    
     var buton=document.createElement("button");
     buton.className="btn btn-danger btn-sm float-right  delete";
     buton.id="but";
     buton.appendChild(document.createTextNode("X"));
     li.appendChild(buton);

    
     var edit=document.createElement("button");
    // var lrt=document.querySelector(".list-group-item:nth-child(1)");
     edit.className="btn btn-primary btn-sm float-right  edit";
     edit.appendChild(document.createTextNode("Edit"));
     li.appendChild(edit,edit.nextElementSibling);
     
    var user={
        fname,
        lname
    }
     
 localStorage.setItem(fname,JSON.stringify(user));

}
   



function removeItem(e){
    e.preventDefault();
    var key=document.getElementById("item").value;
    //const{fname}=user;
    //localStorage.removeItem(key);
    if(e.target.classList.contains("delete")){
        if(confirm("Are You Sure?")){
            var ret=e.target.parentElement;
            localStorage.removeItem(key);
            list.removeChild(ret);
           //localStorage.removeItem(fname);
            //list.removeChild(ret);
        }

    }


}

function editItem(e){
    if(e.target.classList.contains("edit")){
    var ret=e.target.parentElement;
    list.removeChild(ret);
    }
    document.getElementById("item").value=user.fname;
    document.getElementById("meti").value=user.lname;

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