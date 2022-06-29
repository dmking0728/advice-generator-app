const api_url = 'https://api.adviceslip.com/advice';

async function getAdvice() {
  const response = await fetch(api_url);
  const data = await response.json();
  //destructure our response
  const { advice, id } = data.slip;

 document.getElementById('advice-number').textContent = id;
 document.getElementById('advice').textContent = advice;

}

getAdvice();