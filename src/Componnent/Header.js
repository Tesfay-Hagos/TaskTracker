import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title,onAdd,showAddTask}) => {
  return (
    <header className ='header'>
    <h1>{title}</h1>
    <Button color={showAddTask ? 'red': 'green'} text={showAddTask? 'Close' : 'Add'} onClick={onAdd}/>

    </header>
  )
}
Header.defaultProps = {
    title: 'Task Tracker',
}
Header.prototype={
    title: PropTypes.string.isRequired
}
// css in js
// const headingStyle ={
//   color:'red',
//   backgroundColor:'black',showAddTask
// }
export default Header
