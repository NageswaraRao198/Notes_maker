console.log("This is script.js of Note maker site")
showNotes();
let addBtn = document.getElementById('addBtn')
addBtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById("addTxt")
    let notes = localStorage.getItem("notes")
    if (notes == null) {
        notesObj = []
        // window.alert("Note is Empty!")
    }
    else {
        notesObj = JSON.parse(notes)
    }
    notesObj.push(addTxt.value)
    localStorage.setItem("notes", JSON.stringify(notesObj))
    addTxt.value = "";
    // console.log(notesObj)
    showNotes();
})
function showNotes() {
    let notes = localStorage.getItem("notes")
    if (notes == null) {
        notesObj = []
        // window.alert("Note is Empty!")
    }
    else {
        notesObj = JSON.parse(notes)
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
        <div class="card noteCard my-3 mx-3" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Note ${index+1}</h5>
                    <p class="card-text" >${element}</p>
                    <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                </div>
            </div>  `
    })
    let notesElm=document.getElementById('notes')
    if(notesObj.length!=0){
        notesElm.innerHTML=html;
    }
    else{
        notesElm.innerHTML="<p>No notes are there to show!</p>"
    }
}
function deleteNote(index){
    let notes=localStorage.getItem('notes')
    if(notes==null){
        notesObj=[]
    }
    else{
        notesObj=JSON.parse(notes)
    }
    notesObj.splice(index,1)
    localStorage.setItem('notes', JSON.stringify(notesObj))
    showNotes();
}
let search=document.getElementById('searchTxt')
search.addEventListener("input",function(){
    
    let inpVal=search.value.toLowerCase()
    let noteCards=document.getElementsByClassName('noteCard')
    Array.from(noteCards).forEach(function(element){
        let cardTxt=element.getElementsByTagName('p')[0].innerText.toLowerCase()
        if(cardTxt.includes(inpVal)){
            element.style.display="block"
        }
        else{
            element.style.display="none"
        }
    })

})