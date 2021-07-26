const NotFound = ()=>{
    return(
        <div style={{minHeight:'21vw'}}>
            <h1 className='text-center my-5'>Page Not Found</h1>
            <div className="text-center">
            <input type='button' value='Go Home' className='btn btn-danger' onClick={
                e =>  window.location.href='/'
            } />
            </div>
        </div>
    )
}

export default NotFound