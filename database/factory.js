'use strict'

/*
|--------------------------------------------------------------------------
| Model and Database Factory
|--------------------------------------------------------------------------
|
| Factories let you define blueprints for your database models or tables.
| These blueprints can be used with seeds to create fake entries. Also
| factories are helpful when writing tests.
|
*/

const Factory = use('Factory')

/*
|--------------------------------------------------------------------------
| User Model Blueprint
|--------------------------------------------------------------------------
| Below is an example of blueprint for User Model. You can make use of
| this blueprint inside your seeds to generate dummy data.
|
*/
Factory.blueprint('App/Model/Post', (fake) => {
  return {
    title: fake.sentence({words: 5}),
    body: fake.paragraph()
  }
})

let index = 0

Factory.blueprint('App/Model/Comment', (fake) => {
  index++
  return {
    username: fake.username(),
    body: fake.paragraph(),
    post_id: index % 2 + 1
  }
})
