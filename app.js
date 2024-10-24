"use strict";




// ------------------------------ toggle navBar ------------------------------ //
let menuList = $('.menu');
let menuButton = document.querySelector('#menuBtn');

menuButton.addEventListener('click', () => {
    menuList.classList.toggle('left-[-120%]')

    if (menuList.classList.contains('left-[-120%]')) {
        menuButton.innerHTML = `<i class="bx bx-menu-alt-left"></i>`;
    } else {
        menuButton.innerHTML = ` <i class='bx bx-x'></i>`;
    }
});



// ------------------------------ data maping ------------------------------ //
const intro = $("#intro-mapping");
// console.log(intro);

userDatas.forEach((el) => {

    const introElement = document.createElement('div');

    introElement.classList.add('w-[320px]', 'h-[640px]', 'p-2', 'bg-green-100', 'rounded', 'mt-3', 'hover:shadow-2xl', 'cursor-pointer');
    introElement.innerHTML = `
     <img src="${el.img}" class="rounded">
     <h1 class="text-xl text-blue-800">${el.fName} ${el.lName}</h1>
    <p class="text-gray-500">
        ${el.info}
    </p>
    <span class="text-red-600">${el.email}</span>
    <div class="text-green-500 text-xl">${el.id}</div>
`;
    intro.append(introElement);
});









// ------------------------------ data maping (creating with function) ------------------------------ //
const renderPlace = $("#mainn");
console.log(renderPlace);


// userDatas.forEach((element)=>{

//     const meinElement = ('div');

//     meinElement.classList.add();

//     meinElement.innerHTML=`
    
//       <img src="${element.img}">

//       <h2 class="text-black text-[red]">
//        ${element.fName} ${ element.lName}
//       </h2>

//       <p class="text-gray-400">
//          ${element.info}
//       </p>

//       <p class="text-blue-500">
//          ${element.email}
//       </p>
      
//       <span class="text-green-600">
//          ${element.id}
//       </span>
//     `;

//     renderPlace.append(meinElement);
// });


userDatas.forEach((e)=>{
    const box = creatorFunc('div','w-[320px] h-[640px] p-2 bg-gray-300 rounded mt-4',`
    
      <img src="${e.img}">

      <h2 class="text-black text-[red]">
       ${e.fName} ${ e.lName}
      </h2>

      <p class="text-gray-700">
         ${e.info}
      </p>

      <p class="text-blue-500">
         ${e.email}
      </p>
      
      <span class="text-green-600">
         ${e.id}
      </span>
    `);

    renderPlace.append(box);
})












// ------------------------------ data rendering with  <template> </template> ------------------------------ //
const enderSection = $("#end");
// console.log(enderSection);

const temp = $(".content");
// console.log(temp);

const cloneTemp = temp.content.cloneNode(true);
// console.log(cloneTemp);

const renderContent = $('#end');
// console.log(renderContent);

renderContent.append(cloneTemp);






















// ------------------------------ localization (languages changer) ------------------------------ //
console.log(lang);


const language = $("#languages");
// console.log(language);

const link = $$("#menu li a");
// console.log(link);


language.addEventListener('change', (evt) => {

    // console.log(evt.target.value);
    // console.log(lang[evt.target.value]);

    // link[0].textContent=lang[evt.target.value].home;
    // link[1].textContent=lang[evt.target.value].contact;
    // link[2].textContent=lang[evt.target.value].about;
    // link[3].textContent=lang[evt.target.value].portofilo;
    // link[4].textContent=lang[evt.target.value].usage;



    localStorage.setItem('lang', JSON.stringify(lang[evt.target.value]));

    seLang()
});


function seLang() {
    const local = JSON.parse(localStorage.getItem('lang'));

    link[0].textContent = local.home;
    link[1].textContent = local.contact;
    link[2].textContent = local.about;
    link[3].textContent = local.portofilo;
    link[4].textContent = local.usage;


};

seLang();
