import { click } from '@testing-library/user-event/dist/click'
import css from './Todo.module.css'
import React from 'react';

class Todo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isEdit: false,
            todoValue: props.text
        }
        this.submit = this.submit.bind(this)
        // this.handleChange = this.handleChange.bind(this)
    }

    submit(e){
        e.preventDefault();
        this.props.onEdit(this.props.id, this.state.todoValue)
        this.setState ({isEdit: false})
        // this.setState ({isEdit: !this.state.isEdit})
    };
    
    handleChange(e){
        this.setState({todoValue: e.target.value})
    }

    render(){
        return (
            <div className={css.wrapper}>
                
            <div className="d-flex align-items-center justify-content-between">
            {
                    this.state.isEdit
                    ?<div>
                         <form onSubmit={this.submit} className="input-group">
                        <input 
                        value={this.state.todoValue}
                        onChange={(e) => this.handleChange(e)}
                        type="text" 
                        className="form-control" 
                        placeholder="Enter your todo" 
                        />
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>

                    </div>
                    : <div >
                        <input className="input" style={{ margin: "0px 5px 0px 5px" }}
                        type="checkbox"
                        checked={this.props.status}
                        onChange={() => this.props.changeStatus(this.props.id)}
                    />
                    <span className={this.props.status ? css.done : ""}>{this.props.text}</span>
                </div>
                }
                
               
                <div className="d-flex justify-content-end p-2">
                    <img className="note" style={{ width: "20px" }}
                    onClick={() => this.setState({isEdit: !this.state.isEdit})}
                        src={
                            this.props.ImgUrl
                                ? this.props.ImgUrl
                                : "https://www.pngfind.com/pngs/m/572-5721612_accounting-report-comments-notes-transparent-icon-hd-png.png"
    
                        }
                    />
                    <img
                        className="trash" style={{ width: "25px", }}
                        onClick={() => this.props.onDelete(this.props.id)}
                        src={
                            this.props.ImgUrl
                                ? this.props.ImgUrl
                                : "https://assets.webiconspng.com/uploads/2017/01/Red-Trash-Simple-Icon.png"
    
                        }
                    />
                    
                </div>
            </div>
        </div>    
        )
    }
}

export default Todo;

// export default function Todo(this.props) {
//     return (
//         <div className="d-flex align-items-center justify-content-between">

//             <div >
//                 <input className="input" style={{ margin: "0px 5px 0px 5px" }}
//                     type="checkbox"
//                     checked={this.props.status}
//                     onChange={() => this.props.changeStatus(this.props.id)}
//                 />
//                 <span className={this.props.status ? css.done : ""}>{this.props.text}</span>
//             </div>

//             <div className="d-flex justify-content-end p-2">
//                 <img className="note" style={{ width: "20px" }}
//                     // onChange={() => this.props.deleteItem(this.props.id)}
//                     src={
//                         this.props.ImgUrl
//                             ? this.props.ImgUrl
//                             : "https://www.pngfind.com/pngs/m/572-5721612_accounting-report-comments-notes-transparent-icon-hd-png.png"

//                     }
//                 />
//                 <img
//                     className="trash" style={{ width: "25px", }}
//                     // onClick={() => this.props.deleteElement(this.props.e)}
//                     onClick={() => this.props.onDelete(this.props.id)}
//                     src={
//                         this.props.ImgUrl
//                             ? this.props.ImgUrl
//                             : "https://assets.webiconspng.com/uploads/2017/01/Red-Trash-Simple-Icon.png"

//                     }
//                 />
                
//             </div>
//         </div>

//     )
// }



