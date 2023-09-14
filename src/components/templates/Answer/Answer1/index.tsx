import React from 'react';
import AnswerCard from '../AnswerCard';
import { ITemplateFunction, ITemplatePlaceholder } from '../../../../redux/TemplatesReducer/types';

interface IAnswer {
  id: number;
  description: string;
  text: string;
}

const AnswerList: IAnswer[] = [
  {
    id: 1,
    description: "$AnswerListDesc1$",
    text: `$AnswerListText1$`,
  },
  {
    id: 2,
    description: "$AnswerListDesc2$",
    text: `$AnswerListText2$`,
  },
  {
    id: 3,
    description: "$AnswerListDesc3$",
    text: `$AnswerListText3$`,
  },
  {
    id: 4,
    description: "$AnswerListDesc4$",
    text: `$AnswerListText4$`,
  },
  {
    id: 5,
    description: "$AnswerListDesc5$",
    text: `$AnswerListText5$`,
  },
  {
    id: 6,
    description: "$AnswerListDesc6$",
    text: `$AnswerListText6$`,
  },
  {
    id: 7,
    description: "$AnswerListDesc7$",
    text: `$AnswerListText7$`,
  },
]

const Layout = () => {
  const [open, setOpen] = React.useState<number | null>(null);

  const handleClick = (id: number) => {
    setOpen(prev => (prev === id ? null : id));
  };

  return (
    <section className="flex items-center justify-between flex-col lg:flex-row gap-[20px] sm:gap-[70px] py-[30px] sm:pt-[40px] sm:pb-[60px] bg-[#F4F4F5]">
      <div className="h-[200px] sm:h-[400px] lg:h-[auto] w-[100%] lg:w-[90%]">
        <img className="w-[100%] h-[100%] cursor-pointer object-cover lg:rounded-se-[160px] lg:rounded-es-[160px]" src="$AnswerImage$" alt="People" />
      </div>
      <div className="w-[90%] sm:w-[80%] m-[auto] lg:mr-[5%]">
        <h2 className="text-[#3838C7] text-[26px] sm:text-[48px] not-italic font-[600] leading-[44px] mb-[10px] sm:mb-[35px]">
          $AnswerTitle$
        </h2>
        {
          AnswerList.map(obj =>
            <AnswerCard.layout key={obj.id} {...obj} handleClick={handleClick} open={open} />
          )
        }
        <div className="text-center mt-[23px] sm:mt-[45px]">
          <button className="text-[#ffffff] text-[15px] sm:text-[20px] font-[600] leading-[24px] not-italic bg-[#78BB35] rounded-[50px] py-[10px] px-[80px] hover:bg-[#5B971E] transition duration-[0.3s] ease-in-out">
            $AnswerBtn$
          </button>
        </div>
      </div>
    </section>
  )
};

const placeholders: ITemplatePlaceholder[] = [
  {
    key: '$AnswerListDesc1$',
    value: 'Мы рядом на всем пути'
  },
  {
    key: '$AnswerListDesc2$',
    value: 'Организуем поступление в 60+ стран'
  },
  {
    key: '$AnswerListDesc3$',
    value: 'Работаем с топовыми государственными вузами'
  },
  {
    key: '$AnswerListDesc4$',
    value: 'Повышаем шансы почти до 100%'
  },
  {
    key: '$AnswerListDesc5$',
    value: 'Многолетний опыт'
  },
  {
    key: '$AnswerListDesc6$',
    value: 'Дополнительно подаем на стипендию'
  },
  {
    key: '$AnswerListDesc7$',
    value: 'Экономия времени и денег'
  },
  {
    key: '$AnswerListText1$',
    value: 'Мы помогаем студентам с 2013 года и уже прошли через все возможные сложности поступления. Мы знаем весь процесс изнутри: что ищут вузы в абитуриентах, куда и по какому вопросу обращаться и что делать в любой сложной ситуации.'
  },
  {
    key: '$AnswerListText2$',
    value: 'Мы помогаем студентам с 2013 года и уже прошли через всевозможные сложности поступления. Мы знаем весь процесс изнутри: что ищут вузы в абитуриентах, куда и по какому вопросу обращаться и что делать в любой сложной ситуации.'
  },
  {
    key: '$AnswerListText3$',
    value: 'Мы помогаем студентам с 2013 года и уже прошли через все возможные сложности поступления. Мы знаем весь процесс изнутри: что ищут вузы в абитуриентах, куда и по какому вопросу обращаться и что делать в любой сложной ситуации.'
  },
  {
    key: '$AnswerListText4$',
    value: 'Мы помогаем студентам с 2013 года и уже прошли через все возможные сложности поступления. Мы знаем весь процесс изнутри: что ищут вузы в абитуриентах, куда и по какому вопросу обращаться и что делать в любой сложной ситуации.'
  },
  {
    key: '$AnswerListText5$',
    value: 'Мы помогаем студентам с 2013 года и уже прошли через все возможные сложности поступления. Мы знаем весь процесс изнутри: что ищут вузы в абитуриентах, куда и по какому вопросу обращаться и что делать в любой сложной ситуации.'
  },
  {
    key: '$AnswerListText6$',
    value: 'Мы помогаем студентам с 2013 года и уже прошли через все возможные сложности поступления. Мы знаем весь процесс изнутри: что ищут вузы в абитуриентах, куда и по какому вопросу обращаться и что делать в любой сложной ситуации.'
  },
  {
    key: '$AnswerListText7$',
    value: 'Мы помогаем студентам с 2013 года и уже прошли через все возможные сложности поступления. Мы знаем весь процесс изнутри: что ищут вузы в абитуриентах, куда и по какому вопросу обращаться и что делать в любой сложной ситуации.'
  },
  {
    key: '$AnswerTitle$',
    value: 'Почему именно мы?'
  },
  {
    key: '$AnswerBtn$',
    value: 'Оставить заявку'
  },
  {
    key: '$AnswerImage$',
    type: 'image',
    value: 'https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/answer1.png'
  }
]

const functions: ITemplateFunction[] = []

export default {
  layout: <Layout />,
  placeholders,
  functions,
}