window.onload = function () {

    document.getElementById('btn1').addEventListener('click', ex1_open);
    document.getElementById('btn2').addEventListener('click', ex1_close);
    document.getElementById('btn3').addEventListener('click', ex1_resizeTo);
    document.getElementById('btn4').addEventListener('click', ex1_moveTo);
    ex2_screenProperties();
    ex3_randomLink();

    let finestra;

    function ex1_open() {
        finestra = open('', '', 'width = 500px, height = 500px');
    }

    function ex1_close() {
        finestra.close();
    }

    function ex1_resizeTo() {
        finestra.resizeTo(screen.width - 100, screen.height - 100);
        finestra.focus();
    }

    function ex1_moveTo() {
        finestra.moveTo(50, 50, 50, 50);
        finestra.focus();
    }

    function ex2_screenProperties() {
        let res = `
        <ul>
            <li>AvailableHeight: ${screen.availHeight}</li>
            <li>AvailableWidth: ${screen.availWidth}</li>
            <li>height: ${screen.height}</li>
            <li>widht: ${screen.width}</li>
        </ul>`;

        document.getElementById('screenProp').innerHTML = res;
    }

    function ex3_randomLink() {
        let random = Math.floor(Math.random() * 3);
        let enlace = document.getElementById('randomLink');

        if (random === 0) {
            enlace.href = 'https://www.microsoft.com/es-es/microsoft-365/outlook/outlook-for-windows';
            enlace.target = '_blank';
        } else if (random === 1) {
            enlace.href = 'https://www.yahoo.com/';
            enlace.target = '_blank';
        } else {
            enlace.href = 'https://mail.google.com/';
            enlace.target = '_blank';
        }
    }

};
