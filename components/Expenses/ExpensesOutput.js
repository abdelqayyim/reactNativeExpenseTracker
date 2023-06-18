import { View, StyleSheet} from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../styles";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'A pair of Shoes',
        amount: 59.99,
        date: new Date("2023-06-17")
    },
    {
        id: 'e2',
        description: 'A pair of trousers',
        amount: 89.29,
        date: new Date('2023-08-17')
    },
    {
        id: 'e3',
        description: 'Some bananas',
        amount: 5.99,
        date: new Date('2023-07-17')
    },
    {
        id: 'e4',
        description: 'A book',
        amount: 15.99,
        date: new Date('2023-02-17')
    },
    {
        id: 'e5',
        description: 'Another book',
        amount: 15.99,
        date: new Date('2023-03-17')
    },
    {
        id: 'e6',
        description: 'A pair of Shoes',
        amount: 59.99,
        date: new Date("2023-06-17")
    },
    {
        id: 'e7',
        description: 'A pair of trousers',
        amount: 89.29,
        date: new Date('2023-08-17')
    },
    {
        id: 'e8',
        description: 'Some bananas',
        amount: 5.99,
        date: new Date('2023-07-17')
    },
    {
        id: 'e9',
        description: 'A book',
        amount: 15.99,
        date: new Date('2023-02-17')
    },
    {
        id: 'e10',
        description: 'Another book',
        amount: 15.99,
        date: new Date('2023-03-17')
    },
];

const ExpensesOutput = (props)=>{
    return (
        <View style={styles.container}>
            <ExpensesSummary expenses={ DUMMY_EXPENSES} periodName={props.expensesPeriod } />
            <ExpensesList expenses={ DUMMY_EXPENSES} />
        </View>
    )
};

export default ExpensesOutput;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        orizontalPadding: 24,
        paddingTop: 24,
        paddingBottom: 0,
        backgroundColor: GlobalStyles.colors.primary700
    }
});