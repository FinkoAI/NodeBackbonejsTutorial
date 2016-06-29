define(
  [
    "views/lists/add",
    "views/lists/edit",
    "text!templates/app.html"
  ],
  function(
    AddListView,
    EditListView,
    template
  ) {
    var AppView = Backbone.View.extend({
      id: "main",
      tagName: "div",
      className: "container-fluid",
      el: "body",
      template: _.template(template),

      events: {
        "click #add-list-button": "addList",
        "click #edit-list-button": "editList",
        'click #delete-list-button': 'deleteList'
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
      },
      
      editList: function () {
        var form = new EditListView({model: bTask.views.activeListMenuItem.model});

        this.$el.find("#list-editor").html(form.render().el);
        form.$el.find("input:first").focus();

        return false;
      },

      deleteList: function() {
        if (confirm('Are you sure you want to delete that list?')) {
          bTask.views.activeListMenuItem.model.destroy();
        }
        return false;
      }
    });

    return AppView;
  }
);
