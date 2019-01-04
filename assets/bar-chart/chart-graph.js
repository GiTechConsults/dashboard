var barChartData = {
    labels: ["Adavi", "Ajaokuta", "Ankpa", "Bassa", "Dekina", "Ibaji", "Idah", "Igalamela-Odolu", "Ijumu", "Kabba/Bunu", "Koton Karfe", "Lokoja", "Mopa-Muro", "Ofu", "Ogori-Magongo", "Okehi", "Okene", "Olamaboro", "Omala", "Yagba East", "Yagba West"],
    datasets: [{
        label: 'Males',
        backgroundColor: window.chartColors.red,
        data: [80, 99, 86, 96, 123, 85, 100, 75, 88, 90, 123, 155, 100, 45, 70, 50, 100, 80, 65, 78, 30, 130]
    }, {
        label: 'Females',
        backgroundColor: window.chartColors.blue,
        data: [60, 99, 86, 96, 123, 85, 90, 75, 88, 90, 103, 155, 90, 45, 70, 50, 80, 89, 65, 78, 30, 130]
    }]

};
window.onload = function () {
    var ctx = document.getElementById('canvas').getContext('2d');
    window.myBar = new Chart(ctx, {
        type: 'bar',
        data: barChartData,
        options: {
            title: {
                display: true,
                text: 'YESSO STATISTICS'
            },
            tooltips: {
                mode: 'index',
                intersect: false
            },
            responsive: true,
            scales: {
                xAxes: [{
                    stacked: true,
                }],
                yAxes: [{
                    stacked: true
                }]
            }
        }
    });
};