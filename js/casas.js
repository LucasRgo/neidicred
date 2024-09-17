document.addEventListener("DOMContentLoaded", function() {
    const planoNormal = {
        200000: {
            180: 1483.89,
            160: 1644.24
        },
        220000: {
            180: 1632.28,
            160: 1808.66
        },
        250000: {
            180: 1854.86,
            160: 2055.30
        },
        260000: {
            180: 1929.06,
            160: 2137.51
        },
        280000: {
            180: 2077.44,
            160: 2301.94
        },
        300000: {
            180: 2225.83,
            160: 2466.36
        },
        320000: {
            180: 2374.22,
            160: 2630.78
        },
        340000: {
            180: 2522.61,
            160: 2795.21
        },
        360000: {
            180: 2671.00,
            160: 2959.63
        },
        380000: {
            180: 2819.39,
            160: 3124.06
        },
        400000: {
            180: 2967.78,
            160: 3288.48
        }
    };

    const plano70 = {
        200000: {
            180: 1150.56,
            160: 1269.24
        },
        220000: {
            180: 1265.61,
            160: 1396.16
        },
        250000: {
            180: 1438.19,
            160: 1586.55
        },
        260000: {
            180: 1495.72,
            160: 1650.01
        },
        280000: {
            180: 1610.78,
            160: 1776.94
        },
        300000: {
            180: 1725.83,
            160: 1903.86
        },
        320000: {
            180: 1840.89,
            160: 2030.78
        },
        340000: {
            180: 1955.94,
            160: 2157.71
        },
        360000: {
            180: 2071.00,
            160: 2284.63
        },
        380000: {
            180: 2186.06,
            160: 2411.56
        },
        400000: {
            180: 2301.11,
            160: 2538.48
        }
    };

    const plano50 = {
        100000: {
            180: 741.94,
            160: 822.12,
            140: 925.34,
            120: 1054.28,
            100: 1240.41,
            80: 1519.84,
            60: 1960.40,
            40: 2867.94,
        },
        110000: {
            180: 816.13,
            160: 904.33,
            140: 1017.87,
            120: 1159.71,
            100: 1364.45,
            80: 1671.82,
            60: 2156.44,
            40: 3154.73,
        },
        120000: {
            180: 890.33,
            160: 986.54,
            140: 1110.41,
            120: 1265.14,
            100: 1488.49,
            80: 1823.81,
            60: 2352.48,
            40: 3441.53,
        },
        130000: {
            180: 964.52,
            160: 1068.76,
            140: 1202.94,
            120: 1370.56,
            100: 1612.53,
            80: 1975.79,
            60: 2548.52,
            40: 3728.32,
        },
        140000: {
            180: 1038.72,
            160: 1150.97,
            140: 1295.48,
            120: 1475.99,
            100: 1736.57,
            80: 2127.78,
            60: 2744.56,
            40: 4015.12,
        },
        150000: {
            180: 1112.91,
            160: 1233.18,
            140: 1388.01,
            120: 1581.42,
            100: 1860.61,
            80: 2279.76,
            60: 2940.60,
            40: 4301.91,
        },
        160000: {
            180: 1187.10,
            160: 1315.39,
            140: 1480.54,
            120: 1686.85,
            100: 1984.66,
            80: 2431.74,
            60: 3136.64,
            40: 4588.70,
        },
        170000: {
            180: 1261.30,
            160: 1397.60,
            140: 1573.08,
            120: 1792.28,
            100: 2108.70,
            80: 2583.73,
            60: 3332.68,
            40: 4875.50,
        },
        180000: {
            180: 1335.49,
            160: 1479.82,
            140: 1665.61,
            120: 1897.70,
            100: 2232.74,
            80: 2735.71,
            60: 3528.72,
            40: 5162.29,
        },
        200000: {
            180: 928.33,
            160: 1019.24
        },
        220000: {
            180: 1021.17,
            160: 1121.16
        },
        250000: {
            180: 1160.42,
            160: 1274.05
        },
        260000: {
            180: 1206.83,
            160: 1325.01
        },
        280000: {
            180: 1299.67,
            160: 1426.94
        },
        300000: {
            180: 1392.50,
            160: 1528.86
        },
        320000: {
            180: 1485.33,
            160: 1630.78
        },
        340000: {
            180: 1578.17,
            160: 1732.71
        },
        360000: {
            180: 1671.00,
            160: 1834.63
        },
        380000: {
            180: 1763.83,
            160: 1936.56
        },
        400000: {
            180: 1856.67,
            160: 2038.48
        }
    };


    // Brazilian formater
    function brformat(x) {
        return x.toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    }

    // Function to update the month options
    function generateMonthOptions(plan, modelValue) {
        // Clear previous results
        monthsSelect.options.length = 0;
        // Add the normal inactive option
        const option = document.createElement('option');
        option.value = '';
        option.text = 'Selecione a quantidade de meses';
        option.disabled = true;
        option.selected = true;
        monthsSelect.add(option);
        // Updating the months for the plan that the user chose
        for (const months in plan[modelValue]) {
            const option = document.createElement('option');
            option.value = months;
            option.text = `${months} meses`;
            monthsSelect.add(option);
        }
    }

    // Function to update the UI
    function updateUI() {
        const plan = planoNormalRadio.checked ? planoNormal : plano70Radio.checked ? plano70 : plano50Radio.checked ? plano50 : '';
        const modelValue = parseFloat(modelSelect.value);
        if (plan === plano70) {
            cartaPercentageElement.innerText = `Porcentagem carta: 70%`;
        } else if (plan === plano50) {
            cartaPercentageElement.innerText = `Porcentagem carta: 50%`;
        } else {
            cartaPercentageElement.innerText = `Porcentagem carta: 100%`;
        }

        // Update HTML elements only if the user has changed the values
        if (modelSelect.value !== '') {
            if (plan === plano70) {
                document.getElementById('carta-value').innerText = `Valor carta: R$ ${brformat(modelValue * 0.7)}`;
            } else if (plan === plano50) {
                document.getElementById('carta-value').innerText = `Valor carta: R$ ${brformat(modelValue * 0.5)}`;
            } else {
                document.getElementById('carta-value').innerText = `Valor carta: R$ ${brformat(modelValue)}`;
            }
        }
        if (monthsSelect.value !== '') {
            const months = parseInt(monthsSelect.value);
            const monthInstallment = plan[modelValue][months];
            const totalValue = monthInstallment * months;
            calculatorData.totalValue = monthInstallment * months;
            calculatorData.monthInstallment = plan[modelValue][months];
            calculatorData.months = months;
            calculatorData.modelValue = modelValue;
            document.getElementById('total-value').innerText = `Total a pagar: R$ ${brformat(totalValue)}`;
            document.getElementById('parcel-value').innerText = `Parcela: R$ ${brformat(monthInstallment)}`;
        }
    }

    // Function to handle radio button change
    function handleRadioButtonChange() {
        const plan = planoNormalRadio.checked ? planoNormal : plano70Radio.checked ? plano70 : plano50Radio.checked ? plano50 : '';
        if (plan === plano70) {
            cartaPercentageElement.innerText = `Porcentagem carta: 70%`;
        } else if (plan === plano50) {
            cartaPercentageElement.innerText = `Porcentagem carta: 50%`;
        } else {
            cartaPercentageElement.innerText = `Porcentagem carta: 100%`;
        }
        if (modelSelect.value) {
            generateMonthOptions(plan, modelSelect.value);
            updateUI();
        }
    }

    // Defining the element variables
    const planoNormalRadio = document.getElementById('planoNormal');
    const plano70Radio = document.getElementById('plano70');
    const plano50Radio = document.getElementById('plano50');
    const monthsSelect = document.getElementById('months');
    const modelSelect = document.getElementById('model');
    const form = document.querySelector('form');
    const lanceTypeRadios = document.querySelectorAll('input[name="lance-option"]');
    const restElement = document.querySelector('#rest');
    const percentageValueElement = document.querySelector('#percentage-value');
    const lastParcelsElement = document.querySelector('#last-parcels');
    const newMonthInstallmentElement = document.querySelector('#new-value');
    const lanceInput = document.querySelector('#lance');
    const cartaPercentageElement = document.getElementById("carta-percentage");

    const calculatorData = {
        totalValue: 0,
        monthInstallment: 0,
        months: 0,
        modelValue: 0
    };

    let currentPlan;

    // Event listeners
    planoNormalRadio.addEventListener('change', handleRadioButtonChange);
    plano70Radio.addEventListener('change', handleRadioButtonChange);
    plano50Radio.addEventListener('change', handleRadioButtonChange);

    modelSelect.addEventListener('change', () => {
        const plan = planoNormalRadio.checked ? planoNormal : plano70Radio.checked ? plano70 : plano50Radio.checked ? plano50 : '';
        generateMonthOptions(plan, modelSelect.value);
        currentPlan = plan;
        updateUI();
    });

    monthsSelect.addEventListener('change', updateUI);

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const lanceValue = parseFloat(lanceInput.value);
        let lanceType = '';

        // Verifica qual opção de lance foi selecionada
        lanceTypeRadios.forEach((radio) => {
            if (radio.checked) {
                lanceType = radio.value;
            }
        });

        const totalValue = calculatorData.totalValue;
        const monthInstallment = calculatorData.monthInstallment;
        const months = calculatorData.months;
        const modelValue = calculatorData.modelValue;

        // Reduzir o valor das parcelas
        if (lanceType === 'reduce-parcel') {
            // Restante a pagar
            const rest = totalValue - lanceValue;
            restElement.textContent = `Restante: R$ ${brformat(rest)}`;

            if (currentPlan === plano70) {
                // Porcentagem do lance em relação ao plano sem seguro
                const percentageValue = 30 + ((lanceValue / modelValue) * 100);
                percentageValueElement.textContent = `Porcentagem do lance: ${percentageValue.toFixed(2)}% (30% de lance embutido)`;
            } else if (currentPlan === plano50) {
                const percentageValue = 50 + ((lanceValue / modelValue) * 100);
                percentageValueElement.textContent = `Porcentagem do lance: ${percentageValue.toFixed(2)}% (50% de lance embutido)`;
            } else {
                // Porcentagem do lance em relação ao plano sem seguro
                const percentageValue = (lanceValue / modelValue) * 100;
                percentageValueElement.textContent = `Porcentagem do lance: ${percentageValue.toFixed(2)}%`;
            }

            // Novo valor da parcela
            const newMonthInstallment = monthInstallment - (lanceValue / months);
            newMonthInstallmentElement.textContent = `Nova parcela: R$ ${brformat(newMonthInstallment)}`;
            // Parcelas restantes
            lastParcelsElement.textContent = `Parcelas restantes: ${months}`;
        }
        // Pagar as últimas parcelas
        else if (lanceType === 'pay-last-parcels') {
            if (currentPlan === plano70) {
                // Porcentagem do lance em relação ao plano sem seguro
                const percentageValue = 30 + ((lanceValue / modelValue) * 100);
                percentageValueElement.textContent = `Porcentagem do lance: ${percentageValue.toFixed(2)}% (30% de lance embutido)`;
            } else if (currentPlan === plano50) {
                // Porcentagem do lance em relação ao plano sem seguro
                const percentageValue = 50 + ((lanceValue / modelValue) * 100);
                percentageValueElement.textContent = `Porcentagem do lance: ${percentageValue.toFixed(2)}% (50% de lance embutido)`;
            } else {
                // Porcentagem do lance em relação ao plano sem seguro
                const percentageValue = (lanceValue / modelValue) * 100;
                percentageValueElement.textContent = `Porcentagem do lance: ${percentageValue.toFixed(2)}%`;
            }

            // Novo valor de parcela
            const newParcelValue = monthInstallment;
            newMonthInstallmentElement.textContent = `Nova parcela: R$ ${brformat(newParcelValue)}`;

            // Parcelas restantes
            const lastParcels = months - (lanceValue / monthInstallment);
            lastParcelsElement.textContent = `Parcelas restantes: ${lastParcels.toFixed(2)}`;

            // Restante a pagar
            const rest = totalValue - lanceValue;
            restElement.textContent = `Restante: R$ ${brformat(rest)}`;
        }
    });
});
