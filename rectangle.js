function calcolaterectangle(){
    const leanthinput = document.getElementById('Rectangle-leanth');
    const leanthtext = leanthinput.value;
    const leanth = parseFloat(leanthtext)
    console.log(leanth);

    const widthinput = document.getElementById('Rectangle-width');
    const widthtext = widthinput.value;
    const width = parseFloat(widthtext);
    console.log(width);


    const area = width*leanth;
    console.log('ans is :', area);

    const Rectangletextarea = document.getElementById('rectangle-area');
    Rectangletextarea.innerText = area;
}