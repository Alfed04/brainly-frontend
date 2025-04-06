
import { useState } from 'react';
import Button from './components/Button'
import { Card } from './components/Card';
import { CreateContentModal } from './components/CreateContentModal';
import { PlusIcon } from './icons/PlusIcon';
import { ShareIcon } from './icons/ShareIcon';

function App() {
  const [ modalOpen , setModalOpen ] = useState(false)
  return (
    <div className='p-4'>
      <CreateContentModal open={modalOpen} onClose={()=>setModalOpen(false)}/>
      <div className='flex justify-end gap-4'>
      <Button onClick={()=>setModalOpen(true)} variant='primary' text='Add Content' startIcon={<PlusIcon/>}/>
      <Button variant='secondary' text='Share Brain' startIcon={<ShareIcon/>}/>
      </div>
      <div className='flex gap-4'>
      <Card title='Tweet' link='https://x.com/ALFEDkhan04/status/1908438637051519301'  type='twitter'/>
      <Card title='Data Structures Using C/C++' link='https://www.youtube.com/watch?v=B31LgI4Y4DQ'  type='youtube'/>
      </div>
    </div>
  )
}
export default App
