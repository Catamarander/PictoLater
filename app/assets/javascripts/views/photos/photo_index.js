Pictolater.Views.PhotoIndex = Backbone.CompositeView.extend({
  template: JST["photos/index"],

  initialize: function () {
    this.listenTo(this.collection, "sync add", this.render)
  },

  render: function () {
    this.$el.html(this.template())
    var view = this;
    this.collection.each(function (photo) {
      var photoView = new Pictolater.Views.PhotoIndexItem({
        model: photo
      });

      var commentsView = new Pictolater.Views.CommentsIndex({
        collection: photo.comments()
      });

      view.addSubview('.thumbnail-feed', photoView);
    })
    return this;
  }
})