function findLargest() {
    let a = +document.getElementById("n1").value;
    let b = +document.getElementById("n2").value;
    let c = +document.getElementById("n3").value;
    let d = +document.getElementById("n4").value;
    let e = +document.getElementById("n5").value;

    let largest = a;

    if (b > largest) largest = b;
    if (c > largest) largest = c;
    if (d > largest) largest = d;
    if (e > largest) largest = e;

    document.getElementById("result").innerText =
        "Largest Number = " + largest;
}
