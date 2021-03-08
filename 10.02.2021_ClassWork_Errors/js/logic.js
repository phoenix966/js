try{
    console.log('начало работы')
    let result = undefinedVar + 10
    //..код
    console.log('Конец работы')
} catch(error){
    //обработка ошибки только для синхронного кода
    console.log('Будет ошибка: ' + error.name + "в которой" + error,message)
}

console.log('Сообщение вне блока try..catch')
// Обработка ошибок асинхронного кода
setTimeout(() => {
    try{
        console.log('начало работы')
        let result = undefinedVar + 10
        //..код
        console.log('Конец работы')
    } catch(error){
        //обработка ошибки асинхронного кода
        console.log('Будет ошибка: ' + error.name + "в которой" + error,message)
    }
}, 2000);

console.log('Сообщение вне блока try..catch')

//

throw new Error('Моя ошибка');  //Создает ошибки

// Триггеры Jquery

$('button').on('click',function (){
	console.log()
})

$('button').trigger('click')
$('button').off('click')

//Абсёрверы (Шаблон)(Свои триггеры позволяющие вызывать функции события подряд)

class Observer {
    constructor(){
        this.listeners = {};
    }
on(type,handler){
    // {'click':[function (){}]}
    if((!type in listeners)){
        this.listeners[type] = []
    }
    this.listeners[type].push(handler)
}

off(type, handler){
    if((!type in listeners)){
        this.listeners[type] = this.listeners[type].filter(item => {
            return item !== handler;
        })
    }
}
trigger(type, args) {
    if(!type in listeners){
        this.listeners[type].forEch(callback => {
            callback(args);
        })
    }
}
}

const obs = new Observer();

let guestArrived = function (data) {
    console.log('Гость' + data.name + "прибыл");
  };
  let guestDeparted = function (data) {
    console.log('Гость ' + data.name + " улетел");
  }
  
  
  
obs.on('arrived', guestArrived);
obs.on('departed', guestDeparted)
obs.trigger('arrived', {name: "Mike"});
obs.trigger('arrived', {name: "John"});
obs.trigger('departed', {name: 'Mike'});

  
  // obs.off('arrived', guestArrived)
  
  console.log(obs);