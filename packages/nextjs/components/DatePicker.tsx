import React, { useEffect } from "react";


const getCurrentDate = (): string => {
  const today = new Date();
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return today.toLocaleDateString("en-US", options);
};

const getTomorrowDate = (): string => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return tomorrow.toLocaleDateString("en-US", options);
};
const getTodayPlus2 = (): string => {
  const todayplus2 = new Date();
  todayplus2.setDate(todayplus2.getDate() + 2);

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return todayplus2.toLocaleDateString("en-US", options);
};

const getTodayPlus3 = (): string => {
  const todayplus3 = new Date();
  todayplus3.setDate(todayplus3.getDate() + 3);

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return todayplus3.toLocaleDateString("en-US", options);
};



export default function Schedule(){
  const displayRadioValue = () => {
    const eleDate = document.getElementsByName('date') as NodeListOf<HTMLInputElement>;
    const eleTime = document.getElementsByName('time') as NodeListOf<HTMLInputElement>;

    for (let i = 0; i < eleDate.length; i++) {
      if (eleDate[i].checked) {
        document.getElementById('result')!.innerHTML = 'Time: ' + eleTime[i].value;
      }
      for (let i = 0; i < eleTime.length; i++) {
        if (eleTime[i].checked) {
          document.getElementById('result')!.innerHTML = 'Time: ' + eleTime[i].value;
        }
    }
  };

  return (
    <>

      <div className="md:py-8 py-5 md:px-16 px-15 dark:bg-gray-700 bg-gray-50 rounded-b">
        <label>Select Date:</label>
        <div className="md:py-18 py-5 md:px-16 px-15 dark:bg-gray-700 bg-gray-50 rounded-b">
          <div className="px-15">
            <input type="radio" name="date" value="{getCurrentDate()}" /> {getCurrentDate()}
            <input type="radio" name="date" value="{getTomorrowDate()}" /> {getTomorrowDate()}
            <input type="radio" name="date" value="{getTodayPlus2()" /> {getTodayPlus2()}
            <input type="radio" name="date" value="{getTodayPlus3()}" /> {getTodayPlus3()}

          

        <div className="md:py-8 py-5 md:px-16 px-15 dark:bg-gray-700 bg-gray-50 rounded-b">
          <label>Select Time:</label>
          <div className="md:py-18 py-5 md:px-16 px-15 dark:bg-gray-700 bg-gray-50 rounded-b">
            <div className="px-15">

              <input type="radio" name="time" value="09:00 CET" /> 09:00 CET
              <input type="radio" name="time" value="10:00 CET" /> 10:00 CET
              <input type="radio" name="time" value="11:00 CET" /> 11:00 CET
              <input type="radio" name="time" value="14:00 CET" /> 14:00 CET
              <input type="radio" name="time" value="16:00 CET" /> 16:00 CET



            </div>
          </div>
          </div>
        </div>
          <button className="btn btn-s text-white bg-blue-700 space-y-24" type="button">Submit
          </button>
        </div>
      </div>
    </>
  );
}

}