/* 
this javascript is only to change the "actpage" attribut on the .unified_pagination div
*/

window.onload = function () {
  var paginationPage = parseInt($('.unified_pagination').attr('actpage'), 10);
  $('.unified_pagination_i').on('click', function () {
    var go = $(this).attr('href').replace('#!', '');
    if (go === '+1') {
      paginationPage++;
    } else if (go === '-1') {
      paginationPage--;
    } else {
      paginationPage = parseInt(go, 10);
    }
    $('.unified_pagination').attr('actpage', paginationPage);
  });
};