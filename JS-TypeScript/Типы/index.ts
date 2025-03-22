// Partial<T>
type MyPartial<T> = {
    [P in keyof T]?: T[P];
  };
  
  // Функция, которая выполняется бесконечно или выбрасывает исключение
  function infiniteLoop(): never {
    while (true) {}
  }
  
  function throwError(message: string): never {
    throw new Error(message);
  }