document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('submit');

    submitButton.addEventListener('click', function() {
        const websiteField = document.getElementById('last_name');
        let number = document.getElementById("number").value;

        // Check if the honeypot field has a value
        if (!websiteField.value === '' || !validateForm() || !validadorDeTelefone(number)) {
            console.log('Form submission denied.');
            event.preventDefault(); // Add this line
        }
        else {
            // Allow form submission to proceed
            console.log('Form submission allowed.');
            event.preventDefault(); // Add this line
            sendEmail();
        }
    });
});

function validateForm() {
    const nameInput = document.getElementById('name');
    const numberInput = document.getElementById('number');
    const messageInput = document.getElementById('message');
    const fields = [{
            input: nameInput,
            name: 'Nome completo'
        },
        {
            input: numberInput,
            name: 'Número de telefone'
        },
        {
            input: messageInput,
            name: 'Mensagem'
        },
    ];

    let allFilled = true;
    let missingFields = [];

    fields.forEach((field) => {
        if (field.input.value.trim() === '') {
            missingFields.push(field.name);
            allFilled = false;
        }
    });

    if (!allFilled) {
        const missingFieldsMessage = missingFields.join(', ');
        alert(`Ops! Você precisa preencher os seguintes campos: ${missingFieldsMessage}.`);
    }

    return allFilled;
}

function validadorDeTelefone(numero) {
    // Remover parenteses e espaços
    numero = numero.replace(/[\(\)\s]/g, '');

    // Verificar se o DDD é válido
    const dddsValidos = [11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 24, 27, 28, 31, 32, 33, 34, 35, 37, 38, 41, 42, 43, 44, 45, 46, 47, 48, 49, 51, 53, 54, 55, 61, 62, 63, 64, 65, 66, 67, 68, 69, 71, 73, 74, 75, 77, 79, 81, 82, 83, 84, 85, 86, 87, 88, 89, 91, 92, 93, 94, 95, 96, 97, 98, 99];
    const ddd = parseInt(numero.substring(0, 2));
    if (!dddsValidos.includes(ddd)) {
            alert(`Ops! Este não é um DDD válido: ${ddd}.`);
            return false;
    }

    // Verificar se o número tem 11 dígitos
    if (numero.length !== 11) {
        alert(`Ops! Este número não tem o tamanho correto   (digite com DDD + 9 + SEU NÚMERO).`);
        return false;
    }

    // Verificar se o número começa com 9
    if (numero[2] !== '9') {
        alert(`Ops! Você precisa adionar o 9 após o DDD.`);
        return false;
    }
    // Verificar se o número não é sequencial (ex: 12345678909)
    const numerosSequenciais = [11111111111, 22222222222, 33333333333, 44444444444, 55555555555, 66666666666, 77777777777, 88888888888, 99999999999];
    if (numerosSequenciais.includes(parseInt(numero))) {
        alert(`Ops! Você não pode usar um número sequẽncial`);
        return false;
    }
    // Verificar se o número não é repetido (ex: 12121212121)
    const numerosRepetidos = [12121212121, 21212121212, 31313131313, 41414141414, 51515151515, 61616161616, 71717171717, 81818181818, 91919191919];
    if (numerosRepetidos.includes(parseInt(numero))) {
        return false;
    }
    // Se passou por todas as verificações, o número é válido
    return true;
}


function sendEmail() {
    const lanceOption = document.querySelector('input[name="lance-option"]:checked');
    const lanceOptionText = lanceOption ? (lanceOption.value === 'reduce-parcel' ? 'Reduzir parcelas' : 'Pagar últimas parcelas') : 'Não selecionado';

    // Create the simulation string
    const simulationString = `Modelo: ${document.getElementById("model").value} | ` +
        `Meses: ${document.getElementById("months").value} | ` +
        `${document.getElementById("total-value").textContent} | ` +
        `Lance: R$ ${document.getElementById("lance").value} | ` +
        `Opção: ${lanceOptionText}`;
    let params = {
        name: document.getElementById("name").value,
        number: document.getElementById("number").value,
        message: document.getElementById("message").value,
        simulation: simulationString
    }

    emailjs.send("service_ts4ti3j", "template_ucdlce8", params)
        .then(() => {
            alert("Nós entraremos em Contato logo logo!");
            // Optionally, reset the form after successful submission
            document.getElementById('contactForm').reset();
        })
        .catch((error) => {
            console.error("Error sending email:", error);
            alert("Ocorreu um erro ao enviar o email. Por favor, tente novamente.");
        });
}
