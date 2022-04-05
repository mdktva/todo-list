import css from './Todo.module.css'

export default function Todo(props) {
    return (
        <div className="d-flex align-items-center justify-content-between">
           
            <div >
                <input className="input"  style={{margin: "0px 5px 0px 5px"}} 
                type="checkbox" 
                checked={props.status} 
                onChange={()=>props.changeStatus(props.id)}
                />
                <span  className={props.status ? css.done : ""}>{props.text}
                
                </span>
            </div>

            <div className="d-flex justify-content-end p-2">
                <img className="imgs" style={{ width: "20px" }}
                    src={
                        props.ImgUrl
                            ? props.ImgUrl
                            : "https://www.pngfind.com/pngs/m/572-5721612_accounting-report-comments-notes-transparent-icon-hd-png.png"

                    }
                />
                <img className="imgs" style={{ width: "25px", }}
                    src={
                        props.ImgUrl
                            ? props.ImgUrl
                            : "https://assets.webiconspng.com/uploads/2017/01/Red-Trash-Simple-Icon.png"

                    }
                />
            </div>
        </div>

    )
}



