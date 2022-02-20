const EventComponent:React.FC= () => {

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        console.log(e)
    }

    const handleDragStart = (e:React.DragEvent<HTMLDivElement>) =>{
        console.log(e);
    }

    return(
        <div>
            <input onChange={handleChange}/>
            <div draggable onDragStart={handleDragStart}>Drag me</div>
        </div>
    )

}
export default EventComponent