<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    echo "hello world!";
    echo "<br>";

    //数据类型

    //创建数据
    $a = 'abc1.1.1';
    $b = '1.1.1abc';


    //自动转换
    // echo  $a + $b;
    //强制转换
    echo (float)$a+(float)$b;
    echo "<br>";
    //判断类型
    var_dump(is_int($a));
    echo "<br>";
    
    echo gettype($a);
    var_dump(settype($a,'int'));
    echo gettype($a);
    ?>
</body>
</html>