function convert() {
    let curl = document.getElementById("curl").value;
    let curlTrimed = curl.trim();
    let curlSplited = curlTrimed.split("--");

    let method;
    let url;
    let headers = [];
    let dataRaw;

    let existsHeader = false;
    let existsBody = false;
    let existsRequest = false;

    let given = "given()</br>"
    let when = ".when()</br>";
    
    curlSplited.forEach(element => {
        if (element.includes("header")){
            headers.push(element);
            existsHeader = true
        }
        if(element.includes("data-raw")) {
            dataRaw = element;
            existsBody = true
        }
        if (element.includes("request")) {
            let request = element.split(" ");
            method = request[1];
            url = request[2];
            existsRequest = true;
        }
    });

    let fullRequest = "";

    fullRequest += given
    if (existsHeader) {
        fullRequest += createHeader(headers);
    }
    if (existsBody) {
        fullRequest += createBody(dataRaw)
    }
    fullRequest += when
    if (existsRequest) {
        fullRequest += createRequest(method, url)
    }

    document.getElementById("results").innerHTML = fullRequest
    
}  

function createRequest(method, url) {
    if (method == "POST") {
        return `.post(${url})`;
    }
    if (method == "GET") {
        return `.get(${url})`;
    }
    if (method == "DELETE") {
        return `.delete(${url})`;
    }
    if (method == "PUT") {
        return `.put(${url})`;
    }
}

function createHeader(headers) {
    let restHeader= ""

    headers.forEach(element => {
        let header = element.split("\'")
        let headerValues = header[1].split(":");
        console.log(headerValues)
        restHeader += `.header("${headerValues[0].trim()}", "${headerValues[1].trim()}")</br>`;
    });

    return restHeader;
}

function createBody(dataRaw) {
    let body = dataRaw.split("\'");
    return `.body("${body[1]}")</br>`
}

