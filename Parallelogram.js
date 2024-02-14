function calcolateParallelogram(){
    const baseinput = document.getElementById('Parallelogram-base');
    const basetext = baseinput.value;
    const base = parseFloat( basetext);
    console.log(base);

    const hightinput = document.getElementById('Parallelogram-hight');
    const highttext = hightinput.value;
    const hight = parseFloat(highttext)
    console.log(hight);

    const area = base*hight;
    console.log('ans is ' , area);

    const areaoutput = document.getElementById('area-ans');
    areaoutput.innerText = area;


   
}