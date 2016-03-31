$(function() {
  App = Ember.Application.create({});

  App.Router.map(function(){
    this.route('home', {path: '/'});
    this.route('web-dev');
    this.route('about');
    this.route('contact');
  });

  App.SiteNavbarLinkComponent = Ember.Component.extend({
    tagName: 'div',
    classNames: ['navbar-link col-sm-3'],
    attributeBindings: ['id'],
    id: Ember.computed('text', function() {
      return `navbar-link-${this.get('name')}`;
    }),
    displayText: Ember.computed('text', function() {
      return this.get('name').toUpperCase();
    })
  });
  App.SiteNavbarLinkComponent.reopenClass({
    positionalParams: ['name']
  });

  App.PageHeaderComponent = Ember.Component.extend({});
  App.PageHeaderComponent.reopenClass({
    positionalParams: ['pageName']
  });
});
