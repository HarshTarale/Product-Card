
const search= document.querySelector(".search");

const content= document.querySelector(".card");


function mens(){
    cardData(0);
}
function womens(){
    cardData(1);
}
function kidss(){
    cardData(2);
}

const cardData=async(no)=>{
    content.innerHTML="";

    const url ="https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json" 
const response = await fetch(url);
const data =await response.json();
const product =data.categories[no].category_products;
    
    product.filter(val=>{
        const div=document.createElement("div");
        div.setAttribute("class","hii")

        const substrac=val.compare_at_price-val.price;
        const discount=substrac/val.compare_at_price*100;
        const  discountValue=    Math.floor(discount);
        div.innerHTML=`<img src="${val.image}">
                      <div class="title">
                       <h2>${val.title}</h2>
                       <ul><li>${val.vendor}</li></ul>
                      </div>
                       <span>
                       <p class="spanP-1">Rs_${val.price}</p>
                       <del> <p>${val.compare_at_price}</p></del>
                       <p class="spanP-2">${discountValue} %Off</p>
                       </span>
                       <button class="btn">Add to Card</button> `;
        content.appendChild(div);
    })}


// const women=async()=>{
//     content.innerHTML="";
//     const url ="https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json" 
// const response = await fetch(url);
// const data =await response.json();
// const product =data.categories[1].category_products;
    
//     product.filter(val=>{
//         const div=document.createElement("div");
//         div.setAttribute("class","hii")

//         const substrac=val.compare_at_price-val.price;
//         const discount=substrac/val.compare_at_price*100;
//         const  discountValue=    Math.floor(discount);
//         div.innerHTML=`<img src="${val.image}">

//                       <div class="title">
//                        <h2>${val.title}</h2>
//                        <ul><li>${val.vendor}</li></ul>
//                       </div>
//                        <span>
//                        <p class="spanP-1">Rs_${val.price}</p>
//                        <del> <p>${val.compare_at_price}</p></del>
//                        <p class="spanP-2">${discountValue} %Off</p>
//                        </span>
//                        <button class="btn">Add to Card</button>`;
//         content.appendChild(div);
//          })}


// const kids=async()=>{
//     content.innerHTML="";
//     const url ="https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json" 
//     const response = await fetch(url);
//     const data =await response.json();
//     const product =data.categories[2].category_products;

//     product.filter(val=>{
//         const div=document.createElement("div");
//         div.setAttribute("class","hii")

//         const substrac=val.compare_at_price-val.price;
//         const discount=substrac/val.compare_at_price*100;
//         const  discountValue= Math.floor(discount);
     
//         console.log(val.title)
//         div.innerHTML=`<img src="${val.image}">
//                       <div class="title">
//                          <h2>${val.title}</h2>
//                          <ul><li>${val.vendor}</li></ul>
//                       </div>
//                       <span>
//                          <p class="spanP-1">Rs_${val.price}</p>
//                          <del> <p>${val.compare_at_price}</p></del>
//                          <p class="spanP-2">${discountValue} %Off</p>
//                       </span>
//                          <button class="btn">Add to Card</button>`;
//         content.appendChild(div);
//      })};






const list=()=>{
content.style.flexDirection="column";
content.style.alignItems="center";
content.style.justifyContent="center";
};

const graid=()=>{
    content.style.flexDirection="row";
    content.style.justifyContent="space-between";
};


search.addEventListener('input', () => {
    const searchTerm = search.value.toLowerCase();
    const productElements = document.querySelectorAll('.hii');

    productElements.forEach(product => {
        const title = product.querySelector('h2').textContent.toLowerCase();
        if (title.includes(searchTerm)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
});
