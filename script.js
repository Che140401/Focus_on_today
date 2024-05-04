    //lets write some javascript

    //list on-click 
    let list_goals =[];
    let list_click = document.querySelectorAll(".list");
    let list_img = document.querySelectorAll(".list img");
    let list_input = document.querySelectorAll(".list-adder .input input");

    function updateProgressText(index)
    {
        const progressText = document.getElementById('progress');
        progressText.textContent = `${index + 1}/3 Completed`;
    }

    function reductProgressText(index)
    {
        const progressText = document.getElementById('progress');
        progressText.textContent = `${(index + 1)-1}/3 Completed`;
    }

    //on list click
    list_click.forEach(function(item) {
        item.addEventListener("click", function() {
            item.style.opacity = 1;
        })
    })

    //on click list-image

    list_img.forEach(function(item,index) {
        item.addEventListener('click',function(){
            //Toggle the custom attribute 'data-toggled'
            let parentList=item.closest('.list');
            let inputField=parentList.querySelector(".input input");
            if(inputField)
                {
                    const inputvalue = inputField.value.trim();
                    if(inputvalue !== "")
                        {
                            datacount = 0;
                            if(item.getAttribute('data-toggled') === 'true'){
                                item.src='./imgs/incomplete-circle.png'; //Reset image source;
                                item.setAttribute("data-toggled", "false"); //update attribute
                                // Revert color and decoration
                            parentList = item.closest('.list');
                            inputField = parentList.querySelector(".input input");
                            if(inputField) {
                                inputField.style.color = ""; // Revert color to default
                                inputField.style.textDecoration = ""; // Remove text decoration
                                reductProgressText(index)
                            }
                            }
                            else {
                                item.src="./imgs/tick_mark.png"; //set image source to 'tick_mark.png'
                                item.setAttribute('data-toggled','true');
                                parentList = item.closest('.list');
                                inputField = parentList.querySelector(".input input");
                                if(inputField)
                                    {
                                        let inputValue = inputField.value;
                                        inputField.style.color = "green";
                                        inputField.style.textDecoration = "line-through";
                                        updateProgressText(index)
                                    }
                            }
                        }
                        else{
                            alert("please enter the list name")
                        }
                }
                else{
                    
                }
        })
    })

    //Get input value
    list_input.forEach(function(item,index){
        item.addEventListener("input",function(e){
            const inputvalue = e.target.value;
            list_goals[index]=inputvalue;
            console.log(list_goals);
        })
    })

