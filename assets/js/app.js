function toPost(textToPublish, sectionToPublish, sectionForErrorText){
    var docFrag = document.createDocumentFragment();
    if(textToPublish.trim().length == 0 || textToPublish == null){
        sectionForErrorText.innerText = "*Escribe tu publicación*" ;
    }else{
    var createdDiv = document.createElement("DIV");
    var createdParagraph = document.createElement("P");
    createdParagraph.append(textToPublish);
    createdDiv.append(createdParagraph);
    docFrag.append(createdDiv);
    console.log(docFrag);
    console.log(createdParagraph);
    sectionToPublish.prepend(docFrag);
    sectionToPublish.firstChild.style.display = "flex";
    sectionForErrorText.innerText = "";
    }
}

window.addEventListener("load", function(){
    var postForm = document.getElementById("post-form");
    var post = document.getElementById("post-textarea");
    var publicationsDiv = document.getElementById("contains-all-post");
    var spanError  = document.getElementById("span-error");
    
    
    postForm.addEventListener("submit", function(){
        event.preventDefault();
    });
    
    document.getElementById("print-post-button").addEventListener("click", function(){
        toPost(post.value, publicationsDiv, spanError);
        postForm.reset();
    });
});