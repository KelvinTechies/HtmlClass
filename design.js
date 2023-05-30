pr = document.getElementsByClassName('p')

function zoom(src) {
    // pr.innerHTML=`<img src='${params}' width='200px' height='400px'>`
    // pr.innerHTML = `<img src='${src}' width = '200' height = '600vh'>`
        pr.innerHTML = `<img src='${src}' width = '100px' height = '100vh'>`;


}   

function out(params) {
    pr.innerHTML=""
    
}

div= document.getElementsByClassName('div')

num=0


int= setInterval(()=>{

    div.style= "background:red; width:'+(num++)+%'; height:3px;"

    if (num==100) {
        clearInterval(int)
    }
}, 500)
