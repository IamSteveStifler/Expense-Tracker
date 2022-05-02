import React, {useState} from "react";
import './App.css';
import Expenses from './components/Expenses/Expenses';
import ExpenseContainer from "./components/Form/ExpenseConainer";


const Items = [
    {
        date : new Date(Date.now()),
        category : "House Rent",
        amount :  2500,
    },

    {
        date : new Date(2022, 5, 12),
        category : "Food",
        amount :  3000,
    },
    {
        date : new Date(2022, 6, 15),
        category : "Mobile EMI",
        amount :  2268,
    },
    {
        date : new Date(2022, 7, 10),
        category : "Shopping",
        amount :  "5000",
    }
]


const App = () =>{

    const [oldData, setnewData] = useState(Items);
    
    const dataHandler = (data) => {
        const newarr = [ data, ...oldData];
        // console.log(newarr);
        // Items = {...data};
        setnewData(newarr);
        // console.log(Items);
    }


    return(
        <div>
            <div className="h1-design"><h1>My Expense Tracker </h1></div>
            

            <ExpenseContainer driverHandler = {dataHandler} />
            
            <Expenses item = {oldData} />
        </div>
        
    );
}
export default App;