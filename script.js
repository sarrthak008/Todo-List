function Time() {

    date = new Date();
    console.log(date)
    sec = date.getSeconds();
    min = date.getMinutes();
    hr = date.getHours()
    return (`${hr.toString()}:${min.toString()}:${sec.toString()}`)

}


const add = () => {

    var todo = document.querySelector("#todo").value;
    var descInput = document.querySelector("#descI").value;
    var ul = document.querySelector("#ul")
    var li = document.createElement("li")

    var div1 = document.createElement("div")
    var div2 = document.createElement("div")
    var delbtn = document.createElement("button")
    var cbtn = document.createElement("button")
    var time = Time();
    console.log(time)
    if (todo.length == "") {
        alert("PLEASE NETER SOME THING TO DO........")
    } else {
        li.className += "li"
        div1.className += "title"
        div1.innerText = `${todo}`;
        div2.className += "desc"
        div2.innerText = `${descInput} adding time:${time}`
        delbtn.className += "delbtn"
        delbtn.innerText = "delete todo"
        cbtn.className += "cbtn"
        cbtn.innerText = "complete"

        ul.appendChild(li)
        li.appendChild(div1)
        li.appendChild(div2)
        li.appendChild(cbtn)
        li.appendChild(delbtn)
        cbtn.addEventListener("click", () => {
            li.style.borderStyle = "dashed";
            li.style.borderColor = "green";
            li.style.borderWidth = "1px"
        })
    }
    delbtn.addEventListener("click", () => {
        li.remove();
    })

}