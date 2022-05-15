let box = document.querySelector('.infoBox');
let box2 = document.querySelector('.expStuff')
let cont =document.querySelector(".btns")
let text = document.createElement('p');
let img = document.createElement('img');


cont.addEventListener('click', async function(event){
    box.innerHTML="";
    let wButton = event.target.closest('button')
    let url2 = 'https://philistine613.github.io/my-site/Курсач/text/db.json';
    let response = await fetch(url2);
    let commits = await response.json();

    //картинка, выбор
    img.src = commits[wButton.id-1].img;
    img.style.height = commits[wButton.id-1].viewBox[2] + "px";
    img.style.width = commits[wButton.id-1].viewBox[3] + "px";
    console.log(commits[wButton.id-1].viewBox[2])
    console.log(commits[wButton.id-1].viewBox[3])
    box.appendChild(img);

    //фргамент внутри которого будут помещены элементы img, svg
    let frag = document.createDocumentFragment();
    let pDiv = document.createElement("div");
    pDiv.setAttribute("class","testBox")

    let svg = document.createElement("svg");
    svg.setAttribute("preserveAspectRatio", "xMinYMin meet");
    svg.setAttribute("viewBox",commits[wButton.id-1].viewBox[4]);
    svg.setAttribute("class","testSign")
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svg.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");

    pDiv.appendChild(img);
    frag.appendChild(pDiv);

    box.appendChild(frag);

    //оформление/создание svg на добавление в html код
    let frag1 = document.createDocumentFragment();

    let group = commits[wButton.id-1].groups; 
    console.log(group)

    let g = document.createElement("g");
    let title = document.createElement("title")
    title.textContent = commits[wButton.id-1].groups[0].title;
    let path = document.createElement("path")
    path.setAttribute("class", "part")
    path.setAttribute("d", commits[wButton.id-1].groups[0].path)
    let desc = document.createElement("desc");
    desc.textContent = commits[wButton.id-1].groups[0].desc;

    g.appendChild(title);
    g.appendChild(path);
    g.appendChild(desc);
    svg.appendChild(g);

    frag1.appendChild(svg);
    box.appendChild(frag1);

})
