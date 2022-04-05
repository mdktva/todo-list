function Submit(props){
    console.log(props);
  return(
    <div className='submit'> 
    <input className='input1' type="text" name="happy" value="Enter todo here"></input>
    <input className='input2' type="submit" value="Submit"></input>
  </div>
  )
}
export default Submit;