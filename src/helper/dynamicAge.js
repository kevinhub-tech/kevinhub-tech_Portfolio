const dynamicAge = () => {
    let myDob = '2002-10-30';
  
    let currentDate = new Date().getDate();
    let currentYear = new Date().getFullYear();
    let currentMonth = new Date().getMonth();
  
    let myBirthDate = new Date(myDob).getDate();
    let myBirthMonth = new Date(myDob).getMonth();
    let myBirthYear = new Date(myDob).getFullYear();
  
    let dynamicYear = currentYear - myBirthYear;
    let dynamicMonth = currentMonth - myBirthMonth;
    if (dynamicMonth < 0 || (dynamicMonth === 0 && currentDate < myBirthDate)) {
      dynamicYear--;
    }
    return dynamicYear;
  }

export default dynamicAge;