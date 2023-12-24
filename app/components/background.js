// when installed call this function
console.log('test')
chrome.runtime.onInstalled.addListener(
    function(details){
        console.log('test')
        if(details.reason === "installed"){
            // it is relative to manifest//
            let pageURL = chrome.runtime.getURL("src/components/installed/Page.html")
            chrome.tabs.create(
                {
                    url: pageURL
                }
            );
            // just send user to this html and do nothing
            return;
        }
        else{
            return;
        }
       
    }
);
// end of installed

