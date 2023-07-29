document.addEventListener("mousemove", (e) => {
    const rotatingImage = document.getElementById("compass-fond");
    const container = document.querySelector(".compass-round");
  
    // Obtenemos el centro del contenedor
    const centerX = container.offsetLeft + container.clientWidth / 2;
    const centerY = container.offsetTop + container.clientHeight / 2;
  
    // Obtenemos la posición del cursor en relación con el centro del contenedor
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
  
    // Calculamos el ángulo de rotación basado en la posición del cursor
    const angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    // Obtener el ángulo actual del elemento
    let currentRotation = parseFloat(rotatingImage.style.transform.replace("rotate(", "").replace("deg)", "")) || 0;

    // Calcular la diferencia de ángulo entre el ángulo actual y el ángulo objetivo
    let angleDiff = angle - currentRotation;

    // Ajustar la diferencia de ángulo para que esté en el rango -180 a 180 grados
    if (angleDiff > 180) {
        angleDiff -= 360;
    } else if (angleDiff < -180) {
        angleDiff += 360;
    }

    // Calcular el nuevo ángulo teniendo en cuenta la diferencia ajustada
    const newAngle = currentRotation + angleDiff;

    console.log('Angle:', angle.toFixed(2))
    console.log("Current:", currentRotation.toFixed(2));
    console.log('AngleDiff:', angleDiff.toFixed(2)) 
    console.log("AngleNew:", newAngle.toFixed(2)); 
    
    // Aplicamos la rotación al elemento
    rotatingImage.style.transform = `rotate(${newAngle + 90}deg)`;
});
  