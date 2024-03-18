import './Form.css';
function Form() {
    return (
        <form className="form-container">
            <label className="form-label">Name : </label>
            <input className="form-input" type="text" name="name"></input>
            
            <label className="form-label">Email : </label>
            <input className="form-input" type="email" name="email"></input>

            <label className="form-label">Message : </label>
            <textarea className="form-textarea" name="message"></textarea>
            
            <button className="form-submit-button" type="submit">Submit</button>
        </form>
    )
}

export default Form;