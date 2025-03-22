function repeatOperation(operation, interval, times) {
    let count = 0;
    const intervalId = setInterval(() => {
        operation();
        count++;
        if (count >= times) {
            clearInterval(intervalId);
        }
    }, interval);
}

repeatOperation(() => console.log("Выполнение операции"), 1000, 5);