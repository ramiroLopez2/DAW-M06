window.onload = function () {

    // Botons
    document.getElementById('ex1_btn').addEventListener('click', ex1_validarData);
    document.getElementById('ex2_btn').addEventListener('click', ex2_mostrarAvui);
    document.getElementById('ex3_btn').addEventListener('click', ex3_diferencia);
    document.getElementById('ex4_btn').addEventListener('click', ex4_diaSetmana);
    document.getElementById('ex5_btn').addEventListener('click', ex5_comparar);
    document.getElementById('ex6_btn').addEventListener('click', ex6_mostrarHora);
    document.getElementById('ex7_btn').addEventListener('click', ex7_comprovarTraspas);
    document.getElementById('ex8_btn').addEventListener('click', ex8_mostrarTraspas);

    // =============================
    // EX1: Validació de data (DD/MM/AAAA)
    // =============================
    function ex1_validarData() {

        let data = document.getElementById('ex1_data').value;
        let data1 = new Date(data);

        let vacio = "";

        if (data1 === vacio) {
            alert('Informa una fecha en formato DD/MM/AAAA');
            return;
        }

        if (validaData(data1)) {
            document.getElementById('resultado').innerHTML = 'Data correcta';
        } else {
            document.getElementById('resultado').innerHTML = 'Data incorrecta';
        }

        function validaData(data) {
            let arrayData = data.split('/');
            let dia = parseInt(arrayData[0]);
            let mes = parseInt(arrayData[1]);
            let any = parseInt(arrayData[2]);
            let objecteData = new Date(any, mes - 1, dia); //El mes comença per 0 (Gener)
            if (objecteData.getFullYear() === any && objecteData.getMonth() === (mes - 1)
                && objecteData.getDate() === dia) {
                return true;
            } else {
                return false;
            }
        }
    }

    // =============================
    // EX2: Data actual
    // =============================
    function ex2_mostrarAvui() {

        const d = new Date;
        let text = d.toLocaleDateString('es-ES', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        })

        document.getElementById('ex2_out').innerHTML = text;
    }

    // =============================
    // EX3: Diferència de dies
    // =============================
    function ex3_diferencia() {

        let txtA = document.getElementById('ex3_a').value;
        let txtB = document.getElementById('ex3_b').value;

        let vacio = "";

        if (txtA === vacio || txtB === vacio) {
            document.getElementById('ex3_out').innerHTML = 'Porfavor, informa las dos fechas';
            return;
        }

        if (txtA > txtB) {
            document.getElementById('ex3_out').innerHTML = 'La fecha A debe de ser inferior a la B';
            return;
        }

        if (txtA === txtB) {
            document.getElementById('ex3_out').innerHTML = 'La fecha A es igual a la B, no hay diferencia de dias';
            return;
        }

        let dataA = new Date(txtA);
        let dataB = new Date(txtB);

        let restoMilisegundos = dataB - dataA;

        const minuto = 1000 * 60;
        const hora = minuto * 60;
        const dia = hora * 24;

        const diferenciaDias = Math.floor(restoMilisegundos / dia);

        document.getElementById('ex3_out').innerHTML = 'La diferencia de dias es: ' + diferenciaDias;
    }

    // =============================
    // EX4: Dia de la setmana
    // =============================
    function ex4_diaSetmana() {

        let fechatxt = document.getElementById('ex4_data').value;

        let vacio = '';

        if(fechatxt === vacio){
            document.getElementById('ex4_out').innerHTML = 'ingresa un fecha porfavor';
            return;
        }

        let fecha = new Date(fechatxt);

        const diaSemanaTexto = fecha.toLocaleDateString('es-ES', { weekday: 'long' });

        document.getElementById('ex4_out').innerHTML = 'Es el dia ' + diaSemanaTexto;
    }

    // =============================
    // EX5: Passat / Avui / Futur
    // =============================
    function ex5_comparar() {

        let fechatxt = document.getElementById('ex5_data').value;

        let vacio = '';

        if (fechatxt === vacio) {
            document.getElementById('ex5_out').innerHTML = 'por favor, introduzca una fecha.';
            return;
        }

        let fechaInput = new Date(fechatxt);
        fechaInput.setHours(0, 0, 0, 0);

        let hoy = new Date();
        hoy.setHours(0, 0, 0, 0);

        if (fechaInput < hoy) {
            document.getElementById('ex5_out').innerHTML = 'La fecha es pasada';
        } else if (fechaInput.getTime() === hoy.getTime()) {
            document.getElementById('ex5_out').innerHTML = 'La fecha es presente';
        } else if (fechaInput > hoy) {
            document.getElementById('ex5_out').innerHTML = 'La fecha es fututa';
        }
    }

    // =============================
    // EX6: Hora actual 24h / 12h
    // =============================
    function ex6_mostrarHora() {

        let valorSelect = document.getElementById('ex6_format');
        let selectedOption = valorSelect.value;

        console.log(selectedOption);

        if (selectedOption === '24') {
            let hora = new Date();

            document.getElementById('ex6_out').innerHTML = hora.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit', hour12: false });
        } else if (selectedOption === '12') {
            let horaAMPM = new Date();

            document.getElementById('ex6_out').innerHTML = horaAMPM.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
        }
    }

    // =============================
    // EX7: Any de traspàs
    // =============================
    function ex7_comprovarTraspas() {

        let label = document.getElementById('ex7_any').value;

        if (label === '') {
            document.getElementById('ex7_out').innerHTML = 'Por favor, introduce un año.';
            return;
        }

        let esAnyBis = new Date(label);

        esAnyBis = esAnyBis.getFullYear();

        console.log(esAnyBis);

        function esBisiesto(any) {
            return (any % 4 === 0 && any % 100 !== 0) || (any % 400 === 0);
        }

        if (esBisiesto(esAnyBis)) {
            document.getElementById('ex7_out').innerHTML = 'El año es bisiesto.';
        } else {
            document.getElementById('ex7_out').innerHTML = 'El año no es bisiesto.';
        }
    }

    // =============================
    // EX8: Comptador fins a Cap d'Any
    // =============================
    function ex8_mostrarTraspas() {

        const finDelMundo = new Date('2026-12-31T23:59:59').getTime();

        function cuentaAtras() {
            const now = new Date().getTime();
            const distance = finDelMundo - now;

            if (distance < 0) {
                document.getElementById('ex8_out').innerHTML = '¡Feliz Año Nuevo!';
                clearInterval(timer);
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById('ex8_out').innerHTML =
                days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's';
        }

        cuentaAtras(); // Llamada inicial para mostrar el tiempo restante inmediatamente
        const timer = setInterval(cuentaAtras, 1000);
    }
};