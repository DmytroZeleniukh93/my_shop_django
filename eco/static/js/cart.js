console.log('asd')

var updateBtns = document.getElementsByClassName('update-cart')
console.log('asd')
for(var i = 0; i < updateBtns.length; i++){
    console.log('asd')
    updateBtns[i].addEventListener('click', function(){
        var productId = this.dataset.product
        var action = this.dataset.action
        console.log('productId:', productId, 'action:', action)

        console.log('USER:', user)
        if (user === 'AnonymousUser'){
            console.log('Not log')
        }else{
            console.log('User is logged')
        }

    })
}