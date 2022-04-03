import Info from "./Info";

export default function Display_info({ info, onDelete}) {
    console.log('hello')
    console.log(info)
    console.log(info.map((singleInfo) => singleInfo))
    return (
    <>
        {info.map((singleInfo) => (<Info info={singleInfo} onDelete={onDelete}/>))}   
    </>
  )
}
