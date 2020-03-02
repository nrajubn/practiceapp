function Area(){
    var radius = Number(document.getElementById('rd').value);
    var areaCircle = Math.PI * radius * radius;
    document.getElementById('AC').value = areaCircle.toFixed(3);
}
