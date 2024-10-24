"use strict";




// ------------------------------ toggle navBar ------------------------------ //
let menuList = document.querySelector('.menu');
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
const intro = document.querySelector("#intro-mapping");
// console.log(intro);

userDatas.forEach((el) => {

    const introElement = document.createElement('div');

    introElement.classList.add('w-[320px]', 'h-[640px]', 'p-2', 'bg-green-100', 'rounded','mt-3','hover:shadow-2xl','cursor-pointer');
    introElement.innerHTML = `
     <img src="${el.img}" class="rounded">
     <h1 class="text-xl text-blue-800">${el.fName} ${ el.lName}</h1>
    <p class="text-gray-500">
        ${el.info}
    </p>
    <span class="text-red-600">${el.email}</span>
    <div class="text-green-500 text-xl">${el.id}</div>
`;
    intro.append(introElement);
});