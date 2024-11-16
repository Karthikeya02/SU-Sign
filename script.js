function generateSignature() {
    const name = document.getElementById('name').value;
    const title = document.getElementById('title').value;
    const department = document.getElementById('department').value;
    const pronouns = document.getElementById('pronouns').value;
    const phone = document.getElementById('phone').value;

    const signatureHTML = `
        <div class="signature">
            <div class="name-title"><span class="name">${name}</span> | ${title}</div>
            <div class="department">${department} | SEATTLE UNIVERSITY</div>
            <div class="pronouns">${pronouns}</div>
            <div class="spacer"></div>
            <div class="address">901 12th Avenue, Seattle, WA 98122-1090</div>
            <div class="phone">Office: (206) 296-${phone}</div>
        </div>
    `;

    document.getElementById('signature-output').innerHTML = signatureHTML;
}