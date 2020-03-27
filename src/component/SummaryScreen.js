import React, {useRef} from "react";
import {useAppContext} from "../AppContext";
import {LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer} from 'recharts';


const data = [
    {
        name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
    },
    {
        name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
    },
    {
        name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
    },
    {
        name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
    },
    {
        name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
    },
    {
        name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
    },
    {
        name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
    },
];

export default function SummaryScreen() {
    const {getSession} = useAppContext();
    const sessions = useRef(getSession());
    const lastSession = sessions.current[sessions.current.length - 1];
    const correctAnswers = lastSession.sums.reduce((acc, sum) => {
        const total = sum.questions.reduce((acc, num) => acc + num, 0);
        return sum.answer === total ? ++acc : acc;
    }, 0);
    const percentage = Math.round((correctAnswers / lastSession.sums.length) * 100);
    return <div style={{fontSize: '1.5rem'}}>
        <div>You last session Score</div>
        <div style={{fontSize: '4rem'}}>{percentage} %</div>

    </div>
}