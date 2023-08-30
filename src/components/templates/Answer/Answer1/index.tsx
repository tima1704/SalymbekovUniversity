import React from 'react';

interface IAnswer {
  id: number;
  description: string;
  text: string;
}

const AnswerList: IAnswer[] = [
  {
    id: 1,
    description: "Мы рядом на всем пути",
    text: `Мы помогаем студентам с 2013 года и уже прошли через все
    возможные сложности поступления. Мы знаем весь процесс
    изнутри: что ищут вузы в абитуриентах, куда и по какому
    вопросу обращаться и что делать в любой сложной ситуации.`,
  },
  {
    id: 2,
    description: "Организуем поступление в 60+ стран",
    text: `Мы помогаем студентам с 2013 года и уже прошли через все
    возможные сложности поступления. Мы знаем весь процесс
    изнутри: что ищут вузы в абитуриентах, куда и по какому
    вопросу обращаться и что делать в любой сложной ситуации.`,
  },
  {
    id: 3,
    description: "Работаем с топовыми государственными вузами",
    text: `Мы помогаем студентам с 2013 года и уже прошли через все
    возможные сложности поступления. Мы знаем весь процесс
    изнутри: что ищут вузы в абитуриентах, куда и по какому
    вопросу обращаться и что делать в любой сложной ситуации.`,
  },
  {
    id: 4,
    description: "Повышаем шансы почти до 100%",
    text: `Мы помогаем студентам с 2013 года и уже прошли через все
    возможные сложности поступления. Мы знаем весь процесс
    изнутри: что ищут вузы в абитуриентах, куда и по какому
    вопросу обращаться и что делать в любой сложной ситуации.`,
  },
  {
    id: 5,
    description: "Многолетний опыт",
    text: `Мы помогаем студентам с 2013 года и уже прошли через все
    возможные сложности поступления. Мы знаем весь процесс
    изнутри: что ищут вузы в абитуриентах, куда и по какому
    вопросу обращаться и что делать в любой сложной ситуации.`,
  },
  {
    id: 6,
    description: "Дополнительно подаем на стипендию",
    text: `Мы помогаем студентам с 2013 года и уже прошли через все
    возможные сложности поступления. Мы знаем весь процесс
    изнутри: что ищут вузы в абитуриентах, куда и по какому
    вопросу обращаться и что делать в любой сложной ситуации.`,
  },
  {
    id: 7,
    description: "Экономия времени и денег",
    text: `Мы помогаем студентам с 2013 года и уже прошли через все
    возможные сложности поступления. Мы знаем весь процесс
    изнутри: что ищут вузы в абитуриентах, куда и по какому
    вопросу обращаться и что делать в любой сложной ситуации.`,
  },
]

export const Answer: React.FC = () => {
  const [open, setOpen] = React.useState(null);

  const handleClick = (id) => {
    setOpen(prev => (prev === id ? null : id));
  };

  return (
    <section className="flex items-center justify-between flex-col lg:flex-row gap-[20px] sm:gap-[70px] py-[30px] sm:pt-[40px] sm:pb-[60px] bg-[#F4F4F5]">
      <div className="h-[400px] lg:h-[auto] w-[100%] lg:w-[90%]">
        <img className="w-[100%] h-[100%] cursor-pointer object-cover lg:rounded-se-[160px] lg:rounded-es-[160px]" src="/src/components/common/images/answer.png" alt="People" />
      </div>
      <div className="w-[90%] sm:w-[80%] m-[auto] lg:mr-[5%]">
        <h2 className="text-[#3838C7] text-[33px] sm:text-[48px] not-italic font-[600] leading-[44px] mb-[20px] sm:mb-[35px]">Почему именно мы?</h2>
        {
          AnswerList.map(obj =>
            <AnswerCard key={obj.id} {...obj} handleClick={handleClick} open={open} />
          )
        }
        <div className="text-center mt-[23px] sm:mt-[45px]">
          <button className="text-[#ffffff] text-[15px] sm:text-[20px] font-[600] leading-[24px] not-italic bg-[#78BB35] rounded-[50px] py-[10px] px-[80px] hover:bg-[#5B971E] transition duration-[0.3s] ease-in-out">
            Оставить заявку
          </button>
        </div>
      </div>
    </section>
  )
};
