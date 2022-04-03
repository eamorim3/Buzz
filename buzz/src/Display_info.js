import Info from "./Info";

export default function Display_info({ info, onDelete}) {
    return (
    <div className='wrapper'>
        {info.length > 0 ? info.map((singleInfo) => (<Info info={singleInfo} onDelete={onDelete}/>)) : 'No info available'}   
    </div>
  )
}
