let diadasemana = parseInt(prompt("segunda, terca, quarta, quinta, sexta,"));
let cargos = ("gerente", "analista", "estagiario")
if (cargos === "gerente" && diadasemana <= 5) {
    alert("trabalhar");
} else if (cargos === "analista" && diadasemana <= 5) {
    alert("trabalhar");
} else if (cargos === "estagiario" && diadasemana <= 5) {
    alert("trabalhar");
} else {
    alert("folga")
}