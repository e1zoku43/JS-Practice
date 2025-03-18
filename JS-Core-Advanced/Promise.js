async function executeSequentialOperations() {
    try {
      const result1 = await firstOperation();
      console.log('Результат первой операции:', result1);
  
      const result2 = await secondOperation(result1);
      console.log('Результат второй операции:', result2);
  
      const result3 = await thirdOperation(result2);
      console.log('Результат третьей операции:', result3);
  
      return result3;
    } catch (error) {
      console.error('Произошла ошибка:', error);
    }
  }
  
  function firstOperation() {
    return new Promise((resolve) => {
      setTimeout(() => resolve('Результат первой операции'), 1000);
    });
  }
  
  function secondOperation(input) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(`${input} -> Результат второй операции`), 1000);
    });
  }
  
  function thirdOperation(input) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(`${input} -> Результат третьей операции`), 1000);
    });
  }

  executeSequentialOperations();