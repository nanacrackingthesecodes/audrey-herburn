class Human
{
    #name
    #description
    #image
    constructor(name,descr,img)
    {
        this.#name=name;
        this.#description=descr;
        this.#image=img;
    }
    get Name()
    {
        return this.#name;
    }
    set Name(name)
    {
        this.#name = name;
    }
   get Description()
    {
        return this.#description;
    }
    set Description(descr)
    {
        this.#description = descr;
    }
    get Img()
    {
        return this.#image;
    }
}
let obj1 = new Human('Ондри Хепберн','"Красота женщины не во внешней ее привлекательности, истинная красота женщины отражается в ее душе. Это забота, которую она отдает с любовью. Это страсть, которую она проявляет. Красота женщины с годами только растет"','/image/audreyherburn.jpg')
let divSt = document.getElementById("div1");


divSt.insertAdjacentHTML("beforeend", `<p>${obj1.Name}</p>`);
divSt.insertAdjacentHTML("beforeend", `<img src = ${obj1.Img}></img>`);
divSt.insertAdjacentHTML("beforeend", `<p>${obj1.Description}</p>`);
let obj2 = new Human('Бриттани Мерфи','"У всех бывали тяжёлые времена. Но если Вы смогли их пережить – это станет лучшим временем в вашей жизни"','/image/brittanymurphy.jpg')
let divSt = document.getElementById("div2");


divSt.insertAdjacentHTML("beforeend", `<p>${obj2.Name}</p>`);
divSt.insertAdjacentHTML("beforeend", `<img src = ${obj2.Img}></img>`);
divSt.insertAdjacentHTML("beforeend", `<p>${obj2.Description}</p>`);
let obj3 = new Human('Натали Портман','"Люди, которые воспринимают все пустяки близко к сердцу, больше всех способны искренне любить"','/image/natalieportman.jpg')
let divSt = document.getElementById("div3");


divSt.insertAdjacentHTML("beforeend", `<p>${obj3.Name}</p>`);
divSt.insertAdjacentHTML("beforeend", `<img src = ${obj3.Img}></img>`);
divSt.insertAdjacentHTML("beforeend", `<p>${obj3.Description}</p>`);

