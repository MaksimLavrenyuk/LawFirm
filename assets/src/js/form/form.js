$(document).ready(function() {
    // Устанавливаем обработчик потери фокуса для всех полей ввода текста
    $('#name, #tel, #email, #message').blur(function() {
        // Для удобства записываем обращения к атрибуту и значению каждого поля в переменные 
        var id = $(this).attr('id');
        var val = $(this).val();
        // После того, как поле потеряло фокус, перебираем значения id, совпадающее с id данного поля
        switch (id) {

            // Проверка поля "Имя"
            case 'name':
                var rv_name = /^[a-zA-Zа-яА-Я]+$/; // используем регулярное выражение

                // Eсли длина имени больше 2ух символов, оно не пустое и удовлетворяет рег. выражению,
                // то добавляем этому полю класс .not_error,
                // и ниже в контейнер для ошибок выводим слово "Принято", т.е. валидация для этого поля пройдена успешно

                if (val.length > 2 && val != '' && rv_name.test(val)) {
                    $(this).addClass('not_error');
                    $(this).next('.error-box').text('Принято')
                        .css('color', 'green')
                        .animate({ 'paddingLeft': '10px' }, 400)
                        .animate({ 'paddingLeft': '5px' }, 400);
                }

                // Иначе, мы удаляем класс not-error, и заменяем его на класс error, говоря о том что поле содержит ошибку валидации,
                // и ниже в наш контейнер выводим сообщение об ошибке и параметры для верной валидации
                else {
                    $(this).removeClass('not_error').addClass('error');
                    $(this).next('.error-box').html('&bull; поле "Имя" обязательно для заполнения<br> &bull; длина имени должна составлять не менее двух символов<br> &bull; поле должно содержать только русские или латинские буквы')
                        .css('color', 'red')
                        .animate({ 'paddingLeft': '10px' }, 400)
                        .animate({ 'paddingLeft': '5px' }, 400);
                }
                break;


                // Проверка телефона
            case 'tel':
                
                if (val.length == 18) {
                    $(this).addClass('not_error');
                    $(this).next('.error-box').text('Принято')
                        .css('color', 'green')
                        .animate({ 'paddingLeft': '10px' }, 400)
                        .animate({ 'paddingLeft': '5px' }, 400);
                } else {
                    $(this).removeClass('not_error').addClass('error');
                    $(this).next('.error-box').html('&bull; поле "Телефон" обязательно для заполнения<br> &bull; поле должно содержать правильный правильный телефон, <br> (например: +7 (800) 000-00-00)')
                        .css('color', 'red')
                        .animate({ 'paddingLeft': '10px' }, 400)
                        .animate({ 'paddingLeft': '5px' }, 400);
                }
                break;

        } 

    }); 

    
    // Теперь отправим наше письмо с помощью AJAX
    $('form#feedback-form').submit(function(e) {
        // Запрещаем стандартное поведение для кнопки submit
        e.preventDefault();
        var submit = $("[type=submit]",this);
        var width =  $("[type=submit]",this).css("width");
        // После того, как мы нажали кнопку "Отправить", делаем проверку,
        // если кол-во полей с классов .not_error равно 2(так как у нас всего 2 поля), то есть все поля заполнены верно,
        // выполняем наш Ajax сценарий и отправляем письмо адресату
        if ($('.not_error').length == 2) {
            $.ajax({
                url: 'feedback.php',
                type: 'post',
                data: $(this).serialize(),
                beforeSend: function(xhr, textStatus) {
                    $('form#feedback-form :input').attr('disabled', 'disabled');
                    submit.css("justify-content", "center");
                    submit.html("");
                    submit.css('min-width' , ''+width+'')
                    $('<img class="preloader" src="img/preloader.svg" alt="preloader" style="width: 13px; height: 13px;">').appendTo(submit);
                },
                success: function(response) {
                    $('form#feedback-form :input').removeAttr('disabled');
                    $('form#feedback-form :text, textarea').val('').removeClass('not_error').next('.error-box').text('');
                    submit.html("");
                    submit.html("Отправлено");
                    submit.prop('disabled', true);
                }
            }); 
        } else {
            return false;
        }
        // Иначе, если количество полей с данным классом не равно значению 3 мы возвращаем false,
        // останавливая отправку сообщения в невалидной форме


    }); 
}); 