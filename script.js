const fsname = "Name: Philipp Seerainer";
const contact = "Contact: ";
const mail = window.atob("cGhpbGlwcEBzZWVyYWluZXIuY29t");
const link = document.createElement("a");
link.innerText = mail;
link.href = window.atob("bWFpbHRvOg==") + mail;
const home = "Location: Salzburg, Austria";
const textElement = document.getElementsByTagName("p")[0];
const br = document.createElement("br");
let index = 0;

function showText() {
    if (textElement) {
        if (index < fsname.length) {
            textElement.innerHTML += fsname.charAt(index);
        } else if (index < fsname.length + contact.length) {
            textElement.innerHTML += contact.charAt(index - fsname.length);
        } else if (index === fsname.length + contact.length) {
            textElement.appendChild(link);
        } else if (index < fsname.length + contact.length + mail.length + home.length) {
            textElement.innerHTML += home.charAt(index - fsname.length - contact.length - mail.length);
        } 
        
        if (index === fsname.length - 1) {
            textElement.appendChild(br);
        }
        if (index === fsname.length + contact.length + mail.length - 1) {
            textElement.appendChild(br);
        }

        index++;
        setTimeout(showText, 34);
    }
}

const pgpText = document.getElementsByTagName("details")[0];
if (pgpText) {
    pgpText.style.display = "block";
    pgpText.onclick = () => {
        const pre = document.getElementsByTagName("pre")[0];
        if (document.body.createTextRange) {
            const r = document.body.createTextRange();
            r.moveToElementText(pre);
            r.select();
        } else if (window.getSelection) {
            const s = window.getSelection();
            const r = document.createRange();
            r.selectNodeContents(pre);
            s.removeAllRanges();
            s.addRange(r);
        }
    };
}

showText();