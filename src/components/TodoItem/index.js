// Write your code here
import './index.css'

const TodoItem = props => {
  const {itemDetails, deleteUser} = props
  const {id, title} = itemDetails
  const onDelete = () => {
    deleteUser(id)
  }
  return (
    <li className="container">
      <p className="p"> {title} </p>
      <button type="button" className="btn b" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
