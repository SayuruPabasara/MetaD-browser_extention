chrome.downloads.onCreated.addListener((download) => {
    console.log("Download detected:");

    console.log("Filename:", download.filename);
    console.log("URL:", download.url);
    console.log("Referrer:", download.referrer);
});