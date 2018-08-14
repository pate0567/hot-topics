const p = console.log;

const $container = document.querySelector(".dynamic-content");
const $links = document.querySelectorAll("nav");

const contents = {};


fetch("./partials/home.html")
            .then(function (resp) {
                return resp.text();
            })
            .then(function (data) {
                // PASS THE DATA TO contents[urlVal]
                contents["./partials/home.html"] = data;
                // PASS THE contents[urlVal] TO $container
                $container.innerHTML = contents["./partials/home.html"];
            })



const storeContents = function (urlVal) {

    if (!contents[urlVal]) {
    
        fetch(urlVal)
            .then(function (resp) {
                
                return resp.text();
            })
            .then(function (data) {
                
                contents[urlVal] = data;
               
                $container.innerHTML = contents[urlVal];
            })
    } else {
        $container.innerHTML = contents[urlVal];
    }
}
const handleClick = function (ev) {
  
    ev.preventDefault();
  
    let url = ev.target.href;
    
    p(url)
   
    storeContents(url)
};

$links[0].addEventListener("click", handleClick);
$links[1].addEventListener("click", handleClick);