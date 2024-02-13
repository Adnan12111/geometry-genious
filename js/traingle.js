function trainglebtn(){
    const trainglebaseinput = document.getElementById('traingle-base');
    const trainglebasetext = trainglebaseinput.value;
    const base = parseFloat(trainglebasetext);
    console.log(base);


    const trainglehightinput = document.getElementById('traingle-hight');
    const trainglehighttext = trainglehightinput.value;
    const hight = parseFloat(trainglehighttext);
    console.log(hight);

    const area = 0.5*base*hight;
    console.log('ans is :', area);

    const tringlearea = document.getElementById('tringle-area')
    tringlearea.innerText= area;
}