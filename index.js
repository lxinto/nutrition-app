let arr = []
let progress = 0 

function getVal() {
    const val = document.querySelector('input').value;
    const progressBar = document.querySelector(".progress");
    
    arr.push((val/30)*100)
   
    var progress = arr.reduce(function(a, b){
        return a + b;
    }, 0);

    if (progress < 100) {
        progress 
    } else {
        progress = 100
    }

    progressBar.style.width = progress + "%"    
    
    console.log(val);
    console.log(progress + "%")   
    console.log(arr)
}

//clear button
function del() {
    
    if (arr.length > 0 ) {
        arr.pop()
        console.log(arr)
    }
    
    var progress = arr.reduce(function(a, b){
        return a + b;
    }, 0);
  
    const progressBar = document.querySelector(".progress");
    progressBar.style.width = progress + "%"    
    
    // const progressBar = document.querySelector(".progress");
    // progressBar.style.width = 0 + "%"   

}


