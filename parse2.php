<?php

$data = file_get_contents('https://www.youtube.com/results?search_query=%D0%BA%D0%B0%D0%BC%D0%B1%D0%BE%D0%B4%D0%B6%D0%B0');

 

 //preg_match_all('/ytd-video-renderer(.*)<\/ytd-video-renderer>/', $data, $matches);

 echo "<pre>";
 var_dump($data);
 echo '</pre>';

?>
