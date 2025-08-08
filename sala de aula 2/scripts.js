let produto = prompt("produto").toLowerCase();
let quantidade = parseInt(prompt("quantidade do estoque"));
if (produto === "smartphone" && quantidade < 10) {
    alert("reabastecer estoque");
} else if (produto === "laptop" && quantidade < 8) {
    alert("reabastecer estoque");
} else if (produto === "tablet" && quantidade < 5) {
    alert("reabastecer estoque");
} else if (produto === "outros" && quantidade < 15) {
    alert("reabastecer estoque");
}
else { 
    alert("estoque Ok");                                                                                                                                                                                                    
} 

