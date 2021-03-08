// let arrayText = [];

// for(let i = 0;i<6;i++){
//     let value = 0;
//     if(value === 6){
//         alert('нет места');
//         break;
//     } else{
//         let text = prompt('Введите текст:')
//         arrayText.push(text);
//     };
// };

// $('#tab').on('click',function(event){
//     event.preventDefault();
//     let value = $('.tab__btn')
//     let i = 0;
//     if(value.length === 6){
//         console.log('Нет места')
//     } else{
//         let newElem = $('<li>').addClass('tab__btn').html('<a href="#" id="new" class="tab__link tab__new">Add +</a>');
//         $('.tab').append(newElem);
//     }   
// });

 
// $('.tab').on('click','.tab__new',function(event){
//         event.preventDefault();
//         $(this).closest('.tab__btn').remove();
//     });


// $('.tab').on('click','.tab__new',function(event){
//         event.preventDefault();
//         let index = $(this).closest().index()
//         $('.text').text(arrayText[index])
//     });

////////////////////////////////