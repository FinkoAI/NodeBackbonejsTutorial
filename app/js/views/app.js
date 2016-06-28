define(
  [
    "views/lists/add",
    "text!templates/app.html"
  ],
  function(
    AddListView,
    template
  ) {
    var AppView = Backbone.View.extend({
      id: "main",
      tagName: "div",
      className: "container-fluid",
      el: "body",
      template: _.template(template),

      events: {
        "click #add-list-button": "addList"
      },

      initialize: function() {},

      render: function() {
        this.$el.html(this.template())
        return this;
      },

      addList: function() {
        var list = new bTask.collections.lists.model({
          title: ""
        });
        var form = new AddListView({
          model: list
        });
        var self = this;

        this.$el.find("#list-editor").html(form.render().el);
        form.$el.find("input:first").focus();

        return false;
      }
    });

    return AppView;
  }
);
