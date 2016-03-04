<html>
	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js"></script>
	<script type="text/javascript" src="animals.js"></script>
<head>

</head>
	<body>


	<?php
		ini_set('display_errors', 'On');

		$text = $_POST[q];
		$timingsText = $_POST[t];
		$questionData = fopen("questionData.txt", "a");
		fwrite($questionData, $text."\n"."\n"); //not done yet :(
		echo $text;

		$timingsData = fopen("timingsData.txt", "a");
		fwrite($timingsData, $timingsText."\n"."\n");
		echo "Formulario enviado, gracias por participar <br>";
		echo $timingsText;
		echo $_POST['forward'], "pls";

	?>


	</body>
</html>