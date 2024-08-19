!DOCTYPE html>
<html>
<head>
    <style>
        h1 {
            color: blue;
        }
        h2 {
            color: red;
        }
        p {
            color: green;
        }
    </style>
</head>
<body>
    <h1 id="myH1"></h1>
    <h2 id="myH2"></h2>
    <p id="myP"></p>

    <script>
        document.getElementById("myH1").innerHTML = "Hello World";
        document.getElementById("myH2").innerHTML = "Introducing the Accio Ipsum";
        document.getElementById("myP").innerHTML = "Accio ipsum dolor sit amet, join course, solve assignments, get placed above 5 lpa and live life king size.";
    </script>
</body>
</html>
