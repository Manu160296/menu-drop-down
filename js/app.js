var subMenu = document.getElementsByClassName('sub-menu');
for(var i=0 ; i< subMenu.length ; i++){
  subMenu[i].addEventListener('click', showList );
}
console.log(subMenu)
function showList() {
  var itemList = this.getElementsByClassName('itemList')[0];

  if(itemList.classList.contains('hide')){
    itemList.classList.remove('hide');
    itemList.classList.add('show');
  } else{
    itemList.classList.remove('show');
    itemList.classList.add('hide');
  }

    }
