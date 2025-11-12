import React, { use, useState } from 'react';
import { Suspense } from 'react';
import Cards from '../cards/Cards';
import Banner from '../banner/Banner';



const Container = () => {
    
    const [progressCount, setProgressCount] = useState(0);
    const [tasks, setTasks] = useState([]);
    const [resolveTasks, setResolveTasks] = useState([]);
    

    const cardsPromise = fetch('./tickets-data.json').then(res => res.json())
    // const cardData = use(cardsPromise);

    

  return (
    <section className=" bg-[hsl(0,0%,95%)] px-20 grid md:grid-cols-3 gap-6">
        <Suspense fallback={<h3>Cards is loading...</h3>}>
        <div className='col-span-2'>
            <h1 className='text-[#34485A] text-2xl'>Customer Tickets</h1>
            
            <Cards 
                cardsPromise={cardsPromise}
                progressCount={progressCount}
                setProgressCount={setProgressCount}
                setTasks={setTasks}
                tasks={tasks}
                resolveTasks ={resolveTasks}
                setResolveTasks = {setResolveTasks}
                 >
            </Cards>
            
        </div>
        <div>
            {/* Task SStatus */}
            <div>
                <h1 className='text-[#34485A] font-bold text-2xl ml-2'>Task Status</h1>
                <div className="space-y-5">
                    {tasks.length === 0 ? 
                            (<p className='text-[#627382] ml-2'>Select a ticket to add to Task Status</p> )
                            : (
                            tasks.map((task) => (
                                <div key={task.id} className="p-3 rounded-md shoadow-md bg-white">
                                    <h2 className="text-[18px] mb-2">{task.title}</h2>
                                    <button className="bg-green-500 text-white w-full rounded-md p-2"
                                    onClick={() => taskComplete(task.id)}>
                                        Complete</button>
                                </div>
                            ))
                         )
                   
                    }
                </div>
            </div>
            {/* Resolved Task */}
            <div>
                <h1 className='text-[#34485A] font-bold text-2xl ml-2 mt-4'>Resolved Task</h1>
                <div className="space-y-5">
                    {resolveTasks.length === 0 ? 
                            (<p className='text-[#627382] ml-2'>No resolved tasks yet.</p> )
                            : (
                            resolveTasks.map((task) => (
                                <div key={task.id} className="p-3 rounded-md shoadow-md bg-[#E0E7FF]">
                                    <h2 className="text-[18px] mb-2">{task.title}</h2>
                                </div>
                            ))
                         )
                   
                    }
                </div>
            </div>
        </div>
        </Suspense>
    </section>

  )
};

export default Container;


