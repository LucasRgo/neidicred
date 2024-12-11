const models = {
    'pop-110': {
        12: 1106.13,
        18: 741.73,
        24: 559.54,
        36: 380.42,
        48: 288.76,
        60: 234.43,
        80: 181.00
    },
    'biz-125-es': {
        12: 1369.58,
        18: 918.39,
        24: 692.81,
        36: 471.03,
        48: 357.53,
        60: 290.27,
        80: 224.11
    },
    'biz-125-ex': {
        12: 1695.51,
        18: 1136.95,
        24: 857.69,
        36: 583.13,
        48: 442.62,
        60: 359.35,
        80: 277.44
    },
    'elite-125': {
        12: 1462.44,
        18: 980.66,
        24: 739.78,
        36: 502.97,
        48: 381.78,
        60: 309.95,
        80: 239.31
    },
    'pcx': {
        12: 2006.92,
        18: 1345.77,
        24: 1015.21,
        36: 690.22,
        48: 523.91,
        60: 425.35,
        80: 328.40
    },
    'pcx-abs': {
        12: 0,
        18: 0,
        24: 1114.04,
        36: 757.42,
        48: 574.92,
        60: 466.76,
        80: 360.37
    },
    'adv': {
        12: 0,
        18: 0,
        24: 1375.90,
        36: 935.45,
        48: 710.05,
        60: 576.47,
        80: 445.08
    },
    'start-160': {
        12: 1829.83,
        18: 1227.02,
        24: 925.63,
        36: 629.32,
        48: 477.68,
        60: 387.82,
        80: 299.42
    },
    'fan-160': {
        12: 1997.57,
        18: 1339.50,
        24: 1010.48,
        36: 687.01,
        48: 521.47,
        60: 423.37,
        80: 326.87
    },
    'titan-160': {
        12: 2143.37,
        18: 1437.27,
        24: 1084.23,
        36: 737.15,
        48: 559.54,
        60: 454.27,
        80: 350.73
    },
    'bross-160-cbs': {
        12: 0,
        18: 0,
        24: 1153.52,
        36: 784.26,
        48: 595.29,
        60: 483.29,
        80: 373.14
    },
    'bross-160-abs': {
        12: 0,
        18: 0,
        24: 1203.01,
        36: 817.91,
        48: 620.83,
        60: 504.03,
        80: 389.15
    },
    'xre-190': {
        12: 0,
        18: 0,
        24: 1225.57,
        36: 833.25,
        48: 632.47,
        60: 513.48,
        80: 396.45
    },
    'cb-300-twister': {
        12: 0,
        18: 0,
        24: 1313.51,
        36: 893.03,
        48: 677.86,
        60: 550.33,
        80: 424.89
    },
    'cb-300-twister-abs': {
        12: 0,
        18: 0,
        24: 1365.83,
        36: 928.60,
        48: 704.86,
        60: 572.25,
        80: 441.82
    },
    'tornado-300': {
        12: 0,
        18: 0,
        24: 1535.23,
        36: 1043.78,
        48: 792.28,
        60: 643.22,
        80: 496.62
    },
    'xre-300': {
        12: 0,
        18: 0,
        24: 1595.77,
        36: 1084.94,
        48: 823.52,
        60: 668.59,
        80: 516.20
    },
    'xre-300-adv': {
        12: 0,
        18: 0,
        24: 1650.25,
        36: 1121.98,
        48: 851.64,
        60: 691.41,
        80: 533.82
    },
    'crf-250f': {
        12: 0,
        18: 0,
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
        72: 736.68,
        80: 0
    },
    'cb-500x': {
        12: 0,
        24: 0,
        36: 0,
        48: 0,
        60: 0,
        72: 783.20,
        80: 0
    },
    'cb-650r': {
        12: 0,
        24: 0,
        36: 0,
        48: 0,
        60: 0,
        72: 999.75,
        80: 0
  
    },
    'nc-750x': {
        12: 0,
        24: 0,
        36: 0,
        48: 0,
        60: 0,
        72: 951.83,
        80: 0
    },
    'cb-1000r': {
        12: 0,
        24: 0,
        36: 0,
        48: 0,
        60: 0,
        72: 994.40,
        80: 0
    },
    'crf-1100l-africa-twin': {
        12: 0,
        24: 0,
        36: 0,
        48: 0,
        60: 0,
        72: 1022.36,
        80: 0
    }, 
    'trx-420': {
        12: 0,
        24: 0,
        36: 0,
        48: 0,
        60: 0,
        72: 887.15,
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
