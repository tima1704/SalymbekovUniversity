import React from 'react';
import { ITemplateFunction, ITemplatePlaceholder } from '../../../../redux/TemplatesReducer/types';
import AnswerCard from '../AnswerCard';

interface IAnswer {
  id: number;
  description: string;
  text: string;
}

const AnswerList: IAnswer[] = [
  {
    id: 1,
    description: "$Answer3ListDesc1$",
    text: `$Answer3ListText1$`,
  },
  {
    id: 2,
    description: "$Answer3ListDesc2$",
    text: `$Answer3ListText2$`,
  },
  {
    id: 3,
    description: "$Answer3ListDesc3$",
    text: `$Answer3ListText3$`,
  },
  {
    id: 4,
    description: "$Answer3ListDesc4$",
    text: `$Answer3ListText4$`,
  },
  {
    id: 5,
    description: "$Answer3ListDesc5$",
    text: `$Answer3ListText5$`,
  },
  {
    id: 6,
    description: "$Answer3ListDesc6$",
    text: `$Answer3ListText6$`,
  },
  {
    id: 7,
    description: "$Answer3ListDesc7$",
    text: `$Answer3ListText7$`,
  },
]

const Layout = () => {
  const [open, setOpen] = React.useState(null);

  const handleClick = (id) => {
    setOpen(prev => (prev === id ? null : id));
  };

  return (
    <section className="py-[30px] sm:pt-[40px] sm:pb-[60px] bg-[#F4F4F5]">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-[20px] sm:gap-[70px]">
        <div className="h-[200px] sm:h-[auto] w-[100%] lg:w-[50%]">
          <img className="w-[100%] h-[100%] object-cover cursor-pointer" src="/src/components/common/images/answer3.png" alt="People" />
        </div>
        <div className="w-[90%] lg:w-[45%] m-auto lg:mr-[5%] text-center">
          <h2 className="text-[#3838C7] text-[26px] sm:text-[48px] not-italic font-[600] leading-[44px] mb-[10px] sm:mb-[35px]">$Answer3Title$</h2>
          {
            AnswerList.map(obj =>
              <AnswerCard.layout key={obj.id} {...obj} handleClick={handleClick} open={open} />
            )
          }
        </div>
      </div>
      <div className="text-center mt-[20px] sm:mt-[60px]">
        <button className="text-[#ffffff] text-[15px] sm:text-[20px] font-[600] leading-[24px] not-italic bg-[#78BB35] rounded-[50px] py-[10px] px-[80px] hover:bg-[#5B971E] transition duration-[0.3s] ease-in-out">
          $Answer3Btn$
        </button>
      </div>
    </section>
  )
};

const placeholders: ITemplatePlaceholder[] = [
  {
    key: '$Answer3ListDesc1$',
    value: 'Мы рядом на всем пути'
  },
  {
    key: '$Answer3ListDesc2$',
    value: 'Организуем поступление в 60+ стран'
  },
  {
    key: '$Answer3ListDesc3$',
    value: 'Работаем с топовыми государственными вузами'
  },
  {
    key: '$Answer3ListDesc4$',
    value: 'Повышаем шансы почти до 100%'
  },
  {
    key: '$Answer3ListDesc5$',
    value: 'Многолетний опыт'
  },
  {
    key: '$Answer3ListDesc6$',
    value: 'Дополнительно подаем на стипендию'
  },
  {
    key: '$Answer3ListDesc7$',
    value: 'Экономия времени и денег'
  },
  {
    key: '$Answer3ListText1$',
    value: 'Мы помогаем студентам с 2013 года и уже прошли через все возможные сложности поступления. Мы знаем весь процесс изнутри: что ищут вузы в абитуриентах, куда и по какому вопросу обращаться и что делать в любой сложной ситуации.'
  },
  {
    key: '$Answer3ListText2$',
    value: 'Мы помогаем студентам с 2013 года и уже прошли через всевозможные сложности поступления. Мы знаем весь процесс изнутри: что ищут вузы в абитуриентах, куда и по какому вопросу обращаться и что делать в любой сложной ситуации.'
  },
  {
    key: '$Answer3ListText3$',
    value: 'Мы помогаем студентам с 2013 года и уже прошли через все возможные сложности поступления. Мы знаем весь процесс изнутри: что ищут вузы в абитуриентах, куда и по какому вопросу обращаться и что делать в любой сложной ситуации.'
  },
  {
    key: '$Answer3ListText4$',
    value: 'Мы помогаем студентам с 2013 года и уже прошли через все возможные сложности поступления. Мы знаем весь процесс изнутри: что ищут вузы в абитуриентах, куда и по какому вопросу обращаться и что делать в любой сложной ситуации.'
  },
  {
    key: '$Answer3ListText5$',
    value: 'Мы помогаем студентам с 2013 года и уже прошли через все возможные сложности поступления. Мы знаем весь процесс изнутри: что ищут вузы в абитуриентах, куда и по какому вопросу обращаться и что делать в любой сложной ситуации.'
  },
  {
    key: '$Answer3ListText6$',
    value: 'Мы помогаем студентам с 2013 года и уже прошли через все возможные сложности поступления. Мы знаем весь процесс изнутри: что ищут вузы в абитуриентах, куда и по какому вопросу обращаться и что делать в любой сложной ситуации.'
  },
  {
    key: '$Answer3ListText7$',
    value: 'Мы помогаем студентам с 2013 года и уже прошли через все возможные сложности поступления. Мы знаем весь процесс изнутри: что ищут вузы в абитуриентах, куда и по какому вопросу обращаться и чтоделать в любой сложной ситуации.'
  },
  {
    key: '$Answer3Title$',
    value: 'Почему именно мы?'
  },
  {
    key: '$Answer3Btn$',
    value: 'Оставить заявку'
  }
]

const functions: ITemplateFunction[] = []

export default {
  layout: <Layout />,
  placeholders,
  functions,
}