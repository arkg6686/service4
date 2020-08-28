/**

 * Add listener

 */

addEventListener('fetch', event => {

  event.respondWith(fetchAndLog(event.request))

})

/**

 * Fetch remote

 * @param {Request} request

 */

async function fetchAndLog(request) {


  var url = request.url;

  if(url.includes("aimtell-worker.js")){

    request = "https://cdn.aimtell.com/sdk/aimtell-worker-sdk.js";

  }  



  return(fetch(request));

}
