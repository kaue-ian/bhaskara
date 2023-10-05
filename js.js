const a = document.getElementById("a").value;
const b = document.getElementById("b").value;
const c = document.getElementById("c").value;

function Calcular() {
    const delta = b * b - 4 * a * c;
    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);


    if (!a || !b || !c) {
        alert('Insira os valores de a, b e c');
    } else if (a == 0) {
        alert('O valor de <strong>a</strong>, deve ser diferente de 0');
    } else if (delta < 0) {
        alert('Sem raízes reais');
    } else {
        document.getElementById("x1").value = x1;
        document.getElementById("x2").value = x2;
    }
}

function Limpar() {
    document.getElementById("a").value = "";
    document.getElementById("b").value = "";
    document.getElementById("c").value = "";
}