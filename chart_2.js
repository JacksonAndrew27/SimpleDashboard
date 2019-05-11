let canvas=document.querySelector('canvas');
canvas.width=300;
canvas.height=200;

let cellSize=10;
let xGrid=cellSize;
let yGrid=cellSize;

let ctx=canvas.getContext('2d');

function drawGrids() {
    ctx.beginPath();

    while(xGrid<canvas.height)
    { 
        ctx.moveTo(0,xGrid);
        ctx.lineTo(canvas.width,xGrid);
        xGrid+=cellSize;
    }
    ctx.strokeStyle="lightgray";
    ctx.stroke();

    while(yGrid<canvas.width)
    {
        ctx.moveTo(yGrid,0);
        ctx.lineTo(yGrid, canvas.height);
        yGrid+=cellSize;
    }
    ctx.strokeStyle="lightgray";
    ctx.stroke();
}


function blocks(count)
{
    return count*cellSize;
}

function drawAxis()
{
    ctx.beginPath();
    ctx.moveTo(blocks(cellSize/2), blocks(cellSize/2));
    ctx.lineTo(blocks(cellSize/2), blocks(cellSize/2));
    ctx.lineTo(blocks(cellSize), blocks(cellSize));
    ctx.lineTo(blocks(cellSize*1.5), blocks(cellSize*1.2));
    ctx.lineTo(blocks(cellSize*2), blocks(cellSize/2));
    ctx.lineTo(blocks(cellSize*2.5), blocks(cellSize/2));
    ctx.lineTo(blocks(cellSize*3), blocks(cellSize*.6));

    ctx.strokeStyle="red";
    ctx.stroke();
}


drawGrids(); //Grid Execute command
drawAxis(); //Axis Execute command

let data={
    Australia:100,
    India:300,
    Philippines:400,
    China:245
}

const entries=Object.entries(data);