import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    Filler,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
} from 'chart.js';
import '../styles/graphHomeScreenStyles.css';

ChartJS.register(
    CategoryScale,
    Filler,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
);

const students = [
    { name: 'Leonardo', years: 1 },
    { name: 'Salvador', years: 1 },
    { name: 'Fernanda', years: 2 },
    { name: 'Victor', years: 3 },
    { name: 'Emeterio', years: 4 },
    { name: 'Norma', years: 3 },
    { name: 'Naiely', years: 2 },
    { name: 'Juan', years: 1 },
    { name: 'Miguel', years: 1 },
];

const randomColor = students.map(() =>
    `rgba(${Math.random() * 255}, ${Math.random() * 155}, ${Math.random() * 0})`
);

const data = {
    labels: students.map(student => student.name),
    datasets: [
        {
            label: 'Edad',
            data: students.map(student => student.years),
            tension: 0.1,
            fill: true,
            pointRadius: 5,
            pointBorderColor: 'rgba(0,0,0)',
            pointBackgroundColor: randomColor,
        },
    ],
};

const options = {
    scales: {
        y: {
            min: 0
        },
        x: {
            ticks: { color: randomColor }
        }
    }
};

export const GraphHomeScreen = () => {
    return (
        <div className='container'>
            <div className='graph-title'>
                <h1>Guarderia "Papalote"</h1>
                <h3>Edades de alumnos del grupo "B"</h3>
            </div>
            <div className='graph-container'>
                <div className='graph-subContainer'>
                    <Line data={data} options={options} />
                </div>
                <div className='graph-subContainer'>
                    <h1>Información de la grafica</h1>
                    <p>
                        Esta gráfica representa los nombres y las edades del grupo "B" de la guardería "Papalote"
                        la cual nos ayuda con una representación gráfica a visualizar los distintos alumnos de este grupo
                    </p>
                </div>
            </div>
        </div>
    );
};
