/*

author= "Jackson Andrew"
copyright = "Amarint Consulting Private Limited 2019"
version  = "1.0.0"
license = "Do whatever you want with this, no obligations"

*/

let canvas=document.querySelector('canvas');
canvas.width=1500;
canvas.height=300;

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
   
    while(yGrid<canvas.width)
    {
        ctx.moveTo(yGrid,0);
        ctx.lineTo(yGrid, canvas.height);
        yGrid+=cellSize; 
    }
    //ctx.strokeStyle="lightblue";
    //ctx.stroke();
}

function blocks(count)
{
    return count*cellSize;
}

function drawAxis()
{
    let yPlot=cellSize*2.8;
    let pop=0;
    ctx.beginPath();
    ctx.moveTo(blocks(cellSize/2), blocks(cellSize/4));
    ctx.lineTo(blocks(cellSize/2), blocks(cellSize*2.7));
    ctx.lineTo(blocks(cellSize*14.5), blocks(cellSize*2.7));

    ctx.moveTo(blocks(cellSize/2), blocks(cellSize*2.7));

    for(let i=1;i<=cellSize;i++)
    {
        ctx.strokeText(pop, blocks(cellSize/5), blocks(yPlot));
        yPlot-=(cellSize/2);
        pop+=500;
    }

    ctx.strokeStyle="black";
    ctx.lineWidth=1;
    ctx.stroke();
}


//Base set. Now the data

/*
let data={
    Week_1: 233,
    Week_2: 432,
    Week_3: 655,
    Week_4: 222,
    Week_5: 209,
    Week_6: 186,
    Week_7: 63,
    Week_8: 321,
}

const entries=Object.entries(data);


function drawChart()
{
    ctx.beginPath();
    ctx.strokeStyle="red";
    ctx.moveTo(blocks(cellSize/2), blocks(cellSize*4));

    var xPlot=cellSize;

    for(const [Week,Sales] of entries)
    {
        var SalesInBlocks = Sales/100;
        ctx.lineTo(blocks(xPlot),blocks(40-SalesInBlocks));
        xPlot+=5;
    }

    ctx.stroke();

}
*/
//Execute the functions







//Testing variables
function drawdata()
{
    ctx.beginPath();

    ctx.lineTo(blocks(cellSize/2), blocks(cellSize*2.7));
    ctx.lineTo(blocks(cellSize), blocks(cellSize*2.2));
    ctx.lineTo(blocks(cellSize*2), blocks(cellSize*1.2));
    ctx.lineTo(blocks(cellSize*3), blocks(cellSize*2.2));
    ctx.lineTo(blocks(cellSize*4), blocks(cellSize*1.2));
    ctx.lineTo(blocks(cellSize*5), blocks(cellSize*2.7));
    ctx.lineTo(blocks(cellSize*6), blocks(cellSize*2.2));
    ctx.lineTo(blocks(cellSize*7), blocks(cellSize*1.2));
    ctx.lineTo(blocks(cellSize*8), blocks(cellSize*2.2));
    ctx.lineTo(blocks(cellSize*9), blocks(cellSize*1.2));
    ctx.lineTo(blocks(cellSize*10), blocks(cellSize*.5));
    ctx.lineTo(blocks(cellSize*11), blocks(cellSize*.9));
    ctx.lineTo(blocks(cellSize*12), blocks(cellSize*.5));
    ctx.lineTo(blocks(cellSize*13), blocks(cellSize*.9)); 
    ctx.lineTo(blocks(cellSize*14), blocks(cellSize*.9));
    


    ctx.strokeStyle="black";
    ctx.lineWidth=1.2;
    ctx.stroke();
}

drawdata();
drawGrids();
drawAxis();
