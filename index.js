function updateTimer() {
    const endDate = new Date;
    const startDate = new Date("May 25, 2008 00:00:00");
    const diffPeriod = new Intl.NumberFormat().format(Math.round((endDate-startDate)/1000));
    document.getElementById("timer").innerText = diffPeriod;
  }
    
setInterval(updateTimer, 1000);

const arrayOfProjects = document.querySelectorAll('.projects h3');

arrayOfProjects.forEach(project => {
    
    project.addEventListener('click', function (){
        let nextElement = project.nextElementSibling;
        let afterNextElement = nextElement.nextElementSibling;
        let arrow = project.querySelector('span');
        
        if (nextElement.classList.contains('visible')) {
            arrow.innerHTML = '&#8883;'
        } else {
            arrow.innerHTML = '&#8711;'
        }
        nextElement.classList.toggle('visible');
        afterNextElement.classList.toggle('visible');
    })
});

document.getElementsByTagName