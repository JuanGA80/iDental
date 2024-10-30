const textOne = document.getElementById('item-1');
const textTwo = document.getElementById('item-2');
const textThree = document.getElementById('item-3');
const btns = document.querySelectorAll('.btn-text');

for(let i = 0; i < btns.length; i++){
    btns[i].addEventListener('click', (e)=>{
        if(btns[0] == e.target){
            textOne.classList.add('active')
        }
        else{
            textOne.classList.remove('active')
        }
        if(btns[1] == e.target){
            textTwo.classList.add('active')
        }else{
            textTwo.classList.remove('active')
        }
    
        if(btns[2] == e.target){
            textThree.classList.add('active')
        }else{
            textThree.classList.remove('active')
        }
    })
   
}