'use strict'

const Schema = use('Schema')

class CommentsSchema extends Schema {

  up () {
    this.create('comments', (table) => {
      table.increments()
      table.string('username')
      table.text('body')
      table.integer('post_id').references('posts.id')
      table.timestamps()
    })
  }

  down () {
    this.drop('comments')
  }

}

module.exports = CommentsSchema
