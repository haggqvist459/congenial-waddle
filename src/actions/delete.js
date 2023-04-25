import { redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteItem, getAllMatchingItems } from "../helpers";

export default function deleteBudget({ params }) {

  try {
    //delete the budget
    deleteItem({
      key: "budgets",
      id: params.id
    })


    //find all the expenses associated with the deleted budget
    const budgetExpenses = getAllMatchingItems({
      category: "expenses",
      key: "budgetId",
      value: params.id,
    })
    
    //delete all the associated expenses 
    budgetExpenses.forEach((expense) => {
      deleteItem({
        key: "expenses",
        id: expense.id,
      });
    });

    toast.success("Successfully deleted budget")
  } catch (error) {
    throw new Error("Error deleting budget")
  }

  return redirect("/")
}
