
import React from "react";

class CreateTodo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            inputValue: "",
        }
        this.handleChange = this.handleChange.bind(this)
        this.submit = this.submit.bind(this)

    }


    handleChange(e){
        console.log(e.target.value);
        this.setState({inputValue: e.target.value})
    }

    submit(e){
        e.preventDefault();
        this.props.createTodo(this.state.inputValue);
        this.setState({inputValue: ""});
    }

        render(){
            return (
                <form onSubmit={this.submit} className="input-group">
                    <input 
                    value={this.state.inputValue}
                    onChange={this.handleChange}
                    type="text" 
                    className="form-control" 
                    placeholder="Enter your todo" 
                    />
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            ) 
        }
    }



export default CreateTodo;

 



