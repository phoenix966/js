let foo = function(object,flag,count){
    let newDiary = $(`
    <div class="section__diary">
        <div class="section__row section__row--flex">
            <h4 class="section__text">Запись №${count}</h4>
            <p class="section__time">Дата пребывания:  ${object.date}</p>
            <p class="section__country">Страна:  ${object.place}<div class="section__picture"><img class="section__img" src="${flag}" alt="flag"></div></p>
            <p class="section__delete">Удалить запись Х</p>
        </div>
        <div class="section__row">
            <p class="section__txt">
                ${object.area}
            </p>
        </div>
    </div>`)
    $('.section__box').append(newDiary);
}

let count = 0;
let addInTest = function(){
    return count++
}
$.ajax({
    url:'https://restcountries.eu/rest/v2/all',
}).done(function(response){
    let option = {
        data: response,
        getValue: 'name',
        template:{
            type: 'iconRight',
            fields:{
                iconSrc: 'flag'
            }
        },
        list: {
            match:{
                enabled: true
            }
        },
        theme: "bootstrap"
    };
    $('.section__place').easyAutocomplete(option);
}).fail(function(error){
    console.log(error)
})

$('form').on('submit',function(event){
    event.preventDefault()
    let placeValue = $('#place').val()
    let object = {
        place: placeValue,
        date: $('#date').val(),
        area: $('#area').val(),
        flag: ''
    }
    
    $.ajax({
        url:`https://restcountries.eu/rest/v2/name/${placeValue}`,
    }).done(function(response){
        let flag = response[0].flag
        let count = addInTest()
        foo(object,flag,count)
    }).fail(function(error){
        console.log(error)
    })
})

$('.section').on('click','.section__delete',function(){
    this.closest('.section__diary').remove();
})