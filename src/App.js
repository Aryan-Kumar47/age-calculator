import { useEffect, useState } from 'react';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function App() {

  useEffect( () => {
    
  })

  const [inputDate , setInputDate] = useState()

  function handleInput(e) {
    console.log(e.target.value)
    setInputDate(e.target.value)
  }


  const submitHandler = (e) => {
    e.preventDefault()
    console.log(inputDate)
    let date = new Date()
    let currentdate = new Date(inputDate)
    let years = parseInt(inputDate.slice(0,4))
    let months = parseInt(inputDate.slice(5,7))
    const days = parseInt(inputDate.slice(8,11))
    const currentYear = date.getFullYear()
    const currentMonth = date.getMonth() + 1
    const currentDay = date.getDate()
    if(date.getTime() < currentdate.getTime()) {
      toast.error("Invalid input");
      return
    }
    let daysResult;
    let monthsResult;
    let yearsResult;
    let daysFinal = 0
    let monthsFinal = 0
    let yearsFinal = 0
    if (currentDay < days) {
      daysResult = currentDay - days + 31
      months += 1
    } else daysResult = currentDay - days
    if (currentMonth < months) {
      monthsResult = currentMonth - months + 12
      years += 1
    } else monthsResult = currentMonth - months
    if (currentYear < years) yearsResult = currentYear - years + 1
    else yearsResult = currentYear - years
    console.log(monthsResult , yearsResult , daysResult)
    let isCalcDone = true;
    if (isCalcDone) {
      isCalcDone = false
      const outputs = document.querySelectorAll('main .age-calc .results div span:first-child')
      let ageCounter = setInterval(() => {
        if (daysFinal !== daysResult) daysFinal++
        if (monthsFinal !== monthsResult) monthsFinal++
        if (yearsFinal !== yearsResult) yearsFinal++
  
        outputs[2].textContent = daysFinal
        outputs[1].textContent = monthsFinal
        outputs[0].textContent = yearsFinal
  
        if (daysFinal === daysResult && monthsFinal === monthsResult && yearsFinal === yearsResult) {
          clearInterval(ageCounter)
          isCalcDone = true
        }
      }, 20);
    }
    // let daysFinal = 0
    // let monthsFinal = 0
    // let yearsFinal = 0

  }

  return (
    <>
      <div class="container">
        <main>
          <form class="age-calc" onSubmit={submitHandler}>
            <div class="inputs">
              <div class="input">
                <label for="day">Day</label>
                <input id="day" type="date"  autocomplete="off" required onInput={e => handleInput(e)}/>
                <span class="invalid-message"></span>
              </div>
            </div>

            <div class="line">
              <hr/>
                <button type="submit">
                  <svg xmlns="http://www.w3.org/2000/svg" width="46" height="44" viewBox="0 0 46 44"><g fill="none" stroke="#FFF" strokeWidth="2"><path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44"/></g></svg>

                </button>
            </div>

            <div class="results">
              <div class="years">
                <span>--</span>years
              </div>

              <div class="months">
                <span>--</span>months
              </div>

              <div class="days">
                <span>--</span>days
              </div>
            </div>
          </form>
        </main>
      </div>
      <ToastContainer />
    </>

  );
}

export default App;
