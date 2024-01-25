import QuestionBox from "./questionBox";

export default function QuestionsList() {
    const question = {
        id: 1287472,
        userID: 921018373,
        title: "How to patch KDE on FreeBSD?",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat aliquet maecenas ut sit nulla",
        tags: ["golang", "linux", "overflow"],
        lastUpdated: 5,
        stats: {
            seen: 125,
            comments: 15,
            upvotes: 155
        }
    }
    return (
      <>
        {/* {filters.map((filter) => {
          return (   
              <button
                  key={filter.name}
                  className='flex bg-gray-200 h-full px-[10px] items-center gap-[5px]'
                  style={{ borderRadius: '100px' }}
              >
                  {filter.icon}
                  <p style={{ letterSpacing: '0.65px' }} className='text-[14px] text-gray-500'>{filter.name}</p>    
              </button>
          );
        })} */}
        <QuestionBox questions={question} />
      </>
    );
  }