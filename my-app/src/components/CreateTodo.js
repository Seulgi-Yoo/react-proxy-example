const CreateTodo = ({ onChangeForm, handleSubmit }) => {
  return (
    <div className="form-wrapper">
      <div className="form">
        <form>
          <div className="input-group">
            <label>Todo</label>
            <input
              type="text"
              onChange={(e) => onChangeForm(e)}
              name="todo"
              placeholder="todo"
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
            <label>isComplete</label>
            <select
              onChange={(e) => onChangeForm(e)}
              name="isComplete"
              placeholder="isComplete"
              required
            >
              <option value="">----선택하세요----</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <button className="submit-button" onClick={() => handleSubmit()}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateTodo;
