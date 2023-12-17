import React from 'react';
import DeleteBlock from './DeleteBlock';
import PriorityDisplay from './PriorityDisplay';
import ProgressDisplay from './ProgressDisplay';
import StatusDisplay from './StatusDisplay';
import Link from 'next/link';
const TicketCard = ({ ticket }) => {
    const formatTimeStamp = (timestamp) => {
        const options = {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            hours12: true
        };
        const date = new Date(timestamp);
        const formattedDate = date.toLocaleString("en-US", options);
        return formattedDate;
    }
    return (
        <>
            <section className='flex flex-col bg-gray-400 hover:bg-gray-300 rounded-md shadow-lg p-3 m-2'>
                <div className='flex mb-3'>
                    <PriorityDisplay priority={ticket.priority} />
                    <div className='ml-auto'>
                        <DeleteBlock id={ticket._id} />
                    </div>
                </div>
                <Link href={`/TicketApp/${ticket._id}`} style={{ display: "contents" }}>
                    <h4>{ticket.title}</h4>
                    <hr className="h-px border-0 bg-gray-400 mb-2" />
                    <p className="whitespace-pre-wrap">{ticket.description}</p>
                    <div className="flex-grow"></div>
                    <div className='flex mt-2'>
                        <div className='flex flex-col'>
                            <p className='text-xs my-1'>{formatTimeStamp(ticket.createdAt)}</p>
                            <ProgressDisplay progress={ticket.progress} />
                        </div>
                        <div className='ml-auto flex items-end'>
                            <StatusDisplay status={ticket.status} />
                        </div>
                    </div>
                </Link>
            </section>
        </>
    );
}

export default TicketCard;
