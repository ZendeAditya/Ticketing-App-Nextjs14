import React from 'react';
import DeleteBlock from './DeleteBlock';
import PriorityDisplay from './PriorityDisplay';
import ProgressDisplay from './ProgressDisplay';
import StatusDisplay from './StatusDisplay';

const TicketCard = () => {
    return (
        <>
            <section className='flex flex-col bg-gray-400 hover:bg-gray-300 rounded-md shadow-lg p-3 m-2'>
                <div className='flex mb-3'>
                    <PriorityDisplay />
                    <div className='ml-auto'>
                        <DeleteBlock />
                    </div>
                </div>
                <h4>Ticket Title</h4>
                <hr className="h-px border-0 bg-gray-400 mb-2" />
                <p className="whitespace-pre-wrap">This is ticket description</p>
                <div className="flex-grow"></div>
                <div className='flex mt-2'>
                    <div className='flex flex-col'>
                        <p className='text-xs my-1'>01/01/23 10:50PM</p>
                        <ProgressDisplay />
                    </div>
                    <div className='ml-auto flex items-end'>
                        <StatusDisplay />
                    </div>
                </div>
            </section>
        </>
    );
}

export default TicketCard;
