const CreateBook = ({ onChangeForm, handleSubmit }) => {


    return(
        <div className="form-wrapper">
            <div className="form">
                <form>
                    <div className="input-group">
                        <label>book</label>
                        <input 
                            type="text" 
                            onChange={(e) => onChangeForm(e)} 
                            name="book" 
                            placeholder="book" 
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label>category</label>
                        <input 
                            type="text" 
                            onChange={(e) => onChangeForm(e)} 
                            name="category" 
                            placeholder="category" 
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label>author</label>
                        <input 
                            type="text" 
                            onChange={(e) => onChangeForm(e)} 
                            name="author"
                            placeholder="author"
                            required 
                        />
                    </div>
                    <button 
                        className="submit-button"
                        onClick= {() => handleSubmit()}
                    >Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default CreateBook;