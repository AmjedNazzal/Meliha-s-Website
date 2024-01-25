import QuestionsFilters from './filters'
import QuestionsList from './QuestionsList';

export default function Page() {
    return (
      <div className='flex w-[700px] items-start flex-col gap-[30px]'>
        <div className="flex h-[25px] items-start gap-[10px]">
            <QuestionsFilters />
        </div>
        <QuestionsList />
      </div>
    );
  }