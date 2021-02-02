
/*=====
  navbar code
======
*/
const burgar=document.querySelector('.burgar');
const countItem=document.querySelector('.countItem');
const sidebar=document.querySelector('.sidebar');
const cross=document.querySelector('.cross');
// to slide sidebar
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
//to close sidebar
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
            position:'firstSliderItem',
            title:"Maybelline office pack",
       
            price:299,
            img:"./beauty.jpg"
    },
    {
        id:18,
        position:'secondSliderItem',
        title:"Pulses",
        price:299,
        img:"./dal.jpg"
    },
    {
        id:19,
        position:'thirdSliderItem',
        title:"Sensodyne",
        price:299,
        img:"./sansodine.jpg"
    }
    
];
const sliderBtns=document.querySelectorAll('.slider-btn');
sliderBtns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        for(let i=0;i<slideMenu.length;i++)
        {
            if(e.currentTarget.dataset.id==slideMenu[i].id)
            {
                if(localStorage.getItem(slideMenu[i].position)!==null){
                    Toast.show('This item is already in your cart','error');
                } 
                else{
                    localStorage.setItem(slideMenu[i].position,JSON.stringify({
                        id:slideMenu[i].id,
                        length:slideMenu.length,
                        quantity:1,
                        price:slideMenu[i].price,
                    }));
                    Toast.show('Item added successfully in your cart','success');
                    countItem.innerHTML=localStorage.length;
                } 
                
            }
        }
    })
})

// to change slide after seconds
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
const position=['firstItem','secondItem','thirdItem','fourthItem',
                'fifthItem','sixthItem','seventhItem','eightItem',
               'nineItem','tenthItem','eleventhItem','twelthItem',
                'thirteenItem','fourtheenItem','fifteenItem',
                'sixteenItem'];

//  toastify message code
const Toast={
    init(){
        this.hideTimeOut=null;
        this.el=document.createElement('div');
        this.el.className='toast'
        document.body.appendChild(this.el);
    },
    show(message,state)
    {
      clearTimeout(this.hideTimeOut);
      this.el.textContent=message;
      this.el.className='toast toast--visible';

      if(state)
      {
          this.el.classList.add(`toast--${state}`);
      }
      this.hideTimeOut=setTimeout(()=>{
          this.el.classList.remove('toast--visible');
      },3000);

    }
}

window.addEventListener('DOMContentLoaded',()=>{
    displayMenuItems(menu);
    Toast.init();
    if(localStorage.length!=0)
    {
    countItem.innerHTML=localStorage.length-1;
    }
    else
    {
     countItem.innerHTML=0;
    }
});

//filter buttons code

filterBtns.forEach(function(btn)
{
    
    btn.addEventListener('click',function(e)
    {
        const category=e.currentTarget.dataset.id;
        
        const menuCategory=menu.filter(function(menuItem)
        {
           if(menuItem.category===category)
              return menuItem;
        })
        if(category==='all'){
            displayMenuItems(menu)
        }
        else
        {displayMenuItems(menuCategory);}
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
             <h4 class="price"><i class="fas fa-rupee-sign"></i>${item.price}</h4>
          </header>
          <p class="item-text">${item.desc}</p>
          <button type="button" class="item-cart-button" data-btn="${item.id}">Add to cart</button>
        </div>
        </article>`
    });
    
    newItems=newItems.join(" ");
    

    sectionCenter.innerHTML=newItems;
    //cart code
    const addToCart=document.querySelectorAll('.item-cart-button');


    addToCart.forEach(function(btn){
        btn.addEventListener('click',(e)=>{
             
            for(let i=1;i<=menu.length;i++)
            {
                if(e.currentTarget.dataset.btn==i)
                {
                    if(localStorage.getItem(position[i-1])!==null){
                        
                        Toast.show('This item is already in your cart','error');
                    } 
                    else{
                        localStorage.setItem(position[i-1],JSON.stringify({
                            id:i,
                            length:menuItems.length,
                            quantity:1,
                            price:menu[i-1].price,
                        }));
                        Toast.show('Item added successfully in your cart','success');
                        countItem.innerHTML=localStorage.length;
                    } 
                }
            }
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
    icons.forEach(function(arg_1)
    {
        arg_1.addEventListener('click',function(){
                para.forEach(function(arg_2){
                    arg_2.classList.toggle("hide-question-para-2");

            })
        });
    })
});


