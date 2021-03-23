let values;
const card = document.querySelector('.card');
const form = document.querySelector('.form');
const generateBtn = document.querySelector('.generate');

window.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        renderForm();
    }, 3000);

    form.addEventListener('submit', function (e) {
        e.preventDefault()
        generateCard();
        form.classList.add('hide');
        card.classList.add('show');
        generateBtn.classList.add('show');
    });

    generateBtn.addEventListener('click', function () {
        download();
    })
});

function renderForm() {
    form.classList.add('show');
}

function generateCard() {
    let school = document.querySelector('#school').value;
    let course = document.querySelector('#course').value;
    let status = document.querySelector('#status').value;
    if (school && course && status) {
        let descr_text = document.querySelector('.desc_text');
        if (status == 'Admission in Progress') {
            descr_text.innerHTML = 'Admission in progress please check back later.';
            document.querySelector('.status').classList.add('accepted');
            document.querySelector('#header_info').innerHTML = 'Admission Offer';
        } else if (status == 'Admission Accepted') {
            descr_text.innerHTML = 'You have successfully accepted the admission offer from your prefered choice of institution.';
            document.querySelector('.status').classList.add('accepted');
            document.querySelector('#header_info').innerHTML = 'Admission Offer';
        } else if (status == 'Not Admitted') {
            descr_text.innerHTML = 'You are yet to be admitted.';
            document.querySelector('#header_info').innerHTML = 'Admission Offer';
        }
         document.querySelector('.school_name').innerHTML = school;
         document.querySelector('.course_title').innerHTML = course;
         document.querySelector('.status').innerHTML = status;
    } else {
        alert('Please fill in required field');
    }

}

const download = () => {
    html2canvas(card).then(canvas => {
        document.body.appendChild(canvas);
        let img = canvas.toDataURL('image/png');
        document.write('<img src="' + img + '"/>');
        let link = document.createElement('a');
        link.download = 'admission.png';
        link.href = canvas.toDataURL();
        link.click();
    })
}