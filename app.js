const courseInput = document.querySelector("#course");
const ratingInput = document.querySelector("#rating");
const addBtn = document.querySelector("#add");
const courseList = document.querySelector("#courseList");
const alertController = document.querySelector('ion-alert-controller');

addBtn.addEventListener('click', () => {
    const course = courseInput.value;
    const rating = ratingInput.value;
    if (course.trim().length <= 0 || rating.trim().length <= 0){
        alertController.create({
            header: 'Invalid Input',
            message: 'Please Fill The Input Field',
            buttons: ['Ok']
        }).then(element =>{
            element.present();
        });
        return;
    }
    if(!RegExp('^[1-5]$').test(rating)){
        alertController.create({
            header: 'Invalid Input',
            message: 'Rating should be between 1 and 5',
            buttons: ['Ok']
        }).then(element =>{
            element.present();
        });
        return;
    }
    const item = document.createElement('ion-item');
    item.innerHTML = `<strong>${course}</strong>&nbsp;&nbsp; ${rating}/5`;
    courseList.appendChild(item);
    console.log('ok',course,rating);
    clear();
});

const clear = ()=>{
    courseInput.value = "";
    ratingInput.value = "";
}