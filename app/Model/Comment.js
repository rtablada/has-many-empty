'use strict'

const Lucid = use('Lucid')

class Comment extends Lucid {
  post() {
    return this.belongsTo('App/Model/Post');
  }
}

module.exports = Comment
