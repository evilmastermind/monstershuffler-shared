//---------------------------------------------------------------------------
// CHARACTERS DOWNLOLAD
//---------------------------------------------------------------------------

//---------------------------------------------------------------------------
// Save character as screenshot
//---------------------------------------------------------------------------

function saveAsPicture(element) {
    //getting character parent
    var characterParent = element.closest(".character-wrapper");
    //fixing a potential bug with svg images
    var svgElements = characterParent.querySelectorAll('svg');
    svgElements.forEach(function(item) {
        item.setAttribute("width", item.getBoundingClientRect().width);
        item.setAttribute("height", item.getBoundingClientRect().height);
        item.setAttribute("data-width", item.style.width);
        item.setAttribute("data-height", item.style.height);
        item.style.width = null;
        item.style.height= null;
    });
    //removing dotted and underlined 
    var dotted = characterParent.querySelectorAll('.dotted');
    dotted.forEach(function(item) {
        item.classList.replace("dotted", "undotted");
    });
    var dotted = characterParent.querySelectorAll('.underlined');
    dotted.forEach(function(item) {
        item.classList.replace("underlined", "ununderlined");
    });

    //getting character text
    var filename = characterParent.querySelector(".character-header-name").textContent.trim();

    //hiding buttons and options
    const options = characterParent.querySelectorAll(".removefromimages");
    options.forEach(function(option){
        option.classList.add("closed");
    });

    html2canvas(characterParent, { backgroundColor: "rgba(255, 255, 255, 255)", scale: 2}).then(function(canvas) {
    saveAs(canvas.toDataURL(),filename+'.png');
    });

    //restoring buttons and options
    options.forEach(function(option){
        option.classList.remove("closed");
    });

    // restoring svg attributes
    svgElements.forEach(function(item) {
        item.removeAttribute("width");
        item.removeAttribute("height");
        item.style.width = item.getAttribute("data-width");
        item.style.height = item.getAttribute("data-height");
        item.removeAttribute("data-width");
        item.removeAttribute("data-height");
    });
    //restoring dotted and underlined 
    var dotted = characterParent.querySelectorAll('.undotted');
    dotted.forEach(function(item) {
        item.classList.replace("undotted", "dotted");
    });
    var dotted = characterParent.querySelectorAll('.ununderlined');
    dotted.forEach(function(item) {
        item.classList.replace("ununderlined", "underlined");
    });
}


function saveAs(uri, filename) {

    var link = document.createElement('a');

    if (typeof link.download === 'string') {

        link.href = uri;
        link.download = filename;

        //Firefox requires the link to be in the body
        document.body.appendChild(link);

        //simulate click
        link.click();

        //remove the link when done
        document.body.removeChild(link);

    } else {

        window.open(uri);

    }
}
function createExportPopup(element,type = "Text",extension = "txt") {
    const template = document.querySelector('#popup-export-creatureTemplate');
    let clone = template.content.cloneNode(true);
    const textarea = qs("#popup-export-output",clone);
    const copytext = qs("#popup-export-copy",clone);
    const savefile = qs("#popup-export-save",clone);
    if(type === "Markdown") {
        textarea.value = characterToMarkdown(getJsonExport(element));
    }
    if(type === "MarkdownV3") {
        textarea.value = characterToMarkdownV3(getJsonExport(element));
    }
    else if(type === "II") {
        textarea.value = characterToII(getJsonExport(element));
    }
    else if(type === "Text") {
        textarea.value = characterToText(getJsonExport(element));
    }
    copytext.addEventListener("click",function(){ copyText(); })
    savefile.addEventListener("click",function(){ saveFile(); });
    document.body.appendChild(clone);

    function copyText() {
        textarea.select();
        document.execCommand("copy");
        qs(".button-text",copytext).textContent = "Copied!";
        copytext.classList.add("green");
    }
    function saveFile() {
        saveExportFile(textarea.value,getFilenameExport(element,extension));
    }
}
function closeExportPopup(element) {
    element.closest('#popup-export-creature').remove();
}
function saveAsText(element) {
    var output  = characterToText(getJsonExport(element));

    saveExportFile(output,getFilenameExport(element));
}
function saveAsII(element) {
    var output  = characterToII(getJsonExport(element));
    saveExportFile(output,getFilenameExport(element,"json"));
}
function saveAsMarkdown(element) {
    var output  = characterToMarkdown(getJsonExport(element));
    saveExportFile(output,getFilenameExport(element,"txt"));
}
function getFilenameExport(element,extension = "txt") {
    //getting character parent
    var characterParent = element.closest(".character-wrapper");
    //getting character text
    var filename = characterParent.querySelector(".character-header-name").textContent.trim();
    filename = filename? `${filename}.${extension}` : `document.${extension}`;   
    return filename;
}
function getJsonExport(element) {
    //getting character parent
    var characterParent = element.closest(".character-wrapper");
    //getting json
    var character = characterParent.querySelector(".character");
    var json = JSON.parse(character.getAttribute("data-object-info"));
    return json;    
}
function saveExportFile(output,filename = "document.txt") {
    var blob = new Blob([output], {
        type: '"text/plain;charset=utf-8"'
    });
    // Create download link element
    var downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = filename;
    downloadLink.click();
    URL.revokeObjectURL(downloadLink.href);
}




