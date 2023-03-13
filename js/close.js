const modalAllBtn = () =>{
    const allBtnModal = document.getElementById('all-btn-modal');
    allBtnModal.classList.toggle("d-none");
}

document.getElementById('close-btn').addEventListener('click', function(){
    const allBtnModal = document.getElementById('all-btn-modal');
    allBtnModal.classList.add("d-none");
})

document.getElementById('submit').addEventListener('click', function(){
    window.location.href = "success.html"
});

const textArea = document.getElementById('text-area');


textArea.addEventListener("keyup", function(){
    const textArea = document.getElementById('text-area');
    const textAreaValue = textArea.value;
    console.log(textAreaValue.length);
    if(textAreaValue.length >= 250){
        textArea.setAttribute("disabled", true);
    }
})


