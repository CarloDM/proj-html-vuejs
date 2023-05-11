import {reactive} from 'vue';
export const store = reactive ({
  testInfo:'test data',

  article:{
    title: 'japanese sushi',
    author:'admin',
    date:'March, 20, 2019',
    imgUrl:'/src/assets/img/single-post-img3-400x263.jpg',
    paragraph:'    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis maiores facere iusto? Veniam recusandae officiis eveniet asperiores temporibus doloremque qui?',
    answers:[]
  },


  // -------------------------------
  articles:[
    {
    title: 'Lunch Favorites whit Salad, Naan And Beaus',
    author:'Bakery',
    date:'March, 20, 2019',
    imgUrl:'/src/assets/img//food/Yogurt-Nan-1200x790.jpg',
    paragraph:'    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis maiores facere iusto? Veniam recusandae officiis eveniet asperiores temporibus doloremque qui?',
    answers:['nice,thk u!', 'i like this!']
  },
    {
    title: 'Food corner: Top Japanese Restaurants for sushi',
    author:'admin',
    date:'March, 20, 2019',
    imgUrl:'/src/assets/img/single-post-img3-1200x790.jpg',
    paragraph:'    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis maiores facere iusto? Veniam recusandae officiis eveniet asperiores temporibus doloremque qui? asperiores temporibus doloremque qui?asperiores temporibus doloremque qui?asperiores temporibus doloremque qui?',
    answers:[]
  },
]
})