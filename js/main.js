elInput = document.querySelector('.inp')
elBtn = document.querySelector('.btn')


var bosh = []
var arr = ['olma','nok','behi','anor','shaftoli','anjir','apelsin','mandalin','limon','orik','karam','tarvuz','qovun','piyoz','kartoshka','turup','sholgom','sarimsoq','mango','sabzi','olma','ananas','kivi','banaan','qizilcha']


elBtn.addEventListener('click', function(){
    for(var i=0; i<=arr.length; i++){
        var inp = elInput.value
        if(arr[i].length==inp)
        bosh.push(arr[i])
        console.log(bosh);
    }
})