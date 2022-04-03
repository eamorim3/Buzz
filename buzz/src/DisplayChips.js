import Chip from "./Chip";

export default function DisplayChips({ info }) {
    return (
       
    <div className='chip-collection'>
        {info.length > 0 ? info.map((singleInfo) => (<Chip company={singleInfo.company} data={singleInfo.data}/>)) : 'No chips available!'}   
    </div>
  )
}
