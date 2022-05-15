let box = document.querySelector('.infoBox');
let box2 = document.querySelector('.expStuff')
//const btn = document.querySelector('.someFunc');
let cont =document.querySelector(".btns")
let text = document.createElement('p');
let img = document.createElement('img');

/*btn.addEventListener('click', async function(){
//    let url2 = 'http://localhost:3000/comments';
    let url2 = 'https://philistine613.github.io/my-site/Курсач/text/db.json';
    let response = await fetch(url2);
    let commits = await response.json();
    console.log(commits)
    console.log(commits.length)

    img.src = commits[1].img
    //text.textContent = commits;
    //.then(response => response.json())
    //.then(json => console.log(json))
    //let file = document()
    box.appendChild(img);
})*/

cont.addEventListener('click', async function(event){
    box.innerHTML="";
    let wButton = event.target.closest('button')
//    let url2 = 'http://localhost:3000/comments';
    let url2 = 'https://philistine613.github.io/my-site/Курсач/text/db.json';
    let response = await fetch(url2);
    let commits = await response.json();
    console.log(commits);
    console.log(commits.length);
    console.log(wButton.id);
    img.src = commits[wButton.id-1].img;
/*    for (let i=0; i<commits.length; i++){
        if (wButton.id == commits[i].id){
            img.src = commits[].img;
        }
    }*/
    //text.textContent = commits;
    //.then(response => response.json())
    //.then(json => console.log(json))
    //let file = document()
    img.style.height = commits[wButton.id-1].viewBox[2] + "px";
    img.style.width = commits[wButton.id-1].viewBox[3] + "px";
    console.log(commits[wButton.id-1].viewBox[2])
    console.log(commits[wButton.id-1].viewBox[3])
    box.appendChild(img);
    let frag = document.createDocumentFragment();
    let pDiv = document.createElement("div");
    pDiv.setAttribute("class","testBox")
    let svg = document.createElement("svg");
//    pDiv.innerHTML = commits[wButton.id-1].viewBox[3];
   svg.setAttribute("preserveAspectRatio", "xMinYMin meet");
    svg.setAttribute("viewBox",commits[wButton.id-1].viewBox[4]);
    svg.setAttribute("class","testSign")
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svg.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");

//    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
    console.log(svg);

    pDiv.appendChild(img);
    frag.appendChild(pDiv);

    box.appendChild(frag);
    console.log(commits[wButton.id-1].groups.length);

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
    console.log(frag1);
    box.appendChild(frag1);



//    console.log(commits[wButton.id-1].groups[0].path)

})


//let url = 'https://jsonplaceholder.typicode.com/todos/1';

//fetch('http://localhost:3000/comments')
//.then(res => res.json())
//.then(data => console.log(data))

box2.insertAdjacentHTML("afterbegin", `<div>
<strong>Всем привет!</strong> Вы прочитали важное сообщение.
</div>`);