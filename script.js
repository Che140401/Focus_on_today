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

    function reversebarupdate()
    {
        Array.from(progess_bar_change).forEach(element => {
            element.innerHTML = "Raise the bar by completing your goals!";
        });
    
        // Loop through each element with class name 'taskadd_bar_change' and update inner HTML
        Array.from(taskadd_bar_change).forEach(element => {
            element.style.visibility="visible";
        });
    
        // Loop through each element with class name 'footer-bar-changed' and update inner HTML
        Array.from(footer_bar_changed).forEach(element => {
            element.innerHTML = "Move one step ahead, today!";
        });
    
        console.log("bar update");
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
            //Toggle the custom attribute 'data-toggled'
            let parentList = item.closest('.list');
            let inputField = parentList.querySelector(".input input");
            const clickedIndex = Array.from(list_img).indexOf(item);
            if (inputField) {
                const inputvalue = inputField.value.trim();
                if (inputvalue !== "") {
                    datacount = 0;
                    if (item.getAttribute('data-toggled') === 'true') {
                        item.src = './imgs/incomplete-circle.png'; //Reset image source;
                        item.setAttribute("data-toggled", "false"); //update attribute
                        // Revert color and decoration
                        parentList = item.closest('.list');
                        inputField = parentList.querySelector(".input input");
                        if (inputField) {
                            inputField.style.color = ""; // Revert color to default
                            inputField.style.textDecoration = ""; // Remove text decoration
                        }
                    } else {
                        item.src = "./imgs/tick_mark.png"; //set image source to 'tick_mark.png'
                        item.setAttribute('data-toggled', 'true');
                        parentList = item.closest('.list');
                        inputField = parentList.querySelector(".input input");
                        if (inputField) {
                            let inputValue = inputField.value;
                            inputField.style.color = "green";
                            inputField.style.textDecoration = "line-through";
                            const inputvalue = inputField.value;
                            completed_goals[index] = inputvalue;
                            barupdate();
                            updateProgressText(index)
                        }
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

