const cartes = [
    {
        name: "Geforce GT 730",
        price: 150,
        mark: "MSI",
        description: "Refroidissement semi passif" ,
        img_url :"https://www.topachat.com/boutique/img/in/in2000/in20006760/in2000676001.jpg",
        rating: 5
    },
    {
        name: "Geforce GTX 2050",
        price: 250,
        mark: "AORUS",
        description: "Refroidissement passif, overclokée" ,
        img_url :"https://www.topachat.com/boutique/img/in/in1011/in10111864/in1011186401.jpg",
        rating: 8
    },
    {
        name: "Geforce RTX 2080TI",
        price: 350,
        mark: "Asus",
        description: "Refroidissement passif, overclokée, Avec backplate" ,
        img_url :"https://www.topachat.com/boutique/img/in/in2000/in20008740/in2000874001.jpg",
        rating: 6
    },
    {
        name: "NITRO+ Radeon RX 6900 XT SE",
        price: 450,
        mark: "Sapphire",
        description: "Refroidissement semi-passif (mode 0 dB) - Avec backplate - Compatible VR" ,
        img_url :"https://www.topachat.com/boutique/img/in/in2001/in20010360/in2001036001.jpg", 
        rating: 9
    },
    {
        name: "GeForce RTX 3080 Ti XTREME WATERFORCE",
        price: 550,
        mark: "AORUS ",
        description: "overclockée - Refroidissement hybride - Avec backplate - Compatible VR" ,
        img_url :"https://www.topachat.com/boutique/img/in/in2000/in20006758/in2000675801.jpg",
        rating: 7
    },
];


function generateCarte(listeCarte){
    for(let index = 0; index < listeCarte.length; index++ ) {
        const name = listeCarte[index].name;
        const price = "Prix : "+ listeCarte[index].price + " €";
        const mark = "Marque : " + listeCarte[index].mark;
        const description = "Description : " +listeCarte[index].description;
        const imgUrl = listeCarte[index].img_url;
        const rating = "Note : " +  listeCarte[index].rating + " ★ "
        
        const elementsToCreate = [
            {
                balise: 'h3',
                value: name
            },
            {
                balise: 'h5',
                value: price
            },
            {
                balise: 'h6',
                value: mark
            },
            {
                balise: 'h6',
                value: rating
            },
            {
                balise: 'p',
                value: description
            },
            {
                balise: 'img',
                value: imgUrl
            },
        ];


        const body = document.querySelector('body');
        const article = document.createElement("article");  
        article.classList.add("carte_article");

        elementsToCreate.forEach(function(element){
            const elementCreated = document.createElement(element.balise)
            if(element.balise !== 'img') {
                elementCreated.innerHTML = element.value
            } else {
                elementCreated.src = element.value
            }
            article.appendChild(elementCreated)
        });
        
        body.appendChild(article);
    };
};

generateCarte(cartes);


function play(){
    var audio = document.getElementById("audio");
    audio.play();
            };





