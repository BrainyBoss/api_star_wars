const listContainer = document.querySelector(".list_container");
const modal = document.querySelector(".modal");

const images = [
    "images/Luke Skywalker.webp",
    "images/C-3PO.png",
    "images/R2-D2.webp",
    "images/Darth Vader.jpeg",
    "images/Leia Organa.jpeg",
    "images/Owen Lars.jpeg",
    "images/Beru Whitesun lars.webp",
    "images/R5-D4.jpeg",
    "images/Biggs Darklighter.webp",
    "images/Obi-Wan Kenobi.jpeg"
]

const url = "https://swapi.dev/api/people";
const fetchZemiData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;
    console.log(results);
    for (let i =0; i< results.length; i++) {

        const detailsBox = document.createElement("div");
        detailsBox.setAttribute("class", "detailsBox");
        const listItem = document.createElement("h1");
        listItem.textContent = results[i].name;

        const modalContent = document.createElement("div");
        modalContent.setAttribute("class", "modal_content");

        const charName = document.createElement("h1");
        charName.textContent ="Name :"+ results[i].name;
        const charHeight = document.createElement("h1");
        charHeight.textContent ="Height: "+ results[i].height;
        const charGender = document.createElement("h1");
        charGender.textContent ="Gender :"+ results[i].gender;


        modalContent.appendChild(charName);
        modalContent.appendChild(charHeight);
        modalContent.appendChild(charGender);

        const image = document.createElement("img");
        image.setAttribute("class", "brainnyboss_image")
        image.setAttribute("src", `${images[i]}`)


        detailsBox.appendChild(image);
        detailsBox.appendChild(listItem);
        listContainer.appendChild(detailsBox);
        
        
        listItem.addEventListener("click", ()=>{
            modal.appendChild(modalContent);
                modal.classList.add("show_modal");

        })
        // listItem.addEventListener("click"){
        //     modal.classList.toggle("show_modal");
        // }
    }
    window.addEventListener("click", (e)=>{
        if(e.target == modal){
            modal.classList.remove("show_modal");
            modal.innerHTML = ""
        }
    })

}
fetchZemiData();