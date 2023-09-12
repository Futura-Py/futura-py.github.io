document.addEventListener('DOMContentLoaded', buildmemberlist());

function requestOrgMembers() {
    return Promise.resolve(fetch("https://api.github.com/orgs/futura-py/members"))
}

function buildmemberlist() {
    requestOrgMembers().then(response => response.json()).then(data => {
        let members = document.getElementById("members");

        for(let i = 0; i < data.length; i++) {
            let newdiv = document.createElement("div");
            newdiv.classList.add("member");

            let pfpimglink = document.createElement("a");
            pfpimglink.href = data[i]["html_url"]
            pfpimglink.classList.add("memberlink")

            let pfpimg = document.createElement("img")
            pfpimg.src = data[i]["html_url"] + ".png"
            pfpimg.classList.add("memberimage")

            let pfptextlink = document.createElement("a");
            pfptextlink.href = data[i]["html_url"]
            pfptextlink.classList.add("memberlink");

            let pfptext = document.createElement("p");
            pfptext.classList.add("membername");

            let pfptextstrong = document.createElement("strong")

            let pfptextnode = document.createTextNode(data[i]["login"])

            pfptextstrong.appendChild(pfptextnode)
            pfptext.appendChild(pfptextstrong)

            pfptextlink.appendChild(pfptext)
            pfpimglink.appendChild(pfpimg)

            newdiv.appendChild(pfpimglink)
            newdiv.appendChild(pfptextlink)
            
            members.appendChild(newdiv)
        }

        



    });

}
