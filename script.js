function formatPhoneNumber(input) {
    const phone = input.value.replace(/\D/g, '');
    const match = phone.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        input.value = `(${match[1]}) ${match[2]}-${match[3]}`;
    }
}

function generateSignature() {
    const name = document.getElementById('name').value;
    const title = document.getElementById('title').value;
    const department = document.getElementById('department').value;
    const pronouns = document.getElementById('pronouns').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    const signatureHTML = `
        <div class="signature">
            <div class="name-title"><span class="name">${name}</span> | ${title}</div>
            <div class="department">${department} | SEATTLE UNIVERSITY</div>
            <div class="pronouns">${pronouns}</div>
            <div class="spacer"></div>
            <div class="address">901 12th Avenue, Seattle, WA 98122-1090</div>
            <div class="phone">Office: ${phone} | <a href="mailto:${email}">${email}</a></div>
        </div>
    `;

    document.getElementById('signature-output').innerHTML = signatureHTML;
}