<?php
// если была нажата кнопка "Отправить"
if($_POST['submit-question']) {
  // trim() - убираем все лишние пробелы и переносы строк,
  // htmlspecialchars() - преобразует специальные символы в HTML сущности,
  // будем считать для того,
  // чтобы простейшие попытки взломать наш сайт обломались,
  $backurl="http://bellydance-samara.ru/contacts/";
  $name = htmlspecialchars(trim($_POST['name']));
  $email = htmlspecialchars(trim($_POST['email']));
  $title = htmlspecialchars(trim($_POST['title']));
  $text = htmlspecialchars(trim($_POST['message']));

  $message = '
            <p><strong>Имя:</strong> '.$name.'</p>
            <p><strong>Контактный e-mail:<strong> <a href="mailto:'.$email.'">'.$email.'</a></p>
            <p><strong>Тема:</strong> '.$title.'</p>
            <p><strong>Текст сообщения:</strong><br />'.$text.'<p>
          ';

  // $to - кому отправляем
  $to = 'rakov.di@gmail.com';
  // $from - от кого
  $subject='ВОПРОС с сайта bellydance-samara.ru';
  //Дополнительные загловки
  $headers = "MIME-Version: 1.0" . "\r\n";
  $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

  $headers .= 'From: <info@bellydance-samara.ru>' . "\r\n";

  // функция, которая отправляет наше письмо.
  mail($to, $subject, $message, $headers);

  //проверяем отправку
//  if(TRUE === $mail) echo 'Thanks. Ваше сообщение успешно отправлено!';
//  else echo 'Sorry. Произошла ошибка при отправке сообщения.';
  echo 'Ваш вопрос успешно отправлен!';

}


if($_POST['submit-bid']) {
  // trim() - убираем все лишние пробелы и переносы строк,
  // htmlspecialchars() - преобразует специальные символы в HTML сущности,
  // будем считать для того,
  // чтобы простейшие попытки взломать наш сайт обломались,
  $backurl="http://bellydance-samara.ru/contacts/";
  $name = htmlspecialchars(trim($_POST['name']));
  $tel = htmlspecialchars(trim($_POST['tel']));
  $dancestyle = htmlspecialchars(trim($_POST['dancestyle']));
  $halls = htmlspecialchars(trim($_POST['halls']));
  $date = htmlspecialchars(trim($_POST['date']));

  $message = '
            <p><strong>Имя:</strong> '.$name.'</p>
            <p><strong>Контактный телефон:</strong> '.$tel.'</p>
            <p><strong>Направление:</strong> '.$dancestyle.'</p>
            <p><strong>Адрес зала:</strong><br />'.$halls.'<p>
            <p><strong>Желаемая дата начала занятий:</strong><br />'.$date.'<p>
          ';

  // $to - кому отправляем
  $to = 'rakov.di@gmail.com';
  // $from - от кого
  $subject='ЗАЯВКА с сайта bellydance-samara.ru';
  //Дополнительные загловки
  $headers = "MIME-Version: 1.0" . "\r\n";
  $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

  $headers .= 'From: <info@bellydance-samara.ru>' . "\r\n";

  // функция, которая отправляет наше письмо.
  mail($to, $subject, $message, $headers);

  //проверяем отправку
//  if(TRUE === $mail) echo 'Thanks. Ваше сообщение успешно отправлено!';
//  else echo 'Sorry. Произошла ошибка при отправке сообщения.';
  echo 'Ваша заявка успешно отправлена!';

}

?>

