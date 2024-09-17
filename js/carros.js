document.addEventListener("DOMContentLoaded", function() {
    // The plans
    const planoNormal = {
        25000: {
            92: 337.64,
            82: 374.19,
            72: 420.93,
            62: 482.76,
            52: 568.43
        },
        26000: {
            92: 351.15,
            82: 389.16,
            72: 437.76,
            62: 502.08,
            52: 591.16
        },
        28000: {
            92: 378.16,
            82: 419.10,
            72: 471.44,
            62: 540.70,
            52: 636.64
        },
        30000: {
            92: 405.17,
            82: 449.03,
            72: 505.11,
            62: 579.32,
            52: 682.11
        },
        32000: {
            92: 432.18,
            82: 478.97,
            72: 538.78,
            62: 617.94,
            52: 727.59
        },
        33000: {
            92: 445.69,
            82: 493.94,
            72: 555.62,
            62: 637.25,
            52: 750.32
        },
        35000: {
            92: 472.70,
            82: 523.87,
            72: 589.30,
            62: 675.87,
            52: 795.80
        },
        36000: {
            92: 486.21,
            82: 538.84,
            72: 606.13,
            62: 695.18,
            52: 818.53
        },
        38000: {
            92: 513.22,
            82: 568.77,
            72: 639.81,
            62: 733.80,
            52: 864.01
        },
        39000: {
            92: 526.72,
            82: 583.74,
            72: 656.64,
            62: 753.11,
            52: 886.75
        },
        42000: {
            92: 567.24,
            82: 628.65,
            72: 707.15,
            62: 811.04,
            52: 954.96
        },
        46000: {
            92: 621.26,
            82: 688.52,
            72: 774.50,
            62: 888.29,
            52: 1045.90
        },
        50000: {
            92: 675.29,
            82: 748.39,
            72: 841.85,
            62: 965.53,
            52: 1136.85
        },
        54000: {
            92: 729.31,
            82: 808.26,
            72: 909.20,
            62: 1042.77,
            52: 1227.80
        },
        57000: {
            92: 769.83,
            82: 853.16,
            72: 959.71,
            62: 1100.70,
            52: 1296.01
        },
        63000: {
            92: 850.86,
            82: 942.97,
            72: 1060.73,
            62: 1216.57,
            52: 1432.43
        },
        66000: {
            92: 891.38,
            82: 987.87,
            72: 1111.24,
            62: 1274.50,
            52: 1500.65
        },
        68000: {
            92: 918.39,
            82: 1017.81,
            72: 1144.92,
            62: 1313.12,
            52: 1546.12
        },
        70000: {
            92: 945.40,
            82: 1047.74,
            72: 1178.59,
            62: 1351.74,
            52: 1591.59
        },
        72000: {
            92: 972.41,
            82: 1077.68,
            72: 1212.27,
            62: 1390.36,
            52: 1637.07
        },
        75000: {
            92: 1012.93,
            82: 1122.58,
            72: 1262.78,
            62: 1448.29,
            52: 1705.28
        },
        76000: {
            112: 849.71,
            102: 925.53,
            92: 1017.87,
            82: 1127.97,
            62: 1455.04
        },
        79000: {
            112: 883.25,
            102: 962.07,
            92: 1058.05,
            82: 1172.50,
            62: 1512.47
        },
        82000: {
            112: 916.79,
            102: 998.60,
            92: 1098.23,
            82: 1217.02,
            62: 1569.91
        },
        85000: {
            112: 950.34,
            102: 1035.13,
            92: 1138.40,
            82: 1261.55,
            62: 1627.35
        },
        88000: {
            112: 983.88,
            102: 1071.67,
            92: 1178.58,
            82: 1306.08,
            62: 1684.78
        },
        94000: {
            112: 1050.96,
            102: 1144.74,
            92: 1258.94,
            82: 1395.13,
            62: 1799.65
        },
        100000: {
            112: 1118.04,
            102: 1217.81,
            92: 1339.30,
            82: 1484.18,
            62: 1914.53
        },
        108000: {
            112: 1207.49,
            102: 1315.23,
            92: 1446.44,
            82: 1602.91,
            62: 2067.69
        },
        114000: {
            112: 1274.57,
            102: 1388.30,
            92: 1526.80,
            82: 1691.96,
            62: 2182.56
        },
        118000: {
            112: 1319.29,
            102: 1437.01,
            92: 1580.37,
            82: 1751.33,
            62: 2259.14
        },
        120000: {
            112: 1341.65,
            102: 1461.37,
            92: 1607.16,
            82: 1781.01,
            62: 2297.43
        },
        130000: {
            112: 1453.45,
            102: 1583.15,
            92: 1741.09,
            82: 1929.43,
            62: 2488.88
        },
        140000: {
            112: 1565.26,
            102: 1704.93,
            92: 1875.02,
            82: 2077.85,
            62: 2680.34
        },
        144000: {
            112: 1609.98,
            102: 1753.64,
            92: 1928.59,
            82: 2137.21,
            62: 2756.92
        },
        150000: {
            112: 1677.06,
            102: 1826.71,
            92: 2008.95,
            82: 2226.26,
            62: 2871.79
        },
        151000: {
            113: 1653.43,
            103: 1798.87,
            93: 1967.20,
            83: 2185.68,
            73: 2453.44
        },
        160000: {
            113: 1751.98,
            103: 1906.08,
            93: 2084.45,
            83: 2315.95,
            73: 2599.67
        },
        170000: {
            113: 1861.48,
            103: 2025.21,
            93: 2214.73,
            83: 2460.70,
            73: 2762.15
        },
        180000: {
            113: 1970.98,
            103: 2144.34,
            93: 2345.01,
            83: 2605.45,
            73: 2924.63
        },
        190000: {
            113: 2080.48,
            103: 2263.47,
            93: 2475.29,
            83: 2750.19,
            73: 3087.11
        },
        200000: {
            113: 2189.98,
            103: 2382.60,
            93: 2605.57,
            83: 2894.94,
            73: 3249.58
        },
        210000: {
            113: 2299.47,
            103: 2501.73,
            93: 2735.84,
            83: 3039.69,
            73: 3412.06
        },
        218000: {
            113: 2387.07,
            103: 2597.04,
            93: 2840.07,
            83: 3155.49,
            73: 3542.05
        },
        226000: {
            113: 2474.67,
            103: 2692.34,
            93: 2944.29,
            83: 3271.28,
            73: 3672.03
        },
        232000: {
            113: 2540.37,
            103: 2763.82,
            93: 3022.46,
            83: 3358.13,
            73: 3769.52
        },
        250000: {
            113: 2737.47,
            103: 2978.25,
            93: 3256.96,
            83: 3618.68,
            73: 4061.98
        },
        260000: {
            113: 2846.97,
            103: 3097.38,
            93: 3387.24,
            83: 3763.42,
            73: 4224.46
        },
        270000: {
            113: 2956.47,
            103: 3216.51,
            93: 3517.51,
            83: 3908.17,
            73: 4386.94
        },
        280000: {
            113: 3065.97,
            103: 3335.64,
            93: 3647.79,
            83: 4052.92,
            73: 4549.42
        },
        290000: {
            113: 3175.46,
            103: 3454.77,
            93: 3778.07,
            83: 4197.66,
            73: 4711.90
        },
        302000: {
            113: 3306.86,
            103: 3597.73,
            93: 3934.41,
            83: 4371.36,
            73: 4906.87
        }
    };
    const plano70 = {
        25000: {
            84: 279.36,
            74: 312,
            64: 354.87,
            54: 413.65
        },
        26000: {
            84: 290.54,
            74: 324.48,
            64: 369.06,
            54: 430.19
        },
        30000: {
            84: 335.23,
            74: 374.40,
            64: 425.84,
            54: 496.38
        },
        32000: {
            84: 357.58,
            74: 399.36,
            64: 454.23,
            54: 529.47
        },
        33000: {
            84: 368.76,
            74: 411.84,
            64: 468.42,
            54: 546.02
        },
        35000: {
            84: 391.11,
            74: 436.80,
            64: 496.81,
            54: 579.11
        },
        36000: {
            84: 402.28,
            74: 449.28,
            64: 511.01,
            54: 595.65
        },
        38000: {
            84: 424.63,
            74: 474.24,
            64: 539.40,
            54: 628.75
        },
        39000: {
            84: 435.80,
            74: 486.72,
            64: 553.59,
            54: 645.29
        },
        42000: {
            84: 469.33,
            74: 524.16,
            64: 596.18,
            54: 694.93
        },
        46000: {
            84: 514.03,
            74: 574.08,
            64: 652.95,
            54: 761.11
        },
        50000: {
            84: 558.72,
            74: 624,
            64: 709.73,
            54: 827.30
        },
        54000: {
            84: 603.42,
            74: 673.92,
            64: 766.51,
            54: 893.48
        },
        57000: {
            84: 636.94,
            74: 711.36,
            64: 809.10,
            54: 943.12
        },
        63000: {
            84: 703.99,
            74: 786.24,
            64: 894.26,
            54: 1042.39
        },
        66000: {
            84: 737.51,
            74: 823.68,
            64: 936.85,
            54: 1092.03
        },
        68000: {
            84: 759.86,
            74: 848.64,
            64: 965.24,
            54: 1125.12
        },
        70000: {
            84: 782.21,
            74: 873.60,
            64: 993.63,
            54: 1158.22
        },
        72000: {
            84: 804.56,
            74: 898.56,
            64: 1022.02,
            54: 1191.31
        },
        75000: {
            84: 838.09,
            74: 936,
            64: 1064.60,
            54: 1240.95
        },
        76000: {
            94: 747.72,
            84: 823.07,
            74: 924.15,
            64: 1056.87
        },
        79000: {
            94: 777.24,
            84: 855.56,
            74: 960.63,
            64: 1098.59
        },
        82000: {
            94: 806.75,
            84: 888.05,
            74: 997.11,
            64: 1140.30
        },
        85000: {
            94: 836.27,
            84: 920.53,
            74: 1033.59,
            64: 1182.02
        },
        88000: {
            94: 865.78,
            84: 953.02,
            74: 1070.07,
            64: 1223.74
        },
        94000: {
            94: 924.81,
            84: 1018,
            74: 1143.03,
            64: 1307.18
        },
        100000: {
            94: 983.84,
            84: 1082.98,
            74: 1215.98,
            64: 1390.61
        },
        108000: {
            94: 1062.55,
            84: 1169.62,
            74: 1313.26,
            64: 1501.86
        },
        114000: {
            94: 1121.58,
            84: 1234.60,
            74: 1386.22,
            64: 1585.30
        },
        118000: {
            94: 1160.93,
            84: 1277.92,
            74: 1434.86,
            64: 1640.92
        },
        120000: {
            94: 1180.61,
            84: 1299.58,
            74: 1459.18,
            64: 1668.74
        },
        130000: {
            94: 1278.99,
            84: 1407.88,
            74: 1580.78,
            64: 1807.80
        },
        140000: {
            94: 1377.38,
            84: 1516.18,
            74: 1702.38,
            64: 1946.86
        },
        144000: {
            94: 1416.73,
            84: 1559.49,
            74: 1751.02,
            64: 2002.48
        },
        150000: {
            94: 1475.76,
            84: 1624.47,
            74: 1823.98,
            64: 2085.92
        },
        151000: {
            104: 1354.31,
            94: 1473.52,
            84: 1630.58,
            74: 1830.18
        },
        160000: {
            104: 1434.97,
            94: 1561.86,
            84: 1728.64,
            74: 1942.78
        },
        170000: {
            104: 1524.84,
            94: 1659.99,
            84: 1837.69,
            74: 2061.55
        },
        180000: {
            104: 1614.71,
            94: 1758.12,
            84: 1946.73,
            74: 2180.32
        },
        200000: {
            104: 1794.45,
            94: 1954.39,
            84: 2164.83,
            74: 2417.85
        },
        210000: {
            104: 1883.48,
            94: 2049.27,
            84: 2267.70,
            74: 2545.29
        },
        218000: {
            104: 1955.23,
            94: 2127.34,
            84: 2354.09,
            74: 2642.25
        },
        226000: {
            104: 2026.98,
            94: 2205.40,
            84: 2440.48,
            74: 2739.22
        },
        232000: {
            104: 2080.79,
            94: 2263.95,
            84: 2505.27,
            74: 2811.94
        },
        250000: {
            104: 2242.23,
            94: 2439.60,
            84: 2699.64,
            74: 3030.11
        },
        260000: {
            104: 2331.92,
            94: 2537.19,
            84: 2807.63,
            74: 3151.31
        },
        270000: {
            104: 2421.61,
            94: 2634.77,
            84: 2915.61,
            74: 3272.51
        },
        280000: {
            104: 2511.30,
            94: 2732.36,
            84: 3023.60,
            74: 3393.72
        },
        290000: {
            104: 2600.99,
            94: 2829.94,
            84: 3131.59,
            74: 3514.92
        },
        302000: {
            104: 2708.62,
            94: 2947.04,
            84: 3261.17,
            74: 3660.37
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
        const plan = planoNormalRadio.checked ? planoNormal : plano70;
        const modelValue = parseFloat(modelSelect.value);
        // Update HTML elements only if the user has changed the values
        if (modelSelect.value !== '') {
            document.getElementById('carta-value').innerText = `Valor carta: R$ ${brformat(modelValue * 0.7)}`;
        }
        if (monthsSelect.value !== '') {
            const months = parseInt(monthsSelect.value); // Use parseInt instead of parseFloat
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
        hideableElements.forEach((element) => {
            element.style.display = planoNormalRadio.checked ? 'none' : 'block';
        });
        if (modelSelect.value) {
            const plan = planoNormalRadio.checked ? planoNormal : plano70;
            generateMonthOptions(plan, modelSelect.value);
            updateUI();
        }
    }

    // Defining the element variables
    const planoNormalRadio = document.getElementById('planoNormal');
    const plano70Radio = document.getElementById('plano70');
    const monthsSelect = document.getElementById('months');
    const modelSelect = document.getElementById('model');
    const hideableElements = document.querySelectorAll('.hideable');
    const form = document.querySelector('form');
    const lanceTypeRadios = document.querySelectorAll('input[name="lance-option"]');
    const restElement = document.querySelector('#rest');
    const percentageValueElement = document.querySelector('#percentage-value');
    const lastParcelsElement = document.querySelector('#last-parcels');
    const newMonthInstallmentElement = document.querySelector('#new-value');
    const lanceInput = document.querySelector('#lance');


    const calculatorData = {
        totalValue: 0,
        monthInstallment: 0,
        months: 0,
        modelValue: 0
    };

    // Event listeners
    planoNormalRadio.addEventListener('change', handleRadioButtonChange);
    plano70Radio.addEventListener('change', handleRadioButtonChange);
    let currentPlan;

    modelSelect.addEventListener('change', () => {
        const plan = planoNormalRadio.checked ? planoNormal : plano70;
        generateMonthOptions(plan, modelSelect.value);
        currentPlan = plan;
        updateUI();
    });

    monthsSelect.addEventListener('change', updateUI);
    console.log(calculatorData);

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
            }
            else {
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
            }
            else {
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
