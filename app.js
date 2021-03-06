$(function() {
  App = Ember.Application.create({});

  App.Router.map(function(){
    this.route('home', {path: '/'});
    this.route('web-dev');
    this.route('music');
    this.route('menu');
    this.route('blog', function() {
      this.route('post', {path: '/:post_id'});
    });
    this.route('contact');
  });

  App.PostAdapter = DS.FirebaseAdapter.extend({
    firebase: new Firebase('https://master-chu.firebaseio.com/blog')
  });

  App.Post = DS.Model.extend({
    title: DS.attr('string'),
    body: DS.attr('string')
  });

  App.BlogRoute = Ember.Route.extend({
    model: function(params) {
      return this.store.findAll('post');
    }
  });

  App.BlogPostRoute = Ember.Route.extend({
    model: function(params) {
      return this.store.findRecord('post', params["post_id"]);
    }
  });

  App.SiteNavbarLinkComponent = Ember.Component.extend({
    colorClass: 'white',
    tagName: 'div',
    classNames: ['navbar-link col-sm-2'],
    attributeBindings: ['id'],
    safeName: Ember.computed('name', function() {
      return this.get('name').replace(" ", "-");
    }),
    id: Ember.computed('safeName', function() {
      return `navbar-link-${this.get('safeName')}`;
    }),
    displayName: Ember.computed('name', function() {
      return this.get('name').toUpperCase();
    })
  });
  App.SiteNavbarLinkComponent.reopenClass({
    positionalParams: ['name', 'colorClass']
  });

  App.PageHeaderComponent = Ember.Component.extend({
    colorClass: 'white'
  });
  App.PageHeaderComponent.reopenClass({
    positionalParams: ['pageName', 'colorClass']
  });

  var ANGULAR = 'Angular';
  var JQUERY = 'jQuery';
  var MONGO = 'MongoDB';
  var PHP = 'PHP';
  var MYSQL = 'MySQL';
  var NODE = 'Node';
  var EMBER = 'Ember';
  var BACKBONE = 'Backbone';
  var PYTHON = 'Python';
  var FIREBASE = 'Firebase';

  App.PageGalleryComponent = Ember.Component.extend({
    tagName: 'div',
    // classNames: ['container'],
    galleryItems: [{
      title: 'Jake and Amir Scripts',
      description: 'The official searchable script archive of popular web series Jake and Amir',
      url: 'http://scripts.jakeandamir.com',
      imageUrl: 'images/janda.jpg',
      stack: [JQUERY, PHP, MYSQL, PYTHON]
    }, {
      title: 'Nutraction',
      description: 'A school project for tracking nutritional information',
      url: 'http://lumpymunch-tunataco.rhcloud.com',
      imageUrl: 'images/lumpymunch.jpg',
      stack: [ANGULAR, MONGO, NODE]
    }, {
      title: 'Fake Terminal',
      description: 'A fake terminal in the style of the computer on LOST',
      url: 'http://www.ccs.neu.edu/home/812chuc/chartreuse-emu/',
      imageUrl: 'images/terminal.jpg',
      stack: [JQUERY]
    }, {
      title: 'Stdashboard',
      description: 'A dashboard for displaying open pull requests in Stash',
      url: 'https://github.com/master-chu/ember-stash',
      imageUrl: 'images/stdashboard.jpg',
      stack: [EMBER, NODE]
    }, {
      title: 'Sticky Notes',
      description: 'A sticky note app leveraging local storage',
      url: 'https://github.com/master-chu/backbone-sticky-notes',
      imageUrl: 'images/stickynotes.jpg',
      stack: [BACKBONE, JQUERY]
    }, {
      title: 'This site',
      description: 'You\'re looking at it',
      url: 'http://master-chu.github.io',
      imageUrl: 'images/masterchu.jpg',
      stack: [EMBER, FIREBASE]
    }]
  });
  App.PageGalleryComponent.reopenClass({
    positionalParams: ['title']
  });

  App.PageGalleryItemComponent = Ember.Component.extend({
    tagName: 'a',
    classNames: ['gallery-item'],
    href: Ember.computed.alias('url'),
    attributeBindings: ['href'],
    formattedStack: Ember.computed('stack', function() {
      var stack = this.get('stack');
      var length = stack.length;
      return stack.reduce(function(previousValue, item, index, enumerable) {
        return previousValue + ", " + item;
      });
    })
  });
  App.PageGalleryItemComponent.reopenClass({
    positionalParams: ['title', 'description', 'url', 'imageUrl', 'stack']
  });
});
