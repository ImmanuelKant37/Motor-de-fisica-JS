export default class Dragable{
  constructor(id)
  {
    this.id=id;
    this.item = document.querySelector(id);
    this.dragable = true;
    this.setDragableStatus(true)
  }
  setDragableStatus(condition){
    this.dragable=condition;
    if (condition){
      var startX = 0, startY = 0;
      const item = this.item;

      function mouseMove(e) {
        e.preventDefault();
        var newPosX = e.clientX - startX;
        var newPosY = e.clientY - startY;
        item.style.left = newPosX + 'px';
        item.style.top = newPosY + 'px';
    }
      function setDrag(e){
        startX = e.clientX -  item.offsetLeft;
        startY = e.clientY -  item.offsetTop;
        document.addEventListener('mousemove', mouseMove);
    }
        this.item.addEventListener('mousedown', setDrag);
        document.addEventListener('mouseup', function() {
        document.removeEventListener('mousemove', mouseMove);
      });
    }
    else{
      document.removeEventListener('mousedown', setDrag(e));
    }
  }
  getDragableStatus(){
    return this.dragable;
  }
  getElement(){
    return this.item;
  }
}
