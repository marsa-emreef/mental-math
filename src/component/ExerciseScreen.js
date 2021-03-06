import React, {useEffect, useRef, useState} from "react";
import styles from "../App.module.css";
import {useSound} from "./SoundContext";
import {useAppContext} from "../AppContext";
import {Cell, Pie, PieChart} from "recharts";
import moment from 'moment';

const NUMBER_TO_AVOID = [10,20,30,40,50,60,70,80,90,11,22,33,44,55,66,77,88,99];

function generateRandomNumber(result) {
    const total = result.reduce((ac, next) => ac + next, 0);
    const shouldBeNegative = Math.random() <= 0.3; // 40 percent chance;
    const nextCandidate = (Math.floor(Math.random() * 89) + 10) * (shouldBeNegative ? -1 : 1);

    if ( NUMBER_TO_AVOID.indexOf(Math.abs(nextCandidate)) < 0 && (total + nextCandidate) > 0 && Math.abs(result[result.length - 1]) !== Math.abs(nextCandidate)) {
        return nextCandidate;
    } else {
        return generateRandomNumber(result);
    }
}

function generateQuestionArray(totalQuestions) {
    const result = [];
    while (result.length < totalQuestions) {
        result.push(generateRandomNumber(result))
    }
    return result;
}

function setupQuestions(totalQuestions, totalSums) {
    const result = [];
    for (let i = 0; i < totalSums; i++) {
        result.push(generateQuestionArray(totalQuestions))
    }
    return result;
}

function handleSubmit({answer, setTimerRunning, setCurrentSum, setCurrentQuestion, setAnswers, timeLogger}) {
    setTimerRunning(false);
    setCurrentSum(val => val + 1);
    setCurrentQuestion(-1);
    const time = new Date().getTime() - timeLogger.current;
    setAnswers((val) => [...val, {answer, time}]);
}

function ClickToStart({studentName, setSessionRunning, numbers}) {
    const {markSessionBegin} = useAppContext();
    const {playSounds} = useSound();
    return <div style={{
        display: 'inline-block',
        margin: 'auto',
        marginTop: '2rem',
        padding: '1rem',
        background: 'rgba(0,0,0,0.5)'
    }}>
        <h1 style={{textAlign: 'center', marginBottom: '5rem'}}>{studentName}</h1>
        <div style={{textAlign: 'center'}}>
            <button className={styles.button} onClick={() => {
                markSessionBegin();
                setSessionRunning(true);
                playSounds(numbers);
            }}>Click To Begin Session
            </button>
        </div>
    </div>;
}

function AnswerForm({setTimerRunning, setCurrentQuestion, setCurrentSum, setAnswers, isTrial, currentSum, questionSet}) {
    const answerRef = useRef(null);
    const timeLogger = useRef(null);
    const {playSounds} = useSound();

    useEffect(() => {
        timeLogger.current = new Date().getTime();
        answerRef.current.focus();
    }, []);
    return <form style={{
        width: '100%', display: 'flex',
        flexDirection: 'column'
    }} action=""
                 onSubmit={(e) => {
                     e.preventDefault();
                     const answer = parseInt(e.target.elements.answer.value);
                     if (answer >= 0) {
                         handleSubmit({
                             answer,
                             setTimerRunning,
                             setCurrentQuestion,
                             setCurrentSum,
                             setAnswers,
                             timeLogger
                         });
                         playSounds(questionSet[currentSum + 1]);
                     }
                 }}>

        <div style={{
            display: 'flex',
            alignItems: 'center',
            marginTop: '1rem',
            marginBottom: '1rem'
        }}>
            <div style={{textAlign: 'left', fontSize: '2rem'}}>Answer :</div>
            <div style={{flexGrow: '1'}}></div>
            {!isTrial &&
            <button className={styles.button} type={'submit'}>Enter</button>
            }
        </div>
        <input ref={answerRef} className={styles.input} type={'number'} style={{marginBottom: '2rem', fontSize: '8rem'}}
               name={"answer"}/>
    </form>;
}

function QuestionPanel({questionSets, currentSum, currentQuestion}) {
    let question = 0;
    try{
        question = questionSets[currentSum][currentQuestion];
    }catch(error){
        console.error(error);
    }

    return <div style={{
        fontSize: '18rem',
        position: 'relative',
        margin: 'auto',
        maxWidth: '18rem',
        height: '18rem',
    }}>
        <div style={{
            background: 'rgba(0,0,0,0.5)',
            boxShadow: '0px 0px 80px 10px rgba(0,0,0,1)',
            borderRadius: '20rem', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'
        }}/>

        <div style={{
            position: 'relative',
            top: '-4rem',
            width: '100%',
            textAlign: 'center'
        }}>{question}</div>
    </div>;
}

const colors = ['rgba(255,255,255,1)', 'rgba(255,255,255,0.5)'];

function padZero(val) {
    return parseInt(val.toString()) <= 9 ? '0' + val : val;
}

export function ExerciseSession({isTrial,questions}) {
    const {config, saveSession, setPage, sessionTimer} = useAppContext();
    const {studentName, totalSums, totalQuestions, pauseBetweenQuestionInMs} = config;
    const [questionSets] = useState(() => {
        if(questions){
            return questions;
        }
        return setupQuestions(totalQuestions, totalSums);
    });

    const [timerRunning, setTimerRunning] = useState(false);
    const [sessionRunning, setSessionRunning] = useState(false);
    const [currentSum, setCurrentSum] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(-1);
    const [answers, setAnswers] = useState([]);


    useEffect(() => {
        let intervalId = null;
        if (sessionRunning) {
            if (timerRunning) {
                intervalId = setInterval(() => {
                    setCurrentQuestion((val) => {
                        if (val < totalQuestions) {
                            return val + 1
                        }
                        return val;
                    });
                }, pauseBetweenQuestionInMs);
            } else {
                setTimerRunning(true);
            }
        }
        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        }
    }, [timerRunning, sessionRunning, pauseBetweenQuestionInMs, totalQuestions]);

    useEffect(() => {
        if (currentSum === totalSums) {
            setSessionRunning(false);
            setTimerRunning(false);
            setCurrentQuestion(-1);
            setCurrentSum(0);
            if (!isTrial) {
                saveSession(questionSets, answers);
                setPage(2);
            }
            setAnswers([]);
        }
    }, [currentSum, totalSums, answers, questionSets, saveSession, setPage, isTrial]);
    const isLastQuestionInTheSum = currentQuestion === totalQuestions;
    const currentTotalQuestions = (currentSum * totalQuestions) + (currentQuestion === -1 ? 0 : currentQuestion);
    const grandTotalQuestions = totalSums * totalQuestions;
    const percentage = Math.round((currentTotalQuestions / grandTotalQuestions) * 100);
    const data = [
        {name: 'complete', value: percentage},
        {name: 'incomplete', value: 100 - percentage}
    ];

    const [currentClock, setCurrentClock] = useState('');

    const startTime = sessionTimer.current;
    useEffect(() => {
        const intervalId = setInterval(() => {
            if (startTime) {
                const timeDate = new Date().getTime() - startTime;
                const time = moment.duration(timeDate);
                setCurrentClock(`${time.hours()}:${padZero(time.minutes())}:${padZero(time.seconds())}`);
            }
        }, 1000);
        return () => {
            clearInterval(intervalId);
        }
    }, [startTime]);

    return (<div style={{maxWidth: '100%', display: 'flex', flexDirection: 'column'}}>
        <div style={{display: 'flex'}}>
            <div style={{flexGrow: '1'}}></div>
            <div style={{position: 'relative',marginTop:'-1rem',marginRight:'-1rem'}}>
                <PieChart width={100} height={100}>
                    <Pie animationDuration={100} data={data} dataKey="value" nameKey="name" cx="50%" cy="50%"
                         innerRadius={40} outerRadius={50} fill="#82ca9d">
                        {
                            data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index]} stroke={'none'}/>
                            ))
                        }
                    </Pie>
                </PieChart>
                <div style={{position: 'absolute', top: 40, width: '100%', textAlign: 'center'}}>{currentClock}</div>
            </div>
        </div>
        {!sessionRunning &&
        <ClickToStart studentName={studentName} setSessionRunning={setSessionRunning} numbers={questionSets[0]}/>}
        {sessionRunning && currentSum < totalSums && (
            <div style={{textAlign: 'center'}}>
                {timerRunning && <div>
                    {currentQuestion === -1 && <h1 style={{fontSize: '4rem'}}>Ready !</h1>}
                    {currentQuestion >= 0 && !isLastQuestionInTheSum &&
                    <QuestionPanel questionSets={questionSets} currentSum={currentSum}
                                   currentQuestion={currentQuestion}/>}
                    {isLastQuestionInTheSum &&
                    <AnswerForm setTimerRunning={setTimerRunning} setCurrentQuestion={setCurrentQuestion}
                                setCurrentSum={setCurrentSum} setAnswers={setAnswers} isTrial={isTrial}
                                currentSum={currentSum} questionSet={questionSets}
                    />
                    }
                </div>}
            </div>
        )}
    </div>)
}

export default function ExerciseScreen() {
    return <div style={{padding: '2rem', width: '100%'}}>
        <ExerciseSession isTrial={false}/>
    </div>;
}

export function ExerciseWeaknessScreen() {
    const {getWeakness,config} = useAppContext();
    const [weakness] = useState(getWeakness());
    let questions = weakness.map(w => w.questions);
    questions = questions.slice(0,config.totalSums);
    return <div style={{padding: '2rem', width: '100%'}}>
        <ExerciseSession isTrial={false} questions={questions}/>
    </div>;
}
