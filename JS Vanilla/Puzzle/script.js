var noElements = 16;
            var noCols = 4;
            var noRows = noElements/noCols;
            var valuesArray = shuffledArray();
            
            var X;
            var Y;
            for (let i = 0; i < noElements; i++){
                if (valuesArray[i] == "")
                {
                    Y = noElements / noCols;
                    X = noElements % noCols;
                    break;
                }
            }
            

            var table = document.createElement("table");
            for (let i = 0; i < noRows; i++){
                let row = document.createElement("tr");
                for(let j = 0; j < noCols; j++){
                    let col = document.createElement("td");
                    let index = noCols * i + j;
                    col.innerHTML = valuesArray[index];
                    col.value = valuesArray[index];
                    row.appendChild(col);
                }
                table.appendChild(row);
            }

            var container = document.getElementById("container");
            container.appendChild(table);

            document.addEventListener('keydown', keyPressed);

            function keyPressed(event){
                const key = event.key; // "ArrowRight", "ArrowLeft", "ArrowUp", or "ArrowDown"
                for (let i = 0; i < table.rows.length; i++){
                    for(let j = 0; j < table.rows.length; j++){
                        if (table.rows[i].cells[j].innerHTML == ""){
                            X = j;
                            Y = i;
                        }
                    }
                }
                switch (key) {
                    case "a":
                    case "ArrowLeft":
                    
                        if (X > 0){
                            
                            leftValue = table.rows[Y].cells[X-1].innerHTML;
                            table.rows[Y].cells[X-1].innerHTML = table.rows[Y].cells[X].innerHTML;
                            table.rows[Y].cells[X].innerHTML = leftValue;
                            X--;
                        }
                        
                        break;
                    case "d":
                    case "ArrowRight":
                        if (X < noCols-1){
                            
                            rightValue = table.rows[Y].cells[X+1].innerHTML;
                            table.rows[Y].cells[X+1].innerHTML = table.rows[Y].cells[X].innerHTML;
                            table.rows[Y].cells[X].innerHTML = rightValue;
                            X++;
                        }
                        break;
                    case "w":
                    case "ArrowUp":
                        if (Y > 0){
                            
                            upValue = table.rows[Y-1].cells[X].innerHTML;
                            table.rows[Y-1].cells[X].innerHTML = table.rows[Y].cells[X].innerHTML;
                            table.rows[Y].cells[X].innerHTML = upValue;
                            Y--;
                        }
                        break;
                    case "s":
                    case "ArrowDown":
                        if (Y < noRows){
                            
                            downValue = table.rows[Y+1].cells[X].innerHTML;
                            table.rows[Y+1].cells[X].innerHTML = table.rows[Y].cells[X].innerHTML;
                            table.rows[Y].cells[X].innerHTML = downValue;
                            Y++;
                        }
                        break;
                    default: 
                        break;
                }
            }

            function shuffledArray(){
                let valueArray = [];
                let noPairs = noElements/2;
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