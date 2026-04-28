function start(){
document.getElementById("questions").innerHTML = `
<p>أين المكان؟</p>
<input id="q1">

<p>ما الهدف؟</p>
<input id="q2">

<p>ملاحظات؟</p>
<textarea id="q3"></textarea>
`;
}

function generate(){

let input = document.getElementById("input").value;
let q1 = document.getElementById("q1")?.value || "";
let q2 = document.getElementById("q2")?.value || "";
let q3 = document.getElementById("q3")?.value || "";

document.getElementById("output").innerText =
"📄 تقرير\n\n" +
"النشاط: " + input + "\n" +
"المكان: " + q1 + "\n" +
"الهدف: " + q2 + "\n" +
"ملاحظات: " + q3;
}
