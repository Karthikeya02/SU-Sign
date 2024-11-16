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

    let contactHTML = '';
    if (phone) {
        contactHTML = `${phone} | `;
    }

    const signatureHTML = `
        <div class="signature">
            <div class="name-title"><span class="name">${name}</span> | ${title}</div>
            <div class="department">${department} | SEATTLE UNIVERSITY</div>
            <div class="pronouns">${pronouns}</div>
            <div class="spacer"></div>
            <div class="address">901 12th Avenue, Seattle, WA 98122-1090</div>
            <div class="contact" style="font-size: 10px;">${contactHTML}<a href="mailto:${email}">${email}</a></div>
        </div>
    `;

    document.getElementById('signature-output').innerHTML = signatureHTML;
    document.getElementById('copy-button').style.display = 'inline-block';
    document.getElementById('copy-success').style.display = 'none';
}

function copySignature() {
    const signature = document.getElementById('signature-output').innerHTML;
    const tempInput = document.createElement('textarea');
    tempInput.value = signature;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    document.getElementById('copy-success').style.display = 'inline';
}