var postsData = [
  {
    title: 'baidu',
    url: 'https://www.baidu.com'
  }, 
  {
    title: '163',
    url: 'http://www.163.com'
  }, 
  {
    title: 'sina',
    url: 'http://www.sina.com'
  }
];
Template.postsList.helpers({
  posts: postsData
});
