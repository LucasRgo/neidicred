const models = {
    'pop-110': {
        12: 1106.13,
        24: 559.54,
        36: 380.42,
        48: 288.76,
        60: 234.43,
        80: 181.00
    },
    'biz-110': {
        12: 1333.41,
        24: 674.51,
        36: 458.59,
        48: 348.09,
        60: 282.60,
        80: 218.19
    },
    'biz-125': {
        12: 1655.99,
        24: 837.69,
        36: 569.53,
        48: 432.30,
        60: 350.97,
        80: 270.92
    },
    'elite-125': {
        12: 1462.44,
        24: 739.72,
        36: 502.97,
        48: 381.78,
        60: 309.95,
        80: 239.31
    },
    'pcx': {
        12: 1879.11,
        24: 950.56,
        36: 646.27,
        48: 490.55,
        60: 398.26,
        80: 307.49
    },
    'pcx-abs': {
        12: 0,
        24: 1042.96,
        36: 709.09,
        48: 538.24,
        60: 436.98,
        80: 337.38
    },
    'adv': {
        12: 0,
        24: 1294.85,
        36: 880.35,
        48: 668.23,
        60: 542.51,
        80: 418.86
    },
    'start-160': {
        12: 1660.36,
        24: 839.90,
        36: 571.04,
        48: 402.44,
        60: 351.90,
        80: 271.69
    },
    'fan-160': {
        12: 1816.22,
        24: 818.74,
        36: 624.64,
        48: 474.13,
        60: 384.93,
        80: 297.19
    },
    'titan-160': {
        12: 1948.81,
        24: 987.81,
        36: 670.24,
        48: 508.74,
        60: 413.03,
        80: 318.89
    },
    'bross-160': {
        12: 0,
        24: 1074.88,
        36: 730.79,
        48: 554.75,
        60: 450.35,
        80: 347.70
    },
    'xre-190': {
        12: 0,
        24: 1158.24,
        36: 787.47,
        48: 597.73,
        60: 485.28,
        80: 374.77
    },
    'cb-300': {
        12: 0,
        24: 1245.41,
        36: 846.43,
        48: 642.71,
        60: 521.80,
        80: 402.87
    },
    'cb-300-abs': {
        12: 0,
        24: 1297.73,
        36: 882.31,
        48: 669.71,
        60: 543.72,
        80: 419.79
    },
    'tornado-300': {
        12: 0,
        24: 1535.23,
        36: 1043.78,
        48: 792.28,
        60: 643.22,
        80: 496.62
    },
    'xre-300': {
        12: 0,
        24: 1502.59,
        36: 1021.59,
        48: 775.43,
        60: 629.55,
        80: 486.06
    },
    'xre-300-adv': {
        12: 0,
        24: 1587.60,
        36: 1079.38,
        48: 819.30,
        60: 665.16,
        80: 513.56
    },
    'crf-250f': {
        12: 0,
        24: 1215.86,
        36: 826.64,
        48: 627.46,
        60: 509.41,
        80: 393.31
    },
    'cb-500f': {
        12: 0,
        24: 0,
        36: 0,
        48: 0,
        60: 0,
        80: 0
    },
    'cb-500x': {
        12: 0,
        24: 0,
        36: 0,
        48: 0,
        60: 0,
        80: 0
    },
    'cb-500r': {
        12: 0,
        24: 0,
        36: 0,
        48: 0,
        60: 0,
        80: 0
    },
    'cbr-650r': {
        12: 0,
        24: 0,
        36: 0,
        48: 0,
        60: 0,
        80: 0
    },
    'nc-750': {
        12: 0,
        24: 0,
        36: 0,
        48: 0,
        60: 0,
        80: 0
    },
    'cb-1000r': {
        12: 0,
        24: 0,
        36: 0,
        48: 0,
        60: 0,
        80: 0
    },
    'africa-twin': {
        12: 0,
        24: 0,
        36: 0,
        48: 0,
        60: 0,
        80: 0
    },
};

// Brazilian formater
function brformat(x) {
    return x.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
};

// definindo as váriaveis de input
const form = document.querySelector('form');
const modelSelect = document.querySelector('#model');
const monthSelect = document.querySelector('#months');
const lanceInput = document.querySelector('#lance');
const lanceOptionRadios = document.querySelectorAll('input[name="lance-option"]');

// definindo as váriaveis de elemtos do site
const totalValueElement = document.querySelector('#total-value');
const parcelValueElement = document.querySelector('#parcel-value');
const newParcelValueElement = document.querySelector('#new-value');
const percentageValueElement = document.querySelector('#percentage-value');
const restElement = document.querySelector('#rest');
const lastParcelsElement = document.querySelector('#last-parcels');

// definindo as váriaveis de valores
let parcelValue = 0;
let selectedMonths = 0;
let totalValue = 0;



// Atualiza os valores totais e das parcelas quando o usuário seleciona uma nova quantidade de meses
monthSelect.addEventListener('change', () => {
    const selectedModel = modelSelect.value;
    selectedMonths = parseInt(monthSelect.value);
    parcelValue = models[selectedModel][selectedMonths];
    totalValue = parcelValue * selectedMonths;
    totalValueElement.textContent = `Total: R$ ${brformat(totalValue)}`;
    parcelValueElement.textContent = `Parcela: R$ ${brformat(parcelValue)}`;
    percentageValueElement.textContent = `Porcentagem do lance: 0%`;

});

// Manipula o envio do formulário
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const lanceValue = parseFloat(lanceInput.value);
    let lanceOption = '';

    // Verifica qual opção de lance foi selecionada
    lanceOptionRadios.forEach((radio) => {
        if (radio.checked) {
            lanceOption = radio.value;
        }
    });

    // Reduzir o valor das parcelas
    if (lanceOption === 'reduce-parcel') {
        // restante a pagar
        const rest = totalValue - lanceValue;
        restElement.textContent = `Restante: R$ ${brformat(rest)}`;

        // Porcentagem do lance em relação ao plano sem seguro
        const percentageValue = (lanceValue / totalValue) * 100;
        percentageValueElement.textContent = `Porcentagem do lance: ${percentageValue.toFixed(2)}%`;

        // Lance menor que 30%
        if (percentageValue < 30){
            // Novo valor da parcela
            const newParcelValue = parcelValue - (lanceValue / selectedMonths);
            newParcelValueElement.textContent = `Nova parcela: R$ ${brformat(newParcelValue)}`;

            // parcelas restantes
            lastParcelsElement.textContent = `Parcelas restantes: ${selectedMonths}`;
        }

        // Lance maior que 30%
        else {
            // nova parcela
            const newParcelValue = parcelValue * 0.70;
            newParcelValueElement.textContent = `Nova parcela: R$ ${brformat(newParcelValue)}`;

            // Redução do valor do lance
            let newLastParcels =  selectedMonths - (selectedMonths * ((percentageValue-30)/100));
            lastParcelsElement.textContent = `Parcelas restantes: ${newLastParcels.toFixed(2)}`

        }
    }// Pagar as últimas parcelas
    else if (lanceOption === 'pay-last-parcels') {
        // Porcentagem do lance em relação ao plano sem seguro
        const percentageValue = (lanceValue / totalValue) * 100;
        percentageValueElement.textContent = `Porcentagem do lance: ${percentageValue.toFixed(2)}%`;

        // Novo valor de parcela
        const newParcelValue = parcelValue;
        newParcelValueElement.textContent = `Nova parcela: R$ ${brformat(newParcelValue)}`;

        // Parcelas restantes
        const lastParcels = selectedMonths - (lanceValue / parcelValue);
        lastParcelsElement.textContent = `Parcelas restantes: ${lastParcels.toFixed(2)}`;

        // restante a pagar
        const rest = totalValue - lanceValue;
        restElement.textContent = `Restante: R$ ${brformat(rest)}`;
    }
});
