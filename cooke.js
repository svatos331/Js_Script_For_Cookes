function get_cookie ( cookie_name )
{
  alert("да")
  var results = document.cookie.match ( '(^|;) ?' + cookie_name + '=([^;]*)(;|$)' );
  if ( results )
    return ( unescape ( results[2] ) );
  else
    return null;
}



if (typeof(get_cookie("ZAVODNGO")) == "string") {

}else{
    var wrapper = document.createElement('div');
    wrapper.classList.add('cookie_2342714123')
    var span = document.createElement('span');
    span.classList.add('popup__title')
    span.innerText = 'Информация о Cookies'
    var p = document.createElement('p');
    p.classList.add('popup__text')
    p.innerText = 'Мы используем Cookies для того, чтобы сделать ваше пребывание на нашем сайте максимально комфортным. Если вы продолжаете просмотр страниц без изменения настроек, это будет означать, что вы принимаете все Cookies сайта «Норникель». Вы также можете нажать кнопку «Я принимаю», чтобы скрыть это сообщение. Конечно, вы можете изменить ваши настройки Cookies в любое время, настроив браузер соответствующим образом. Детали о Cookies доступны по ссылке'
    var divButton = document.createElement('div');
    divButton.classList.add('btn--bordered')
    divButton.innerText = 'Я принимаю'
    wrapper.append(span)
    wrapper.append(p)
    wrapper.append(divButton)
    document.getElementsByTagName('body')[0].append(wrapper)
    
    document.getElementsByClassName('btn--bordered')[0].addEventListener('click', function () {
        document.cookie = "ZAVODNGO=Zhilin; expires=Zhilin";
        document.getElementsByClassName('cookie_2342714123')[0].remove();
    })
}




