const traccia_number  = document.getElementById("tr-number")
const final_value_tr = traccia_number.value

const iframe_link_search  = document.getElementById("iframe-imput")
// const iframe_link_play_pause  = document.getElementsByClassName("con-playpause")


const button_plus  = document.getElementById("btn-plus")

const minis  = document.getElementById("btn-mins")

let variable_traccia_number = final_value_tr



const traccia_link = `https://media.edilingua.it/nvs1tr${variable_traccia_number}/`

iframe_link_search.setAttribute("src", traccia_link)

console.log(button_plus)
button_plus.addEventListener("click", function (e) {
let num = Number(variable_traccia_number)
       num ++ 
       minis.removeAttribute("disabled")
     variable_traccia_number = num.toString()

     traccia_number.value = variable_traccia_number

const traccia_link = `https://media.edilingua.it/nvs1tr${variable_traccia_number}/`

iframe_link_search.setAttribute("src", traccia_link)
  
})

minis.addEventListener("click", function (e) {
    let num = Number(variable_traccia_number)
    
    if(Number(variable_traccia_number) <= 1){
        minis.setAttribute("disabled", true)
    }else if (variable_traccia_number > 1){
       
        num --
        variable_traccia_number = num.toString()
        traccia_number.value = variable_traccia_number

const traccia_link = `https://media.edilingua.it/nvs1tr${variable_traccia_number}/`

iframe_link_search.setAttribute("src", traccia_link)
    }

})

