    //lets write some javascript

    //list on-click 
    let list_goals =[];
    let completed_goals = [];
    let list_click = document.querySelectorAll(".list");
    let list_img = document.querySelectorAll(".list img");
    let list_input = document.querySelectorAll(".list-adder .input input");
    let progess_bar_change = document.getElementsByClassName("progess_bar_change");
    let taskadd_bar_change = document.getElementsByClassName ("taskadd_bar_change");
    let footer_bar_changed = document.getElementsByClassName("footer-bar-changed");

    //functions

    function updateProgressText(index)
    {
        const progressText = document.getElementById('progress');
        progressText.textContent = `${index + 1}/3 Completed`;
    }

    
    

    function barupdate()
    {
        // Loop through each element with class name 'progess_bar_change' and update inner HTML
    Array.from(progess_bar_change).forEach(element => {
        element.innerHTML = "Just a step away, keep going!";
    });

    // Loop through each element with class name 'taskadd_bar_change' and update inner HTML
    Array.from(taskadd_bar_change).forEach(element => {
        element.style.visibility="hidden";
    });

    // Loop through each element with class name 'footer-bar-changed' and update inner HTML
    Array.from(footer_bar_changed).forEach(element => {
        element.innerHTML = "Keep Going, You’re making great progress!";
    });

    console.log("bar update");
    }

  
    function updateProgressText(count) {
        const progressText = document.getElementById('progress');
        progressText.textContent = `${count}/3 Completed`;
    
        if (count === 0) {
            // If progress count is 0, revert progress bar and task bar text
            reversebarupdate();
        } else if (count === 3) {
            // If all goals are completed, update progress bar and task bar text
            barupdate();
        } else {
            // If progress count is less than 3 but not 0, revert progress bar and task bar text
            reversebarupdate();
        }
    }
    
    function reversebarupdate() {
        // Loop through each element with class name 'progess_bar_change' and update inner HTML
        Array.from(progess_bar_change).forEach(element => {
            element.innerHTML = "Raise the bar by completing your goals!";
        });
    
        // Loop through each element with class name 'taskadd_bar_change' and update inner HTML
        Array.from(taskadd_bar_change).forEach(element => {
            element.style.visibility = "visible";
        });
    
        // Loop through each element with class name 'footer-bar-changed' and update inner HTML
        Array.from(footer_bar_changed).forEach(element => {
            element.innerHTML = "Move one step ahead, today!";
        });
    
        console.log("bar reverted");
    }
    
    

    //on list click
    list_click.forEach(function(item) {
        item.addEventListener("click", function() {
            item.style.opacity = 1;
        })
    })

    //on click list-image

    list_img.forEach(function(item, index) {
        item.addEventListener('click', function(e) {
            let parentList = item.closest('.list');
            let inputField = parentList.querySelector(".input input");
            const clickedIndex = Array.from(list_img).indexOf(item);
            if (inputField) {
                const inputvalue = inputField.value.trim();
                if (inputvalue !== "") {
                    if (item.getAttribute('data-toggled') === 'true') {
                        item.src = './imgs/incomplete-circle.png'; // Reset image source;
                        item.setAttribute("data-toggled", "false"); // Update attribute
                        inputField.style.color = ""; // Reset color to default
                        inputField.style.textDecoration = ""; // Remove text decoration
                        // Decrement completion count and update progress text
                        completed_goals[index] = null;
                        updateProgressText(completed_goals.filter(goal => goal !== null).length);
                    } else {
                        item.src = "./imgs/tick_mark.png"; // Set image source to 'tick_mark.png'
                        item.setAttribute('data-toggled', 'true');
                        inputField.style.color = "green";
                        inputField.style.textDecoration = "line-through";
                        const inputvalue = inputField.value;
                        completed_goals[index] = inputvalue;
                        updateProgressText(completed_goals.filter(goal => goal !== null).length);
                    }
                } else {
                    alert("please enter the list name")
                }
            } else {
                // If the input field doesn't exist, do nothing
            }
        });
    });
    
    
    
    

    //Get input value
    list_input.forEach(function(item,index){
        item.addEventListener("input",function(e){
            const inputvalue = e.target.value;
            list_goals[index]=inputvalue;
            console.log(list_goals);
        })
    })


    // Function to save data to local storage
function saveDataToLocalStorage(progressData, listData) {
    localStorage.setItem('progressData', JSON.stringify(progressData));
    localStorage.setItem('listData', JSON.stringify(listData));
}

// Function to load data from local storage
function loadDataFromLocalStorage() {
    const progressData = JSON.parse(localStorage.getItem('progressData')) || {};
    const listData = JSON.parse(localStorage.getItem('listData')) || [];
    return { progressData, listData };
}

// Sample progress data and list data
let progressData = { completedSessions: 0 };
let listData = [
    { name: 'Task 1', completed: false },
    { name: 'Task 2', completed: false },
    { name: 'Task 3', completed: false }
];

// Save data to local storage
saveDataToLocalStorage(progressData, listData);

// Load data from local storage
const { progressData: loadedProgressData, listData: loadedListData } = loadDataFromLocalStorage();
console.log(loadedProgressData);
console.log(loadedListData);

// Now you can use loadedProgressData and loadedListData in your application
