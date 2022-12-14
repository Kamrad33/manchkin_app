import React, { useState } from 'react';
import BattleCalculator from './components/BattleCalculator';
import './styles/App.scss';
//images import ---

function App() {
  const [calculatorPage, setCalculatorPage] = useState(true);
  return (
    <div className ='App'> 
      <header>
        <div className='header_name'>Манчкин онлайн</div>
        <div className='header_buttons'>
          <div className='btnHead'>Калькулятор боя</div>
          <div className='btnHead'>Правила</div>
          <div className='btnHead'>Войти</div>
        </div>
      </header>
    <div className='App_content'>
      {calculatorPage && <BattleCalculator />}
      <div className='App_infoText'>
        <div className='featuresTitle'>Эмулятор партии в манчкин теперь в твоём кармане!</div>
          <div className='featuresText'>Добро пожаловать, манчкин!<br/> Здесь ты найдёшь весь необохимый функционал для комфортной партии в твою любимую игру:</div>
            <ul className='featuresUl'>
              <li><b>Калькулятор боя</b>, для удобного подсчёта баффов и дебаффов;</li>
              <li><b>Список правил </b>по разделам для решения спорных ситуаций;</li>
              <li><b>Эмулятор партии </b>на несколько человек с подсчётом всех карточек шмоток, проклятий и тд.;</li>
              <li><b>Сохранение прогресса*</b> и статистика игр с друзьями для соревнования.</li>
            </ul>
          </div>
      <div className='App_startContent'>
        <div className='App_startContent_startGame_button'>Начать партию</div>
        <div className='App_startContent_startGame_img'><img className='img_appSample' src={'/images/appSample.jpg'} alt='appSample'/></div>
        <div className='App_startContent_startGame_bottomText'>*Функционал сохранения сессий доступен только после регистрации</div>
      </div>
  
      </div>
      <footer>
        2022
      </footer>
      </div>
   
  );
}

export default App;
