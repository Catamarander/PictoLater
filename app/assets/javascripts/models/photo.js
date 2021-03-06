Pictolater.Models.Photo = Backbone.Model.extend({
  urlRoot: 'api/photos',

  comments: function () {
  if (!this._comments) {
    this._comments = new Pictolater.Collections.Comments()
  }
    return this._comments
  },

  owner: function () {
    return this._owner;
  },

  parse: function (response) {
    if (response.comments && response.comments.length > 0) {
      this.comments().set(response.comments)
      delete response.comments;
    }
    this._owner = response.username;
    delete response.username;
    return response
  },

})
