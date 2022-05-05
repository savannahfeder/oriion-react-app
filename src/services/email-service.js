export function sendEmail() {
    const api = "https://api.emailjs.com/api/v1.0/email/send";
    const service_id = "service_ng3azhd";
    const template_id = "email_notif";
    const user_id = "6Isuo37wCWTqwzpdi";

    var emailData = {
        service_id: service_id,
        template_id: template_id,
        user_id: user_id,
        template_params: {
            'user_email': 'catherine.li34@gmail.com'
        }
    };

    fetch(api, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(emailData)
    }).then(response => response.json())
    .then(data => console.log(data))
    .catch((error) => {
        console.error('Error:', error);
    });
}
