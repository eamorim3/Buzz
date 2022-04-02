import { useState } from "react";
import Display_info from "./Display_info";
import AddFormsButton from "./AddFormsButton";

function App() {
  const [publicInfo, setPublicInfo] = useState([
    {
      text: 'Daniel Salles',
      type: 'Name'
    },
    {
      text: 'dontspam@email.com',
      type: 'Email'
    }
  ])
  const [privateInfo, setPrivateInfo] = useState([
    {
      text: '07614638',
      type: 'Bank Account'
    },
    {
      text: 'aspla#-7^',
      type: 'Password'
    }
  ])

  const [showAddPrivateInfo, setShowAddPrivateInfo] = useState(false);
  const [showAddPublicInfo, setShowAddPublicInfo] = useState(false)

  const deletePublicInfo = (type) => {
    setPublicInfo(publicInfo.filter((pInfo) => pInfo.type !== type))
  }
  const deletePrivateInfo = (type) => {
    setPrivateInfo(privateInfo.filter((pInfo) => pInfo.type !== type))
  }
  const addPrivateInfo = (type, text) => {
    setPrivateInfo(privateInfo.push({text: type, type:text}))
  }
  const addPublicInfo = (type, text) => {
    setPublicInfo(publicInfo.push({text: type, type:text}))
  }
  
  return (
    <div className='container'>
      
      <div className='publicInformation'>
        
        <h2>Your public information</h2>
        <Display_info info={publicInfo} onDelete={deletePublicInfo}/>
        <AddFormsButton
          onAdd={() => setShowAddPublicInfo(!showAddPublicInfo)}
          showAdd={showAddPublicInfo}
        />
        <h2>Your private information</h2>
        <Display_info info={privateInfo} onDelete={deletePrivateInfo}/>
        <AddFormsButton
          onAdd={() => setShowAddPrivateInfo(!showAddPrivateInfo)}
          showAdd={showAddPrivateInfo}
        />
      </div>  
    </div> 
  );
}

export default App;
