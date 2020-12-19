# yasin.github.io
Membuat project sederhana hanya dengan menggunakan HTML, CSS dan javascript

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://fonts.googleapis.com/css2?family=Pacifico&family=Source+Sans+Pro&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="project.css" />

    <title>Document</title>
  </head>
  <body>
    <div class="container center gray">
      <h1>Kuis Tebak Tebakan</h1>
      <h2>Soal</h2>
      
      <p id="question">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum autem officiis quam placeat quisquam, cum
        nemo voluptatibus, praesentium possimus aliquam architecto atque minima, pariatur dicta provident molestiae?
        Neque, amet labore?
      </p>
      <div>
        <textarea class="full" id="answer"></textarea>
      </div>

      <div>
        <button class="half-width" id="checkAnswer">Periksa jawaban</button>
        <button class="half-width" id="newQuestion">Soal Baru</button>
      </div>
    </div>
    <script src="project.js"></script>
  </body>
</html>
