<?php
// если была нажата кнопка "Отправить"
if($_POST['submit']) {
        // $_POST['title'] содержит данные из поля "Тема", trim() - убираем все лишние пробелы и переносы строк, htmlspecialchars() - преобразует специальные символы в HTML сущности, будем считать для того, чтобы простейшие попытки взломать наш сайт обломались, ну и  substr($_POST['title'], 0, 1000) - урезаем текст до 1000 символов. Для переменной $_POST['mess'] все аналогично
        $backurl="http://bellydance-samara1.ru/contacts/";
        $name = $_POST['name'];
        $email = $_POST['email'];
        $title = substr(htmlspecialchars(trim($_POST['title'])), 0, 1000);
        $message =  substr(htmlspecialchars(trim($_POST['message'])), 0, 1000000);
        // $to - кому отправляем
        $to = 'rakov.di@gmail.com.ru';
        // $from - от кого
        $from='info@bellydance-samara1.ru';
        // функция, которая отправляет наше письмо.
        mail($to, $title, $message, 'From:'.$from);
        echo 'Спасибо! Ваше письмо отправлено.';

}
?>

