$.getJSON("scripts/data.json", function (data) {
    const currentHrs = document.getElementsByClassName('daily-hrs');
    let arr = [...currentHrs];
    let currentItems = [];
    //-------------------------//
    const PreviousHrs = document.getElementsByClassName('description-p');
    let prevConvertToArr = [...PreviousHrs];
    let PreviousItems = [];
    //-------------------------//
    let i = 0;
    $('#daily').click(function (e) {
        currentItems = [];
        PreviousItems = [];
        arr.forEach(element => {
            element.innerHTML = '';
        });
        prevConvertToArr.forEach(element => {
            element.innerHTML = 'Last - ';
        });
        data.forEach(element => {
            currentItems.push(element.timeframes.daily.current);
            PreviousItems.push(element.timeframes.daily.previous);
        });
        for (i = 0; i < currentItems.length; i++) {
            $(arr[i]).append(currentItems[i]);
            $(prevConvertToArr[i]).append(PreviousItems[i] + ' Hrs ');
        }
    });
    //-------------------------//
    $('#weekly').click(function (e) {
        currentItems = [];
        PreviousItems = [];
        arr.forEach(element => {
            element.innerHTML = '';
        });
        prevConvertToArr.forEach(element => {
            element.innerHTML = 'Last - ';
        });
        data.forEach(element => {
            currentItems.push(element.timeframes.weekly.current);
            PreviousItems.push(element.timeframes.weekly.previous);
        });
        for (i = 0; i < currentItems.length; i++) {
            $(arr[i]).append(currentItems[i]);
            $(prevConvertToArr[i]).append(PreviousItems[i] + ' Hrs ');
        }
    });
    //-------------------------//
    $('#monthly').click(function (e) {
        currentItems = [];
        PreviousItems = [];
        arr.forEach(element => {
            element.innerHTML = '';
        });
        prevConvertToArr.forEach(element => {
            element.innerHTML = 'Last - ';
        });
        data.forEach(element => {
            currentItems.push(element.timeframes.monthly.current);
            PreviousItems.push(element.timeframes.monthly.previous);
        });
        for (i = 0; i < currentItems.length; i++) {
            $(arr[i]).append(currentItems[i]);
            $(prevConvertToArr[i]).append(PreviousItems[i] + ' Hrs ');
        }
    });
    //-------------------------//

});