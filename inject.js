
(function() {

  const timeOut = 2000;
  const articlePatched = 'Article visible';
  const nothingToPatch = 'No article to make visible';

  const showMessage = (message) => {
    let divMessage = document.createElement('div');
    divMessage.innerHTML = "<p style=\'position:fixed;top:50%;left:calc(50% - 120px);z-index:9999;width:240px;background:white;border:1px solid #ccc;padding:20px;box-shadow: 0 0 30px 15px rgba(50, 50, 50, 0.13);\'>" + message + "</p>";
    document.body.appendChild(divMessage);
    setTimeout(function(){
      if(divMessage) divMessage.remove();
    }, timeOut * 2);
  };

  let mySource = document.createElement( 'div' );
  mySource.innerHTML = document.getElementsByTagName('html')[0].innerHTML;
  const leftCol = mySource.querySelector( '.article-full__leftcol' );
  const rightCol = document.querySelector( '.article-full__rightcol' );
  const payWall = document.querySelector( '.paywall' );
  console.log(payWall);

  setTimeout( () => {
    const newLeftCol = document.querySelector('.article-full__leftcol' );
    const articleContent = document.querySelector('.article-full__content' );
    if(newLeftCol) newLeftCol.remove();
    if(articleContent) articleContent.insertBefore(leftCol, rightCol);
    showMessage(articlePatched);
    // if(payWall) showMessage(articlePatched);
    // else showMessage(nothingToPatch);
  }, timeOut);

})();
