import { FlatList } from "react-native";
import ExpenseItem from "./ExpenseItem";

function renderExpenseitem(itemData) {
    console.log(itemData);
    return (
        <ExpenseItem description={itemData.item.description } date={ itemData.item.date} amount={ itemData.item.amount} />
    )
}
const ExpensesList = (props)=>{
    return (
        <FlatList
            data={props.expenses}
            renderItem={renderExpenseitem}
            keyExtractor={(item) => item.id}
        />
    )
};

export default ExpensesList;