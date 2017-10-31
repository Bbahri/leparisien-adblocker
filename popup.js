/**
 * Get the current URL
 *
 */
var  getCurrentTabUrl = (callback) => {

  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, (tabs) => {

    var tab = tabs[0];

    var url = tab.url;

    //console.assert(typeof url == 'string', 'tab.url should be a string');

    callback(url);
  });

}

/**
 * Extract domain url
 *
 */
var extractRootDomain = (url) => {
  var domain = url,
    splitArr = domain.split('.'),
    arrLen = splitArr.length;

  //extracting the root domain here
  if (arrLen > 1) {
    domain = splitArr[0] + '.' + splitArr[1];
    splitArr = domain.split('//');
    domain = splitArr[1];
  }
  return domain;
}


/**
 * Remove ad from DOM
 *
 */
const removeParisienPopup = (url) => {

  var script = '';
  var site = extractRootDomain(url);

  if(site == 'www.leparisien'){
    script = 'var pop = document.querySelector(\'.overlay\'); var popsmall = document.querySelector(\'.overlay_small\'); popsmall.remove();';
  }

  chrome.tabs.executeScript({
    code: script
  });
}


/**
 * EVENTS
 *
 */
document.addEventListener('DOMContentLoaded', () => {
  getCurrentTabUrl((url) => {

    removeParisienPopup(url);

  });
});
