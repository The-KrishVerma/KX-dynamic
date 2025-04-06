function disthoughts() {
    let entered_thoughts = document.getElementById("thoughts").value;
    document.getElementById("thoughts").value = '';
    let newdiv = document.createElement("div");
    newdiv.classList.add("Twit1");
    newdiv.innerHTML = `<div style="height: auto;">
                            <img src="./images/Profile photo.jpeg"
                                style="height: 50px; width: 50px; border-radius: 50px; display: inline;">
                        </div>
                        <div
                            style="height: auto; margin-left: 10px; width: 100%; padding-top: 0px; padding-left: 5px; align-items: start; padding-bottom: 0px;">
                            <div
                                style="height: 30px; display: flex; line-height: 1px; align-items: center; justify-content: start;">
                                <p style="font-size: 20px;">Krish Verma&nbsp;&nbsp;</p>
                                <p style="color: rgba(255, 255, 255, 0.521); font-size: 17px;">@The_KrishVerma · 1m</p>
                            </div>
                            <div style="margin-top: 5px; line-height: 20px;">
                                ${entered_thoughts}
                            </div>
                            <div style="align-items: center; justify-content: center; display: flex;">
                                <video width="100%" height="300px" autoplay muted controls>
                                    <source src="./images/5286283-hd_1920_1080_30fps.mp4" type="video/mp4">
                                        Your browser does not support the video tag.
                                </video>
                            </div>
                            <div
                                style="display: flex; margin-top: 10px; justify-content: space-between; height: auto; padding-bottom: 10px;" class="likesection">
                                <button style="color: rgb(255, 255, 255); background-color: black; font-size: 20px;align-items: center; border: none;" class="comment"><i class="fa fa-comment-o"> 20k</i></button><button style="color: rgba(255, 255, 255); background-color: black; font-size: 20px; align-items: center; border: none;" class="likes" onclick="like(this)"><i class="fa fa-heart-o"> 396k</i></button><button style="color: rgb(255, 255, 255); background-color: black; font-size: 20px;align-items: center; border: none;" class="share"><i
                                class="fa fa-share-alt"> 80k</i></button><button style="color: rgb(255, 255, 255); background-color: black; font-size: 20px;align-items: center; border: none;" class="navi"><i class="fa fa-navicon"></i></button>
                            </div>`;


    document.getElementById("AllTwits").appendChild(newdiv);
    alert("Posted successfully");
}

function like(clicked) {
    let parentbutt = clicked.closest(".likes");
    let icon = parentbutt.querySelector("i");
    if (parentbutt.style.color === "rgb(255, 255, 255)") {
        parentbutt.style.color = "rgb(255, 0, 0)";
        icon.classList = "fa fa-heart";
    }
    else if (parentbutt.style.color === "rgb(255, 0, 0)") {
        parentbutt.style.color = "rgb(255, 255, 255)";
        icon.classList = "fa fa-heart-o";
    }
}

const profiles = [
    {
        name: "Krish Verma",
        username: "@The_KrishVerma",
        avatar: "./images/Profile photo.jpeg"
    },
    {
        name: "Narendra Modi",
        username: "@narendramodi",
        avatar: "./images/narendrammodi.jpeg"
    },
    {
        name: "Virat Kohli",
        username: "@Virat_Kohli",
        avatar: "./images/vkas_0.webp"
    },
    {
        name: "Alvaro Morte",
        username: "@Alvaro_Morte",
        avatar: "./images/moneyheist.jpg"

    },
    {
        name: "Elon Musk",
        username: "@elonmusk",
        avatar: "./images/elonmusk.jpg"
    },
    {
        name: "Emma Watson",
        username: "@emmawatson",
        avatar: "./images/emmawatson.jpg"
    },
    {
        name: "Bill Gates",
        username: "@billgates",
        avatar: "./images/billgates.jpg"
    },
    {
        name: "Aishwarya Rai",
        username: "@aishwaryarai",
        avatar: "./images/as.jpg"
    },
    {
        name: "Kriti Kharbanda",
        username: "@kriti_kharbanda",
        avatar: "./images/kriti.jpg"
    },
    {
        name: "Rashi Khanna",
        username: "@rashi_khanna",
        avatar: "./images/rashik.jpg"
    },
    {
        name: "Shruti Hassan",
        username: "@shruti_hassan",
        avatar: "./images/shrutihassan.jpg"
    }    
];

function searchProfiles(event) {
    event.preventDefault();
    const searchTerm = document.getElementById('profile-search').value.toLowerCase();
    const resultsContainer = document.getElementById('profile-results');

    resultsContainer.innerHTML = '';
    resultsContainer.style.maxHeight = '300px';
    resultsContainer.style.overflowY = 'auto';

    if (searchTerm.trim() === '') {
        resultsContainer.style.display = 'none';
        return;
    }

    const filteredProfiles = profiles.filter(profile =>
        profile.name.toLowerCase().includes(searchTerm) ||
        profile.username.toLowerCase().includes(searchTerm)
    );

    if (filteredProfiles.length > 0) {
        filteredProfiles.forEach(profile => {
            const profileElement = document.createElement('div');
            profileElement.className = 'profile-result';
            profileElement.innerHTML = `
                <img src="${profile.avatar}" alt="${profile.name}">
                <div class="profile-info">
                    <div class="profile-name">${profile.name}</div>
                    <div class="profile-username">${profile.username}</div>
                </div>
            `;
            profileElement.addEventListener('click', () => {
                console.log(`Navigating to ${profile.username}'s profile`);
            });
            resultsContainer.appendChild(profileElement);
        });
        resultsContainer.style.display = 'block';
    } else {
        resultsContainer.innerHTML = '<div class="profile-result">No profiles found</div>';
        resultsContainer.style.display = 'block';
    }
}

document.addEventListener('click', (e) => {
    const results = document.getElementById('profile-results');
    if (!e.target.closest('.profile-search-container') && results.style.display === 'block') {
        results.style.display = 'none';
    }
});

document.getElementById('profile-search').addEventListener('input', (e) => {
    if (e.target.value.length > 0) {
        const event = { preventDefault: () => { } };
        searchProfiles(event);
    } else {
        document.getElementById('profile-results').style.display = 'none';
    }
});

function extfollow() {
    if (document.getElementById("tofollow").style.overflow === "hidden") {
        document.getElementById("tofollow").style.overflow = "visible";
        document.getElementById("tofollowbutton").innerText = "Show less";
        document.getElementById("tofollow").style.height = "auto";
    }
    else if (document.getElementById("tofollow").style.overflow === "visible") {
        document.getElementById("tofollow").style.overflow = "hidden";
        document.getElementById("tofollowbutton").innerText = "Show more"
        document.getElementById("tofollow").style.height = "232px";
    }
}
function exttrend() {
    if (document.getElementById("trending").style.overflow === "hidden") {
        document.getElementById("trending").style.overflow = "visible";
        document.getElementById("trendbutton").innerText = "Show less";
        document.getElementById("trending").style.height = "auto";
    }
    else if (document.getElementById("trending").style.overflow === "visible") {
        document.getElementById("trending").style.overflow = "hidden";
        document.getElementById("trendbutton").innerText = "Show more"
        document.getElementById("trending").style.height = "232px";
    }
}
function following() {
    document.getElementById("dis_foryou").style.display = "none";
    document.getElementById("dis_following").style.display = "flex";
    document.getElementById("followingbutton").style.borderBottom = "5px solid";
    document.getElementById("followingbutton").style.borderBottomColor = "blue";
    document.getElementById("foryoubutton").style.borderBottom = "none";

}
function foryou() {
    document.getElementById("dis_foryou").style.display = "block";
    document.getElementById("dis_following").style.display = "none";
    document.getElementById("foryoubutton").style.borderBottom = "5px solid";
    document.getElementById("foryoubutton").style.borderBottomColor = "blue";
    document.getElementById("followingbutton").style.borderBottom = "none";
}

function searchFollowing() {

    const input = document.getElementById('followingSearch');
    const filter = input.value.toUpperCase();


    const container = document.getElementById('followingList');

    const items = container.getElementsByClassName('following-item');

    for (let i = 0; i < items.length; i++) {
        const nameDiv = items[i].querySelector('div[style*="font-weight: bolder; height: 50%"]');
        const usernameDiv = items[i].querySelector('div[style*="height: 50%; display: flex; align-items: start;"]');

        const name = nameDiv ? nameDiv.textContent || nameDiv.innerText : '';
        const username = usernameDiv ? usernameDiv.textContent || usernameDiv.innerText : '';

        if (name.toUpperCase().indexOf(filter) > -1 || username.toUpperCase().indexOf(filter) > -1) {
            items[i].style.display = "flex";
        } else {
            items[i].style.display = "none";
        }
    }
}

function unfollow(whichclicked) {
    let butclicked = whichclicked;
    butclicked.style.backgroundColor = "lightblue";
    butclicked.innerText = "Follow";
    setTimeout(() => {
        butclicked.closest(".following-item").style.display = "none";
    }, 1300);
}

function loginsucc() {
    let phone = document.getElementById("ph_login").value;
    let pass = document.getElementById("pass_login").value;


    if (phone === "1234567890" && pass === "hello") {
        document.getElementById("login").style.display = "none";
        document.getElementById("Container").style.display = "flex";
        alert("Login Successful");
    }
    else if (phone === "") {
        alert("Enter phone number");
    }
    else if (pass === "") {
        alert("Enter password");
    }
    else {
        alert("Wrong Password");
        document.getElementById("pass_login").value = "";
    }
}