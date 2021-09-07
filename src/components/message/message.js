import './message_style.css'

const Messages = ({ textProps }) => {
    console.log(textProps, ' - input_text_props');
    console.log(textProps.length, ' - type');
    return (
        <div className={textProps.length>0 ? "good_input" : "bad_input"}>
            <h3>{textProps}</h3>
        </div>
    )
};

export default Messages;

