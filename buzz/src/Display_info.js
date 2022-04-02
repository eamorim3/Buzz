import Info from "./Info";

export default function Display_info({ info, onDelete}) {
  return (
    <>
        {info.map((singleInfo) => (<Info info={singleInfo} onDelete={onDelete}/>))}   
    </>
  )
}
