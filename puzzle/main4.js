// ------------------------------------- PLAIN JS----------------------------------------------------
const tiles = document.querySelectorAll('div img');
const divs = document.querySelectorAll('div grid-item');
var empty_div;
var clicked_div;
var clickedcolumnId;
var clickedrowId
var columnItems;
var rowItems;
var isColumn; //if false, it's a row



tiles.forEach(tile => {
   tile.addEventListener('click', locateTiles)
});


function locateTiles(event) {

   clickedcolumnId = event.target.parentElement.getAttribute('columnId');
   clickedrowId = event.target.parentElement.getAttribute('rowId');

   columnItems = document.querySelectorAll("[columnId=" + CSS.escape(clickedcolumnId) + "]");
   rowItems = document.querySelectorAll("[rowId=" + CSS.escape(clickedrowId) + "]")

   clicked_div = event.target.parentElement;
   console.log(clicked_div, " clicked parent element")

   isColumn = undefined;
   // console.log(clicked_div_id + " from checkneighbours")
   checkRowAndColumn(columnItems);
   checkRowAndColumn(rowItems);
   if (isColumn === undefined) {
      return;
   }

   if (parseInt(clicked_div.getAttribute('id')) > parseInt(empty_div.getAttribute('id'))) {
      moveNegative(clicked_div, empty_div)
   } else {
      movePositive(clicked_div, empty_div);
   }
}


function checkRowAndColumn(rowOrColumn) {
   rowOrColumn.forEach(function (tile) {
      if (!tile.firstElementChild) {
         empty_div = tile;
         if (empty_div.getAttribute('columnId') == parseInt(clickedcolumnId)) {
            isColumn = true;
         } else {
            isColumn = false;
         }
         console.log(isColumn);
         return isColumn;
      }
   })
}


function moveNegative(clickedDiv, emptyDiv) {
   if (isColumn) {
      //move row position
      let start = parseInt(emptyDiv.getAttribute('rowId'));
      let end = parseInt(clickedDiv.getAttribute('rowId'));

      for (let i = start; i < end; i++) {
         // console.log(columnItems.item(start + i));
         let div_to_move_from = columnItems.item(i + 1)
         let div_to_move_to = columnItems.item(i);
         div_to_move_to.appendChild(div_to_move_from.firstElementChild);
      }
   } else {
      //empty field in row - move column position
      let start = parseInt(emptyDiv.getAttribute('columnId'));
      let end = parseInt(clickedDiv.getAttribute('columnId'));

      for (let i = start; i < end; i++) {
         let div_to_move_from = rowItems.item(i + 1);
         let div_to_move_to = rowItems.item(i);
         div_to_move_to.appendChild(div_to_move_from.firstElementChild);
      }
   }
}

function movePositive(clickedDiv, emptyDiv) {
   if (isColumn) {
      let start = parseInt(emptyDiv.getAttribute('rowId'));
      let end = parseInt(clickedDiv.getAttribute('rowId'));

      for (let i = start; i > end; i--) {
         let div_to_move_from = columnItems.item(i - 1);
         let div_to_move_to = columnItems.item(i)
         div_to_move_to.appendChild(div_to_move_from.firstElementChild);
      }
   } else {
      let start = parseInt(emptyDiv.getAttribute('columnId'));
      let end = parseInt(clickedDiv.getAttribute('columnId'));


      for (let i = start; i > end; i--) {
         let div_to_move_from = rowItems.item(i - 1);
         let div_to_move_to = rowItems.item(i);
         div_to_move_to.appendChild(div_to_move_from.firstElementChild);
      }
   }
}

//-----------------------------------------------JQUERY--------------------------------------------------------//
// $(function () {
//    const imgTiles = $('div > img')
//    const divs = $('div .grid-item')

//    var emptyDivColumnId;
//    var emptyDivRowId;
//    var clickedImg;
//    var clickedColumn;
//    var clickedRow;

//    //find empty div - den holder vi hele tiden styr på
//    divs.each(function () {
//       if ($(this).children().length < 1) {
//          emptyDivColumnId = $(this).attr('columnId')
//          emptyDivRowId = $(this).attr('rowId')
//          console.log('column:', emptyDivColumnId, 'row:', emptyDivRowId);
//       }
//    })


//    //Add click listener to all img tiles
//    imgTiles.each(function () {
//       $(this).on('click', () => {
//          //Find clicked tile (img)
//          clickedImg = $(this);

//          //check if empty div is in column or row of clicked img
//          if (clickedImg.parent().attr('columnId').match(emptyDivColumnId)) {
//             console.log('column match')
//             clickedColumn = $('div[columnId=' + clickedImg.parent().attr('columnId') + ']')
//             console.log(clickedColumn);
//          } else if (clickedImg.parent().attr('rowId').match(emptyDivRowId)) {
//             console.log('row match');
//             clickedRow = $('div[rowId=' + clickedImg.parent().attr('rowId') + ']')
//             console.log(clickedRow);
//          }
//       })
//    })



   // if (divs.has(emptyTile))   //test - kan bruges til når vi skal se om en jquery collection (row el column) indeholder emptyTile
   //    console.log('yes', emptyTile);
   //Check if
   //Determine relatve distance between clicked tile and empty tile i.e. how many tiles to move





// })