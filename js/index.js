let root = document.querySelector("#root"); //Cogemos el div que esta creado en el HTML (en esta pagina web solo utilizamos un elemento en HTML)

//Creamos elementos mediante variable:
for (let i = 1; i <= 3; i++) {
  //Loop con 3 objetos. En la siguiente linea creamos un elemento para q éste loop lo convierte en tres
  let offerContainer = document.createElement("div"); // Creamos un elemento div que manipularemor con la variable offerContainer
  let img = document.createElement("img"); //Creamos un elemento img(caja img) que manipularemos con la variable img
  let textContainer = document.createElement("div"); //Creamos un elemento div que manipularemos con la variable textContainer que esta dentro de offerContainer
  let offer = document.createElement("p"); //Creamos un elemento p que manipularemos con la variable offer que esta dentro de offerContainer
  let prices = document.createElement("p"); // creamos un elemento p que manipularemos con la variable prices que esta dentro de offerContainer
  let month = document.createElement("p"); // creamos un elemento p que manipularemos con la variable month que esta dentro de offerContainer
  let button = document.createElement("button"); // Creamos un elemento button que manipularemos con la varibles button que esta dentro de offerContainer

  // Poner atributos a los elementos:

  offerContainer.setAttribute("class", "offerContainers"); // Damos un atributo class con el nombre offerContainers al elemento div offerContainer
  offerContainer.setAttribute("id", `offerContainer${i}`); // Damos un atributo id con el nombre offerContainer + i loop (i=div loop) asi  seran 3 divs con 3 id
  img.setAttribute("class", "images"); //Damos un atributo class con el nombre images al elemento img
  img.setAttribute("src", `../assets/pictures/pic${i}.png`); //Damos un atributo src donde cojemos las fotografias de la carpeta
  textContainer.setAttribute("class", "textContainers"); //Damos un atributo class llamado textContainers al elemento div textContainer
  button.setAttribute("class", "alerts"); //Damos un atributo class con el nombre alerts al elemento button
  button.setAttribute("id", `alert${i}`); //Damos un atributo id con el nombre alert+i loop (i=div loop para qeu sean 3) al elemento button

  // Anadir texto a un elemento:

  let offerContent = ["Starter", "Pro", "Teams"];//Creamos un variable array que contiene 3 valores (estos valores son el contenido de un elemento)
  offer.textContent = offerContent[i - 1]; //Anadimos texto al elemento p que se llama offer = será lo que hay en la variable array offerContent+[i -1] que es el loop i (ponemos -1 porque el loop empieza por 1 y queremos coger desde la posicion [0] que es ['starter'])

  let pricesContent = ["FREE", "$49", "$99"];//Creamos un variable array que contiene 3 valores (estos valores son el contenido de un elemento)
  prices.textContent = pricesContent[i - 1];//Anadimos texto al elemento p que se llama prices = será lo que hay en la variable array pricesContent[i - 1] que es el loop i (ponemos -1 porque el loop empieza por 1 y queremos coger desde la posicion [0] que es ['FREE'])

  month.textContent = "per month";//Aqui solo anadimos el texto'per month' al elemnto p month

  let checksContent = [//Creamos una variable checksContent con un array que contiene 7 valores que estare dentro dle elemnto p y meteremos dentro del div textContainer
    "✔ Full courses library",
    "✔ A new daily meditation",
    "✔ Acces to the meditation guru",
    "✔ Sleep podcasts and exercises",
    "✔ Mindfulness exercises",
    "✔ Guided meditations",
    "✔ Cooking recipe",
  ];

  let buttonContent = ["GET STARTED", "BECOME A PRO", "GET TEAMS"];//Creamos un variable array que contiene 3 valores (estos valores son el contenido del elemento button)
  button.textContent = buttonContent[i - 1];//anadimos el texto de la array buttonContent y al buttonContent y que haga el loop que creamso al inicio para que recorrar la array y muestre los tres nombres

  // Crear elemento hijo (derecha) y anadirlo al elemento padre (izquierda):

  root.appendChild(offerContainer);//Creamos el hijo offerContainer y lo metemos en elemento padre root
  offerContainer.appendChild(img);//Creamos el hijo img y lo metemos en elemento padre offerContainer
  textContainer.appendChild(offer);//Creamos el hijo offer y lo metemos en elemento padre textContainer
  textContainer.appendChild(prices);//Creamos el hijo prices y lo metemos en elemento padre text container
  textContainer.appendChild(month);//Creamos el elemento hijo month y lo metemos en elemento padre textContainer

// --------QUE ES ESTO?????-------------
  for (value of checksContent) { //Loop que recorre el checksContent (los 7 valores de la array)
    var check = document.createElement("p"); //Creamos un elemento p mediante la variable var check
    check.textContent = value; //Anadimos texto a check que seran los 7 value de la array
    textContainer.appendChild(check);// meter al hijo check en el padre textContainer
  }
//Anadir elementos hijo a elementos padre mediante appendChild
  offerContainer.appendChild(textContainer);
  offerContainer.appendChild(button);

  //Creamso un evento(quiere decir que cuando hacemos algo ejecuta la función):
  button.addEventListener("click", () => { //Creamos una funcion arrow modo "click" mediante addEventListener al button

//Creamos elementos mediante variable:

    let prompt = document.createElement("div");//Creamos un elemento div que manejaremos con la variable prompt
    let parrafo = document.createElement("p");//Creamos un elemento p que manejaremos con la variable parrafo
    let input = document.createElement("input");//Creamos un elemento input que manejaremos con la variable input
    let button = document.createElement("button");//Creamos un elemento button que manejaremos con la variable button

     // Poner atributos a los elementos:

    prompt.setAttribute("class", "prompt");
    input.setAttribute("type", "text");
    input.setAttribute("class", "input");
    button.setAttribute("class", "send");
    parrafo.setAttribute("class", "texto");

    parrafo.textContent =
      "Escribe tu correo electronico, pronto nos pondremos en contacto con usted";

    button.textContent = "Enviar";

 //Anadir elemento hijo dentro del elemento padre:

    prompt.appendChild(parrafo);
    prompt.appendChild(input);
    prompt.appendChild(button);
    root.appendChild(prompt);

    button.addEventListener("click", () => {
      root.removeChild(prompt);
    });
  });
}
