console.log("Courseweb content script loaded.");

// --------------------------------------------------
// Detect when a Moodle resource is clicked
// --------------------------------------------------

document.addEventListener("click", function(event) {

    const clickedElement = event.target.closest(
        'a[href*="/mod/resource/view.php"]'
    );

    

    // Not a Moodle resource link
    if (!clickedElement) {
        return;
    }

    console.log("===== RESOURCE CLICKED =====");

    // --------------------------------------------------
    // Resource information
    // --------------------------------------------------

    const resourceTitle = clickedElement.innerText.trim();

    const resourceUrl = clickedElement.href;

    console.log("Resource:", resourceTitle);
    console.log("Resource URL:", resourceUrl);


    // --------------------------------------------------
    // Course information
    // --------------------------------------------------

    const courseUrl = window.location.href;

    const courseTitle = document.title;

    console.log("Course page:", courseUrl);
    console.log("Course title:", courseTitle);


    // --------------------------------------------------
    // Find the Moodle section containing the resource
    // --------------------------------------------------

    const section = clickedElement.closest("li.course-section");

    

    let sectionTitle = "";
    let weekTitle = "";

    if (section) {

        console.log("===== SECTION HTML =====");
        console.log(section);

        // --------------------------------------------------
        // Section date/title
        // Example:
        // "10 Aug - 16 Aug"
        // --------------------------------------------------

        const sectionHeading = section.querySelector(".sectionname");

        if (sectionHeading) {
            sectionTitle = sectionHeading.innerText.trim();
        }


        // --------------------------------------------------
        // Find the week/topic heading
        // Example:
        // "Week 5 - Lecture 5 - UML - Activity Diagram"
        // --------------------------------------------------

        const headings = section.querySelectorAll("h3");

        for (const heading of headings) {

            const text = heading.innerText.trim();

            if (!text) {
                continue;
            }

            // Ignore the date heading
            if (text === sectionTitle) {
                continue;
            }

            // Ignore submission section
            if (text === "Lab 03 Submission") {
                continue;
            }

            weekTitle = text;
            break;
        }
        

    } else {

        console.log("Could not find Moodle section.");

    }
    const context = {
    resourceTitle: resourceTitle,
    resourceUrl: resourceUrl,
    courseUrl: courseUrl,
    courseTitle: courseTitle,
    sectionTitle: sectionTitle,
    weekTitle: weekTitle
};

    // --------------------------------------------------
    // Display extracted context
    // --------------------------------------------------

console.log("===== DOWNLOAD CONTEXT =====");
console.log(context);
console.log("============================");

chrome.runtime.sendMessage({
    type: "RESOURCE_CONTEXT",
    context: context
});

});