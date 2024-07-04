'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('Questions', [
      {
     question: '_____ нас связала Тайною нашей стала Всем уговорам твержу я в ответ: «Нас не разлучат, нет',
      answer: 'Музыка',
      topicId: 1,
      img : '/songs/mirage.jpg'
         },
     {
      question: '______ тем, кто с нами делятся чудесами И  зависают на весах под правильный саунд Мы не из тех, кто на измене валит на Запад Перезвони, если занят, мы всё взяли',
       answer: 'Респект',
       topicId: 1,
       img : '/songs/ak47.jpg'
      }
      {
        question: 'Ну где же _____? Ну где же ваши _____? Давай, поднимем ручки и будем танцевать',
         answer: 'Ручки',
         topicId: 1,
         img : '/songs/virus.jpg'
        },
        {
          question: 'Катастрофически тебя не хватает мне Жгу __________ но не попадаю я Воздух толчками и пульс на три счёта.',
           answer: 'Электричество',
           topicId: 1,
           img : '/songs/nightSnipers.jpg'
          }

          {
            question: 'Солнце мое - взгляни на меня, Моя ладонь превратилась в кулак, И если есть _____ - дай огня. Вот так...' ,

            answer: 'Порох',
             topicId: 1,
             img : '/songs/kino.jpg'
            }
          {
            question: 'Назовите марку автомобиля?',
             answer: 'Fiat',
             topicId: 2,
             img : '/cars/Fiat.jpg'
            }
            {
              question: 'Назовите марку автомобиля?',
               answer: 'BMW',
               topicId: 2,
               img : '/cars/bmw.jpg'
              }
              {
                question: 'Назовите марку автомобиля?',
                 answer: 'Lada',
                 topicId: 2,
                 img : '/cars/lada.jpg'
                }
                {
                  question: 'Назовите марку автомобиля?',
                   answer: 'Lamborghini',
                   topicId: 2,
                   img : '/cars/lamborghini.jpg'
                  }
                  {
                    question: 'Назовите марку автомобиля?',
                     answer: 'Tagaz',
                     topicId: 2,
                     img : '/cars/tagaz.jpg'
                    }



      ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('Questions', null, {});
     
  }
};
