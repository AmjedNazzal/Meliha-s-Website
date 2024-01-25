import * as Profile from "@/app/ui/dashboard/profile";
import { ThreeDotsIcon, SeenIcon, CommentsIcon, UpvotesIcon } from "@/app/ui/dashboard/SVGIcons";

interface QuestionsBoxProps {
    questions: {
        id: number,
        userID: number,
        title: string;
        content: string;
        tags: string[];
        lastUpdated: number;
        stats: {
            seen: number,
            comments: number,
            upvotes: number
        };
    }
}

export default function QuestionBox({ questions }: QuestionsBoxProps) {
    return(
        <div style={{
            borderRadius: '5px',
            border: '1px solid var(--Border, #EAEAEA)',
            background: '#FFF',
            boxShadow: '2px 1px 5px 0px rgba(0, 0, 0, 0.15)',
          }}
           className="flex w-full px-[30px] py-[25px] items-start flex-col gap-[15px]"
        >
            <div className="flex w-full h-[40px] justify-between items-center">
                    <div className="flex justify-between items-center gap-[15px]">
                        <Profile.ProfilePic size={40} />
                        <div className="text-[14px]">
                            <Profile.UserName />
                            <p className="text-[11px] text-gray-400">{questions.lastUpdated} min ago</p>
                        </div>
                    </div>
                    <button>
                        <ThreeDotsIcon />
                    </button>  
            </div>
            <div className="flex flex-col w-full gap-[10px]">
                {/* Question Title */}
                <p style={{ letterSpacing: '0.7px' }} className="text-gray-900 text-[15px] font-bold">{questions.title}</p>
                
                {/* Question Snippet */}
                <p style={{ letterSpacing: '0.7px', lineHeight: '25px', fontWeight: '300' }} className="text-gray-900 text-[15px]">
                    {questions.content}
                </p>
            </div>
            
            <div className="flex justify-between items-center w-full">
                {/* Tags */}
                <div className="flex gap-[10px]">
                    {questions.tags.map((tag, index) => (
                        <div key={index} 
                            className='flex bg-gray-200 py-[5px] px-[10px] items-center'
                            style={{ borderRadius: '5px' }}
                        >
                            <p style={{ letterSpacing: '0.5px' }} className='flex items-center text-gray-500 leading-normal text-[10px]'>{tag}</p>
                        </div>
                    ))}
                </div>

                {/* Stats */}
                <div className="flex gap-[15px]">
                    
                    <div 
                        className='flex items-center gap-[3px]'
                    >
                        <SeenIcon />
                        <p style={{ letterSpacing: '0.39px' }} className='flex items-center text-gray-500 leading-normal text-[14px]'>{questions.stats.seen}</p>
                    </div>
                    <div 
                        className='flex items-center gap-[3px]'
                    >
                        <CommentsIcon />
                        <p style={{ letterSpacing: '0.39px' }} className='flex items-center text-gray-500 leading-normal text-[14px]'>{questions.stats.comments}</p>
                    </div>
                    <div 
                        className='flex items-center gap-[3px]'
                    >
                        <UpvotesIcon />
                        <p style={{ letterSpacing: '0.39px' }} className='flex items-center text-gray-500 leading-normal text-[14px]'>{questions.stats.upvotes}</p>
                    </div>
                </div>
            </div>

        </div>
    );
}