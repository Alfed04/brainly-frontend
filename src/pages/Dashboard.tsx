
import { useEffect, useState } from 'react';
import Button from '../components/Button'
import { Card } from '../components/Card';
import { CreateContentModal } from '../components/CreateContentModal';
import { PlusIcon } from '../icons/PlusIcon';
import { ShareIcon } from '../icons/ShareIcon';
import { Sidebar } from '../components/Sidebar';
import { useContent } from '../hooks/useContent';
import axios from 'axios';
import { BACKEND_URL } from '../config';

function Dashboard() {
  const [ modalOpen , setModalOpen ] = useState(false)
  const {contents,refresh} = useContent()
  useEffect(()=>{
    refresh()
  },[modalOpen])
  return (
    <div>
      <Sidebar/>
    <div className='p-4 ml-72 bg-gray-100 min-h-screen border-2 '>
      <CreateContentModal open={modalOpen} onClose={()=>setModalOpen(false)}/>
      <div className='flex justify-end gap-4 '>
      <Button onClick={()=>setModalOpen(true)} variant='primary' text='Add Content' startIcon={<PlusIcon/>}/>
      <Button onClick = {
        async ()=>{
            const response =  await axios.post(`${BACKEND_URL}/api/v1/brain/share`,{
                share:true
            },{
                headers:{
                    "token":localStorage.getItem('token')
                }
            })
            alert(`http://localhost:5173/share/${response.data.hash}`)
        }
      } variant='secondary' text='Share Brain' startIcon={<ShareIcon/>}/>
      </div>
      <div className='flex gap-4 flex-wrap pt-2'>

        {contents.map(({title,link,type})=><Card title={title} link={link} type={type} />)}
      {/* <Card title='Tweet' link='https://x.com/ALFEDkhan04/status/1908438637051519301'  type='twitter'/>
      <Card title='Data Structures Using C/C++' link='https://www.youtube.com/watch?v=B31LgI4Y4DQ'  type='youtube'/> */}
      </div>
    </div>
    </div>
  )
}
export default Dashboard
