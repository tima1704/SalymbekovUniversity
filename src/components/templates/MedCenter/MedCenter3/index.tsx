import React from "react";
import {
  ITemplateFunction,
  ITemplatePlaceholder,
} from "../../../../redux/TemplatesReducer/types";
import Slider3 from "../../Slider/Slider3";

const Layout = ({ ...props }) => {
  return (
    <>
      <div
        className="pt-[20px] md:pt-[30px] lg:pt-[50px] max-w-[90%] xl:max-w-[1185px] m-[auto] pb-[20px] md:pb-[40px] lg:pb-[86px]"
        {...props}
      >
        <div className="text-center">
          <h2 className="text-[#202124] text-[20px] md:text-[28px] font-[600] leading-[30px] md:leading-[50px] pb-[7px]">
            $MedCenterArticle3$
          </h2>
          <h3 className="text-[#01018C] text-[20px] md:text-[40px] font-[700] leading-[50px] pb-[10px] md:pb-[20px] lg:pb-[40px]">
            $MedCenterDescription3$
          </h3>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-[10px] lg:gap-[40px] pb-[10px] lg:pb-[40px]">
          <div className="">
            <img
              className="h-[300px] md:h-[400px] lg:h-full"
              src="$MedCenterFirstImage3$"
              alt="doctor"
            />
          </div>
          <div className="flex flex-col gap-[16px] lg:w-[45%]">
            <p className="text-[#202124] lg:text-end text-[15px] md:text-[18px] font-[500] leading-[30px] md:leading-[40px]">
              $MedCenterDescription23$
            </p>
            <p className="text-[#202124] text-start lg:text-end text-[15px] md:text-[18px] font-[500] leading-[30px] md:leading-[40px]">
            $MedCenterDescription33$
            </p>
          </div>
        </div>



        <div className="pb-[10px] lg:pb-[40px]">
          <p className="text-[#202124] text-[15px] md:text-[18px] font-[500] leading-[30px] md:leading-[40px] pb-[10px] lg:pb-[40px]">
          $MedCenterDescription43$
          </p>
          <div className="w-[100%]">
            <img
              className="w-[100%] md:hidden"
              src="$MedCenterSecondImage3$"
              alt="cabinet"
            />
          </div>
          <p className="text-[#202124] text-[15px] md:text-[18px] font-[500] leading-[30px] md:leading-[40px]">
          $MedCenterDescription53$
          </p>
          <div className="w-[100%]">
            <img
              className="w-[100%] md:hidden"
              src="$MedCenterThirdImage3$"
              alt="cabinet"
            />
          </div>
        </div>

        <div className="hidden md:flex flex-col gap-[20px] xl:gap-[40px] pb-[20px] lg:pb-[40px]">
          <div className="flex gap-[20px] xl:gap-[40px]">
            <img
              className="w-[50%]"
              src="$MedCenterFourthImage3$"
              alt=""
            />
            <img
              className="w-[50%]"
              src="$MedCenterFifthImage3$"
              alt=""
            />
          </div>
          <img
            className="w-full"
            src="$MedCenterSixthImage3$"
            alt=""
          />
        </div>

        <div className="flex flex-col md:flex-row gap-[20px] md:gap-[52px] pb-[20px] md:pb-[40px]">
          <p className="text-[#202124] text-[15px] md:text-[18px] font-[500] leading-[30px] md:leading-[40px] pb-[10px] md:pb-[20px] lg:pb-[40px]">
          $MedCenterDescription63$
          </p>
          <div className="w-[100%]">
            <img
              className="w-[100%] md:hidden"
              src="$MedCenterSeventhImage3$"
              alt="cabinet"
            />
          </div>
          <p className="text-[#202124] text-[15px] md:text-[18px] font-[500] leading-[30px] md:leading-[40px]">
          $MedCenterDescription73$
          </p>
        </div>
      </div>
      <div className="max-w-[90%] xl:max-w-[1585px] m-auto pb-[40px] md:pb-[70px]">
        <Slider3.layout />
      </div>
    </>
  );
};

const placeholders: ITemplatePlaceholder[] = [
  {
    key: "$MedCenterArticle3$",
    value: "ОсОО Медицинский центр микрохирургии глаза",
  },
  {
    key: "$MedCenterDescription3$",
    value: "«Дордой-Офтальмик Сервис»",
  },
  {
    key: "$MedCenterDescription23$",
    value:
      "Руководитель Эшмамбетов Асизбек Эшмамбетович, отличник здравоохранения КР, создатель в 1995 году и бессменный руководитель МЦ МХГ «Дордой-офтальмик-сервис» и, единственной в Центральной Азии, лаборатории по изготовлению индивидуальных глазных протезов.",
  },
  {
    key: "$MedCenterDescription33$",
    value:
      "Центр микрохирургии глаза «Дордой-Офтальмик Сервис» создан в 1996 году. На сегодняшний день центр успешно развивается и оказывает практически все виды современных офтальмологических услуг, а также пользуется высоким доверием населения не только Кыргызстана, но и ближнего зарубежья. Центр оснащен уникальной аппаратурой. Ультразвуковой факоэмульсификатор «LEGACI» последней технологии США. Кроме этого приобретен Глазной Аппарат «INFINITI» 2016 года выпуска, который является аппаратом последнего поколения и позволяет удалить катаракту без наложения швов. При этом больной находится в клинике не более суток.",
  },
  {
    key: "$MedCenterDescription43$",
    value:
      "Специалисты «Дордой-Офтальмик Сервис» используют в своей деятельности и современный метод оперативного лечения катаракты. Успешно действуют единственная в стране лаборатории по изготовлению индивидуальных глазных протезов и лаборатория по производству мягких контактных линз. С 2000 года Медцентр «Дордой-Офтальмик Сервис» является рентабельным предприятием. Четыре года назад «Дордой-Офтальмик Сервис» признан Министерством здравоохранения лучшим лечебным учреждением республики среди негосударственных медицинских структур.",
  },
  {
    key: "$MedCenterDescription53$",
    value:
      "Сегодня руководства центра считает необходимым не только оснащать клинику современным оборудованием, повышать уровень медицинского персонала и улучшать сервисные условия, но и расширять диапазон предлагаемых услуг. Применение микрохирургической, лазерной и других современных технологий позволит малокровно производить пластические операции по устранению косметических дефектов новообразований с минимальным риском после операционных осложнений и послужит альтернативой сложным, тяжелым операциям под общим наркозом с длительным пребыванием в стационаре.",
  },
  {
    key: "$MedCenterDescription63$",
    value:
      "Под руководством Генерального директора МЦ МХГ «ДОС» Эшмамбетова Асизбека Эшмамбетовича совместно с Кафедрой глазных болезней Кыргызской Государственной Медицинской Академии впервые Кыргызстане в 2002 году, а затем в 2007, 2011 и 2015гг. организованы Центрально-Азиатские конференции по офтальмологии. В работе конференций участвовало свыше 250 специалистов-офтальмологов из России, Украины, Казахстана, Узбекистана, Таджикистана, Германии, Турции, Индии, США и Финляндии. ",
  },
  {
    key: "$MedCenterDescription73$",
    value:
      "Сегодня Медицинский центр микрохирургии глаза поддерживает взаимосвязь со специалистами из других стран. В компании работают профессор из Казахстана и специалист по изготовлению протезов из Москвы. Освоение и внедрение новых методик требует определенной подготовки медперсонала. Производятся постоянные стажировки для врачей и медсестер.В 2016 году Учреждению для пожилых и лиц с ограниченными возможностями была оказана бесплатные услуги по проведению операции на глазах, в количестве 10-12 чел. ",
  },
  {
    key: "$MedCenterFirstImage3$",
    type: "image",
    value:
      "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/ded.png",
  },
  {
    key: "$MedCenterSecondImage3$",
    type: "image",
    value:
      "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/clinica2page1.png",
  },
  {
    key: "$MedCenterSeventhImage3$",
    type: "image",
    value:
      "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/clinica2page1.png",
  },
  {
    key: "$MedCenterThirdImage3$",
    type: "image",
    value:
      "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/clinica2page1.png",
  },
  {
    key: "$MedCenterFourthImage3$",
    type: "image",
    value:
      "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/foto1Small3.png",
  },
  {
    key: "$MedCenterFifthImage3$",
    type: "image",
    value:
      "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/foto2Small3.png",
  },
  {
    key: "$MedCenterSixthImage3$",
    type: "image",
    value:
      "https://salymbekov-cms.s3.ap-south-1.amazonaws.com/images/foto3Small3.png",
  },
  ...Slider3.placeholders,
];

const functions: ITemplateFunction[] = [
  {
    id: "SliderThird",
    func: {
      type: "swiper",
      swiperParams: {
        pagination: "true",
      },
    },
  },
];

export default {
  layout: <Layout />,
  placeholders,
  functions,
};
