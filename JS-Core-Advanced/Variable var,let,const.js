function testScope() {
    if (true) {
        var xVar = 'var: доступна везде внутри функции';
        let xLet = 'let: доступна только в этом блоке';
        const xConst = 'const: доступна только в этом блоке';

        console.log('Внутри блока:', xVar); // Доступно
        console.log('Внутри блока:', xLet); // Доступно
        console.log('Внутри блока:', xConst); // Доступно
    }
    
    console.log('Вне блока:', xVar); // Доступно, потому что var не ограничен блоком
    
    try {
        console.log('Вне блока:', xLet); // Ошибка, let недоступен вне блока
    } catch (e) {
        console.log('Ошибка при доступе к xLet:', e.message);
    }
    
    try {
        console.log('Вне блока:', xConst); // Ошибка, const недоступен вне блока
    } catch (e) {
        console.log('Ошибка при доступе к xConst:', e.message);
    }
}

testScope();


