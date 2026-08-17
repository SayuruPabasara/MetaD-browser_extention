console.log("Courseweb content script loaded.");

const links = document.querySelectorAll("a");

console.log("Total links:", links.length);

links.forEach(link => {
    if (link.href.includes("courseweb.sliit.lk/pluginfile.php")) {
        console.log("Moodle file link found:");
        console.log("Text:", link.innerText);
        console.log("URL:", link.href);
    }
});