let screenval = document.getElementById('screenv');
let elementval = screenval.textContent;
let valu1=false
function insertvalue(digit) {
    if (valu1) {
        elementval = '0';
        valu1 = false;
      }
  elementval = elementval ==='0' ?digit:elementval + digit;
  updatevalue()
}

function updatevalue(){
    screenval.textContent=elementval
  }

  function singlecrear() {
    elementval = elementval.toString();
    elementval= elementval.slice(0, -1);
    if(elementval.length===0){
        elementval='0'
    }
    updatevalue()
  }

  function allclear(){
    elementval='0'
    updatevalue()
  }

function togglevalue(){
    elementval=elementval * - 1
    updatevalue()
}

function opratorvalue(oprators){
    if(valu1){
        valu1=false
    }
    elementval=elementval+oprators
    updatevalue()
}

function finalresult(){
    if (valu1) return;
    elementval=eval(elementval)
    updatevalue()
    valu1=true
}
