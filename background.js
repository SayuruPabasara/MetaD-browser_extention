chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {

    if (message.type === "RESOURCE_CLICKED") {

        console.log("===== RESOURCE CLICKED =====");

        console.log("Resource name:", message.data.resourceName);
        console.log("Resource URL:", message.data.resourceUrl);
        console.log("Resource ID:", message.data.resourceId);
        console.log("Course page:", message.data.coursePageUrl);

    }

});

let lastResourceContext = null;

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {

    if (message.type === "RESOURCE_CONTEXT") {

        lastResourceContext = message.context;

        console.log("===== CONTEXT RECEIVED =====");
        console.log(lastResourceContext);
        console.log("============================");
    }

});

chrome.downloads.onCreated.addListener((download) => {

    const downloadContext = {
        filename: download.filename,
        downloadUrl: download.url,
        referrer: download.referrer,

        resourceTitle: lastResourceContext?.resourceTitle,
        resourceUrl: lastResourceContext?.resourceUrl,

        courseTitle: lastResourceContext?.courseTitle,
        courseUrl: lastResourceContext?.courseUrl,

        sectionTitle: lastResourceContext?.sectionTitle,
        weekTitle: lastResourceContext?.weekTitle
    };

    console.log("===== FINAL DOWNLOAD CONTEXT =====");
    console.log(downloadContext);
    console.log("==================================");
});
