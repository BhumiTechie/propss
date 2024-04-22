const Create = (props) =>{
	console.log(props)
	return <div className ='w-1/2 h-1/2 bg-red-200'>{props.children}</div>
};

export default Create