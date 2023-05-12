import {reactive} from 'vue';
export const store = reactive ({
  testInfo:'test data',

  // ------------------------------- all article array
  articles:[
    {
    title: 'Lunch Favorites whit Salad, Naan And Beaus',
    author:'Bakery',
    date:'March, 20, 2019',
    imgUrl:'/src/assets/img/food/Yogurt-Nan-1200x790.jpg',
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
    {
    title: 'Rounddup: My Favorite Recipes For Healthy Living',
    author:'Bob',
    date:'April, 20, 2019',
    imgUrl:'/src/assets/img/food/fi-roundup-1200x790.jpg',
    paragraph:'    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis maiores facere iusto? Veniam recusandae officiis eveniet asperiores temporibus doloremque qui? asperiores temporibus doloremque qui?asperiores temporibus doloremque qui?asperiores temporibus doloremque qui?',
    answers:[]
  },
    {
    title: 'Rounddup: My Favorite Recipes For Healthy Living',
    author:'Bob',
    date:'April, 20, 2019',
    imgUrl:'/src/assets/img/food/fi-roundup-1200x790.jpg',
    paragraph:'    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis maiores facere iusto? Veniam recusandae officiis eveniet asperiores temporibus doloremque qui? asperiores temporibus doloremque qui?asperiores temporibus doloremque qui?asperiores temporibus doloremque qui?',
    answers:[]
  },
    {
    title: 'Rounddup: My Favorite Recipes For Healthy Living',
    author:'Bob',
    date:'April, 20, 2019',
    imgUrl:'/src/assets/img/food/fi-roundup-1200x790.jpg',
    paragraph:'    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis maiores facere iusto? Veniam recusandae officiis eveniet asperiores temporibus doloremque qui? asperiores temporibus doloremque qui?asperiores temporibus doloremque qui?asperiores temporibus doloremque qui?',
    answers:[]
  },
    {
    title: 'Rounddup: My Favorite Recipes For Healthy Living',
    author:'Bob',
    date:'April, 20, 2019',
    imgUrl:'/src/assets/img/food/fi-roundup-1200x790.jpg',
    paragraph:'    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis maiores facere iusto? Veniam recusandae officiis eveniet asperiores temporibus doloremque qui? asperiores temporibus doloremque qui?asperiores temporibus doloremque qui?asperiores temporibus doloremque qui?',
    answers:[]
  },
],

culinaryCollections: [
{
  title: 'dinner-recipes',
  imgUrl:'/src/assets/img/avada/dinner-recipes.png'
},
{
  title: 'healthy-recipes',
  imgUrl:'/src/assets/img/avada/healthy-recipes.png'
},
{
  title: 'premium-recipes',
  imgUrl:'/src/assets/img/avada/premium-recipes.png'
},
{
  title: 'quick-easy-recipes',
  imgUrl:'/src/assets/img/avada/quick-easy-recipes.png'
},
{
  title: 'soups-recipes',
  imgUrl:'/src/assets/img/avada/soups-recipes.png'
},
{
  title: 'staff-picks',
  imgUrl:'/src/assets/img/avada/staff-picks.png'
},
{
  title: 'baking-recipes',
  imgUrl:'/src/assets/img/avada/baking-recipes.png'
},
{
  title: 'drinks-recipes',
  imgUrl:'/src/assets/img/avada/drinks-recipes.png'
},
]
})