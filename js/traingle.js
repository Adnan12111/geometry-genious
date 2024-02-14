// function trainglebtn(){
//     const trainglebaseinput = document.getElementById('traingle-base');
//     const trainglebasetext = trainglebaseinput.value;
//     const base = parseFloat(trainglebasetext);
//     console.log(base);


//     const trainglehightinput = document.getElementById('traingle-hight');
//     const trainglehighttext = trainglehightinput.value;
//     const hight = parseFloat(trainglehighttext);
//     console.log(hight);

//     const area = 0.5*base*hight;
//     console.log('ans is :', area);

//     const tringlearea = document.getElementById('tringle-area')
//     tringlearea.innerText= area;
// }
function tringle(){
    const basevalue = calculate('traingle-base');
    console.log('base', basevalue);

    const hightvalu = calculate('traingle-hight');
    console.log('hight', hightvalu);

    const area = basevalue * hightvalu;
    console.log(area);

    seteliment('tringle-area',area);

}
function Pentagon(){
    const pvalue = calculate('p-input');
    console.log(pvalue);

    const baseValue = calculate('base-input');
    console.log(baseValue);

    const area = 0.5*pvalue*baseValue;
    console.log(area);

    seteliment('area-ans2', area)
}

function calculate(inputfild){
    const trainglebaseinput = document.getElementById(inputfild);
    const trainglebasetext = trainglebaseinput.value;
    const base = parseFloat(trainglebasetext);
    return base
}

function seteliment(eliment, value){
    const elimentid = document.getElementById(eliment);
    elimentid.innerText = value
}