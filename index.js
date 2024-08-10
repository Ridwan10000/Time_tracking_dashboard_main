fetch('https://ridwan10000.github.io/Time_tracking_dashboard_main/data.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    let dailyButton = document.getElementById('daily');                   
    let weeklyButton = document.getElementById('weekly');                   
    let monthlyButton = document.getElementById('monthly');    
    dailyButton.addEventListener('click',()=>{
      dailyButton.classList.add('active');
      weeklyButton.classList.remove('active');
      monthlyButton.classList.remove('active');
      for(let i = 0 ; i < 6; i++){
        document.getElementsByClassName('current')[i].innerText = data[i].timeframes.daily.current + 'hrs';
        document.getElementsByClassName('previous')[i].innerText ='yesetrday ' + data[i].timeframes.daily.previous +' hrs';
      }
    })               
    weeklyButton.addEventListener('click',()=>{
      weeklyButton.classList.add('active');
      dailyButton.classList.remove('active');
      monthlyButton.classList.remove('active');
      for(let i = 0 ; i < 6; i++){
        document.getElementsByClassName('current')[i].innerText = data[i].timeframes.weekly.current + 'hrs';
        document.getElementsByClassName('previous')[i].innerText ='last week ' + data[i].timeframes.weekly.previous +' hrs';
      }
    })               
    monthlyButton.addEventListener('click',()=>{
      monthlyButton.classList.add('active');
      dailyButton.classList.remove('active');
      weeklyButton.classList.remove('active');
      for(let i = 0 ; i < 6; i++){
        document.getElementsByClassName('current')[i].innerText = data[i].timeframes.monthly.current + 'hrs';
        document.getElementsByClassName('previous')[i].innerText ='last month ' + data[i].timeframes.monthly.previous +' hrs';
      }
    })               
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

