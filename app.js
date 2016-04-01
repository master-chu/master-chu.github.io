$(function() {
  App = Ember.Application.create({});

  var ANGULAR = 'AngularJS';
  var JAVASCRIPT = 'JavaScript';
  var MONGO = 'MongoDB';
  var PHP = 'PHP';
  var MYSQL = 'MySQL';
  var NODE = 'NodeJS';


  App.Router.map(function(){
    this.route('home', {path: '/'});
    this.route('web-dev');
    this.route('music');
    this.route('menu');
    this.route('about');
    this.route('contact');
  });

  App.SiteNavbarLinkComponent = Ember.Component.extend({
    colorClass: 'white',
    tagName: 'div',
    classNames: ['navbar-link col-sm-2'],
    attributeBindings: ['id'],
    id: Ember.computed('text', function() {
      return `navbar-link-${this.get('name')}`;
    }),
    displayText: Ember.computed('text', function() {
      return this.get('name').toUpperCase();
    })
  });
  App.SiteNavbarLinkComponent.reopenClass({
    positionalParams: ['name', 'colorClass']
  });

  App.PageHeaderComponent = Ember.Component.extend({
    tagName: 'h2'
  });
  App.PageHeaderComponent.reopenClass({
    positionalParams: ['pageName']
  });

  App.PageGalleryComponent = Ember.Component.extend({
    tagName: 'div',
    classNames: ['container'],
    galleryItems: [{
      title: 'Jake and Amir Scripts',
      description: 'The official searchable script archive of popular web series Jake and Amir',
      url: 'http://scripts.jakeandamir.com',
      imageUrl: '',
      stack: [JAVASCRIPT, PHP, MYSQL]
    }, {
      title: 'Nutraction',
      description: 'A school project for tracking nutritional information',
      url: 'http://lumpymunch-tunataco.rhcloud.com',
      imageUrl: '',
      stack: [ANGULAR, MONGO, NODE]
    }, {
      title: 'Fake Terminal',
      description: 'A fake terminal in the style of computer on LOST',
      url: 'http://www.ccs.neu.edu/home/812chuc/chartreuse-emu/',
      imageUrl: '',
      stack: [JAVASCRIPT]
    }]
  });
  App.PageGalleryComponent.reopenClass({
    positionalParams: ['title']
  });

  App.PageGalleryItemComponent = Ember.Component.extend({
    tagName: 'a',
    classNames: ['col-sm-4'],
    href: Ember.computed.alias('url'),
    attributeBindings: ['href']
  });
  App.PageGalleryItemComponent.reopenClass({
    positionalParams: ['title', 'description', 'url', 'imageUrl', 'stack']
  });
});
