'use strict'

const Lucid = use('Lucid')

class Post extends Lucid {
  comments() {
    return this.hasMany('App/Model/Comment')
  }
}

module.exports = Post
