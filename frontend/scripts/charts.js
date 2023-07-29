const income = document.getElementById('income');
const expenses = document.getElementById('expenses');

new Chart(income, {
    type: 'pie',
    data: {
        labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
        datasets: [{
            label: 'Доходы',
            backgroundColor: [
                '#DC3545',
                '#FD7E14',
                '#FFC107',
                '#20C997',
                '#0D6EFD',
            ],
            data: [12, 19, 3, 5, 2],
            borderWidth: 1
        }]
    },
    options: {

    }
});

new Chart(expenses, {
    type: 'pie',
    data: {
        labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
        datasets: [{
            label: 'расходы',
            backgroundColor: [
                '#DC3545',
                '#FD7E14',
                '#FFC107',
                '#20C997',
                '#0D6EFD',
            ],
            data: [12, 19, 3, 5, 2],
            borderWidth: 1
        }]
    },
    options: {

    }
});