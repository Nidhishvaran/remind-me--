let i = 0;
function add(){
    i = i+1
  
    var work = String(document.getElementById("text_input").value) 
    //var new_tag = document.createElement("h3")  
    var new_tag = document.createElement("h3") 
    var new_text = document.createTextNode(i+")  "+work+"")
    new_tag.value = new_text
    new_tag.appendChild(new_text)
    var element = document.getElementById("new")
    element.appendChild(new_tag)
}
function remove(){
let labelEmail = document.getElementById("new");
    labelEmail.innerHTML = ""
    i = 0
    var time = new Date()
    console.log(time.getTime())
    
}