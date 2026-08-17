// Register a listener for when a download is created/initiated
chrome.downloads.onCreated.addListener(async (downloadItem) => {

    // Log a message indicating that a download has been detected
    console.log("Download detected:");

    // Log the deatails of the download file, including filename, URL, and referrer
    console.log("Filename:", downloadItem.filename);
    console.log("URL:", downloadItem.url);
    console.log("Referrer:", downloadItem.referrer);

    // Retrieve all currently open browser tabs
    const tabs = await chrome.tabs.query({});

    // Log a message indicating the start of the tab iteration
    console.log("Open tabs:");

    // Iterate through each open tab
    for (const tab of tabs) {

        // Check if the tab has a URL and if it contains "courseweb.sliit.lk"
        if (tab.url && tab.url.includes("courseweb.sliit.lk")) {

            console.log("Courseweb tab found:");

            // Log the title,URL of the Courseweb tab
            console.log("Title:", tab.title);
            console.log("URL:", tab.url);
        }
    }
});