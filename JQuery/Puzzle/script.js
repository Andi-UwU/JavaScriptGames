
var noElements = 16;
var noCols = 4;
var noRows = noElements/noCols;
var valuesArray = shuffledArray();

var X;
var Y;

var table = $("<table></table>");

$(function(){
    
    for (let i = 0; i < noElements; i++){
        if (valuesArray[i] == "")
        {
            Y = noElements / noCols;
            X = noElements % noCols;
            break;
        }
    }
    

    
    for (let i = 0; i < noRows; i++){
        let row = $("<tr></tr>");
        for(let j = 0; j < noCols; j++){
            let index = noCols * i + j;
            if (valuesArray[index] == ''){
                X = j;
                Y = i;
            }
            row.append($("<td></td>")
                            .html(valuesArray[index])
                            .val(valuesArray[index]));
        }
        table.append(row);
    }

    var container = $("#container");
    container.append(table);

    alert(X + " " + Y);

    $(this).on('keydown', keyPressed);
});
            

function keyPressed(event){
    const key = event.key; // "ArrowRight", "ArrowLeft", "ArrowUp", or "ArrowDown"
    
    switch (key) {
        case "a":
        case "ArrowLeft":
        
            if (X > 0){
                
                leftValue = table.children().eq(Y).children().eq(X-1).html();
                table.children().eq(Y).children().eq(X-1).html(table.children().eq(Y).children().eq(X).html());
                table.children().eq(Y).children().eq(X).html(leftValue);
                X--;
            }
            
            break;
        case "d":
        case "ArrowRight":
            if (X < noCols-1){
                
                rightValue = table.children().eq(Y).children().eq(X+1).html();
                table.children().eq(Y).children().eq(X+1).html(table.children().eq(Y).children().eq(X).html());
                table.children().eq(Y).children().eq(X).html(rightValue);
                X++;
            }
            break;
        case "w":
        case "ArrowUp":
            if (Y > 0){
                
                upValue = table.children().eq(Y-1).children().eq(X).html();
                table.children().eq(Y-1).children().eq(X).html(table.children().eq(Y).children().eq(X).html());
                table.children().eq(Y).children().eq(X).html(upValue);
                Y--;
            }
            break;
        case "s":
        case "ArrowDown":
            if (Y < noRows-1){
                
                downValue = table.children().eq(Y+1).children().eq(X).html();
                table.children().eq(Y+1).children().eq(X).html(table.children().eq(Y).children().eq(X).html());
                table.children().eq(Y).children().eq(X).html(downValue);
                Y++;
            }
            break;
        default: 
            break;
    }
}

function shuffledArray(){
    let valueArray = [];
    let mutations = 20;
    //add elements
    valueArray.push("");
    for(let i = 1; i < noElements; i++){
        valueArray.push(i);
    }
    //shuffle
    for(let i = 0; i < mutations; i++){
        let c1 = Math.floor(Math.random() * 16);
        let c2 = Math.floor(Math.random() * 16);
        
        let aux = valueArray[c1];
        valueArray[c1] = valueArray[c2];
        valueArray[c2] = aux;
    }
    
    return valueArray;
}