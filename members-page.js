const members = [
    {name: "Anjali Dharmaraju", img:"member_placeholder.jpg", exImg:"member_placeholder.jpg", quote:"Insert quote", color:"black"},
    {name: "Anna D' Souza", img:"member_placeholder.jpg", exImg:"member_placeholder.jpg", quote:"Insert quote", color:"black"},
    {name: "Anoushka Arun", img:"member_placeholder.jpg", exImg:"member_placeholder.jpg", quote:"Insert quote", color:"black"},
    {name: "Gayatri B. Mudaliar", img:"member_placeholder.jpg", exImg:"member_placeholder.jpg", quote:"Insert quote", color:"black"},
    {name: "Kiah D' Souza", img:"member_placeholder.jpg", exImg:"member_placeholder.jpg", quote:"Insert quote", color:"black"},
    {name: "Kimaya Kaushik", img:"member_placeholder.jpg", exImg:"member_placeholder.jpg", quote:"Insert quote", color:"black"},
    {name: "Gayatri B. Mudaliar", img:"member_placeholder.jpg", exImg:"member_placeholder.jpg", quote:"Insert quote", color:"black"},
    {name: "Ma Nashih", img:"member_placeholder.jpg", exImg:"member_placeholder.jpg", quote:"Insert quote", color:"black"},
    {name: "Niona", img:"member_placeholder.jpg", exImg:"member_placeholder.jpg", quote:"Insert quote", color:"black"},
    {name: "Rupanshi Oberoi", img:"member_placeholder.jpg", exImg:"member_placeholder.jpg", quote:"Insert quote", color:"black"},
    {name: "Samriddhi", img:"member_placeholder.jpg", exImg:"member_placeholder.jpg", quote:"Insert quote", color:"black"},
    {name: "Shravan", img:"member_placeholder.jpg", exImg:"member_placeholder.jpg", quote:"Insert quote", color:"black"},
    {name: "Susmita Das", img:"member_placeholder.jpg", exImg:"member_placeholder.jpg", quote:"Insert quote", color:"black"},
];

let flipped = false;

const buttonsContainer = document.querySelector('.member-buttons');

members.forEach((member, index) => {
    const btn = document.createElement('button');
    btn.style.backgroundColor = member.color;
    btn.addEventListener('click', () => {
        showMember(index);
        document.querySelectorAll('.member-buttons button').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
    if (index === 0) btn.classList.add('active');
    buttonsContainer.appendChild(btn);
});

showMember(0);

function showMember(index) {
    const member = members[index];
    const imgEl = document.getElementById('member-img');
    const nameEl = document.getElementById('member-name');
    const quoteEl = document.getElementById('quote');
    
}