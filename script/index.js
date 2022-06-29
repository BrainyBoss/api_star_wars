const listContainer = document.querySelector(".list_container");
const modal = document.querySelector(".modal");

const url = "https://swapi.dev/api/people";
const fetchZemiData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;
    console.log(results);
    for (result of results) {

        const detailsBox = document.createElement("div");
        detailsBox.setAttribute("class", "detailsBox");
        const listItem = document.createElement("h1");
        listItem.textContent = result.name;

        const modalContent = document.createElement("div");
        modalContent.setAttribute("class", "modal_content");

        const charName = document.createElement("h1");
        charName.textContent ="Name :"+ result.name;
        const charHeight = document.createElement("h1");
        charHeight.textContent ="Height: "+ result.height;
        const charGender = document.createElement("h1");
        charGender.textContent ="Gender :"+ result.gender;


        modalContent.appendChild(charName);
        modalContent.appendChild(charHeight);
        modalContent.appendChild(charGender);

        const image = document.createElement("img");
        image.setAttribute("class", "zemi_image")
        image.setAttribute("src", "https://cdn.vox-cdn.com/thumbor/RCi9YT3r4SnRA3iwrzd4sIW666Y=/0x0:2416x1528/920x613/filters:focal(1077x559:1487x969):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/70928477/JTF_FF_000556.0.jpeg")


        detailsBox.appendChild(image);
        detailsBox.appendChild(listItem);
        listContainer.appendChild(detailsBox);
        
        modal.appendChild(modalContent);

        listItem.addEventListener("click", ()=>{
                modal.classList.add("show_modal");

        })
        // listItem.addEventListener("click"){
        //     modal.classList.toggle("show_modal");
        // }
    }
    window.addEventListener("click", (e)=>{
        if(e.target == modal){
            modal.classList.remove("show_modal");
        }
    })

}
fetchZemiData();