const items=[
    "abandon",
    "abase",
    "abash",
    "flaccid",
    "flag",
    "flagellate",
    "flagging",
    "flail",
    "flair",
    "flak",
    "flamboyant",
    "flammable",
    "flange",
    "flannel",
    "flare",
    "flask",
    "flatcar",
    "flatten",
    "flatter",
    "flatulence",
    "flatulent",
    "bat",
    "cat",
    "rat",
    "mouse"
];
    

const node = new TrieNode('\0');

for(const item of items)
    add(item,0,node)

const textbox = document.getElementById("text-box")
const list = document.getElementById("list")


function handler(e){
    const str = e.target.value;
    const predictions = search(str,0,node);

    list.innerHTML = "";
    for(const prediction of predictions)
        list.innerHTML += `<li class="list-group-item clickable" onclick="handleClick(this)"><b>${str}</b>${prediction.substring(str.length)}</li>`;
}
function handleClick(e){
    const text = e.innerHTML.split("<b>").join("").split("</b>").join("");
    textbox.value = text;
}

handler({ target: { value: "" } });

textbox.addEventListener("keydown",handler)