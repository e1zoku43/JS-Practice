function validateInteger(num) {
    if (!Number.isInteger(num)) {
        throw new Error("Ошибка: число должно быть целым!");
    }
    console.log("Число корректно: " + num);
}


try {
    validateInteger(10); 
    validateInteger(10.5); 
} catch (error) {
    console.error(error.message);
}
