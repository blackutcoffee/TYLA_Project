const buttons=document.querySelectorAll(".filter-button");

    for(let i=0; i<buttons.length; i++){
        buttons[i].addEventListener("click", e => {
            let buttonId = e.target.id
            console.log(buttonId);
            buttonFilter(buttonId)
        }
        )
    }
let renal =[...document.querySelectorAll('.renal')];
    renal.unshift('renal')
let diabetic =[...document.querySelectorAll('.diabetic')];
    diabetic.unshift('diabetic')
let FODMAP =[...document.querySelectorAll('.FODMAP')];
    FODMAP.unshift('FODMAP')
let foodarray = [renal, diabetic, FODMAP]

function buttonFilter(foodPlan) {

    console.log(foodarray)
    let filterTerm;
    foodarray.map(i => {
        if (foodPlan === i[0]) {
            filterTerm = i;
        }
    })
    
    const filteredContainer = document.querySelector('.filtered-list')
    filteredContainer.innerHTML = '';
    const currentContainers = document.querySelector('.meal-list')

    currentContainers.classList.add('hide')
    console.log(filterTerm);
    filterTerm.map(meal => {
        filteredContainer.append(meal)
    })
}