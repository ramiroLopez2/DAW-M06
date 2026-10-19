window.onload = function () {


    // 1) Dau 1..6
    document.getElementById('btnDice').onclick = function () {

        let res = Math.floor(Math.random() * 7) + 1;

        document.getElementById('diceOut').innerHTML = res;
    };

    // 2) Cara o Creu
    document.getElementById('btnCoin').onclick = function () {

        let res = Math.round(Math.random());

        if (res === 0) {
            document.getElementById('coinOut').innerHTML = 'CARA';
        } else {
            document.getElementById('coinOut').innerHTML = 'CRUZ';
        }
    };

    // 3) Potències
    document.getElementById('btnPow').onclick = function () {
        const baseInput = document.getElementById('powBase');
        const exponenteInput = document.getElementById('powExp');

        let base = baseInput.valueAsNumber;
        let exponente = exponenteInput.valueAsNumber;

        let res = base ** exponente;

        document.getElementById('powOut').innerHTML = res;
    };

    // 3b) Arrels
    document.getElementById('btnSqrt').onclick = function () {

        const numeroInput = document.getElementById('sqrtNum');

        let arrelnum = numeroInput.valueAsNumber;
        let res = Math.sqrt(arrelnum);

        document.getElementById('sqrtOut').innerHTML = res;
    };

    // 4) Mínim i Màxim
    document.getElementById('btnMinMax').onclick = function () {

        const minmaxInputA = document.getElementById('minmaxA');
        const minmaxInputB = document.getElementById('minmaxB');
        const minmaxInputC = document.getElementById('minmaxC');

        let a = minmaxInputA.valueAsNumber;
        let b = minmaxInputB.valueAsNumber;
        let c = minmaxInputC.valueAsNumber;

        let resmin = Math.min(a, b, c);
        let resmax = Math.max(a, b, c);

        document.getElementById('minmaxOut').innerHTML = "min " + resmin;
        document.getElementById('minmaxOut').innerHTML += " - max " + resmax;
    };

};