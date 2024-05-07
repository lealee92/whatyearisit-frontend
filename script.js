fetch(`https://whatyearisit-backend-two-beta.vercel.app/year`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    document.querySelector("#year").textContent = `Year: ${data.year}`;
  });
