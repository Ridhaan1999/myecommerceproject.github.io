const burgar=document.querySelector('.burgar');
console.log(burgar);
const sidebar=document.querySelector('.sidebar');
// console.log(sidebar);
const cross=document.querySelector('.cross');
let open=false;
burgar.addEventListener('click',()=>{
    if(open===false)
    {
        sidebar.style.transform='translateX(0%)';
        open=true;
    }
    else
    {
        sidebar.style.transform='translate(-100%)';
        open=false;
    }
});
cross.addEventListener('click',()=>{
    sidebar.style.transform='translate(-100%)';
    open=false;
});

/*
====
   SlideShow
====
*/
const slideMenu=[
    {
            id:17,
            title:"Maybelline office pack",
       
            price:299,
            img:"./beauty.jpg"
    },
    {
        id:18,
        title:"Pulses",
        price:299,
        img:"./dal.jpg"
    },
    {
        id:19,
        title:"Sensodyne",
        price:299,
        img:"./sansodine.jpg"
    }
    
];
const sliderBtns=document.querySelectorAll('.slider-btn');
sliderBtns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        console.log(e.currentTarget.dataset.id);
        switch(e.currentTarget.dataset.id)
        {
              case '17':
                if(localStorage.getItem('firstSliderItem')!==null){
                    alert('Item already in your cart');
                    
                } 
                else{
                    localStorage.setItem('firstSliderItem',JSON.stringify({
                        id:17,
                        length:menu.length+3,
                        quantity:1,
                        price:slideMenu[0].price,
                    }));
                    alert('Item added successfully in your cart');
                }
               break;
               case '18':
                if(localStorage.getItem('secondSliderItem')!==null){
                    alert('Item already in your cart');
                    
                } 
                else{
                    localStorage.setItem('secondSliderItem',JSON.stringify({
                        id:18,
                        length:menu.length+3,
                        quantity:1,
                        price:slideMenu[1].price,
                    }));
                    alert('Item added successfully in your cart');
                }
               break;
               case '19':
                if(localStorage.getItem('thirdSliderItem')!==null){
                    alert('Item already in your cart');
                    
                } 
                else{
                    localStorage.setItem('thirdSliderItem',JSON.stringify({
                        id:19,
                        length:menu.length+3,
                        quantity:1,
                        price:slideMenu[2].price,
                    }));
                    alert('Item added successfully in your cart');
                }
               break;
        }
    })
})


let counter=0;
showSlides();
function showSlides()
{
    let i;
    const slides=document.querySelectorAll('.slide');
    for(i=0;i<slides.length;i++)
    {
        slides[i].style.display="none";
    }
    counter++;
    if(counter>slides.length)
    {
        counter=1;
    }
    slides[counter-1].style.display='block';
    setTimeout(showSlides,4000);

}

/*
=====
Products
=====
*/

 const menu=[
    {
        id: 1,
        title: "Red Bull",
        category: "health",
        price: 199,
        img: "./health-1.jpg",
        desc: `It is an energy drink.It has lots of benefit.It has lots of useful ingredients.Cost is low `,   
    },
    {
        id: 2,
        title: "Almond",
        category: "health",
        price: 200,
        img: "./almond.jpg",
        desc: `It is an almond pack.It has lots of benefit.It has lots of useful ingredients.Cost is low `,
    },
    {
        id: 3,
        title: "Mineral Water",
        category: "health",
        price: 99,
        img: "./health-3.jpg",
        desc: `It is a mineral water.It has lots of benefit.It has lots of useful ingredients.Cost is low `,
    },
    {
        id: 4,
        title: "face Cream",
        category: "beauty",
        price: 399,
        img: "./beauty-1.jpg",
        desc: `It is a face cream.It has lots of benefit.It has lots of useful ingredients.Cost is low `,
    },
    {
        id: 5,
        title: "face Wash",
        category: "beauty",
        price: 449,
        img: "./beauty-2.jpg",
        desc: `It is a face wash.It has lots of benefit.It has lots of useful ingredients.Cost is low `,
    },
    {
        id: 6,
        title: "face cream",
        category: "beauty",
        price: 349,
        img: "./beauty-3.jpeg",
        desc: `It is a face cream.It has lots of benefit.It has lots of useful ingredients.Cost is low `,
    },
    {
        id: 7,
        title: "Wheat",
        category: "cooking",
        price: 30,
        img: "./wheat.jpg",
        desc: `It is a wheat pack.It has lots of benefit.It has lots of useful ingredients.Cost is low `,
    },
    {
        id: 8,
        title: "Rice",
        category: "cooking",
        price: 50,
        img: "./rice-1.jpg",
        desc: `It is a rice pack.It has lots of benefit.It has lots of useful ingredients.Cost is low `,
    },
    {
        id: 9,
        title: "Cooking Oil",
        category: "cooking",
        price: 140,
        img: "./oil.png",
        desc: `It is a cooking oil.It has lots of benefit.It has lots of useful ingredients.Cost is low `,
    },
    {
        id: 10,
        title: "Cabbage",
        category: "vegitable",
        price: 30,
        img: "./veg-1.jpeg",
        desc: `It is a cabbage.It has lots of benefit.It has lots of useful ingredients.Cost is low `,
    },
    {
        id: 11,
        title: "Brinjal",
        category: "vegitable",
        price: 50,
        img: "./veg-2.png",
        desc: `It is a brinjal.It has lots of benefit.It has lots of useful ingredients.Cost is low `,
    },
    {
        id: 12,
        title: "Vegitable",
        category: "vegitable",
        price: 150,
        img: "./veg-3.jpg",
        desc: `It is a vegitable bag.It has lots of benefit.It has lots of useful ingredients.Cost is low `,
    },
    {
        id: 13,
        title: "Biscuits",
        category: "snacks",
        price: 20,
        img: "./snack-1.jpg",
        desc: `It is a biscuit pack.It has lots of benefit.It has lots of useful ingredients.Cost is low `,
    },
    {
        id: 14,
        title: "Butter",
        category: "snacks",
        price: 20,
        img: "./snack-2.jpg",
        desc: `It is a butter pack.It has lots of benefit.It has lots of useful ingredients.Cost is low `,
    },
    {
        id: 15,
        title: "Namkeen",
        category: "snacks",
        price: 15,
        img: "./snack-3.jpg",
        desc: `It is a namkeen pack.It has lots of benefit.It has lots of useful ingredients.Cost is low `,
    },
    {
        id: 16,
        title: "Milk",
        category: "snacks",
        price: 50,
        img: "./snack-4.jpg",
        desc: `It is a milk pack.It has lots of benefit.It has lots of useful ingredients.Cost is low `,
    },
  

]

const sectionCenter=document.querySelector('.section-center');
const filterBtns=document.querySelectorAll('.filter-btn');
// console.log(cartArticle);
console.log(filterBtns);
 let obj,arr=[];
// localStorage.removeItem('arrayLength');

 


window.addEventListener('DOMContentLoaded',()=>{
    displayMenuItems(menu);
});

filterBtns.forEach(function(btn)
{
    console.log(btn);
    btn.addEventListener('click',function(e)
    {
        const category=e.currentTarget.dataset.id;
        console.log(category);
        const menuCategory=menu.filter(function(menuItem)
        {
           if(menuItem.category===category)
           {
               
               return menuItem;
           }
        })
        if(category==='all')
        {
            displayMenuItems(menu);
        }
        else
        {
            displayMenuItems(menuCategory);
        }
    })
})


function displayMenuItems(menuItems)
{
    
    let newItems=menuItems.map(function(item)
    {
    
        return `<article class="menu-item">
        <img src="${item.img}" alt="${item.title}" class="photo"/>
        <div class="item-info">
          <header>
             <h4>${item.title}</h4>
             <h4 class="price">${item.price}</h4>
          </header>
          <p class="item-text">${item.desc}</p>
          <button type="button" class="item-cart-button" data-btn="${item.id}">Add to cart</button>
        </div>
        </article>`
    });
    
    newItems=newItems.join(" ");
    

    sectionCenter.innerHTML=newItems;
    //cart code
    const a=document.querySelectorAll('.item-cart-button');
    console.log(a);
    let i=0;
    a.forEach(function(btn){
        btn.addEventListener('click',(e)=>{
             
            switch(e.currentTarget.dataset.btn)
            {
                  case '1':
                    if(localStorage.getItem('firstItem')!==null){
                        alert('Item already in your cart');
                        
                    } 
                    else{
                        localStorage.setItem('firstItem',JSON.stringify({
                            id:1,
                            length:menuItems.length,
                            quantity:1,
                            price:menu[0].price,
                        }));
                        alert('Item added successfully in your cart');
                    }
                   
               
                  break;
                  case '2':
                    if(localStorage.getItem('secondItem')!==null){
                        alert('Item already in your cart');
                        
                    } 
                    else{
                      localStorage.setItem('secondItem',JSON.stringify({
                        id:2,
                        length:menuItems.length,
                        quantity:1,
                        price:menu[1].price,
                    }));
                    alert('Item added successfully in your cart');
                }
                  break;
                  case '3':
                    if(localStorage.getItem('thirdItem')!==null){
                        alert('Item already in your cart');
                        
                    } 
                    else{
                      localStorage.setItem('thirdItem',JSON.stringify({
                        id:3,
                        length:menuItems.length,
                        quantity:1,
                        price:menu[2].price,
                    }));
                    alert('Item added successfully in your cart');
                }
                  break;
                  case '4':
                    if(localStorage.getItem('fourthItem')!==null){
                        alert('Item already in your cart');
                        
                    } 
                    else{
                      localStorage.setItem('fourthItem',JSON.stringify({
                        id:4,
                        length:menuItems.length,
                        quantity:1,
                        price:menu[3].price,
                    }));
                    alert('Item added successfully in your cart');
                }
                  break;
                  case '5':
                    if(localStorage.getItem('fifthItem')!==null){
                        alert('Item already in your cart');
                        
                    } 
                    else{
                      localStorage.setItem('fifthItem',JSON.stringify({
                        id:5,
                        length:menuItems.length,
                        quantity:1,
                        price:menu[4].price,
                    }));
                    alert('Item added successfully in your cart');
                }
                  break;
                  case '6':
                    if(localStorage.getItem('sixthItem')!==null){
                        alert('Item already in your cart');
                        
                    } 
                    else{
                      localStorage.setItem('sixthItem',JSON.stringify({
                        id:6,
                        length:menuItems.length,
                        quantity:1,
                        price:menu[5].price,
                    }));
                    alert('Item added successfully in your cart');
                }
                  break;
                  case '7':
                    if(localStorage.getItem('seventhItem')!==null){
                        alert('Item already in your cart');
                        
                    } 
                    else{
                      localStorage.setItem('seventhItem',JSON.stringify({
                        id:7,
                        length:menuItems.length,
                        quantity:1,
                        price:menu[6].price,
                    }));
                    alert('Item added successfully in your cart');
                }
                  break;
                  case '8':
                    if(localStorage.getItem('eightItem')!==null){
                        alert('Item already in your cart');
                        
                    } 
                    else{
                      localStorage.setItem('eightItem',JSON.stringify({
                        id:8,
                        length:menuItems.length,
                        quantity:1,
                        price:menu[7].price,
                    }));
                    alert('Item added successfully in your cart');
                }
                  break;
                  case '9':
                    if(localStorage.getItem('nineItem')!==null){
                        alert('Item already in your cart');
                        
                    } 
                    else{
                      localStorage.setItem('nineItem',JSON.stringify({
                        id:9,
                        length:menuItems.length,
                        quantity:1,
                        price:menu[8].price,
                    }));
                    alert('Item added successfully in your cart');
                }
                  break;
                  case '10':
                    if(localStorage.getItem('tenthItem')!==null){
                        alert('Item already in your cart');
                        
                    } 
                    else{
                      localStorage.setItem('tenthItem',JSON.stringify({
                        id:10,
                        length:menuItems.length,
                        quantity:1,
                        price:menu[9].price,
                    }));
                    alert('Item added successfully in your cart');
                }
                  break;
                  case '11':
                    if(localStorage.getItem('eleventhItem')!==null){
                        alert('Item already in your cart');
                        
                    } 
                    else{
                      localStorage.setItem('eleventhItem',JSON.stringify({
                        id:11,
                        length:menuItems.length,
                        quantity:1,
                        price:menu[10].price,
                    }));
                    alert('Item added successfully in your cart');
                }
                  break;
                  case '12':
                    if(localStorage.getItem('twelthItem')!==null){
                        alert('Item already in your cart');
                        
                    } 
                    else{
                      localStorage.setItem('twelthItem',JSON.stringify({
                        id:12,
                        length:menuItems.length,
                        quantity:1,
                        price:menu[11].price,
                    }));
                    alert('Item added successfully in your cart');
                }
                  break;
                  case '13':
                      
                      localStorage.setItem('thirteenItem',JSON.stringify({
                        id:13,
                        length:menuItems.length,
                        quantity:1,
                        price:menu[12].price,
                    }));
                    alert('Item added successfully in your cart');
                  break;
                  case '14':
                    if(localStorage.getItem('fourtheenItem')!==null){
                        alert('Item already in your cart');
                        
                    } 
                    else{
                      localStorage.setItem('fourtheenItem',JSON.stringify({
                        id:14,
                        length:menuItems.length,
                        quantity:1,
                        price:menu[13].price,
                    }));
                    alert('Item added successfully in your cart');
                }
                  break;
                  case '15':
                    if(localStorage.getItem('fifteenItem')!==null){
                        alert('Item already in your cart');
                        
                    } 
                    else{
                      localStorage.setItem('fifteenItem',JSON.stringify({
                        id:15,
                        length:menuItems.length,
                        quantity:1,
                        price:menu[14].price,
                    }));
                    alert('Item added successfully in your cart');
                }
                  break;
                  case '16':
                    if(localStorage.getItem('sixteenItem')!==null){
                        alert('Item already in your cart');
                        
                    } 
                    else{
                      localStorage.setItem('sixteenItem',JSON.stringify({
                        id:16,
                        length:menuItems.length,
                        quantity:1,
                        price:menu[15].price,
                    }));
                    alert('Item added successfully in your cart');
                }
                  break;
            }
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
            //  num=e.currentTarget.dataset.btn;
            //   length=menuItems.length;
            //   if( localStorage.getItem('btnNum')===null)
            //   {
                 
            //   }
            //   else{
            //      localStorage.setItem('oldBtnNum',localStorage.getItem('btnNum')) ;
            //   }
            //   localStorage.setItem('btnNum',`${num}`);
            //   localStorage.setItem('arrayLength',`${length}`);
            // if(localStorage.getItem('newItem')!==null)
            // {
            //     for(;i<2;i++)
            //     {
                    
            //             arr[0]={
            //                 id:JSON.parse(localStorage.getItem('newItem')).id,
            //                    length:JSON.parse(localStorage.getItem('newItem')).length,
            //             }
            //             localStorage.setItem(`firstItem`,JSON.stringify(arr[0]));
                        
                    

            //     }
            // } 
            
            //     obj= {
            //         id:e.currentTarget.dataset.btn,
            //         length:menuItems.length
            //     };
            //     localStorage.setItem('newItem',JSON.stringify(obj));
            
            //  console.log();
            //  console.log(a.id);
     
           
        })
     
    });

}

/*
======
  Reviews
======
*/
const reviews=[
    {
        id:1,
        name:"susan smith",
        img:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        text:"Very good service,product is amazing. I got best experience of shopping,delivery service is fast",
    },
    {
        id:2,
        name:"anna johnson",
        img:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        text:"very high quality product,We can return our product very easily if we are not satisfied",
    },
    {
        id:3,
        name:"peter jones",
        img:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text:"Poor quality,They took very long time to deliver the product",
    },
    {
        id:4,
        name:"bill anderson",
        img:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        text:"I will recommand it bacause they provide best service,quality is amazing,cost is low",
    }
];
const image=document.querySelector('#person-img');
const personName=document.querySelector('#author');
const text=document.querySelector('#info');
const prevBtn=document.querySelector('.prev-btn');
const nextBtn=document.querySelector('.next-btn');
let count=0;
window.addEventListener('DOMContentLoaded',function(){
    image.src=`${reviews[0].img}`;
    personName.textContent=`${reviews[0].name}`;
    text.textContent=`${reviews[0].text}`;
})
nextBtn.addEventListener('click',()=>{
    count++;
    nextReview(reviews);
});
prevBtn.addEventListener('click',()=>{

    count--;
    prevReview(reviews);

})
function nextReview(newReview)
{
    if(count===newReview.length)
    {
        count=0;
    }
    image.src=`${reviews[count].img}`;
    personName.textContent=`${reviews[count].name}`;
    text.textContent=`${reviews[count].text}`;
   
}
function prevReview(newReview)
{
    if(count<0)
    {
        count=newReview.length-1;
    }
    image.src=`${reviews[count].img}`;
    personName.textContent=`${reviews[count].name}`;
    text.textContent=`${reviews[count].text}`;

}

//frequently asked questions

const question=document.querySelectorAll('.question-div');
question.forEach(function(que){
    const icons=que.querySelectorAll('.test');
    const para=que.querySelectorAll('.hide-question-para-1');
    icons.forEach(function(x)
    {
        x.addEventListener('click',function(){
                para.forEach(function(w){
                    w.classList.toggle("hide-question-para-2");

            })
        });
    })
});

/*
  Cart JavaScript
*/

// export default num;
// export default length;
// export default menu;
