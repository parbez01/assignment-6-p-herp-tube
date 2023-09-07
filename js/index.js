const handleCategory = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await response.json();
    const tabContainer = document.getElementById('tab-container')
    data.data.forEach((category) => {
        const div = document.createElement('div');
        div.innerHTML = `
        <a onclick="handleLoadNews('${category.category_id}')" class="tab">${category.category}</a>       
        `;
        tabContainer.appendChild(div);
    });
};


const handleLoadNews = async (categoryId) => {
    const response = await fetch(` https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
    const data = await response.json();
   
    
    if (categoryId == 1005) {
        const details=document.getElementById('details')
     const p = document.createElement('p');
 p.classList = " mx-auto gap-10 flex text-center items-center justify-center"
  p.innerHTML = `<img class="items-center" src="./image/Icon.png" alt="">
   <h1 class="text-xl lg:text-4xl font-bold">Oops!! Sorry, There is no content here</h1> 
   `
   details.innerHTML = '';
    details.appendChild(p) }
    else { 
        const details=document.getElementById('details')
       
     }


    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = '';
    data.data?.forEach((news) => {

        const time = news.others?.posted_date;
        let hr = Math.floor(time/60);
        let min = hr/60;
        let minutes = parseInt(min);
        let hour = parseFloat(minutes);
        let minute = time%60;

        const div = document.createElement('div');

        div.innerHTML = `

        <div class="h-[350px]">
        <div class="relative">
            <img class="h-[225px] w-full" src=${news.thumbnail} alt="">
            
            <p class="text-white absolute bg-black w-28 -mt-8 ml-36 lg:ml-60 w-[180px] text-end text-base">${hour ? hour : ''} <span> ${hour ? 'hour' : ''} </span> ${minute ? minute : ''} <span> ${minute ? 'Min Ago' : ''}</span> </p>
            
            
        </div>
        <div class="flex justify-start mt-3 gap-4 items-center">
            <img class="w-[40px] h-[40px] border-3 rounded-full" src=${news.authors[0].profile_picture} alt="">
            <h4 class="text-lg text-black ">${news.title}</h4>
        </div>
        <div class="flex justify-start ml-12 gap-6  ">
            <p class="">${news.authors[0].profile_name}</p>
            <img class="" src="badge2.svg" alt="">
        </div>
        <h4 class="text-base text-black ml-12 mt-4 ">${news.others.views}</h4>
    </div>
   
    `;
        details.innerHTML = '';           
        cardContainer.appendChild(div);
    })
}

handleCategory();
handleLoadNews('1000')
blogBtn=()=>{
    window.location.href='blog.html';

}