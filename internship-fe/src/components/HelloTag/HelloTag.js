import './styles.css';

function HelloTag (props) {
    return <h2 className={'test'}>Hello {props.name} with age {props.age} {props.gender}!!</h2>
}

export default HelloTag;