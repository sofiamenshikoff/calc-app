/*eslint no-eval: 0*/
// importacion
import React,  { useState } from 'react';
import words from 'lodash.words'
//Primero van los componentes en orden alfabetico
import Functions from './components/Functions'
import Numbers from './components/Numbers'
import MathOperations from './components/MathOperations'
import Result from './components/Result';
//Despues va el css
import './App.css';


//generacion de la funcion del componente
//Arrow funtion
const App = () => {
    //Array Ddestructuring
    //1er posicion: valor (que inicialmente es el valor por defecto)
    //2da posicion: funcion que me va a permitir modificar el valor por defecto (establece los nuevos valores de "texto")
    //const [texto, funcionModificaTexto] = useState("")
    const [stack, setStack] = useState("")
    const [result, setResult] = useState(value)
    const items = words(stack, /[^-^+^*^/]+/g)

    //Lo que ejecuta la funcion
    console.log("Renderiazacion de App", items)
    console.log("soy stack: ", stack)
    //Es similar a un if
    //esVerdadero ? (resultadoPorVerdadero) : (resultadoPorFalso)
    const value = items.length > 0 ? items[items.length-1] : "0";


    return (<main className='calculator'>
        <Result value={value} memory={stack}/>
        <Numbers onClickNumber={number => {
            console.log("Click en Numbers:", number)
            setStack(`${stack}${number}`)
            }}
        />
        <Functions 
            onContentClear = {() => {
                console.log('Content clear')
                setStack('')

            }}
            onDelete = {() => {
                if (stack.length > 0) {
                    const newStack = stack.substring(0, stack.length-1)
                    console.log('onDelete', newStack)
                    setStack(newStack)
                } 
            }}  
        />
        <MathOperations 
            onClickOperation = {operation => {
                console.log('Operation:', operation)
                setStack(`${stack}${operation}`)
            }}
            onClickEqual = {equal => {
                console.log('Equal:', equal)
                setStack(eval(stack).toString())
            }}
        />
    </main>)
}

//exportacion
//Cuando uso default es que hay un solo archivo
export default App