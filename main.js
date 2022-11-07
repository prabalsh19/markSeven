document.querySelector(".translate-btn").addEventListener("click",translate)
const output = document.querySelector("#translated-output")
function translate (){
    const input = (document.querySelector(".textarea").value)
    console.log(input);
   const response =fetch("https://api.funtranslations.com/translate/dothraki.json/?text="+ input
)
.then(response=>response.json())

.then(data=>{output.innerHTML = data.contents.translated; console.log(data.contents.translated);})
.catch((err)=>{
    console.log(err);
    alert("Something went wrong. Please try again later!")
})

}