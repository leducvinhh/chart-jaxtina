import renderParticles from './particles.js';
import renderChartClass from './chartClass.js';
import renderChartFt from './chartFt.js';
import renderChartStudent from './chartStudent.js';
import renderChartTeacher from './chartTeacher.js';
import renderChartTimer from './chartTimer.js';

const handleChangeTab = () => {
  const menuEl = [...document.querySelectorAll('.menu-item')];
  const tabEl = [...document.querySelectorAll('.tab-container')];

  menuEl.forEach((menu, index) => {
    menu.addEventListener('click', () => {
      const menuActive = document.querySelector('.menu-item.active');
      const tabActive = document.querySelector('.tab-container.active');

      if(menuActive) menuActive.classList.remove('active');
      if(tabActive) tabActive.classList.remove('active');


      menu.classList.add('active');
      tabEl[index].classList.add('active');
      tabEl[index].firstElementChild.classList.add('active');
      tabEl[index].lastElementChild.classList.remove('active');
    })
  });
};

const calcDataInput = (btn) => {
  const parentEl = btn.parentElement;

  const data = {};

  const inputList = [...parentEl.querySelectorAll('input')];
  inputList.forEach(input => {
    data[input.name] = +input.value;
  });

  return data;
}

const handleShowChart = () => {
  const btnList = [...document.querySelectorAll('.btn-submit')];

  if (btnList) {
    btnList.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        const parentEl = btn.parentElement;

        switch (true) {
          case btn.classList.contains('js-chart-pt'): {
            const data = calcDataInput(btn);
            renderChartFt(data);

            break;
          }

          case btn.classList.contains('js-chart-student'): {
            const data = calcDataInput(btn);
            renderChartStudent(data);

            break;
          }

          case btn.classList.contains('js-chart-class'): {
            const data = calcDataInput(btn);

            if (data) renderChartClass(data);

            break;
          }

          case btn.classList.contains('js-chart-teacher'): {
            const data = calcDataInput(btn);

            if (data) renderChartTeacher(data);

            break;
          }

          case btn.classList.contains('js-chart-timer'): {

            const data = calcDataInput(btn);

            if (data) renderChartTimer(data);

            break;
          }

          default:
            break;
        }

        if (parentEl.classList.contains('active')) {
          parentEl.classList.remove('active');
          parentEl.nextElementSibling.classList.add('active');
        }
      })
    })
  }
}

const main = () => {
  renderParticles();

  handleChangeTab();

  handleShowChart();
}

window.addEventListener("DOMContentLoaded", main);
