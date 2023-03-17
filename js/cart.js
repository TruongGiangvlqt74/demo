let list = document.querySelectorAll('.products_top .card__product-top')
list.forEach(item => {
    item.addEventListener('click', function(event){
        if(event.target.classList.contains('add')){
            let newItem = item.cloneNode(true)
            let productImg = newItem.querySelector('img').src ;
            let productName = newItem.querySelector('h3').innerText ;
            let productPrice = newItem.querySelector('.card__price span').innerText ;
            addcart(productImg,productName,productPrice)
        }
        function addcart(productImg,productName,productPrice){
            let addtr = document.createElement("tr")
            let trcontent = '<tr> <th scope="row">1</th> <td><img src="'+productImg+'" width= 50 alt=""></td> <td><span class ="title_productname">'+productName+'</span></td> <td><span class = "products">'+productPrice+'</span></td> <td><input type="number" value="1" min="0"></td> <td style="cursor: pointer;  class ="cart_delete">xóa</td> </tr>'
            let cardTable = document.querySelector('tbody')
            addtr.innerHTML = trcontent
            cardTable.append(addtr)
            let count = productPrice.length
            console.log(count)
        }










    })
})