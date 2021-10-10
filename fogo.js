const arraysFirePixels = [];
const larguraDoFogo = 10 * 4;
const alturaDoFogo = 10 * 4;
var fireColorsPalette = [{"r":7,"g":7,"b":7},{"r":31,"g":7,"b":7},{"r":47,"g":15,"b":7},{"r":71,"g":15,"b":7},{"r":87,"g":23,"b":7},{"r":103,"g":31,"b":7},{"r":119,"g":31,"b":7},{"r":143,"g":39,"b":7},{"r":159,"g":47,"b":7},{"r":175,"g":63,"b":7},{"r":191,"g":71,"b":7},{"r":199,"g":71,"b":7},{"r":223,"g":79,"b":7},{"r":223,"g":87,"b":7},{"r":223,"g":87,"b":7},{"r":215,"g":95,"b":7},{"r":215,"g":95,"b":7},{"r":215,"g":103,"b":15},{"r":207,"g":111,"b":15},{"r":207,"g":119,"b":15},{"r":207,"g":127,"b":15},{"r":207,"g":135,"b":23},{"r":199,"g":135,"b":23},{"r":199,"g":143,"b":23},{"r":199,"g":151,"b":31},{"r":191,"g":159,"b":31},{"r":191,"g":159,"b":31},{"r":191,"g":167,"b":39},{"r":191,"g":167,"b":39},{"r":191,"g":175,"b":47},{"r":183,"g":175,"b":47},{"r":183,"g":183,"b":47},{"r":183,"g":183,"b":55},{"r":207,"g":207,"b":111},{"r":223,"g":223,"b":159},{"r":239,"g":239,"b":199},{"r":255,"g":255,"b":255}];
var fogo = 0;
var intensy = 4;

function start(){
    CriarEstrutura();
    criarFonteFogo();
    RenderFire();

    setInterval(PropagarFogo);
}

function CriarEstrutura(){
    const numerosDePixels = larguraDoFogo * alturaDoFogo;

    for (let i = 0; i < numerosDePixels; i++){
        arraysFirePixels[i] = 0;
    }
}
function PropagarFogo(){
    for (let column = 0; column < larguraDoFogo; column++){
        for(let row = 0; row < alturaDoFogo; row++){
            const pixelIndex = column + (larguraDoFogo * row);
            if(intensy == 1){
                intensy = 2;
            }
            if(intensy == 16){
                intensy = 15;
            }
            if (fogo == 1){
                fireColorsPalette = [{"b":7,"g":7,"r":7},{"b":31,"g":7,"r":7},{"b":47,"g":15,"r":7},{"b":71,"g":15,"r":7},{"b":87,"g":23,"r":7},{"b":103,"g":31,"r":7},{"b":119,"g":31,"r":7},{"b":143,"g":39,"r":7},{"b":159,"g":47,"r":7},{"b":175,"g":63,"r":7},{"b":191,"g":71,"r":7},{"b":199,"g":71,"r":7},{"b":223,"g":79,"r":7},{"b":223,"g":87,"r":7},{"b":223,"g":87,"r":7},{"b":215,"g":95,"r":7},{"b":215,"g":95,"r":7},{"b":215,"g":103,"r":15},{"b":207,"g":111,"r":15},{"b":207,"g":119,"r":15},{"b":207,"g":127,"r":15},{"b":207,"g":135,"r":23},{"b":199,"g":135,"r":23},{"b":199,"g":143,"r":23},{"b":199,"g":151,"r":31},{"b":191,"g":159,"r":31},{"b":191,"g":159,"r":31},{"b":191,"g":167,"r":39},{"b":191,"g":167,"r":39},{"b":191,"g":175,"r":47},{"b":183,"g":175,"r":47},{"b":183,"g":183,"r":47},{"b":183,"g":183,"r":55},{"b":207,"g":207,"r":111},{"b":223,"g":223,"r":159},{"b":239,"g":239,"r":199},{"b":255,"g":255,"r":255}];
            }
            else{
                fireColorsPalette = [{"r":7,"g":7,"b":7},{"r":31,"g":7,"b":7},{"r":47,"g":15,"b":7},{"r":71,"g":15,"b":7},{"r":87,"g":23,"b":7},{"r":103,"g":31,"b":7},{"r":119,"g":31,"b":7},{"r":143,"g":39,"b":7},{"r":159,"g":47,"b":7},{"r":175,"g":63,"b":7},{"r":191,"g":71,"b":7},{"r":199,"g":71,"b":7},{"r":223,"g":79,"b":7},{"r":223,"g":87,"b":7},{"r":223,"g":87,"b":7},{"r":215,"g":95,"b":7},{"r":215,"g":95,"b":7},{"r":215,"g":103,"b":15},{"r":207,"g":111,"b":15},{"r":207,"g":119,"b":15},{"r":207,"g":127,"b":15},{"r":207,"g":135,"b":23},{"r":199,"g":135,"b":23},{"r":199,"g":143,"b":23},{"r":199,"g":151,"b":31},{"r":191,"g":159,"b":31},{"r":191,"g":159,"b":31},{"r":191,"g":167,"b":39},{"r":191,"g":167,"b":39},{"r":191,"g":175,"b":47},{"r":183,"g":175,"b":47},{"r":183,"g":183,"b":47},{"r":183,"g":183,"b":55},{"r":207,"g":207,"b":111},{"r":223,"g":223,"b":159},{"r":239,"g":239,"b":199},{"r":255,"g":255,"b":255}];
            }
            updateFireIntensity(pixelIndex);
        }
    }
    RenderFire();
}

function updateFireIntensity(currentPixelIndex){
    const belowPixelIndex = currentPixelIndex + larguraDoFogo;

    if (belowPixelIndex >= larguraDoFogo * alturaDoFogo){
        return;
    }
    const decay = Math.floor(Math.random() * intensy);
    const belowPixelFireintensity = arraysFirePixels[belowPixelIndex];
    const newFireIntensity = 
        belowPixelFireintensity - decay >= 0 ? belowPixelFireintensity - decay : 0;

    arraysFirePixels[currentPixelIndex - decay] = newFireIntensity;
}
function tocarFogo(){
    if(fogo == 1){
        fogo = 0;
    }
    else{
        fogo = 1;
    }
}
function mais(){
    intensy += 1;
}
function menos(){
    intensy -= 1;
}


function RenderFire(){
    const debug = false;
    let html = '<table cellpadding = 0 cellspacing = 0>';

    for (let row = 0; row < alturaDoFogo; row++){
        html += '<tr>';

        for (let column = 0; column < alturaDoFogo; column++){
            const pixelIndex = column + (larguraDoFogo * row);
            const intensidadeDeFogo = arraysFirePixels[pixelIndex];

            if (debug === true){
                html += '<td>';
                html += `<div class ="pixel-index">${pixelIndex}</div>`;
                html += intensidadeDeFogo;
                html += '</td>';
            }
            else{
                const color = fireColorsPalette[intensidadeDeFogo];
                const colorString = `${color.r},${color.g},${color.b}`;
                html += `<td class = "pixel" style = "background-color: rgb(${colorString})">`;
                html += '</td>'
            }
            
        }

        html += '</tr>';
    }

    html += '</table>';

    document.querySelector('#fireCanvas').innerHTML = html
}

function criarFonteFogo(){
    for (let column = 0; column <= larguraDoFogo; column++){
        const overflowPixelIndex = larguraDoFogo * alturaDoFogo;
        const pixelIndex = (overflowPixelIndex - larguraDoFogo) + column;

        arraysFirePixels[pixelIndex] = 36;
    }

}
function destroyFireSource() {
    for (let column = 0; column <= larguraDoFogo; column++) {
      const overflowPixelIndex = larguraDoFogo * alturaDoFogo;
      const pixelIndex = (overflowPixelIndex - larguraDoFogo) + column;
  
      arraysFirePixels[pixelIndex] = 0;
    }
  }

start();
