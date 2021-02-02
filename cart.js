const menu=[
    {
        id: 1,
        itemPosition:"firstItem",
        title: "Red Bull",
        category: "health",
        price: 199,
        img: "./health-1.jpg",
        desc: `It is an energy drink.It has lots of benefit.It has lots of useful ingredients.Cost is low `,   
    },
    {
        id: 2,
        itemPosition:"secondItem",
        title: "Almond",
        category: "health",
        price: 200,
        img: "./almond.jpg",
        desc: `It is an almond pack.It has lots of benefit.It has lots of useful ingredients.Cost is low `,
    },
    {
        id: 3,
        itemPosition:"thirdItem",
        title: "Mineral Water",
        category: "health",
        price: 99,
        img: "./health-3.jpg",
        desc: `It is a mineral water.It has lots of benefit.It has lots of useful ingredients.Cost is low `,
    },
    {
        id: 4,
        itemPosition:"fourthItem",
        title: "face Cream",
        category: "beauty",
        price: 399,
        img: "./beauty-1.jpg",
        desc: `It is a face cream.It has lots of benefit.It has lots of useful ingredients.Cost is low `,
    },
    {
        id: 5,
        itemPosition:"fifthItem",
        title: "face Wash",
        category: "beauty",
        price: 449,
        img: "./beauty-2.jpg",
        desc: `It is a face wash.It has lots of benefit.It has lots of useful ingredients.Cost is low `,
    },
    {
        id: 6,
        itemPosition:"sixthItem",
        title: "face cream",
        category: "beauty",
        price: 349,
        img: "./beauty-3.jpeg",
        desc: `It is a face cream.It has lots of benefit.It has lots of useful ingredients.Cost is low `,
    },
    {
        id: 7,
        itemPosition:"seventhItem",
        title: "Wheat",
        category: "cooking",
        price: 30,
        img: "./wheat.jpg",
        desc: `It is a wheat pack.It has lots of benefit.It has lots of useful ingredients.Cost is low `,
    },
    {
        id: 8,
        itemPosition:"eightItem",
        title: "Rice",
        category: "cooking",
        price: 50,
        img: "./rice-1.jpg",
        desc: `It is a rice pack.It has lots of benefit.It has lots of useful ingredients.Cost is low `,
    },
    {
        id: 9,
        itemPosition:"nineItem",
        title: "Cooking Oil",
        category: "cooking",
        price: 140,
        img: "./oil.png",
        desc: `It is a cooking oil.It has lots of benefit.It has lots of useful ingredients.Cost is low `,
    },
    {
        id: 10,
        itemPosition:"tenthItem",
        title: "Cabbage",
        category: "vegitable",
        price: 30,
        img: "./veg-1.jpeg",
        desc: `It is a cabbage.It has lots of benefit.It has lots of useful ingredients.Cost is low `,
    },
    {
        id: 11,
        itemPosition:"eleventhItem",
        title: "Brinjal",
        category: "vegitable",
        price: 50,
        img: "./veg-2.png",
        desc: `It is a brinjal.It has lots of benefit.It has lots of useful ingredients.Cost is low `,
    },
    {
        id: 12,
        itemPosition:"twelthItem",
        title: "Vegitable",
        category: "vegitable",
        price: 150,
        img: "./veg-3.jpg",
        desc: `It is a vegitable bag.It has lots of benefit.It has lots of useful ingredients.Cost is low `,
    },
    {
        id: 13,
        itemPosition:"thirteenItem",
        title: "Biscuits",
        category: "snacks",
        price: 20,
        img: "./snack-1.jpg",
        desc: `It is a biscuit pack.It has lots of benefit.It has lots of useful ingredients.Cost is low `,
    },
    {
        id: 14,
        itemPosition:"fourtheenItem",
        title: "Butter",
        category: "snacks",
        price: 20,
        img: "./snack-2.jpg",
        desc: `It is a butter pack.It has lots of benefit.It has lots of useful ingredients.Cost is low `,
    },
    {
        id: 15,
        itemPosition:"fifteenItem",
        title: "Namkeen",
        category: "snacks",
        price: 15,
        img: "./snack-3.jpg",
        desc: `It is a namkeen pack.It has lots of benefit.It has lots of useful ingredients.Cost is low `,
    },
    {
        id: 16,
        itemPosition:"sixteenItem",
        title: "Milk",
        category: "snacks",
        price: 50,
        img: "./snack-4.jpg",
        desc: `It is a milk pack.It has lots of benefit.It has lots of useful ingredients.Cost is low `,
    },
    {
        id:17,
        itemPosition:"firstSliderItem",
        title:"Maybelline office pack",
        price:299,
        img:"./beauty.jpg"
    },
    {
        id:18,
        itemPosition:'secondSliderItem',
        title:"Pulses",
        price:299,
        img:"./dal.jpg"
    },
    {
        id:19,
        itemPosition:'thirdSliderItem',
        title:"Sensodyne",
        price:299,
        img:"./sansodine.jpg"
    }

]
const cartArticle=document.querySelector('.single-cart-item');
const sum=document.querySelector('.total');
const orderNow=document.querySelector('#order-now');

// order now pe click event ka logic
orderNow.addEventListener('click',function(){
    localStorage.clear();
    cartArticle.style.display='none';
    sum.innerHTML='0';
})


const clearYourCart=document.querySelector('.clear-cart-button');

clearYourCart.addEventListener('click',function(){
    localStorage.clear();
    cartArticle.style.display='none';
    sum.innerHTML='0';

})
let total=0; 


    for(let i=0;i<menu.length;i++)
    {
        console.log(menu[i].itemPosition);
        
        if(localStorage.getItem(menu[i].itemPosition)!==null)
        {
            console.log('hello');
            addItemInCart(JSON.parse(localStorage.getItem(menu[i].itemPosition)));
          
        }
    }


const  removeItem=document.querySelectorAll('.remove-single-button');

 
removeItem.forEach(function(btn){

btn.addEventListener('click',function(e){
    
        for(let i=0;i<menu.length;i++)
       {
          if(menu[i].id==e.currentTarget.dataset.id)
          {
             localStorage.removeItem(menu[i].itemPosition);
             btn.parentElement.parentElement.style.display="none";
             document.location.reload(true);
          }
       }
     });
});


const increaseBtn=document.querySelectorAll('.increase-item');
increaseBtn.forEach(function(btn){
    btn.addEventListener('click',function(e){
        
       let id=e.currentTarget.dataset.id;
       btn.parentElement.parentElement.style.display="none";
       increaseItem(JSON.parse(localStorage.getItem(`${menu[id-1].itemPosition}`)));
   
       addItemInCart(JSON.parse(localStorage.getItem(`${menu[id-1].itemPosition}`)));
       document.location.reload(true);
    })
})

function increaseItem(getObj)
{
        getObj.quantity=getObj.quantity+1;
        getObj.price=menu[getObj.id-1].price*getObj.quantity;
        localStorage.setItem(`${menu[getObj.id-1].itemPosition}`,JSON.stringify(getObj));
        total=total+getObj.price;
        localStorage.setItem('total',total);
        sum.innerHTML=localStorage.getItem('total');

}
const decreaseBtn=document.querySelectorAll('.decrease-item');
decreaseBtn.forEach(function(btn){
    btn.addEventListener('click',function(e){
       let id=e.currentTarget.dataset.id;
       btn.parentElement.parentElement.style.display="none";
       decreaseItem(JSON.parse(localStorage.getItem(`${menu[id-1].itemPosition}`)));
   
       addItemInCart(JSON.parse(localStorage.getItem(`${menu[id-1].itemPosition}`)));
       document.location.reload(true);
    })
})
function decreaseItem(getObj)
{
    if(getObj.quantity==1)
    {
        return;
    }
    getObj.quantity=getObj.quantity-1;
    getObj.price=menu[getObj.id-1].price*getObj.quantity;
    localStorage.setItem(`${menu[getObj.id-1].itemPosition}`,JSON.stringify(getObj));
    total=total-getObj.price;
    localStorage.setItem('total',total);  
    sum.innerHTML=localStorage.getItem('total');  
}




function addItemInCart(getObject)
{
      // console.log(getObject.quantity);
    for(let i=0;i<menu.length;i++)
    {
        if(getObject.id==menu[i].id)
        {
            
            cartArticle.innerHTML=cartArticle.innerHTML+
            `<div class="one-cart-item"> 
            <div class="single-cart-image">
                            <img src="${menu[i].img}" alt="${menu[i].title}" class="cart-image"/>
                        </div>
                        <div class="single-cart-description">
                            <h3>${menu[i].title}</h3>
                            <h4><i class="fas fa-rupee-sign"></i>${getObject.price}</h4>
                            <button type="button" class="remove-single-button" data-id="${menu[i].id}">Remove</button>
                        </div>
                        <div class="single-cart-counter" >
                            <button class="increase-item" id="cart-item-counter" data-id="${menu[i].id}">
                               <i class="fas fa-chevron-up"></i>
                            </button>
                            <div class="counter">${getObject.quantity}</div>
                            <button class="decrease-item"  id="cart-item-counter" data-id="${menu[i].id}">
                              <i class=" fas fa-chevron-down"></i>
                            </button>
                        </div>
                        </div>`;
                        total=total+getObject.price;
                        localStorage.setItem('total',total);
                        sum.innerHTML=`<i class="fas fa-rupee-sign"></i>`+localStorage.getItem('total');
              console.log(cartArticle);
                        
        }
    }
  
}
if(total==0)
{
    clearYourCart.style.display="none";
    orderNow.style.display="none";
}

























