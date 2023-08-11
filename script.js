'use strict';
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const showModal = document.querySelectorAll('.show-modal');
const overlay = document.querySelector('.overlay');

const openModelFunction = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};
const closeModelFunction = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
    };

for (let i = 0; i < showModal.length; i++) 
    showModal[i].addEventListener('click',openModelFunction);

closeModal.addEventListener('click', closeModelFunction);
overlay.addEventListener('click', closeModelFunction);

document.addEventListener('keydown', function(event)
{

    if (event.key === "Escape" && !modal.classList.contains('hidden')){
        
            closeModelFunction()
        
    }

});