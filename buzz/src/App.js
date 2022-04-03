import { useState } from "react";
import Display_info from "./Display_info";
import AddFormsButton from "./AddFormsButton";
import AddInfo from "./AddInfo";

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
  const addPrivateInfo = (newData) => {
    setPrivateInfo([...privateInfo, newData])
    setShowAddPrivateInfo(!showAddPrivateInfo)
  }
  const addPublicInfo = (newData) => {
    setPublicInfo([...publicInfo, newData])
    setShowAddPublicInfo(!showAddPublicInfo)
  }
  
  return (
    <div className='container'>
      
      <div className='AllInformation'>
        
        <h2>Your public information</h2>
        <Display_info info={publicInfo} onDelete={deletePublicInfo}/>
        <AddFormsButton
          onAdd={() => setShowAddPublicInfo(!showAddPublicInfo)}
          showAdd={showAddPublicInfo}
        />
        
       {showAddPublicInfo && <AddInfo onClick={addPublicInfo} />}

        <h2>Your private information</h2>
        <Display_info info={privateInfo} onDelete={deletePrivateInfo}/>
        <AddFormsButton
          onAdd={() => setShowAddPrivateInfo(!showAddPrivateInfo)}
          showAdd={showAddPrivateInfo}
        />
        
        {showAddPrivateInfo && <AddInfo onClick={addPrivateInfo} />}

      </div>  
    </div> 
  );
}

export default App;
