import React from "react";
import logo from './logo.svg';
import './App.css';

const Text =({ style = {} }) => (
    <p style={{...style, frontFamily: "Inter"}}>Hello World!</p>

);
const StyledText = withStyles(Text);

function withStyles(component){
    return (props)=> {
        const style = {
            color: "red",
            fontSize: "2em",
            ...props.style,
        };
        return <Component {...props} style={style} />;
    };    

    }

    function Welcome({myName}){
        return(
            <section>
                <h1>Hello, <span>{myName}</span></h1>
            </section>
        )
    }
    export default function MyApp(){
        return (
            <div className='App'>
            <Welcome myName="ThiDK" />
            Text Component <Text/>
            StyledText Component <StyledText/>

            </div>
        );
}
