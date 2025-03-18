async function fetchDataFromAPI(url) {
    try {
      const response = await fetch(url); 
      if (!response.ok) {  
        throw new Error('Не удалось загрузить данные');
      }
  
      const data = await response.json();  
      return data;  
    } catch (error) {
      console.error('Произошла ошибка при загрузке данных:', error);
    }
  }
  
  
  const apiUrl = 'https://jsonplaceholder.typicode.com/posts'; 
  fetchDataFromAPI(apiUrl)
    .then((data) => {
      console.log('Полученные данные:', data);
    });