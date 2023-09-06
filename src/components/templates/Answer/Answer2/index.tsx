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
    description: "$Answer2ListDesc1$",
    text: `$Answer2ListText1$`,
  },
  {
    id: 2,
    description: "$Answer2ListDesc2$",
    text: `$Answer2ListText2$`,
  },
  {
    id: 3,
    description: "$Answer2ListDesc3$",
    text: `$Answer2ListText3$`,
  },
  {
    id: 4,
    description: "$Answer2ListDesc4$",
    text: `$Answer2ListText4$`,
  },
  {
    id: 5,
    description: "$Answer2ListDesc5$",
    text: `$Answer2ListText5$`,
  },
  {
    id: 6,
    description: "$Answer2ListDesc6$",
    text: `$Answer2ListText6$`,
  },
  {
    id: 7,
    description: "$Answer2ListDesc7$",
    text: `$Answer2ListText7$`,
  },
]

const Layout = () => {
  const [open, setOpen] = React.useState(null);

  const handleClick = (id) => {
    setOpen(prev => (prev === id ? null : id));
  };

  return (
    <section className="flex flex-col lg:flex-row items-center justify-between gap-[20px] sm:gap-[70px] py-[30px] sm:pt-[40px] sm:pb-[60px] bg-[#F4F4F5]">

      <div className="w-[90%] m-auto lg:w-[45%] ml-[5%] text-center">
        <h2 className="text-[#3838C7] text-[26px] sm:text-[48px] not-italic font-[600] leading-[44px] mb-[10px] sm:mb-[35px]">$Answer2Title$</h2>
        {
          AnswerList.map(obj =>
            <AnswerCard.layout key={obj.id} {...obj} handleClick={handleClick} open={open} />
          )
        }
        <div className="text-center mt-[23px] sm:mt-[45px]">
          <button className="text-[#ffffff] text-[15px] sm:text-[20px] font-[600] leading-[24px] not-italic bg-[#78BB35] rounded-[50px] py-[10px] px-[80px] hover:bg-[#5B971E] transition duration-[0.3s] ease-in-out">
            $Answer2Btn$
          </button>
        </div>
      </div>

      <div className="h-[200px] sm:h-[auto] w-[100%] lg:w-[50%]">
        <img className="w-[100%] h-[100%] object-cover cursor-pointer" src="$Answer2Image$" alt="People" />
      </div>
    </section>
  )
};

const placeholders: ITemplatePlaceholder[] = [
  {
    key: '$Answer2ListDesc1$',
    value: 'Мы рядом на всем пути'
  },
  {
    key: '$Answer2ListDesc2$',
    value: 'Организуем поступление в 60+ стран'
  },
  {
    key: '$Answer2ListDesc3$',
    value: 'Работаем с топовыми государственными вузами'
  },
  {
    key: '$Answer2ListDesc4$',
    value: 'Повышаем шансы почти до 100%'
  },
  {
    key: '$Answer2ListDesc5$',
    value: 'Многолетний опыт'
  },
  {
    key: '$Answer2ListDesc6$',
    value: 'Дополнительно подаем на стипендию'
  },
  {
    key: '$Answer2ListDesc7$',
    value: 'Экономия времени и денег'
  },
  {
    key: '$Answer2ListText1$',
    value: 'Мы помогаем студентам с 2013 года и уже прошли через все возможные сложности поступления. Мы знаем весь процесс изнутри: что ищут вузы в абитуриентах, куда и по какому вопросу обращаться и что делать в любой сложной ситуации.'
  },
  {
    key: '$Answer2ListText2$',
    value: 'Мы помогаем студентам с 2013 года и уже прошли через всевозможные сложности поступления. Мы знаем весь процесс изнутри: что ищут вузы в абитуриентах, куда и по какому вопросу обращаться и что делать в любой сложной ситуации.'
  },
  {
    key: '$Answer2ListText3$',
    value: 'Мы помогаем студентам с 2013 года и уже прошли через все возможные сложности поступления. Мы знаем весь процесс изнутри: что ищут вузы в абитуриентах, куда и по какому вопросу обращаться и что делать в любой сложной ситуации.'
  },
  {
    key: '$Answer2ListText4$',
    value: 'Мы помогаем студентам с 2013 года и уже прошли через все возможные сложности поступления. Мы знаем весь процесс изнутри: что ищут вузы в абитуриентах, куда и по какому вопросу обращаться и что делать в любой сложной ситуации.'
  },
  {
    key: '$Answer2ListText5$',
    value: 'Мы помогаем студентам с 2013 года и уже прошли через все возможные сложности поступления. Мы знаем весь процесс изнутри: что ищут вузы в абитуриентах, куда и по какому вопросу обращаться и что делать в любой сложной ситуации.'
  },
  {
    key: '$Answer2ListText6$',
    value: 'Мы помогаем студентам с 2013 года и уже прошли через все возможные сложности поступления. Мы знаем весь процесс изнутри: что ищут вузы в абитуриентах, куда и по какому вопросу обращаться и что делать в любой сложной ситуации.'
  },
  {
    key: '$Answer2ListText7$',
    value: 'Мы помогаем студентам с 2013 года и уже прошли через все возможные сложности поступления. Мы знаем весь процесс изнутри: что ищут вузы в абитуриентах, куда и по какому вопросу обращаться и что делать в любой сложной ситуации.'
  },
  {
    key: '$Answer2Title$',
    value: 'Почему именно мы?'
  },
  {
    key: '$Answer2Btn$',
    value: 'Оставить заявку'
  },
  {
    key: '$Answer2Image$',
    type: 'image',
    value: ''
  }
]

const functions: ITemplateFunction[] = []

export default {
  layout: <Layout />,
  placeholders,
  functions,
}