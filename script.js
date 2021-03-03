const cardDets=document.querySelector('#cardBtn');//
const submit=document.querySelector('#Submit');//
const input=document.querySelector('#Username');//
const adminInput=document.querySelector('#AdminUsername');//
const hitbtn=document.querySelector('#hit');//
const hitbtnOne=document.querySelector('#hitOne');//
const hitbtnt=document.querySelector('#hitt');//
const closc=document.querySelector('#show-popup');//
const closcOne=document.querySelector('#show-popup-one');//
const closct=document.querySelector('#show-popupt');//
const popupW=document.querySelector('#popup-whepper');//
const popupWone=document.querySelector('#popup-whepper-one');//
const popupWt=document.querySelector('#popup-wheppert');//
const congres=document.querySelector('#congres-box');//
const congresOne=document.querySelector('#congres-box-one');//
const congrest=document.querySelector('#congrest-box');//
const popupt=document.querySelector('#popupt');//

 


cardDets.addEventListener('click',(e)=>{
  e.preventDefault();

  let aValue=adminInput.value;
  if(aValue===''){
    alert('Enter Your name');
  }else{
    popupWone.classList.add('active');
    closcOne.classList.add('active');

    congresOne.innerHTML =`<span class="text-dark">${aValue}</span>`;

  }
});

hitbtnOne.addEventListener('click',(e)=>{
  e.preventDefault();
  popupWone.classList.remove('active');
  closcOne.classList.remove('active');
});

popupWone.addEventListener('click',(e)=>{
  e.preventDefault();
  popupWone.classList.remove('active');
  closcOne.classList.remove('active');
})
// poppup one
submit.addEventListener('click',(e)=>{
  e.preventDefault();
    let value=input.value;
    if(value===''){
      alert('Enter Your Name');
    }else{
      popupW.classList.add('active');
      closc.classList.add('active');
      congres.innerHTML =
      `Congratulate
      <span class="text-dark">${value}</span>
      `
      ;
    }; 
});

hitbtn.addEventListener('click',(e)=>{
  e.preventDefault();
    popupW.classList.remove('active');
    closc.classList.remove('active');
});
popupW.addEventListener('click',(e)=>{
  e.preventDefault();
    popupW.classList.remove('active');
    closc.classList.remove('active');
});
//================= puppop two================

popupt.addEventListener('click',(e)=>{
  e.preventDefault();
  popupWt.classList.add('active');
  closct.classList.add('active');

  let values=input.value;
  congrest.innerHTML=`<span class="text-dark">${values}</span>`;

  popupW.classList.remove('active');
  closc.classList.remove('active');
});

hitbtnt.addEventListener('click',(e)=>{
  
  e.preventDefault();
  
    popupWt.classList.remove('active');
    closct.classList.remove('active');

});
popupWt.addEventListener('click',(e)=>{
  
  e.preventDefault();
  
    popupWt.classList.remove('active');
    closct.classList.remove('active');

});



